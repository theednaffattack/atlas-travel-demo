// @ts-ignore
import react from "React";
import styled from "styled-components";
import { space } from "styled-system";

import paths from "./paths.json";

interface CustomSVGProps {
  fill: string;
  name: string;
  selected: boolean;
  className?: string;
  size?: string;
  height: string;
  width?: string;
}

interface PathProps {
  [key: string]: any;
}

let myPaths: PathProps = paths;

const IconBase = ({
  fill = "rgb(255, 255, 255)",
  selected = false,
  name = "discover",
  className = "icon",
  size = "1em",
  height,
  width
}: CustomSVGProps) => (
  <svg
    viewBox={myPaths[name]["viewBox"]}
    className={className}
    height={height || size}
    width={width || size}
  >
    <defs>
      <filter
        filterUnits="userSpaceOnUse"
        id="Filter_0"
        x="0px"
        y="0px"
        width="107px"
        height="107px"
      >
        <feOffset in="SourceAlpha" dx="0" dy="10" />
        <feGaussianBlur result="blurOut" stdDeviation="5.196" />
        <feFlood floodColor="rgb(0, 0, 0)" result="floodOut" />
        <feComposite operator="atop" in="floodOut" in2="blurOut" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.1" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="PSgrad_0" x1="0%" x2="5.234%" y1="99.863%" y2="0%">
        <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="0.5" />
        <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <g filter="url(#PSgrad_0)">
      <path
        fillRule="evenodd"
        fill="rgb(244, 50, 127)"
        d={myPaths[name]["paths"][0]}
      />
    </g>
    {/* 🔥 🔥 🔥  FIREBREAK  🔥 🔥 🔥 */}
    <path
      fillRule="evenodd"
      fill={selected || fill === "mobile" ? "#fff" : "#aaa"}
      d={myPaths[name]["paths"][0]}
    />
    {myPaths[name]["paths"][1] ? (
      <path
        fill={selected ? fill : "rgb(94, 104, 112)"}
        d={myPaths[name]["paths"][1]}
      />
    ) : (
      ""
    )}
  </svg>
);

export default IconBase;
