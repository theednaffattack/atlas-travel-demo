import React from "react";

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 10,
  marginTop: 25,
  borderRadius: 5,
  backgroundColor: "lightgrey"
};

export function Rail({ source, target, getRailProps }) {
  return <div style={railStyle} {...getRailProps()} />;
}
