import { gql } from "apollo-boost";

export const createReview = gql`
  mutation CreateReview($data: BaseReviewInput!) {
    createReview(data: $data) {
      id
      value
    }
  }
`;
