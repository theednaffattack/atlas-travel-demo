import React, { Component } from "react";
import {
  Slider as SliderThing,
  Rail,
  Handles,
  Tracks,
  Ticks
} from "react-compound-slider";

import { Handle } from "./Handles";

const sliderStyle = {
  // Give the slider some width
  position: "relative",
  width: "100%",
  height: 80,
  border: "1px solid steelblue"
};

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: "#8B9CB6"
};

export default class Slider extends Component {
  render() {
    return (
      <SliderThing rootStyle={sliderStyle} domain={[0, 100]} values={[10]}>
        <div style={railStyle} />
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
      </SliderThing>
    );
  }
}
