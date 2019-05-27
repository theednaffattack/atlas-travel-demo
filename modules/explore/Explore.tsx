import React from "react";
import { Flex } from "rebass";

import ExploreTabMain from "./ExploreTabMain";
import Tabs from "../modules/explore/Tabs/Tabs";

interface CustExploreProps {
  data: any;
}

export const ExplorePage = ({ data }: CustExploreProps, props: any) => (
  <Flex
    alignItems="center"
    px={[0, 0]}
    flexDirection="column"
    // justifyContent="center"
    {...props}
  >
    <ExploreTabMain data={data} />
  </Flex>
);
