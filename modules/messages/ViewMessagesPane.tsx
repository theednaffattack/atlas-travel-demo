import React, { Component } from "react";
import { Text } from "rebass";
import { GlobalSVGGradient } from "./GlobalSVGGradient";
// import { MessageThreadProps, MessagePageState } from "./types";
// import CurrentMessagesPane from "./CurrentMessagesPane";
import { IncomingMessageBubble } from "./IncomingMessageBubbleNew";
import { Flex } from "./StyledRebass";

import { newMessageSub } from "../../graphql/message/subscriptions/NewMessage";

export default class ViewMessagesPane extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  componentDidMount() {
    this.props.subscriptionFunc(
      this.props.subscribeToMore,
      this.props.variables
    );

    console.log("this.messageEnd");
    console.log(this.messageEnd);
    this.scrollToBottom();
  }
  render() {
    const {
      data: getMessageData,
      loading: getMessageLoading,
      error: getMessageError,
      subscribeToMore,
      subscriptionFunc,
      variables: {
        subscribeToMoreInput: { message }
      }
    } = this.props;
    return (
      <Flex>
        <GlobalSVGGradient />
        {/* {error ? error.message : ""} */}
        <div>
          {getMessageData!.getMyMessages!.map((message: any, index: number) => (
            // <div key={index}>{message.message}</div>
            <IncomingMessageBubble
              subscriptionsFunc={subscriptionFunc}
              subscribeToMore={subscribeToMore}
              key={index}
              {...message}
            />
          ))}
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </div>
        {/* <CurrentMessagesPane
            me={me}
            messages={
              this.state.selectedMessageType === "ACTIVE"
                ? activeMessageThreads
                : archivedMessageThreads
            }
            messagesSelectorId={
              this.state.selectedMessageId ? this.state.selectedMessageId : ""
            }
          /> */}
      </Flex>
    );
  }
}
