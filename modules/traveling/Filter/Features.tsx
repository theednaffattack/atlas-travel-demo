import React from "react";
import { Flex, Text } from "rebass";
import posed, { PoseGroup } from "react-pose";

import { amenityIcons } from "./Icon/AmenityIcons";

const fakeAmenities = [
  "wifi",
  "pool",
  "hotelRestaurant",
  "innBar",
  "parking",
  "nightClub"
];

const PFlex = posed(Flex)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export const Amenities = (props: any) => {
  return (
    <Flex
      flexDirection="column"
      bg="#f2f2f2"
      p={3}
      mb={3}
      style={{
        // border: "2px crimson solid",
        boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
      }}
    >
      <Text>Amenities</Text>
      <Flex>
        {fakeAmenities.map((amenity, index) => (
          <React.Fragment key={amenity}>
            <PoseGroup>
              <PFlex
                pressable={true}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mx={2}
                key={index + amenity}
              >
                {amenityIcons[amenity].component || null}{" "}
                {amenityIcons[amenity].label || null}
              </PFlex>
            </PoseGroup>
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  );
};
