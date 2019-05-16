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
import ZoomImg from "./Modal/ZoomImage";
import Modal from "../discover/Modal/Modal";
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
  :hover {
    cursor: pointer;
  }
`;

const Card = styled(CardBase)`
  ${minWidth}
`;

// const Card = posed(CardStyled)({
//   open: {
//     applyAtStart: { position: "fixed", zIndex: 10 },
//     // height: "auto",
//     // height: "100vh",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     borderRadius: 0,
//     // opacity: 1,
//     transition: {
//       duration: 500,
//       ease: [0.08, 0.69, 0.2, 0.99]
//     },
//     flip: true
//   },
//   closed: {
//     applyAtStart: {
//       position: "relative",
//       zIndex: 0
//     },
//     borderRadius: "17px",
//     height: "auto",
//     // height: "0",
//     // opacity: 1,
//     transition: {
//       duration: 600,
//       ease: [0.08, 0.69, 0.2, 0.99]
//     },
//     flip: true
//   }
// });

interface CustomSavedCardProps {
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

export class SavedCards extends Component<CustomSavedCardProps> {
  constructor(props: any) {
    super(props);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCustomZoom = this.toggleCustomZoom.bind(this);
    this.truncate = this.truncate.bind(this);

    this.targetRef = React.createRef();
    this.targetElement = null;
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

  toggleCustomZoom(e: any) {
    e.preventDefault();
    let { currentTarget } = e;
    // target the growing card (basically a modal)
    // so that we can target that node and disable body scrolling
    // this.targetElement = currentTarget.className.includes("carouselClick")
    //   ? currentTarget
    //   : null;

    // set state zooming in
    // @todo: double check this setting of state
    // we don't need to change five pieces of state here
    this.setState((prevState: any, prevProps) => {
      if (!prevState.isZoomed) {
        disableBodyScroll(this.targetElement);
        console.log("SCROLL DISABLED");
      } else {
        clearAllBodyScrollLocks();

        // enableBodyScroll(this.targetElement);
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
    // alert("clicked");
    console.log("toggleModal");
    console.log(currentTarget);
    console.log(currentTarget.className.includes("modalClick"));
    console.log(this.targetRef.current);
    console.log(this.targetElement);
    // target the growing card (basically a modal)
    // so that we can target that node and disable body scrolling
    // this.targetElement = currentTarget.className.includes("modalClick")
    //   ? currentTarget
    //   : null;

    this.setState(
      (prevState: any, prevProps) => {
        return {
          isZoomed: !prevState.isZoomed,
          showModal: !prevState.showModal,
          modalData: prevProps.data[currentTarget.id]
        };
      },
      () => {
        console.log(this.targetRef.current);

        if (this.state.showModal) {
          disableBodyScroll(this.targetRef.current, {
            allowTouchMove: this.targetRef.current
          });
          console.log("SCROLL DISABLED");
          console.log(this.targetRef.current);
        } else {
          // clearAllBodyScrollLocks();
          enableBodyScroll(this.targetRef.current);
          console.log("SCROLL ENABLED");
          console.log(this.targetRef.current);
        }
      }
    );
  }

  zoomIn(e: any) {
    this.setState({ isZoomed: true });
  }

  zoomOut(e: any) {
    this.setState({ isZoomed: false });
  }

  // componentDidMount() {
  //   // 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
  //   this.targetElement = this.targetRef.current;
  //   console.log(this.targetRef.current);
  // }

  render() {
    let {
      data,
      localContext,
      requestor
      // toggle,
      // zoomState
    } = this.props;

    // console.log("this.targetElement.current");
    // console.log(this.targetElement.current);
    return (
      <ContentFlex
        flexDirection="row"
        justifyContent="center"
        width={1}
        flexWrap="wrap"
      >
        <Modal
          data={this.state.modalData}
          refPass={this.targetRef}
          isZoomed={false} // {this.state.isZoomed}
          show={this.state.showModal}
          toggle={this.toggleModal}
          requestor={requestor}
          fakeAmenities={this.state.fakeAmenities}
        />

        {data
          ? data.map((info: any, index: number) => {
              let isModalViewActive = index === this.state.zoomIndex;
              return (
                <Card
                  bg="#fafafa"
                  color="white"
                  pose={
                    this.state.isZoomed && isModalViewActive ? "open" : "closed"
                  }
                  className="SavedCard"
                  backgroundImage={`url(${info.photos[0].uri})`}
                  backgroundSize="cover"
                  borderRadius="17px"
                  p={0}
                  my={2}
                  mx={4}
                  key={"cards-" + index}
                  id={index.toString()}
                  width={[1, 0.28]}
                  boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                  style={{
                    overflow: "hidden"
                  }}
                >
                  <ContentFlex
                    alignItems="flex-end"
                    flexWrap={"nowrap"}
                    minHeight={["315px"]}
                    id={index.toString()}
                    width={["auto", 1]}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom left, rgba(0,0,0,0.1),rgba(0,0,0,0.6))",
                      backgroundSize: "cover"
                    }}
                  >
                    <ContentFlex
                      px={[2, 3]}
                      pb={[2, 3]}
                      width={[1, 1]}
                      flexDirection="column"
                    >
                      <ContentFlex
                        id={index.toString()}
                        onClick={this.toggleModal}
                        className="modalClick"
                      >
                        <Box mr="auto">
                          <Text
                            fontSize={[4, 4]}
                            fontWeight={600}
                            style={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {localContext(info.name)}
                          </Text>

                          <Text fontSize={[3, 3]}>${info.price}</Text>
                        </Box>
                        <Box
                          // ml="auto"
                          width="6px"
                        >
                          <Icon name="more" fill="white" width="100%" />
                        </Box>
                      </ContentFlex>
                      <ContentFlex mt={4}>
                        <ContentFlex>
                          <Icon size="1em" name="map-pin" fill={baseFill} />
                          <Text
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
      </ContentFlex>
    );
  }
}
