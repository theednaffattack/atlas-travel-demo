import React, { Component } from "react";
import { Button, Card, Text } from "rebass";

import { MessageThreadItem } from "./MessageThreadItem";
import { activeMessageThreads, archivedMessageThreads } from "./mockData";

import { MessageThreadProps, MessagePageState } from "./types";

import { AbBox, Box, Flex } from "./StyledRebass";
import ViewMessagesPane from "./ViewMessagesPane";
import {
  AddNewMessageComponent,
  AddNewMessageDocument,
  GetMyMessagesComponent,
  NewMessageDocument
} from "../../generated/apolloComponents";
import { InputField } from "../../components/fields/InputField";

import { newMessageSub } from "../../graphql/message/subscriptions/NewMessage";
import { Formik, Field } from "formik";

const input = {
  sentBy: "00840864-fa70-4b19-968a-0421b77b2074",
  user: "00a33f72-4a23-4753-a607-d98aaaed69f9"
};

const subscribeToMoreInput = {
  message: "bleaker"
};

const subscribeToMoreFunc = (subscribeToMore, variables) =>
  subscribeToMore({
    document: newMessageSub,
    variables: { message: subscribeToMoreInput.message },
    updateQuery: (prev, { subscriptionData }) => {
      // `prev` and `{ subscriptionData }` are supplied by
      // appollo to the updateQuery function
      const {
        subscribeToMoreInput: { message }
      } = variables;
      if (!subscriptionData.data) return prev;
      const newFeedItem = subscriptionData.data.newMessage;
      return Object.assign({}, prev, {
        getMyMessages: [...prev.getMyMessages, newFeedItem]
      });
    }
  });

export default class MessagesPage extends Component<
  MessageThreadProps,
  MessagePageState
> {
  constructor(props: MessageThreadProps) {
    super(props);
    this.subscribeToMoreFunc = subscribeToMoreFunc.bind(this);
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
        <Flex width="100%" position="static" />
        {/* LEFT PANE GOES HERE */}
        <Flex mr={[0, 3]} width={[1, 1, 1, 0.37]}>
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
          // border="lime"
          pt={5}
          pb={4}
          width={[1, 1, 1, 0.62]}
          style={{
            overflowY: "hidden",
            maxHeight: "80vh"
          }}
          position="relative"
        >
          <AbBox
            width={1}
            zIndex={999}
            bg="rgba(255,255,255,0.8)"
            position="absolute"
            p={4}
            top={0}
            left={0}
            // style={{
            //   filter: "blur(1.5rem)"
            // }}
          >
            <Text>Header</Text>
          </AbBox>
          <AbBox
            width={1}
            zIndex={999}
            bg="#eee"
            position="absolute"
            pt={3}
            px={4}
            bottom={0}
            left={0}
          >
            <AddNewMessageComponent
              mutation={AddNewMessageDocument}
              // variables={{ message: "ayyyyyyy" }}
            >
              {addNewMEssage => (
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (data, { setErrors, resetForm }) => {
                    console.log("SUBMIT!!!");
                    console.log(JSON.stringify(data, null, 2));

                    addNewMEssage({
                      variables: { message: data.message }
                    });
                    resetForm();
                    // variables={{ message: "ayyyyyyy" }}

                    // let response;
                    // try {
                    //   response = await login({
                    //     variables: data,
                    //     update: (cache, { data }) => {
                    //       if (!data || !data.login) {
                    //         return;
                    //       }
                    //       cache.writeQuery<MeQuery>({
                    //         query: meQuery,
                    //         data: {
                    //           __typename: "Query",
                    //           me: data.login
                    //         }
                    //       });
                    //     }
                    //   });
                    // } catch (error) {
                    //   console.error(error);
                    //   // return error;
                    //   // alert(Object.keys(error));
                    //   alert(error);
                    //   const displayErrors: { [key: string]: string } = {};

                    //   // let networkErrors = error.networkError;

                    //   let gqlErrors = error.graphQLErrors; //.extensions.exception.validationErrors;

                    //   gqlErrors.forEach((errorThing: any) => {
                    //     displayErrors[errorThing.path[0]] = errorThing.message;
                    //   });

                    //   // I need to investigate: I'm not returning validationErrors but
                    //   // validation errors as general errors, for some reason

                    //   // myErrors.forEach((validationError: any) => {
                    //   //   Object.values(validationError.constraints).forEach(
                    //   //     (message: any) => {
                    //   //       displayErrors[validationError.property] = message;
                    //   //     }
                    //   //   );
                    //   // });
                    //   // console.log(displayErrors);
                    //   // return setErrors(displayErrors);

                    //   // pluck off confirmation errors only, everything else
                    //   // is "invalid login" for obfuscation purposes
                    //   return setErrors({
                    //     message:
                    //       displayErrors &&
                    //       displayErrors.login === "Please confirm your account"
                    //         ? displayErrors.login
                    //         : "invalid login"
                    //   });
                    // }

                    // if (response && response.data && !response.data.login) {
                    //   // alert(response.data);
                    //   setErrors({
                    //     message: "unknown error"
                    //   });
                    //   return;
                    // }
                  }}
                  initialValues={{
                    message: ""
                  }}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        id="message"
                        name="message"
                        placeholder="Type something..."
                        component={InputField}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  )}
                </Formik>
              )}
            </AddNewMessageComponent>
          </AbBox>
          <Flex
            flexDirection="column"
            // border="lime"
            width={1}
            style={{ overflowY: "scroll", maxHeight: "80vh" }}
            position="relative"
          >
            <GetMyMessagesComponent variables={{ input }}>
              {({ loading, data, error, subscribeToMore }) => (
                <ViewMessagesPane
                  subscribeToMore={subscribeToMore}
                  subscriptionFunc={(
                    subscribeToMore,
                    variables,
                    scrollFunc
                  ) => {
                    subscribeToMore({
                      document: newMessageSub,
                      variables: { message: subscribeToMoreInput.message },
                      updateQuery: (prev, { subscriptionData }) => {
                        // `prev` and `{ subscriptionData }` are supplied by
                        // appollo to the updateQuery function
                        const {
                          subscribeToMoreInput: { message }
                        } = variables;
                        if (!subscriptionData.data) return prev;
                        const newFeedItem = subscriptionData.data.newMessage;
                        return Object.assign({}, prev, {
                          getMyMessages: [...prev.getMyMessages, newFeedItem]
                        });
                      }
                    });
                    scrollFunc();
                  }}
                  variables={{ subscribeToMoreInput }}
                  loading={loading}
                  data={data}
                  error={error}
                />
              )}
            </GetMyMessagesComponent>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}
