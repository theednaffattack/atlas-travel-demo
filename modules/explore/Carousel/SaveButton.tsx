import React from "react";
import { Box as BoxBase } from "rebass";
import {
  borders,
  position,
  space,
  width,
  zIndex,
  top,
  right,
  bottom,
  left
} from "styled-system";
import styled from "styled-components";

import SaveButtonIconBase from "../../../../static/images/discover/save-button-optimized.svg";

const SaveButtonIconStarter = styled(SaveButtonIconBase)`
${borders}
${position}
  ${space}
  ${width}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
`;

const Box = styled(BoxBase)`

${borders}
${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
`;

export const SaveButtonIcon = ({ fill = "black" }, props: any) => (
  <Box
    zIndex="200"
    bottom={20}
    right={20}
    // mr="50px"
    // width="100%"
    position="absolute"
    width="120px"
    {...props}
  >
    <SaveButtonIconStarter />
  </Box>
);
