import React from "react";
import {
  Box as BoxBase,
  Button as ButtonBase,
  Flex as FlexBase,
  Image as ImageBase,
  Text
} from "rebass";

import styled from "styled-components";
import {
  borders,
  borderRadius,
  boxShadow,
  minHeight,
  minWidth,
  position,
  top,
  left,
  right,
  bottom,
  zIndex
} from "styled-system";

export const ButtonR = styled(ButtonBase)`
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
`;

export const OuterFlex = styled(FlexBase)`
  ${minHeight}
  ${borderRadius}
  ${minWidth}
  ${borders}
  overflow-y: auto;
`;

export const Flex = styled(FlexBase)`
  ${borders}
  ${borderRadius}
  ${boxShadow}
  ${minHeight}
  ${minWidth}
`;

export const Box = styled(BoxBase)`
  ${borders}
  ${boxShadow}
`;
