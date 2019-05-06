import React from "react";

export function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -15,
        marginTop: 15,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#2C4870",
        color: "#333"
      }}
      {...getHandleProps(id)}
    >
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: 11,
          marginTop: -25,
          backgroundColor: "rgba(255,255,255,0.8)"
        }}
      >
        {parseFloat(Math.round(value * 100) / 100).toFixed(1)}
      </div>
    </div>
  );
}
