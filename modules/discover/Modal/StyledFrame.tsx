// import react from "React";
import styled from "styled-components";

import { frameMotionProps } from "./motionConfig";

import posed from "react-pose";

const Frame = posed.div(frameMotionProps);

export const StyledFrame = styled(Frame)`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;
