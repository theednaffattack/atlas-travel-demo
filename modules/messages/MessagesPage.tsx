import React, { Component } from "react";
import { Card, Text } from "rebass";

import { MessageThreadItem } from "./MessageThreadItem";
import { activeMessageThreads, archivedMessageThreads } from "./mockData";

import { MessageThreadProps, MessagePageState } from "./types";

import { Flex, Box } from "./StyledRebass";
import ViewMessagesPane from "./ViewMessagesPane";
import {
  GetMyMessagesComponent,
  NewMessageDocument
} from "../../generated/apolloComponents";

import { newMessageSub } from "../../graphql/message/subscriptions/NewMessage";

const input = {
  sentBy: "00840864-fa70-4b19-968a-0421b77b2074",
  user: "00a33f72-4a23-4753-a607-d98aaaed69f9"
};

const subInput = {
  message: "bleaker"
};

const subscribeToMoreFunc = (subscribeToMore, variables) =>
  subscribeToMore({
    document: newMessageSub,
    variables: variables[subInput],
    updateQuery: (prev, { subscriptionData }) => {
      const {
        subInput: { message }
      } = variables;
      console.log(
        "INSIDE UPDATEQUERY FROM SUBSCRIBETOMOREFUNC INSIDE SUBSCRIBETOMORE METHOD"
      );
      console.log(Object.keys(subscriptionData));

      if (!subscriptionData.data) return prev;
      const newFeedItem = subscriptionData.data.newMessage;

      return prev;

      return Object.assign({}, prev, {
        getMyMessages: [newFeedItem, ...prev.getMyMessages]
      });
    }
  });

export default class MessagesPage extends Component<
  MessageThreadProps,
  MessagePageState
> {
  constructor(props: MessageThreadProps) {
    super(props);
    this.handleSelectMessageThread = this.handleSelectMessageThread.bind(this);
    this.handleSelectArchivedMessageThread = this.handleSelectArchivedMessageThread.bind(
      this
    );
    this.state = {
      selectedMessageType: "",
      selectedMessageId: null
    };
  }

  handleSelectMessageThread(event: any) {
    let {
      currentTarget: { id }
    } = event;

    this.setState({
      selectedMessageId: id,
      selectedMessageType: "ACTIVE"
    });
  }

  handleSelectArchivedMessageThread(event: any) {
    let {
      currentTarget: { id }
    } = event;
    this.setState({
      selectedMessageId: id,
      selectedMessageType: "ARCHIVED"
    });
  }

  // componentDidMount() {
  //   this.props.subscribeToNewComments();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // Typical usage (don't forget to compare props):
  //   // if (this.state.selectedMessageIndex !== prevProps.selectedMessageIndex) {
  //   //   // this.fetchData(this.props.userID);
  //   //   const pathNodes = Array.from(document.querySelectorAll(".messageWindow"));
  //   //   const justOne = pathNodes[0].getBBox();
  //   //   const arrayOfPathDimensions = pathNodes.map((node, index) => {
  //   //     console.log("VIEW NODE DIMENSIONS");
  //   //     console.log(node.getBBox());
  //   //     return node.getBBox();
  //   //   });
  //   //   console.log(arrayOfPathDimensions);
  //   //   console.log(Object.keys(pathNodes));
  //   //   console.log(justOne);
  //   // }
  // }

  render() {
    const { me } = this.props.data.data;
    return (
      <Flex
        flexWrap="wrap"
        px={[2, 2, 2, 4]}
        color="text"
        style={{ overflow: "hidden", minHeight: 0 }}
      >
        {/* LEFT PANE GOES HERE */}
        <Flex mr={3} width={[1, 1, 1, 0.37]}>
          <Card
            p={3}
            width={1}
            bg="white"
            borderRadius="12px"
            boxShadow="0 27px 40px 0 rgba(0, 0, 0, 0.05)"
          >
            <Text fontSize={5}>Messages</Text>
            <Box borderTop="2px #eee solid">
              <Text pt={3} color="muted">
                ACTIVE NOW
              </Text>

              {activeMessageThreads.map(
                (item: MessageThreadProps, index: number, array: any[]) => (
                  <MessageThreadItem
                    id={item.id}
                    last={index === array.length - 1}
                    messageIndex={index}
                    key={`${index}-${item.id}`}
                    handleSelectMessageThread={this.handleSelectMessageThread}
                    {...item}
                  />
                )
              )}
              <Text pt={3} color="muted">
                ARCHIVES
              </Text>

              {archivedMessageThreads.map(
                (item: MessageThreadProps, index: number, array: any[]) => (
                  <MessageThreadItem
                    id={item.id}
                    last={index === array.length - 1}
                    messageIndex={index}
                    key={`${index}-${item.id}`}
                    handleSelectArchivedMessageThread={
                      this.handleSelectArchivedMessageThread
                    }
                    {...item}
                  />
                )
              )}
            </Box>
          </Card>
        </Flex>
        {/* RIGHT PANE GOES HERE */}
        <Flex
          flexDirection="column"
          border="lime"
          width={[1, 1, 1, 0.62]}
          style={{ overflowY: "scroll", maxHeight: "80vh" }}
        >
          <GetMyMessagesComponent variables={{ input }}>
            {({ loading, data, error, subscribeToMore }) => (
              <ViewMessagesPane
                subscribeToMore={subscribeToMore}
                subscriptionFunc={subscribeToMoreFunc}
                variables={{ subInput }}
                loading={loading}
                data={data}
                error={error}
              />
            )}
          </GetMyMessagesComponent>
        </Flex>
      </Flex>
    );
  }
}
