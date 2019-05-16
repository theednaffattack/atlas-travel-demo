import React, { Component } from "react";
import {
  Slider as SliderThing,
  Rail,
  Handles,
  Tracks,
  Ticks
} from "react-compound-slider";

import { Handle } from "./Handles";
import { Track } from "./Track";
import { Rail as RailDiv } from "./Rail";
import { Tick } from "./Tick";

const sliderStyle = {
  // Give the slider some width
  position: "relative",
  width: "100%",
  height: 80
  // border: "1px solid steelblue"
};

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 10,
  marginTop: 25,
  borderRadius: 5,
  backgroundColor: "lightgrey"
};

export default class Slider extends Component {
  render() {
    return (
      <SliderThing
        rootStyle={sliderStyle}
        domain={[150, 700]}
        step={1}
        mode={2}
        values={[250, 390]}
      >
        <Rail>
          {(
            { getRailProps } // adding the rail props sets up events on the rail
          ) => <RailDiv style={railStyle} getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div>
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div>
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks values={[200, 300, 400, 500, 600]}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </SliderThing>
    );
  }
}
