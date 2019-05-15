import posed, { PoseGroup } from "react-pose";
import React, { Component } from "react";
import Carousel from "./PopSlideCarousel";

import { SaveButtonIcon } from "./SaveButton";

import { Image as ImageBase, Text } from "rebass";

import { MiniCarousel } from "./MiniCarousel";

import { AbWrapper } from "../LocalStyledComponents/Comps";

import { itemMotionProps } from "../motionConfig";

export const Item = posed.figure(itemMotionProps);

export const Image = (props: any) => (
  <Item
    onClick={props.clickFunc}
    // width={props.width}
    // height={props.height}
    style={{
      marginLeft: 0, // "10px",
      marginRight: 0, // "10px",
      marginTop: 0,
      width: "auto",
      // minHeight: "750px",
      cursor: "grab",

      // backgroundImage:
      //   "linear-gradient( 75deg, rgb(17,17,17) 0%, rgb(17,17,17) 100%)",

      minWidth: "120%"
    }}
  >
    <ImageBase src={props.src.uri} />

    <Text mt={-4} color="white" as="figcaption">
      {" "}
      {props.src.uri}
    </Text>
  </Item>
);
const slides = ["blue", "red", "yellow", "green"];

// interface CustomProps {
//   component: Component;
//   photos: string[];
// }

interface CustomProps {
  // setSlideIndex: any;
  // slideIndex: number;
  // component: Component;
  photos: string[];
}

class CarouselContainer extends Component<CustomProps> {
  state = {
    slideIndex: 0
  };

  setSlideIndex = slideIndex => {
    this.setState({ slideIndex });
  };

  render() {
    const { slideIndex } = this.state;
    const { photos, isZoomed } = this.props;
    return (
      <div
        className="App"
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          width: "100%",
          position: "relative",
          overflow: "hidden"
          // minHeight: "400px"
          // height: "100%"
        }}
      >
        <div
          style={{
            position: "relative"
            // height: "auto",
            // width: "auto"
          }}
        >
          <SaveButtonIcon />
          <div style={{}}>
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
                // height="100%"
                // width="100%"
                // imageHeight="100%"
                // imageWidth="100%"
                index={index}
                src={photo}
                key={`unsplash-${index}`}
                clickFunc={() => this.setSlideIndex(index)}
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
