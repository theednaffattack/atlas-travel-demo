import posed from "react-pose";
import React, { Component } from "react";
import { Button as ButtonBase, Image as ImageBase, Text } from "rebass";
import styled from "styled-components";
import { position, top, left, right, bottom, zIndex } from "styled-system";

import Carousel from "./PopSlideCarousel";
import { SaveButtonIcon } from "./SaveButton";
import { MiniCarousel } from "./MiniCarousel";

import { itemMotionProps } from "./motionConfig";

export const ButtonR = styled(ButtonBase)`
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
`;

export const Item = posed.figure(itemMotionProps);

type CustomProps = {
  clickFunc: any;
  height: string | number;
  src: string;
  width: string | number;
};

export const Image = ({ clickFunc, height, src, width }: CustomProps) => (
  <Item
    onClick={clickFunc}
    // width={props.width}
    // height={props.height}
    style={{
      // marginLeft: "10px",
      // marginRight: "10px",
      margin: 0,
      marginTop: 0,
      height: "100%",
      width: "100%",
      cursor: "grab",

      minWidth: "120%"
    }}
  >
    <ImageBase height="100%" width="100%" src={src} />
    <Text mt={-4} color="white" as="figcaption">
      {src}
    </Text>
  </Item>
);
const slides = ["blue", "red", "yellow", "green"];

interface CarouselProps {
  // setSlideIndex: any;
  // slideIndex: number;
  // component: Component;
  photos: any[];
}

class CarouselContainer extends Component<CarouselProps> {
  state = {
    slideIndex: 0
  };

  setSlideIndex = (slideIndex: any) => {
    this.setState({ slideIndex });
  };

  render() {
    const { slideIndex } = this.state;
    const { photos, clickFunc } = this.props;
    return (
      <div
        key={Math.random()}
        className="App"
        style={{
          position: "static",
          fontFamily: "sans-serif",
          textAlign: "center",
          width: "100%",
          // position: "relative",
          overflow: "hidden"
          // minHeight: "auto"
          // height: "100%"
        }}
      >
        {" "}
        <ButtonR
          id="close-button"
          bg="rgba(0,0,0,.3)"
          color="white"
          borderRadius="28px"
          onClick={clickFunc}
          position="absolute"
          top={20}
          left={20}
          zIndex={30}
        >
          X
        </ButtonR>
        {/* {JSON.stringify(photos)} */}
        <div
          style={{
            position: "relative"
            // border: "5px green solid"
            // height: "auto",
            // width: "auto"
          }}
        >
          <SaveButtonIcon />
          <MiniCarousel
            setSlideIndex={this.setSlideIndex}
            onSlideChange={this.setSlideIndex}
            slideIndex={slideIndex}
            slides={slides}
            photos={photos}
          />
          <Carousel
            slideIndex={slideIndex}
            onSlideChange={this.setSlideIndex}
            className="wrapper"
            style={{
              boxSizing: "content-box",
              // margin: "0 auto",
              position: "relative"
              // border: "8px solid black",
              // background: "#eee"
              // width: "100%",
              // minHeight: "400px",
              // minHeight: "100vh"
              // height: "100%"
            }}
          >
            {photos.map((photo: any, index: any) => (
              <Image
                // height="100%"
                // width="100%"
                imageHeight="100%"
                imageWidth="100%"
                index={index}
                src={photo.uri}
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
