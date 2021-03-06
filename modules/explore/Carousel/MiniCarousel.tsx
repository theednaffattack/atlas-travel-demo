import React from "react";
import { Box, Flex } from "rebass";
import { borderRadius, color, height, space, width } from "styled-system";
import styled from "styled-components";

const CarouselControlCircle = styled.div`
  ${borderRadius}
  ${color}
  ${height}
  ${space}
  ${width}
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
      mb={7}
      style={{
        boxSizing: "content-box",
        margin: "0 auto",
        position: "absolute",
        marginBottom: "55px",
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 15
      }}
    >
      {photos.map((photo, index) => (
        <CarouselControlCircle
          key={`carouselControlCircle-${index}`}
          id={index.toString()}
          borderRadius="50%"
          height="20px"
          width="20px"
          bg={
            slideIndex === index
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,.4)"
          }
          mx={2}
          onClick={setSlideIndex}
        />
      ))}
    </Flex>
  );
};
