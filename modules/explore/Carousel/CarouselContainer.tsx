import posed, { PoseGroup } from "react-pose";
import React, { Component } from "react";
import Carousel from "./PopSlideCarousel";

import { Card, Flex, Heading, AbWrapper } from "../StyledComponents";

// import { SaveButtonIcon } from "./SaveButton";

import { Image as ImageBase, Text } from "rebass";

import { ImageProps } from "./types";

import { MiniCarousel } from "./MiniCarousel";

import { itemMotionProps } from "./motionConfig";

export const Item = posed.figure(itemMotionProps);

const ItemStyleProps: React.CSSProperties = {
  marginLeft: 0, // "10px",
  marginRight: 0, // "10px",
  marginTop: 0,
  width: "auto",
  // height: "300px",
  cursor: "grab",
  minWidth: "100%",
  minHeight: "550px",
  overflow: "hidden",
  position: "relative"

  // backgroundImage:
  //   "linear-gradient( 75deg, rgb(17,17,17) 0%, rgb(17,17,17) 100%)",
};

export const Image = ({
  clickFunc,
  headingText,
  index,
  src,
  topTag
}: ImageProps) => (
  <Card
    color="white"
    backgroundImage={`url(${src})`}
    backgroundSize="cover"
    // borderRadius="17px"
    onClick={clickFunc}
    id={index}
    // width={props.width}
    // height={props.height}
    style={ItemStyleProps}
  >
    <Flex
      minHeight="100%"
      style={{
        backgroundImage:
          "linear-gradient(to bottom left, rgba(0,0,0,0.1),rgba(0,0,0,0.6))",
        backgroundSize: "cover"
      }}
    >
      {/* <ImageBase
      // height="100%"
      // width={1}
      src={src}
    /> */}

      {/* ${borders}
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
${backgroundImage} */}
      <AbWrapper
        flexDirection="column"
        justifyContent="start"
        position="absolute"
        color="white"
        pl={4}
        width={1 / 2}
        left={0}
        bottom="50%"
      >
        <Text mb={3}>{topTag}</Text>
        <Heading mb={3} fontSize={[4, 5]}>
          {headingText}
        </Heading>

        <Text color="white" as="figcaption">
          {src}
        </Text>
      </AbWrapper>
    </Flex>
  </Card>
);
const slides = ["blue", "red", "yellow", "green"];

// interface CustomProps {
//   component: Component;
//   photos: string[];
// }

interface CarouselContainerProps {
  // setSlideIndex: any;
  // slideIndex: number;
  heading: React.FC;
  photos: CarouselAsset[];
}

interface CarouselContainerState {
  slideIndex: number;
}

class CarouselContainer extends Component<
  CarouselContainerProps,
  CarouselContainerState
> {
  state = {
    slideIndex: 0
  };

  setSlideIndex = (
    event: React.ChangeEvent<HTMLElement>,
    slideIndexNum: number
  ) => {
    const slideIndex =
      slideIndexNum || slideIndexNum === 0
        ? slideIndexNum
        : parseInt(event.target.id);

    this.setState({ slideIndex });
  };

  render() {
    const { slideIndex } = this.state;
    const { photos, heading } = this.props;
    return (
      <div
        className="App"
        style={{
          fontFamily: "sans-serif",
          // textAlign: "center",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
          // border: "2px crimson solid",
          borderRadius: "17px"
          // maxHeight: "500px",
          // height: "100%"
        }}
      >
        <div
          style={{
            position: "relative",
            // height: "auto",
            width: "auto"
          }}
        >
          {/* <SaveButtonIcon /> */}
          <div>
            <MiniCarousel
              setSlideIndex={this.setSlideIndex}
              onSlideChange={this.setSlideIndex}
              slideIndex={slideIndex}
              slides={slides}
              photos={photos}
            />
          </div>
          <Carousel
            slideIndex={slideIndex}
            onSlideChange={this.setSlideIndex}
            className="wrapper"
            style={{
              boxSizing: "content-box"
              // margin: "0 auto",
              // position: "relative"
              // border: "8px solid black",
              // background: "#eee"
              // width: "100%",
              // minHeight: "400px",
              // minHeight: "100vh"
              // height: "100%"
            }}
          >
            {photos.map((photo, index) => (
              <Image
                height="100%"
                // width="100%"
                // imageHeight="100%"
                // imageWidth="100%"
                index={index.toString()}
                id={index}
                headingText={photo.headingText}
                topTag={photo.topTag}
                src={photo.uri}
                key={`unsplash-${index}`}
                clickFunc={this.setSlideIndex}
                // onClick={() => setSlideIndex(index)}
              />
            ))}

            {/* {slides.map((b, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  backgroundColor: b,
                  minWidth: "100%",
                  margin: "0 16px",
                  cursor: "pointer"
                }}
                onClick={() => this.setSlideIndex(index)}
              />
            ))} */}
          </Carousel>
        </div>
        {/* <br />
        <Carousel
          slideIndex={slideIndex}
          onSlideChange={this.setSlideIndex}
          style={{ width: 250 }}
          className="wrapper"
          style={{
            boxSizing: "content-box",
            margin: "0 auto",
            position: "relative",
            border: "8px solid black",
            background: "purple",
            width: "40%",
            minHeight: "80px",
            height: "40px",
            marginBottom: "20px"
          }}
        >
          {slides.map((b, index) => (
            <div
              key={index}
              style={{
                backgroundColor: b,
                minWidth: 150 + index * 20,
                margin: 10 + index * 10,
                height: "40px",

                cursor: "grab",
                marginTop: "20px"
                // position: "absolute",
                // right: 0,
                // left: 0,
                // bottom: 0,
                // zIndex: 15
              }}
              onClick={() => this.setSlideIndex(index)}
            />
          ))}
        </Carousel> */}
      </div>
    );
  }
}

export default CarouselContainer;
