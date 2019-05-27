import { gql } from "apollo-boost";

export const newMessageSub = gql`
  subscription NewMessage($message: String!, $sentBy: String!) {
    newMessage(message: $message, sentBy: $sentBy) {
      id
      message
      sentBy
      createdAt
    }
  }
`;
