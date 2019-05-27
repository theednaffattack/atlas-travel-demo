import { gql } from "apollo-boost";

export const AddNewMessage = gql`
  mutation AddNewMessage($message: String!, $sentBy: String!) {
    addNewMessage(message: $message, sentBy: $sentBy)
  }
`;
