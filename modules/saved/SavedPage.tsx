import React from "react";
import { Flex } from "rebass";
import SavedMain from "./SavedMain";

interface CustSavedProps {
  data: any;
}

export const SavedPage = ({ data }: CustSavedProps, props: any) => (
  <Flex
    alignItems="center"
    px={[0, 0]}
    flexDirection="column"
    // justifyContent="center"
    {...props}
  >
    <SavedMain data={data} />
  </Flex>
);
