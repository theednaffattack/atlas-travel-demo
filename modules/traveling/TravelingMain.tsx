import React from "react";
import { Box, Flex, Text } from "rebass";

import Viewbox from "./Viewbox";
import { GetAllHotelDataComponent } from "../../generated/apolloComponents";
import { Button } from "../../components/Button/Button";

type MyProps = {
  data: any;
};

type MyState = {
  fakeState: string;
};

export default class TravelingMain extends React.Component<MyProps, MyState> {
  state = {
    fakeState: ""
  };
  render() {
    return (
      <Flex bg="transparent" width={[1, 0.6]} flexDirection="column">
        <Flex alignItems="center" color="text">
          <Box width={1}>
            <Text fontWeight="600" fontSize={[4, 5]} color="text">
              Featured
            </Text>
            <Text>### spots</Text>
          </Box>
          <Flex>
            <Button height="165px" label="Filters" />
          </Flex>
        </Flex>

        <GetAllHotelDataComponent
          variables={{
            data: {
              skip: 0,
              take: 15
            }
          }}
        >
          {getAllHotel =>
            getAllHotel && getAllHotel.data ? (
              <Viewbox data={getAllHotel.data} />
            ) : (
              "loading..."
            )
          }
        </GetAllHotelDataComponent>
      </Flex>
    );
  }
}
