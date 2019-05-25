import { gql } from "apollo-boost";

export const getHotelByID = gql`
  query GetMyMessages($input: GetMessagesInput!) {
    getMyMessages(input: $input) {
      id
      message
      createdAt
      sentBy
    }
  }
`;
