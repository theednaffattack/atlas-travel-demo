import { gql } from "apollo-boost";

export const newMessageSub = gql`
  subscription NewMessage($message: String!) {
    newMessage(message: $message) {
      id
      message
      sentBy
      createdAt
    }
  }
`;
