import React from "react";
import { Button, Flex, Text } from "rebass";

import { Amenities } from "./Features";
import { PriceRange } from "./PriceRange";
import TimePeriod from "./TimePeriod";

export const Filter = ({ hotelRefetch }: any) => {
  return (
    <Flex flexWrap="wrap" bg="#eee" width={1}>
      <Amenities />
      <PriceRange />
      <TimePeriod />
      <Button
        onClick={() =>
          hotelRefetch({
            data: {
              skip: 0,
              take: 5
            }
          })
        }
        type="button"
      >
        Submit This Stuff
      </Button>
    </Flex>
  );
};

interface FilterState {
  amenities: any;
  priceRange: any;
  timePeriod: any;
}

type SideBarOpenStatusTypes = "isOpen" | "isClosed";
interface FilterProps {
  sideBarOpenOrClosed: SideBarOpenStatusTypes;
}

export default class Filter2 extends React.Component<FilterProps, FilterState> {
  constructor(props) {
    super(props);

    this.handleAmenitiesUpdate = this.handleAmenitiesUpdate.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleTimePeriod = this.handleTimePeriod.bind(this);

    this.state = { amenities: {}, priceRange: {}, timePeriod: {} };
  }

  handleAmenitiesUpdate() {}

  handlePriceRange() {}

  handleTimePeriod() {}

  render() {
    console.log("test rerenders in FILTER");

    let { sideBarOpenOrClosed } = this.props;
    let { amenities, priceRange, timePeriod } = this.state;
    return (
      <Flex flexWrap="wrap" bg="#eee" width={1}>
        <Amenities containerState={amenities} />
        <PriceRange containerState={priceRange} />
        <TimePeriod
          sideBarOpenOrClosed={sideBarOpenOrClosed}
          containerState={timePeriod}
        />
      </Flex>
    );
  }
}
