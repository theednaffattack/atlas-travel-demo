import React from "react";
import { Box, Flex as FlexBase, Text } from "rebass";
import posed from "react-pose";
import styled from "styled-components";
import { borders } from "styled-system";

import Viewbox from "./SavedViewbox";
import {
  GetAllHotelDataComponent,
  GetAllHotelInput,
  GetAllHotelDataGetAllHotel
} from "../../generated/apolloComponents";
import { Button } from "../../components/Button/Button";
import { Filter } from "./Filter/Filter";

type SavedMainProps = {
  data: any;
  openFilters: any;
};

type SavedMainState = {
  open: boolean;
};

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Flex = styled(FlexBase)`
  ${borders}
`;

const FlexSpecialBase = posed(Flex)({
  closed: {
    applyAtEnd: { display: "none" },
    height: 0,
    opacity: 0,
    // flip: true
    transition: {
      height: {
        duration: 300,
        ease: [0.08, 0.69, 0.2, 0.99]
      }
    }
  },
  open: {
    applyAtStart: { display: "flex" },
    height: "auto",
    opacity: 1,
    // flip: true,
    transition: {
      height: {
        duration: 300,
        ease: [0.08, 0.69, 0.2, 0.99]
      }
    }
  }
});

const FlexSpecial = styled(FlexSpecialBase)`
  transform: translateZ(0);
`;

export default class SavedMain extends React.Component<
  SavedMainProps,
  SavedMainState
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

    if (loading) return <span>loading...</span>;
    if (error) return `Error! ${error}`;
    return (
      <Flex flexDirection="column" width={1}>
        <FlexSpecial
          // height="100%"
          width={1}
          pose={this.state.open ? "open" : "closed"}
        >
          <Filter
            hotelRefetch={refetch}
            filterBoxOpenOrClosed={this.state.open ? "isOpen" : "isClosed"}
          />
        </FlexSpecial>
        <Text pt={2}>{data.getAllHotel.length} spots</Text>
        <Flex width={1} flexDirection="column">
          <Viewbox
            filterOpen={this.state.open}
            requestor={this.props.data.data.me}
            data={data}
          />
        </Flex>
      </Flex>
    );
  }

  // Lifecylce methods

  shouldComponentUpdate(nextProps: SavedMainProps, nextState: SavedMainState) {
    if (nextProps.open === this.state.open) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Flex bg="transparent" color="text" width={[1, 1]} flexDirection="column">
        <Flex alignItems="center" color="text">
          <Box width={1}>
            <Text fontWeight="600" fontSize={[4, 5]} color="text">
              Saved
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
