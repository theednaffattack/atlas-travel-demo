// @ts-ignore
import React from "react";
import paths from "./paths.json";

interface SVGProps {
  name?: string;
  fill?: string;
  height: string;
  width: string;
  className: string;
  size?: string;
}

interface PathProps {
  [key: string]: any;
}

let myPaths: PathProps = paths;

const baseFill = "rgb(204, 204, 204)";

const Icon = ({
  fill,
  name = "traveling",
  className = "icon",
  size,
  height,
  width
}: SVGProps) => {
  return (
    <svg
      viewBox={myPaths[name]["viewBox"]}
      className={className}
      height={height || size}
      width={width || size}
      // preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <linearGradient id="pretty" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="1" />
          <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        fill={fill === "active" ? "url(#pretty)" : fill}
        d={myPaths[name]["paths"][0]}
      />
      {myPaths[name]["paths"][1] ? (
        <path
          fill={fill === "active" ? "url(#pretty)" : fill}
          d={myPaths[name]["paths"][1]}
        />
      ) : (
        ""
      )}
    </svg>
  );
};

export default Icon;
