import React, { Component } from "react";
import { Box as BoxBase, Card, Flex as FlexBase, Image, Text } from "rebass";
import styled from "styled-components";
import { borders, position } from "styled-system";

import { MessageThreadItem } from "./MessageThreadItem";
import { activeMessageThreads } from "./mockData";

const Flex = styled(FlexBase)`
  ${borders}
`;
const Box = styled(BoxBase)`
  ${borders}
  ${position}
`;

interface MessageBody {
  id: string;
  title?: string;
  messageText: string;
  timestamp: any;
}

export interface MessageThreadProperties {
  id: string;
  userId: string;
  name: string;
  avatar: string;
  active: boolean;
  messages: MessageBody[];
}

// From the console...
// new Date().toISOString()
// "2019-05-17T18:01:32.567Z"

export default class MessagesPage extends Component {
  render() {
    return (
      <Flex px={[2, 4]} color="text">
        <Flex mr={3} width={[1, 1 / 3]}>
          <Card
            p={3}
            width={1}
            bg="white"
            borderRadius="17px"
            boxShadow="0 27px 40px 0 rgba(0, 0, 0, 0.05)"
          >
            <Text fontSize={5}>Messages</Text>
            <Box py={3} borderTop="2px #eee solid">
              <Text color="muted">ACTIVE NOW</Text>

              {activeMessageThreads.map(
                (item: MessageThreadProperties, index: number) => (
                  <MessageThreadItem {...item} />
                )
              )}
            </Box>
            <Box>
              <Text color="muted">ARCHIVES</Text>
              <Box>Person 1</Box>
              <Box>Person 2</Box>
            </Box>
          </Card>
        </Flex>
        <Flex width={[1, 2 / 3]}>Current Chat Pane</Flex>
      </Flex>
    );
  }
}
