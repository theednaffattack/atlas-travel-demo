import React from "react";
import { Box, Flex as FlexBase } from "rebass";
import {
  backgroundImage,
  borderRadius,
  color,
  height,
  space,
  width
} from "styled-system";
import styled from "styled-components";

import { AbWrapper, ButtonR } from "./Comps";

const CarouselControlCircle = styled.div`
  ${borderRadius}
  ${color}
  ${height}
  ${space}
  ${width}
`;

const Flex = styled(FlexBase)`
  ${backgroundImage}
`;

interface CustomProps {
  onSlideChange: any;
  setSlideIndex: any;
  slideIndex: number;
  slides: any[];
  photos: string[];
}

export const MiniCarousel = ({
  onSlideChange,
  setSlideIndex,
  slideIndex,
  slides,
  photos
}: CustomProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      slideIndex={slideIndex}
      backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.3))"
      pt={4}
      pb={8}
      style={{
        boxSizing: "content-box",
        margin: "0 auto",
        position: "absolute",
        paddingBottom: "55px",
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 30,
        border: "2px crimson solid"
      }}
    >
      {photos.map((photo, miniCarouselIndex) => (
        <CarouselControlCircle
          key={`carouselControlCircle-${miniCarouselIndex}`}
          borderRadius="50%"
          height="20px"
          width="20px"
          bg={
            slideIndex === miniCarouselIndex
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0.4)"
          }
          mx={2}
          onClick={() => setSlideIndex(miniCarouselIndex)}
        />
      ))}
    </Flex>
  );
};
