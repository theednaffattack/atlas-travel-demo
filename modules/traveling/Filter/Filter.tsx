import React from "react";
import { Flex, Text } from "rebass";

import { Amenities } from "./Features";
import { PriceRange } from "./PriceRange";

export const Filter = () => {
  return (
    <Flex flexWrap="wrap" bg="#eee" width={1}>
      <Amenities />
      <PriceRange />
    </Flex>
  );
};
