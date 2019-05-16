import React from "react";
import { Flex } from "rebass";
import ExploreMain from "./ExploreMain";

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
    <ExploreMain data={data} />
  </Flex>
);
