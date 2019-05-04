// @ts-ignore
import react from "React";
import posed, { PoseGroup } from "react-pose";

import paths from "./paths.json";

interface SVGProps {
  name?: string;
  fill?: string;
  selected: boolean;
  height: string;
  width: string;
  className: string;
  size: string;
}

// interface PathProps {
//   travels: string[];
//   explore: string[];
//   menu: string[];
// }

interface PathProps {
  [key: string]: any;
}

let myPaths: PathProps = paths;

const baseFill = "rgb(204, 204, 204)";

const Icon = ({
  fill = "rgb(255, 255, 255)",
  selected = false,
  name = "travels",
  className = "icon",
  size = "1em",
  height,
  width
}: SVGProps) => (
  <svg
    viewBox={myPaths[name]["viewBox"]}
    // preserveAspectRatio="xMidYMid slice"
    className={className}
    height={height || size}
    width={width || size}
    // height="40px"
    // width="40px"
    // preserveAspectRatio="xMidYMin meet"
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
      fill={selected ? "url(#PSgrad_0)" : "rgb(94, 104, 112, 0.1)"}
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

// width="42px" height="30px"

export default Icon;

// ICON LIST

const PIcon = posed(Icon)({});

const whiteFill = "rgb(255,255,255)";

type AmenityIcons = {
  wifi: any;
  hotelRestaurant: any;
  pool: any;
  innBar: any;
  parking: any;
  nightClub: any;
};

export const amenityIcons: AmenityIcons = {
  wifi: {
    component: (
      <Icon
        name="wifi"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    ),
    label: "WiFi"
  },
  hotelRestaurant: {
    component: (
      <Icon
        name="hotelRestaurant"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    ),
    label: "Hotel Restaurant"
  },
  pool: {
    component: (
      <Icon
        name="pool"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    ),
    label: "Pool"
  },
  innBar: {
    component: (
      <Icon
        name="innBar"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    ),
    label: "Inn Bar"
  },
  parking: {
    label: "Parking",
    component: (
      <Icon
        name="parking"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    )
  },
  nightClub: {
    component: (
      <Icon
        name="nightClub"
        fill={whiteFill}
        height="54px"
        className="icon"
        size="2em"
        width="54px"
      />
    ),
    label: "Night Club"
  }
};
