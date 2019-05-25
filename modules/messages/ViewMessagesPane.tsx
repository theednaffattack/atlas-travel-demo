import React, { Component } from "react";
import { Text } from "rebass";
import { GlobalSVGGradient } from "./GlobalSVGGradient";
// import { MessageThreadProps, MessagePageState } from "./types";
// import CurrentMessagesPane from "./CurrentMessagesPane";
import { IncomingMessageBubble } from "./IncomingMessageBubbleNew";
import { Flex } from "./StyledRebass";

import { NewMessageComponent } from "../../generated/apolloComponents";
import { newMessageSub } from "../../graphql/message/subscriptions/NewMessage";

export default class ViewMessagesPane extends Component {
  //   componentDidMount() {
  //     this.props.subscriptionFunc(
  //       this.props.subscribeToMore,
  //       this.props.variables
  //     );
  //   }
  render() {
    const {
      //   data,
      //   loading,
      //   error,
      //   subscribeToMore,
      //   subscriptionFunc,
      variables: {
        subInput: { message }
      }
    } = this.props;
    return (
      <Flex>
        <GlobalSVGGradient />
        {/* {error ? error.message : ""} */}
        <div>
          {/* {data!.getMyMessages!.map((message: any, index: number) => (
            // <div key={index}>{message.message}</div>
            <IncomingMessageBubble key={index} {...message} />
          ))} */}

          {/* <div>{loading ? <Text>loading...</Text> : ""}</div> */}
          <NewMessageComponent
            // onSubscriptionData={() => console.log("SUBSCIPTION BOOOOOOOY")}
            subscription={newMessageSub}
            variables={{
              message
            }}
          >
            {({ data, error, loading }) => (
              <div>
                {/* {JSON.stringify(variables, null, 2)} */}
                {/* {!loading && newMessage.message} */}
                {data ? Object.keys(data) : "no data"}
                {data ? <Text>{data.newMessage.message}</Text> : "not yet"}
                {loading ? "loading... " : ""}
                {!loading && <IncomingMessageBubble {...data.newMessage} />}
              </div>
            )}
          </NewMessageComponent>
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
