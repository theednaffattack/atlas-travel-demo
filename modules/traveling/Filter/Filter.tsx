import React from "react";
import { Flex, Text } from "rebass";

import { Amenities } from "./Features";
import { PriceRange } from "./PriceRange";
import TimePeriod from "./TimePeriod";

export const Filter = () => {
  return (
    <Flex flexWrap="wrap" bg="#eee" width={1}>
      <Amenities />
      <PriceRange />
      <TimePeriod />
    </Flex>
  );
};
