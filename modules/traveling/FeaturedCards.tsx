import React, { Component } from "react";
import { Box, Card as CardBase, Flex as FlexBase, Image, Text } from "rebass";
import styled from "styled-components";
import {
  borders,
  height,
  minHeight,
  minWidth,
  space,
  width
} from "styled-system";

import IconBase from "./Icon/Icon";
import ZoomImg from "./Modal/ZoomImage";
import Modal from "../discover/Modal/Modal";

const baseFill = "rgb(204, 204, 204)";

const Icon = styled(IconBase)`
${height}
${width}
${space}
`;

const ContentFlex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const Card = styled(CardBase)`
  ${minWidth}
`;

interface CustomFeatureCardProps {
  data: any;
  localContext: any;
  requestor: any;
  // src: any;
  // toggle,
  // zoomIn: any;
  // zoomOut: any;
  zoomState: any;
  // toggleModal: any;
}
// initial state
const initialModalData = {};

const initialIsZoomed = false;

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
    showDetails: initialIsZoomed,
    detailData: initialModalData,
    isZoomed: initialShowModal,
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

  truncate(words: string) {
    if (words.length > 8) {
      return words.slice(0, 8) + "...";
    } else {
      return words;
    }
  }

  toggleCustomZoom(e: any) {
    e.preventDefault();
    let { target } = e;
    console.log("target");
    console.log(target);
    console.log(target.id);
    this.setState((prevState: any, prevProps) => {
      return {
        isZoomed: !prevState.isZoomed,
        showDetails: !prevState.showDetails,
        detailData: prevProps.data[target.id]
      };
    });
  }

  toggleModal(e: any) {
    e.preventDefault();
    let { target } = e;
    console.log("toggleModal");
    console.log(target);
    this.setState((prevState: any, prevProps) => {
      return {
        isZoomed: !prevState.isZoomed,
        showModal: !prevState.showModal,
        modalData: prevProps.data[target.id]
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
        <Modal
          data={this.state.modalData}
          requestor={requestor}
          fakeAmenities={this.state.fakeAmenities}
          show={this.state.showModal}
          toggle={this.toggleModal}
        />

        {data
          ? data.map((info: any, index: number) => {
              return (
                <Card
                  bg="#fafafa"
                  color="text"
                  borderRadius="17px"
                  p={3}
                  mx={2}
                  my={2}
                  key={"cards-" + index}
                  // onClick={this.toggleCustomZoom}
                  id={index.toString()}
                  width={[1, 0.4]}
                  boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                  onClick={this.toggleModal}
                  // onClick={this.state.isZoomed ? this.zoomOut : this.zoomIn}
                >
                  <ContentFlex alignItems="center">
                    <Box width="244px" mr={2}>
                      {/* <ZoomImg
                      zoomState={this.state.isZoomed}
                      poseState={this.state.isZoomed ? true : false}
                      // clicky={this.toggleCustomZoom}
                      imageHeight="100%"
                      imageWidth="100%"
                      src={info.photos[0].uri}
                      photos={info.photos}
                    /> */}
                      <Image
                        borderRadius="17px"
                        src={"https://source.unsplash.com/random/1280x720"}
                      />
                    </Box>

                    <ContentFlex width={1} flexDirection="column">
                      <ContentFlex>
                        <Box>
                          <Text fontWeight="600">
                            <span
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              }}
                            >
                              {localContext(info.name)}
                            </span>
                          </Text>
                          <Text fontSize=".85em">${info.price}</Text>
                        </Box>
                        <Box ml="auto">
                          <Icon name="more" fill="black" height="14px" />
                        </Box>
                      </ContentFlex>
                      <ContentFlex>
                        <Box>
                          <Icon size="1em" name="map-pin" fill={baseFill} />
                          {this.truncate(info.city)}
                        </Box>
                        <Box pl={3}>
                          <Icon size="1em" name="love" fill={baseFill} />
                          {info.loveCount}
                        </Box>
                        <Box pl={3}>
                          <Icon size="1em" name="comment" fill={baseFill} />
                          {info.commentCount}
                        </Box>
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
