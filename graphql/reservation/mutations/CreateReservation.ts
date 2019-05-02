import { gql } from "apollo-boost";

export const changePasswordMutation = gql`
  mutation CreateReservation($data: ReservationInput!) {
    createReservation(data: $data) {
      id
      from
      to
      user {
        id
        firstName
        lastName
        email
      }
      room {
        id
        roomNumber
        type
        beds
        costPerNight
        reserved {
          id
          from
          to
        }
      }
    }
  }
`;
