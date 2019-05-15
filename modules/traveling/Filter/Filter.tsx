import React from "react";
import { Button, Flex, Text } from "rebass";

import { Amenities } from "./Features";
import { PriceRange } from "./PriceRange";
import TimePeriod from "./TimePeriod";
import SVGSlider from "./SVGSlider/SVGSlider";

interface FilterState {
  amenities: any;
  priceRange: any;
  timePeriod: any;
  timeKeysSensed: string[];
}

type SideBarOpenStatusTypes = "isOpen" | "isClosed";
interface FilterProps {
  filterBoxOpenOrClosed: SideBarOpenStatusTypes;
  hotelRefetch: any;
}

export class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props) {
    super(props);

    this.handleAmenitiesUpdate = this.handleAmenitiesUpdate.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleTimePeriodUpdate = this.handleTimePeriodUpdate.bind(this);

    this.state = {
      amenities: {},
      priceRange: {},
      timePeriod: {},
      timeKeysSensed: []
    };
  }

  handleAmenitiesUpdate() {}

  handlePriceRange(low, high) {
    console.log("handlePreicRange");
    console.log(low);
    this.setState({ priceRange: { low, high } });
  }

  handleTimePeriodUpdate(obj: any) {
    this.setState({ timePeriod: obj });
  }

  render() {
    console.log("test rerenders in FILTER");

    let { filterBoxOpenOrClosed, hotelRefetch } = this.props;
    let { amenities, priceRange, timePeriod } = this.state;
    return (
      <Flex flexWrap="wrap" bg="#eee" width={1}>
        <svg
          style={{ width: 0, height: 0, position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient
            id="atlas-svg-button-fill"
            x1="0%"
            x2="5.234%"
            y1="99.863%"
            y2="0%"
          >
            <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="0.5" />
            <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="0.5" />
          </linearGradient>
        </svg>
        <Amenities containerState={amenities} />
        <PriceRange
          handlePriceRange={this.handlePriceRange}
          containerState={priceRange}
        />
        <TimePeriod
          handleTimePeriodUpdate={this.handleTimePeriodUpdate}
          filterBoxOpenOrClosed={filterBoxOpenOrClosed}
          containerState={timePeriod}
        />
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
  }
}
