import React from "react";
import { Text } from "rebass";

export function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -35,
        marginTop: -25,
        // marginBottom: 15,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        // backgroundColor: "#2C4870",
        color: "#333"
      }}
      {...getHandleProps(id)}
    >
      {/* <div
        style={{
          fontFamily: "Roboto",
          fontSize: 11,
          marginTop: -25,
          backgroundColor: "rgba(255,255,255,0.8)"
        }}
      > */}
      <svg width="70px">
        <path
          fillRule="evenodd"
          fill="rgb(68, 68, 68)"
          d="M48.226,38.881 C46.746,38.772 43.312,38.996 39.373,42.497 C38.632,43.156 38.039,43.580 37.566,43.827 L37.480,43.913 C36.026,45.352 33.671,45.352 32.217,43.913 L31.995,43.692 C31.607,43.433 31.158,43.078 30.634,42.603 C26.693,39.027 23.256,38.798 21.775,38.910 L27.641,38.054 C27.578,37.036 27.924,35.998 28.709,35.220 L32.217,31.743 C33.671,30.303 36.026,30.303 37.480,31.743 L40.988,35.220 C41.758,35.984 42.108,36.999 42.061,38.000 L48.226,38.881 ZM48.226,38.881 C48.723,38.917 49.000,38.991 49.000,38.991 L48.226,38.881 ZM21.775,38.910 L21.000,39.023 C21.000,39.023 21.278,38.947 21.775,38.910 Z"
        />
        <path
          fillRule="evenodd"
          fill="rgb(68, 68, 68)"
          id={`handle${id}`}
          d="M11.667,0.667 L57.667,0.667 C64.110,0.667 69.333,5.890 69.333,12.334 L69.333,27.667 C69.333,34.110 64.110,39.333 57.667,39.333 L11.667,39.333 C5.223,39.333 0.000,34.110 0.000,27.667 L0.000,12.334 C0.000,5.890 5.223,0.667 11.667,0.667 Z"
        />

        <text
          x="20"
          kerning="auto"
          fontFamily="Montserrat"
          fill="#fff"
          stroke="#fff"
          transform="matrix( 0.33333333333333, 0, 0, 0.33333333333333,26.5403333333334, 24.6671666666666)"
          fontSize="36px"
          textAnchor="middle"
        >
          {/* <textPath
            xlinkHref={`handle${id}`}
            startOffset="50%"
            text-anchor="middle"
          > */}
          &#36;{parseFloat(Math.round(value * 100) / 100)}
          {/* </textPath> */}
        </text>
      </svg>
      {/* </div> */}
    </div>
  );
}
