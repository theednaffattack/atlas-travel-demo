import { gql } from "apollo-boost";

export const getHotelByID = gql`
  query GetHotelByID($data: HotelGetInput!) {
    getHotelByID(data: $data) {
      id
      name
      rooms {
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
