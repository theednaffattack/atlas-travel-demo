import React, { Component } from "react";
import { Box as BoxBase, Card, Flex as FlexBase, Image, Text } from "rebass";
import styled from "styled-components";
import { borders, position } from "styled-system";

import { MessageThreadItem } from "./MessageThreadItem";
import { activeMessageThreads } from "./mockData";
import { IncomingMessageBubble } from "./IncomingMessageBubble";
import { IncomingMessageBubble as IncomingMessageBubbleNew } from "./IncomingMessageBubbleNew";
import { GlobalSVGGradient } from "./GlobalSVGGradient";
import { MessageBody, MessageThreadProperties } from "./types";

const Flex = styled(FlexBase)`
  ${borders}
`;
const Box = styled(BoxBase)`
  ${borders}
  ${position}
`;
interface MessagePageState {
  selectedMessageThreadId: string;
  selectedMessageIndex: number | null;
}

const styles = {
  exampleText: {
    width: 200
  },
  range: {
    marginLeft: 25,
    width: 275
  },
  svg: {
    height: 125,
    display: "block",
    border: "1px solid #aaa",
    marginBottom: 10
  }
};

// From the console...
// new Date().toISOString()
// "2019-05-17T18:01:32.567Z"

export default class MessagesPage extends Component<
  MessageThreadProperties,
  MessagePageState
> {
  constructor(props) {
    super(props);
    this.handleSelectMessageThread = this.handleSelectMessageThread.bind(this);
    this.state = {
      selectedMessageThreadId: "",
      selectedMessageIndex: null
    };
  }

  handleSelectMessageThread(event: any) {
    console.log(event.currentTarget.id);
    let {
      currentTarget: { id }
    } = event;
    this.setState({
      selectedMessageIndex: id
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.selectedMessageIndex !== prevProps.selectedMessageIndex) {
      // this.fetchData(this.props.userID);

      const pathNodes = Array.from(document.querySelectorAll(".messageWindow"));
      const justOne = pathNodes[0].getBBox();

      const arrayOfPathDimensions = pathNodes.map((node, index) => {
        console.log("VIEW NODE DIMENSIONS");
        console.log(node.getBBox());
        return node.getBBox();
      });

      console.log(arrayOfPathDimensions);
      console.log(Object.keys(pathNodes));
      console.log(justOne);
    }
  }

  render() {
    const getPathDimensions =
      this.state.selectedMessageIndex !== null && window ? "hello" : "nope";
    return (
      <Flex
        flexWrap="wrap"
        px={[2, 2, 2, 4]}
        color="text"
        style={{ overflow: "hidden", minHeight: 0 }}
      >
        <Flex mr={3} width={[1, 1, 1, 0.37]}>
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
                  <MessageThreadItem
                    id={item.id}
                    messageIndex={index}
                    key={`${index}-${item.id}`}
                    handleSelectMessageThread={this.handleSelectMessageThread}
                    {...item}
                  />
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
        <Flex
          flexDirection="column"
          border="lime"
          width={[1, 1, 1, 0.62]}
          style={{ overflowY: "scroll", maxHeight: "70vh" }}
        >
          Current Chat Pane
          <GlobalSVGGradient />
          {this.state.selectedMessageIndex !== null
            ? activeMessageThreads
                .filter(x => x.id === this.state.selectedMessageIndex)[0]
                .messages.map((message: MessageBody, index: number) => (
                  // <IncomingMessageBubbleNew
                  //   key={`${index}-${message.id}`}
                  //   {...message}
                  // />
                  <Box key={`${index}-${message.id}`} width={[1, 1 / 2]}>
                    <IncomingMessageBubble
                      x={33.051998138427734}
                      y={19.666000366210938}
                      width={247}
                      styles={styles}
                      passIndex={index}
                      {...message}
                    />
                  </Box>
                ))
            : ""}
        </Flex>
      </Flex>
    );
  }
}
