import { gql } from "apollo-boost";

export const AddNewMessage = gql`
  mutation AddNewMessage($message: String!) {
    addNewMessage(message: $message)
  }
`;
