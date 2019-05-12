import posed from "react-pose";
import React, { Component } from "react";
import { Button as ButtonBase, Image as ImageBase, Text } from "rebass";
import styled from "styled-components";
import {
  position,
  top,
  left,
  right,
  bottom,
  space,
  width,
  zIndex
} from "styled-system";

import { AbWrapper, ButtonR } from "./Comps";
import Carousel from "./PopSlideCarousel";
import { SaveButtonIcon } from "./SaveButton";
import { MiniCarousel } from "./MiniCarousel";

import { itemMotionProps } from "./motionConfig";

const Figure = styled.figure`
  ${width}
  ${space}
`;

export const Item = posed(Figure)(itemMotionProps);

const StyledDiv = styled.div`
  overflow: "hidden";
  border-radius: ${props => (props.isModalViewActive ? 0 : "13px")};
  border: "2px green solid";
  mask-image: radial-gradient(white, black);
`;

type CustomProps = {
  clickFunc: any;
  height: string | number;
  src: string;
  width: string | number;
  isZoomed: boolean;
  photos: string[];
  slides: any;
  slideIndex: number;
  setSlideIndex: any;
};

export const Image = ({
  children,
  clickFunc,
  height,
  isZoomed,
  photos,
  slides,
  slideIndex,
  setSlideIndex,
  src,
  width
}: CustomProps) => (
  <Item
    onClick={clickFunc}
    // width={props.width}
    // height={props.height}
    style={{
      // marginLeft: "10px",
      // marginRight: "10px",
      margin: 0,
      marginTop: 0,
      minHeight: "100%",
      width: "100%",
      cursor: "grab",

      minWidth: "120%"
    }}
  >
    {children}
    <ImageBase height="100%" width="100%" src={src} />
    {isZoomed ? (
      <Text
        mt={-4}
        color="white"
        as="figcaption"
        style={{ position: "absolute", bottom: 0, zIndex: 5000 }}
      >
        {src}
      </Text>
    ) : null}
  </Item>
);
const slides = ["blue", "red", "yellow", "green"];

interface CarouselContainerProps {
  // setSlideIndex: any;
  // slideIndex: number;
  // component: Component;

  clickFunc: any;
  index: number;
  isModalViewActive: boolean;
  isZoomed: boolean;
  photos: any[];
  zoomIndex: number | null;
}

interface CarouselContainerState {
  sliderIndex: number;
  renderedPhotos: string[];
}

class CarouselContainer extends Component<
  CarouselContainerProps,
  CarouselContainerState
> {
  state = {
    slideIndex: 0,
    renderedPhotos: []
  };

  setSlideIndex = (slideIndex: number) => {
    console.log("SET SLIDEINDEX");
    console.log(slideIndex);
    this.setState({ slideIndex });
  };

  renderPhotos(showPhotos, zoomState) {
    return showPhotos.map((photo: any, index: any) => (
      <Image
        // height="100%"
        // width="100%"
        slides={slides}
        // setSlideIndex={this.setSlideIndex}
        // onSlideChange={this.setSlideIndex}
        imageHeight="100%"
        isZoomed={zoomState}
        imageWidth="100%"
        index={index}
        src={photo.uri}
        key={`unsplash-${index}`}
        clickFunc={() => this.setSlideIndex(index)}
        // onClick={() => setSlideIndex(index)}
      />
    ));
  }

  componentDidMount() {
    this.renderPhotos(this.props.photos, this.props.isZoomed);
  }

  render() {
    const { slideIndex } = this.state;
    const {
      children,
      clickFunc,
      index,
      isZoomed,
      photos,
      zoomIndex,
      isModalViewActive
    } = this.props;

    // https://github.com/zeit/next.js/issues/2177

    let showPhotos = photos;

    return (
      <StyledDiv
        id={index}
        className="carouselClick"
        key={zoomIndex}
        isModalViewActive={isModalViewActive}
        onClick={!isZoomed ? clickFunc : null}
      >
        {isModalViewActive ? (
          <ButtonR
            id="close-button"
            bg="rgba(0,0,0,.3)"
            color="white"
            borderRadius="28px"
            onClick={clickFunc}
            isZoomed={isZoomed}
            position="absolute"
            top={20}
            left={20}
            zIndex={30}
          >
            X
          </ButtonR>
        ) : null}
        <div
          style={{
            position: "relative"
            // height: "auto",
            // width: "auto"
          }}
        >
          {isModalViewActive ? (
            <MiniCarousel
              index={index}
              setSlideIndex={this.setSlideIndex}
              onSlideChange={this.setSlideIndex}
              isZoomed={isZoomed}
              slideIndex={slideIndex}
              slides={slides}
              photos={photos}
            />
          ) : null}
          <Carousel
            slideIndex={slideIndex}
            isZoomed={isZoomed}
            setSlideIndex={this.setSlideIndex}
            onSlideChange={this.setSlideIndex}
            slides={slides}
            isModalViewActive={isModalViewActive}
            className="wrapper"
            style={{
              boxSizing: "content-box",
              overflow: "hidden",
              margin: "0 auto",
              position: "relative",
              // border: "2px pink solid",
              background: "#eee",
              width: "100%"
              // minHeight: "400px",
              // minHeight: "100vh"
              // height: "100%"
            }}
          >
            {this.renderPhotos(showPhotos, this.props.isZoomed)}

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
      </StyledDiv>
    );
  }
}

export default CarouselContainer;
