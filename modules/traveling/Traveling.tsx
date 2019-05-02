import React from "react";
import { Flex, Text } from "rebass";
import Icon from "./Icon/Icon";

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
    <Text color="text">Traveling Page</Text>
  </Flex>
);
