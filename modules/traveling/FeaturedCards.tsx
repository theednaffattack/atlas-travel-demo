import React, { Component } from "react";
import {
  Box as BoxBase,
  Card as CardBase,
  Flex as FlexBase,
  Image as ImageBase,
  Text
} from "rebass";
import styled from "styled-components";
import {
  borders,
  height,
  minHeight,
  minWidth,
  space,
  width
} from "styled-system";
import posed from "react-pose";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import IconBase from "./Icon/Icon";
// import ZoomImg from "./Modal/ZoomImage";
// import Modal from "../discover/Modal/Modal";
import CarouselBase from "./Carousel/CarouselContainer";

const baseFill = "rgb(204, 204, 204)";

const imageWidth = 1024; //your desired image width in pixels
const imageHeight = 805; //desired image height in pixels
const collectionID = 1863748; //the collection ID from the original url

const Icon = styled(IconBase)`
${height}
${width}
${space}
`;

const Image = styled(ImageBase)`
  ${minHeight}
`;

const Box = styled(BoxBase)`
  ${borders}
  ${minWidth}
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ContentFlex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const CardStyled = styled(CardBase)`
  ${minWidth}
`;

const Card = posed(CardStyled)({
  open: {
    applyAtStart: { position: "fixed", zIndex: 10 },
    // height: "auto",
    // height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 0,
    // opacity: 1,
    transition: {
      duration: 500,
      ease: [0.08, 0.69, 0.2, 0.99]
    },
    flip: true
  },
  closed: {
    applyAtStart: {
      position: "relative",
      zIndex: 0
    },
    borderRadius: "17px",
    height: "auto",
    // height: "0",
    // opacity: 1,
    transition: {
      duration: 600,
      ease: [0.08, 0.69, 0.2, 0.99]
    },
    flip: true
  }
});

interface CustomFeatureCardProps {
  data: any;
  localContext: any;
  requestor: any;
  zoomIndex: number | null;
  zoomState: any;
}
// initial state
const initialModalData = {};

const initialIsZoomed = false;
const initialZoomIndex = null;

const initialShowModal = false;

export class FeaturedCards extends Component<CustomFeatureCardProps> {
  constructor(props: any) {
    super(props);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCustomZoom = this.toggleCustomZoom.bind(this);
    this.truncate = this.truncate.bind(this);
  }

  state = {
    showModal: initialIsZoomed,
    isZoomed: initialShowModal,
    zoomIndex: initialZoomIndex,
    showDetails: initialIsZoomed,
    detailData: initialModalData,
    modalData: initialModalData,
    fakeAmenities: [
      "wifi",
      "pool",
      "hotelRestaurant",
      "innBar",
      "parking",
      "nightClub"
    ]
  };

  targetRef = React.createRef();
  targetElement = null;

  toggleZoom(e: any) {
    this.setState((prevState: any, prevProps: any) => {
      return {
        isZoomed: !prevState.isZoomed
      };
    });
  }

  truncate(words: string, chars: number) {
    if (words.length > chars) {
      return words.slice(0, chars) + "...";
    } else {
      return words;
    }
  }

  disableScroll() {
    document.body.addEventListener(
      "touchmove",
      () => (document.body.style.overflowY = "hidden"),
      {
        passive: false
      }
    );
  }

  enableScroll() {
    document.body.addEventListener(
      "touchmove",
      () => (document.body.style.overflowY = "auto")
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener(
      "touchmove",
      () => (document.body.style.overflowY = "auto")
    );
  }

  toggleCustomZoom(e: any) {
    e.preventDefault();
    let { currentTarget } = e;
    // target the growing card (basically a modal)
    // so that we can target that node and disable body scrolling
    this.targetElement = currentTarget.className.includes("carouselClick")
      ? currentTarget
      : null;

    // set state zooming in
    // @todo: double check this setting of state
    // we don't need to change five pieces of state here
    this.setState((prevState: any, prevProps) => {
      if (!prevState.isZoomed) {
        disableBodyScroll(this.targetElement);
        console.log("SCROLL DISABLED");
      } else {
        clearAllBodyScrollLocks();
        console.log("SCROLL ENABLED");
      }
      return {
        isZoomed: !prevState.isZoomed,
        showDetails: !prevState.showDetails,
        modalData: prevProps.data[currentTarget.id],
        detailData: prevProps.data[currentTarget.id],
        zoomIndex: parseInt(currentTarget.id)
      };
    });
  }

  toggleModal(e: any) {
    e.preventDefault();
    let { currentTarget } = e;
    this.setState((prevState: any, prevProps) => {
      return {
        isZoomed: !prevState.isZoomed,
        showModal: !prevState.showModal,
        modalData: prevProps.data[currentTarget.id]
      };
    });
  }

  zoomIn(e: any) {
    console.log(e.target);
    console.log(e.target.src);
    this.setState({ isZoomed: true });
  }

  zoomOut(e: any) {
    this.setState({ isZoomed: false });
  }

  generateHotelImages() {}

  // componentDidMount() {
  //   const numItemsToGenerate = this.state.modalData.length; //how many gallery items you want on the screen
  //   const imageWidth = 1024; //your desired image width in pixels
  //   const imageHeight = 805; //desired image height in pixels
  //   const collectionID = 1863748; //the collection ID from the original url
  //   function renderGalleryItem() {
  //     fetch(
  //       `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
  //     ).then(response => {
  //       let galleryItem = document.createElement("div");
  //       galleryItem.classList.add("gallery-item");
  //       galleryItem.innerHTML = `
  //     <img class="gallery-image" src="${response.url}" alt="gallery image"/>
  //   `;
  //       document.body.appendChild(galleryItem);
  //     });
  //   }
  //   for (let i = 0; i < numItemsToGenerate; i++) {
  //     renderGalleryItem();
  //   }
  // }

  render() {
    let {
      data,
      localContext,
      requestor
      // toggle,
      // zoomState
    } = this.props;
    return (
      <FlexBase
        flexDirection="row"
        justifyContent="center"
        width="100%"
        flexWrap="wrap"
      >
        {/* <Modal
          data={this.state.modalData}
          isZoomed={false} // {this.state.isZoomed}
          show={this.state.showModal}
          toggle={this.toggleModal}
          requestor={requestor}
          fakeAmenities={this.state.fakeAmenities}
        /> */}

        {data
          ? data.map((info: any, index: number) => {
              let isModalViewActive = index === this.state.zoomIndex;
              return (
                <Card
                  ref={this.targetElement}
                  bg="#fafafa"
                  color="text"
                  pose={
                    this.state.isZoomed && isModalViewActive ? "open" : "closed"
                  }
                  borderRadius="17px"
                  p={!isModalViewActive ? 3 : 0}
                  my={!isModalViewActive ? 2 : 0}
                  key={"cards-" + index}
                  id={index.toString()}
                  width={[1, isModalViewActive ? 1 : 0.4]}
                  boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                  style={{
                    overflowY: isModalViewActive ? "auto" : "hidden"
                  }}
                >
                  <ContentFlex
                    flexWrap={isModalViewActive ? "wrap" : "nowrap"}
                    id={index.toString()}
                    alignItems="center"
                    width={["auto", isModalViewActive ? 1 : 1]}
                  >
                    <Box
                      width={[
                        isModalViewActive ? 1 : 0.4,
                        isModalViewActive ? 0.4 : 0.6
                      ]}
                      minWidth={[isModalViewActive ? 1 : 0.41]}
                    >
                      <CarouselBase
                        // id={index.toString()}
                        isModalViewActive={isModalViewActive}
                        index={index}
                        zoomIndex={this.state.zoomIndex}
                        isZoomed={this.state.isZoomed}
                        clickFunc={this.toggleCustomZoom}
                        photos={info.photos}
                      />

                      {/* <ZoomImg
                        zoomState={this.state.isZoomed}
                        poseState={this.state.isZoomed ? true : false}
                        // clicky={this.toggleCustomZoom}
                        imageHeight="100%"
                        imageWidth="100%"
                        src={info.photos[0].uri}
                        photos={info.photos}
                      /> */}
                      {/* <Image
                        minHeight="77px"
                        borderRadius="17px"
                        src={info.photos[0].uri}
                      /> */}
                    </Box>

                    <ContentFlex
                      pl={[2, 3]}
                      width={[1, isModalViewActive ? 0.6 : 1]}
                      flexDirection="column"
                    >
                      <ContentFlex>
                        <Box mr="auto">
                          <Text
                            color="text"
                            fontSize="1em"
                            fontWeight={600}
                            style={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {localContext(info.name)}
                          </Text>
                          <Text color="muted" fontSize=".85em">
                            ${info.price}
                          </Text>
                        </Box>
                        <Box
                          id={index.toString()}
                          onClick={this.toggleModal}
                          // ml="auto"
                          width={["6px", "3px"]}
                        >
                          <Icon name="more" fill="#aaa" height="100%" />
                        </Box>
                      </ContentFlex>
                      <ContentFlex>
                        <ContentFlex>
                          <Icon size="1em" name="map-pin" fill={baseFill} />
                          <Text
                            color="text"
                            width={1}
                            fontSize=".9em"
                            style={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {this.truncate(info.city, 9)}
                          </Text>
                        </ContentFlex>
                        <ContentFlex mx={1}>
                          <Icon size="1em" name="love" fill={baseFill} />
                          <Text fontSize=".9em">
                            {" "}
                            <span
                              style={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis"
                              }}
                            >
                              {info.loveCount}
                            </span>
                          </Text>
                        </ContentFlex>
                        <ContentFlex mx={1}>
                          <Icon size="1em" name="comment" fill={baseFill} />
                          <Text fontSize=".9em">{info.commentCount}</Text>
                        </ContentFlex>
                      </ContentFlex>
                    </ContentFlex>
                  </ContentFlex>
                </Card>
              );
            })
          : ""}
      </FlexBase>
    );
  }
}
