import React from "react";
import { Box as BoxBase, Flex as FlexBase, Image, Text } from "rebass";
import styled from "styled-components";
import {
  borders,
  position,
  top,
  left,
  bottom,
  right,
  zIndex
} from "styled-system";

import { MessageThreadProperties } from "./MessagesPage";

const Flex = styled(FlexBase)`
  ${borders}
`;
const Box = styled(BoxBase)`
  ${borders}
  ${position}
`;

const DotBase = () => (
  <svg viewBox="0 0 21 21">
    <path
      fillRule="evenodd"
      strokeWidth="2px"
      stroke="rgba(242, 242, 242, 1)"
      fill="rgb(244, 50, 127)"
      d="M10.500,7.166 C12.525,7.166 14.167,8.808 14.167,10.833 C14.167,12.858 12.525,14.500 10.500,14.500 C8.475,14.500 6.833,12.858 6.833,10.833 C6.833,8.808 8.475,7.166 10.500,7.166 Z"
    />
  </svg>
);

const AbBox = styled(BoxBase)`
${borders}
${position}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${zIndex}
`;

const Dot = styled(DotBase)`
  ${position}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${zIndex}
`;

export const MessageThreadItem = ({
  id,
  name,
  avatar,
  messages
}: MessageThreadProperties) => {
  return (
    <Flex py={3} alignItems="center" width={1} borderBottom="2px #eee solid">
      <Box position="relative">
        <Image borderRadius="17px" src={avatar} />
        <AbBox
          width="40px"
          p={0}
          bottom={0}
          right={-18}
          position="absolute"
          zIndex={990}
        >
          <Dot />
        </AbBox>
      </Box>
      <Flex pl={3} width={1}>
        <Flex width={1} flexDirection="column">
          <Box>
            <Text fontWeight={600}>{name}</Text>
          </Box>
          <Box color="muted">{messages[0].messageText}</Box>
        </Flex>
        <Box ml="auto" color="muted">
          XX mins ago
        </Box>
      </Flex>
    </Flex>
  );
};
