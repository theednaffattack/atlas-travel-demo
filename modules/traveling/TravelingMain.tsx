import React from "react";
import { Box, Flex, Text } from "rebass";
import posed from "react-pose";

import Viewbox from "./Viewbox";
import {
  GetAllHotelDataComponent,
  GetAllHotelInput,
  GetAllHotelDataGetAllHotel
} from "../../generated/apolloComponents";
import { Button } from "../../components/Button/Button";
import { Filter } from "./Filter/Filter";

type TravelingMainProps = {
  data: any;
  openFilters: any;
};

type TravelingMainState = {
  open: boolean;
};

const FlexSpecial = posed(Flex)({
  closed: { height: "0", opacity: 0 },
  open: { height: "auto", opacity: 1 }
});

export default class TravelingMain extends React.PureComponent<
  TravelingMainProps,
  TravelingMainState
> {
  constructor(props) {
    super(props);

    this.openFilters = this.openFilters.bind(this);
    this.queryChildren = this.queryChildren.bind(this);

    this.state = {
      open: false
    };
  }

  openFilters() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  queryChildren({ data, error, loading, networkStatus, refetch, updateQuery }) {
    // const thisIsMe = this.props.data.data.me;
    console.log(this.props.data.data.me);
    // console.log({
    //   data,
    //   error,
    //   loading,
    //   networkStatus,
    //   refetch,
    //   updateQuery
    // });
    if (loading) return <span>loading...</span>;
    if (error) return `Error! ${error}`;
    return (
      <>
        <FlexSpecial width={1} pose={this.state.open ? "open" : "closed"}>
          <Filter
            hotelRefetch={refetch}
            sideBarOpenOrClosed={this.state.open ? "isOpen" : "isClosed"}
          />
        </FlexSpecial>
        <Text>{data.getAllHotel.length} spots</Text>
        <Viewbox
          filterOpen={this.state.open}
          requestor={this.props.data.data.me}
          data={data}
        />
      </>
    );
  }

  // Lifecylce methods

  shouldComponentUpdate(
    nextProps: TravelingMainProps,
    nextState: TravelingMainState
  ) {
    if (nextProps.open === this.state.open) {
      console.log(
        "TravelingMain SHOULDCOMPONENTUPDATE(): NEXTPROPS THEN THIS.PROPS"
      );
      console.log(nextProps);
      console.log(this.props);
      console.log(nextState);
      console.log(this.state);
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { open } = this.state;
    return (
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
            <Button onClick={this.openFilters} height="165px" label="Filters" />
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
          {this.queryChildren}
        </GetAllHotelDataComponent>
      </Flex>
    );
  }
}
