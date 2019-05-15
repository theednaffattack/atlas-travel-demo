import React from "react";
import styled from "styled-components";

// import { frameMotionProps } from "./motionConfig";

import posed from "react-pose";
const zoomCardTransition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

export const frameMotionProps = {
  init: {
    opacity: 0,
    position: "static",
    width: "100%",
    height: "100%",
    zoomCardTransition,
    flip: true
  },
  zoom: {
    opacity: 1,
    position: "fixed",
    width: "auto",
    height: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zoomCardTransition,
    flip: true
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const StyledDiv = styled.div`
  /* position: fixed;
  top: 0;
  bottom: 0; */
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  /* overflow-y: auto; */
  -webkit-overflow-scrolling: touch;

  /* transform: translateZ(0); */
  /* overflow-y: auto;
  overflow-x: hidden; */
  /* -webkit-transform: translateZ(0); */
`;

export const OGRefFrame = posed(StyledDiv)(frameMotionProps);

export const RefFrame = React.forwardRef((props, ref) => (
  <OGRefFrame {...props} ref={ref}>
    {props.children}
  </OGRefFrame>
));
