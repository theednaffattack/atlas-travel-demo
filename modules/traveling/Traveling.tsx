import React from "react";
import { Flex } from "rebass";
import TravelingMain from "./TravelingMain";

interface CustTravelingProps {
  data: any;
}

export const TravelingPage = ({ data }: CustTravelingProps, props: any) => (
  <Flex
    alignItems="center"
    px={[0, 0]}
    flexDirection="column"
    // justifyContent="center"
    {...props}
  >
    <TravelingMain data={data} />
  </Flex>
);
