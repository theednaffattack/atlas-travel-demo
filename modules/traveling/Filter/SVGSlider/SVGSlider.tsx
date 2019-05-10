import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Button, Flex, Text } from "rebass";

import { SliderRail, Handle, Track, Tick } from "./components"; // example render components - source below
import { view, trbl, dims } from "./constants";
import Surface from "./Surface";

const sliderProps = {
  width: dims[0],
  height: dims[1],
  fill: "none",
  opacity: 0.5,
  stroke: "red"
};

const domain = [100, 500];
const defaultValues = [150, 300];

export default class SVGSlider extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    // this.handlePriceRange = this.handlePriceRange.bind(this);
  }
  onUpdate([low, high]) {
    console.log("check SVGSlider vals");
    console.log(low);
    this.props.handlePriceRange(low, high);
  }

  render() {
    return (
      <Flex
        flexDirection="column"
        width={1}
        bg="#f2f2f2"
        p={3}
        mb={3}
        style={{
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        }}
      >
        <Surface view={view} trbl={trbl}>
          <Slider
            mode={1}
            step={1}
            flatten
            domain={domain}
            component="rect"
            onUpdate={this.onUpdate}
            rootProps={sliderProps}
            values={defaultValues}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Ticks>
              {({ ticks, getHandleProps }) => (
                <g transform={`translate(0,${dims[1]})`}>
                  {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} />
                  ))}
                </g>
              )}
            </Ticks>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <g transform={`translate(0,${dims[1] / 2})`}>
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </g>
              )}
            </Tracks>
            <Handles>
              {({ handles, getHandleProps }) => (
                <g transform={`translate(0,${dims[1] / 2})`}>
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </g>
              )}
            </Handles>
          </Slider>
        </Surface>
      </Flex>
    );
  }
}
