import { gql } from "apollo-boost";

export const getAllHotelData = gql`
  query GetAllHotelData($data: BaseListInput!) {
    getAllHotel(data: $data) {
      reviewCount
      averageRating
      name
      id
      price
      rooms {
        id
        roomNumber
        beds
        type
        beds
        maxOccupancy
        costPerNight

        reserved {
          id
          from
          to
        }
      }
      amenities
      loveCount
      commentCount
      address
      suite
      city
      state
      zipCode
      zipCodeSuffix
      photos {
        id
        uri
      }
      reviews {
        value
        id
      }
    }
  }
`;
