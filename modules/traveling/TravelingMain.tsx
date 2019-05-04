import React from "react";
import { Box, Flex, Text } from "rebass";
import posed from "react-pose";

import Viewbox from "./Viewbox";
import { GetAllHotelDataComponent } from "../../generated/apolloComponents";
import { Button } from "../../components/Button/Button";
import { Filter } from "./Filter/Filter";

type MyProps = {
  data: any;
};

type MyState = {
  fakeState: string;
  open: boolean;
};

const FlexSpecial = posed(Flex)({
  closed: { height: "0", opacity: 0 },
  open: { height: "auto", opacity: 1 }
});

export default class TravelingMain extends React.Component<MyProps, MyState> {
  state = {
    fakeState: "",
    open: false
  };
  render() {
    const thisIsMe = this.props.data.data.me;
    const { open } = this.state;
    return (
      <>
        <Flex
          bg="transparent"
          color="text"
          width={[1, 1 / 2]}
          flexDirection="column"
        >
          <Flex alignItems="center" color="text">
            <Box width={1}>
              <Text fontWeight="600" fontSize={[4, 5]} color="text">
                Featured
              </Text>
            </Box>

            <Flex>
              <Button
                onClick={() =>
                  this.setState(prevState => ({
                    open: !prevState.open
                  }))
                }
                height="165px"
                label="Filters"
              />
            </Flex>
          </Flex>
          <FlexSpecial width={1} pose={open ? "open" : "closed"}>
            <Filter />
          </FlexSpecial>
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
                <>
                  <Text>{getAllHotel.data.getAllHotel.length} spots</Text>

                  <Viewbox requestor={thisIsMe} data={getAllHotel.data} />
                </>
              ) : (
                <span>"loading..."</span>
              )
            }
          </GetAllHotelDataComponent>
        </Flex>
      </>
    );
  }
}
