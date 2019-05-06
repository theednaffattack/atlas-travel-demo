import React from "react";
import paths from "./paths.json";

interface SVGProps {
  className: string;
  fill?: string;
  height: string;
  name?: string;
  selected?: boolean;
  toSelected?: boolean;
  fromSelected?: boolean;
  size: string;
  width: string;
  date: any;
}

interface GenericObject {
  [key: string]: any;
}

const myPaths: GenericObject = paths;

/**
 * I want the function below to switch fill colors amd also to
 * apply / unapply stroke when it does so.
 *
 * ADJUST:
 * 1) <tspan fontSize
 * 2) strokeWidth
 * 3) stroke
 * 4) fillOpacity
 * 5) fill???
 */

export default function CalendarIcon({
  className = "icon",
  fill = "currentColor",
  height,
  name = "calendar-date",
  selected = false,
  toSelected,
  fromSelected,
  size = "1em",
  width,
  date = 29
}: SVGProps) {
  return (
    <svg viewBox="0 0 47 46">
      <defs>
        <linearGradient id="PSgrad_0" x1="0%" x2="5.234%" y1="99.863%" y2="0%">
          <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="0.5" />
          <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        strokeWidth={selected ? "0" : "2px"}
        stroke="rgb(221, 221, 221)"
        fillOpacity={selected ? "1" : "0"}
        fill="url(#PSgrad_0)"
        d={myPaths[name]["paths"][0]}
      />
      <text
        kerning="auto"
        fontFamily="AdobeArabic"
        fill={selected ? "rgb(255, 255, 255)" : "rgb(160, 160, 160)"}
        transform="matrix( 0.33333333333333, 0, 0, 0.33333333333333,18.6328333333333, 27.3333333333335)"
        fontSize="32px"
      >
        <tspan
          fontSize="32px"
          fontFamily="Montserrat"
          fill={selected ? "rgb(255, 255, 255)" : "rgb(160, 160, 160)"}
        >
          {date}
          {/* &#49;&#51; */}
        </tspan>
      </text>
    </svg>
  );
}
