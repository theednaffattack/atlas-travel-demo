import React from "react";
import { Flex, Text } from "rebass";
import { TravelGradientIcon } from "./Icon/TravelsGradient";

interface CustTravelingProps {
  data: any;
}

export const TravelingPage = ({ data }: CustTravelingProps, props: any) => (
  <Flex
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    {...props}
  >
    Traveling Page
    <Flex flexDirection="column" color="text" width="100px">
      <TravelGradientIcon fill="active" name="explore" />
    </Flex>
  </Flex>
);
