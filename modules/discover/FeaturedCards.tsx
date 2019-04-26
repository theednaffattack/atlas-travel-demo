import React, { Component } from "react";
// import posed from "react-pose";
import {
  Box,
  Card as CardBase,
  Flex as FlexBase,
  // Image as ImageBase,
  Text
} from "rebass";
import styled from "styled-components";
import {
  borders,
  height,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  space,
  width
} from "styled-system";

import WeatherSunnyIconBase from "../../static/images/discover/weather_sunny.svg";
// import CloudyIconBase from "../../static/images/discover/cloudy.svg";
import LoveIconBase from "../../static/images/discover/love.svg";
import CommentIconBase from "../../static/images/discover/comment.svg";
import MoreIconBase from "../../static/images/discover/more.svg";
// import { cardInfo } from "./cardInfo";
// import {zoomImageProps} from "./Modal/motionConfig"
import { ZoomCard, ZoomSupreme } from "./Modal/StyledCard";
import ZoomImg from "./Modal/ZoomImage/ZoomImage";
import {} from "./Modal/StyledCard";
import posed from "react-pose";
import { zoomImageProps } from "./Modal/motionConfig";

import Modal from "./Modal/Modal";
//Icons
const SunnyIcon = styled(WeatherSunnyIconBase)`
${height}
${width}
${space}
`;

// const CloudyIcon = styled(CloudyIconBase)`
// ${height}
// ${width}
// ${space}
// `;

const LoveIcon = styled(LoveIconBase)`
${height}
${width}
${space}
`;

const CommentIcon = styled(CommentIconBase)`
${height}
${width}
${space}
`;

const MoreIcon = styled(MoreIconBase)`
${height}
${width}
${space}
`;

// other stuff
// const transition = {
//   duration: 400,
//   ease: [0.08, 0.69, 0.2, 0.99]
// };

// const Image = posed.img(zoomImageProps);

const Image = styled.img`
  ${width}
  ${height}
  ${maxWidth}
  ${maxHeight}
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
  }

  state = {
    showModal: initialIsZoomed,
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

  toggleModal(e) {
    e.preventDefault();
    let { target } = e;
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
      localContext
      // toggle,
      // zoomState
    } = this.props;
    return (
      <FlexBase>
        <Modal
          data={this.state.modalData}
          fakeAmenities={this.state.fakeAmenities}
          show={this.state.showModal}
          toggle={this.toggleModal}
        />

        {data
          ? data.map((info: any, index: number) => (
              <Card
                onClick={this.toggleModal}
                bg="#ddd"
                color="text"
                borderRadius="17px"
                p={3}
                mx={2}
                key={Math.random()}
                id={index.toString()}
                width={256}
              >
                {/* <StyleCard> */}

                {/* <Image
                  pose={this.state.isZoomed ? "zoomedIn" : "zoomedOut"}
                  onClick={this.state.isZoomed ? this.zoomOut : this.zoomIn}
                  src={info.photos[0].uri}
                  width={this.state.isZoomed ? "650px" : "100%"}
                  maxWidth={"600px"}
                  maxHeight="900px"
                /> */}

                <ZoomImg
                  poseState={this.state.isZoomed ? "zoomedIn" : "zoomedOut"}
                  imageHeight={this.state.isZoomed ? "200px" : "650px"}
                  imageWidth={this.state.isZoomed ? "200px" : "650px"}
                  src={info.photos[0].uri}
                />
                <ContentFlex alignItems="center">
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
                    <Text fontSize=".75em">
                      {info.price} • {info.distanceKm} away
                    </Text>
                  </Box>
                  <Box ml="auto">
                    <MoreIcon height="14px" />
                  </Box>
                </ContentFlex>
                <ContentFlex alignItems="center">
                  <SunnyIcon height="30px" />
                  <Box>
                    <Text width={1} textAlign="center">
                      {info.temperature}
                    </Text>
                    <Text fontSize=".75em">{info.weatherDescription}</Text>
                  </Box>
                  <ContentFlex
                    pt={1}
                    ml={2}
                    width={1}
                    borderTop="2px #ccc solid"
                  >
                    <Box pl={2}>
                      <LoveIcon height="12px" />
                    </Box>
                    <Box pl="2px" fontSize=".75em">
                      {info.loveCount > 999
                        ? (info.loveCount / 1000).toString() + "K"
                        : info.loveCount}
                    </Box>
                    <Box pl={3}>
                      <CommentIcon height="12px" />
                    </Box>
                    <Box pl="2px" fontSize=".75em">
                      {info.commentCount}
                    </Box>
                  </ContentFlex>
                </ContentFlex>
              </Card>
            ))
          : ""}
      </FlexBase>
    );
  }
}
