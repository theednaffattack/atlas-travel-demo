import React from "react";
import { Box, Flex as FlexBase, Text } from "rebass";
import posed from "react-pose";
import styled from "styled-components";
import { borders } from "styled-system";

import Viewbox from "./Viewbox";
import {
  GetAllHotelDataComponent,
  GetAllHotelInput,
  GetAllHotelDataGetAllHotel
} from "../../generated/apolloComponents";
import { Button } from "../../components/Button/Button";
import { Filter } from "./Filter/Filter";

type ExploreMainProps = {
  data: any;
  openFilters: any;
};

type ExploreMainState = {
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

export default class ExploreTabMain extends React.Component<
  ExploreMainProps,
  ExploreMainState
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
        />
        <Text pt={2}>{data.getAllHotel.length} spots</Text>
        <Flex width={1} flexDirection="column">
          <div>{JSON.stringify(data)}</div>
        </Flex>
      </Flex>
    );
  }

  // Lifecylce methods

  shouldComponentUpdate(
    nextProps: ExploreMainProps,
    nextState: ExploreMainState
  ) {
    if (nextProps.open === this.state.open) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Flex
        bg="transparent"
        color="text"
        width={[1, 2 / 3]}
        flexDirection="column"
      >
        Explore Goes Here
        <pre>{JSON.stringify(this.props.data.data.me, null, 2)}</pre>
      </Flex>
    );
  }
}
