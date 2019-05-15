import React from "react";

export function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(240,83,109)", // "black", // "#546C91",
        borderRadius: 5,
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
        position: "absolute",
        marginTop: 25,
        zIndex: 1,
        height: 10,
        cursor: "pointer"
      }}
      {...getTrackProps()}
    />
  );
}
