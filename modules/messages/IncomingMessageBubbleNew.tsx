import React from "react";
import { Box, Card, Text } from "rebass";
import { MessageBody } from "./types";
import { StyledHR } from "./StyledRebass";
// import { ViewProps } from "./StyledRebass";
import { getTimeWords } from "./utilities";

const gradient: string =
  "linear-gradient( 0deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)";

export const IncomingMessageBubble = ({
  title,
  messageText,
  id,
  timestamp
}: MessageBody) => {
  return (
    <Card
      color="white"
      px={0}
      pb={4}
      ml={[3, 5]}
      my={3}
      boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.1)"
      borderRadius="17px"
      backgroundImage={gradient}
    >
      <Box py={3} px={4}>
        <Text>{title}</Text>
      </Box>
      <StyledHR />
      <Box px={4}>
        <Text>{messageText}</Text>
      </Box>
      <Box px={4}>
        <Text>{id}</Text>
      </Box>
      <Box px={4}>
        <Text>
          {getTimeWords(new Date(timestamp), new Date()).toUpperCase()}
        </Text>
      </Box>
    </Card>
  );
};
