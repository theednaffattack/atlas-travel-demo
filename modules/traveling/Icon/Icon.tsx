// @ts-ignore
import react from "React";
import paths from "./paths.json";

interface SVGProps {
  name?: string;
  fill?: string;
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

const baseFill = "rgb(204, 204, 204)";

const Icon = ({
  fill = "currentColor",
  name = "travels",
  className = "icon",
  size = "1em",
  height,
  width
}: SVGProps) => (
  <svg
    viewBox="0 0 42 42"
    className={className}
    height="100%"
    width="100%"
    // preserveAspectRatio="xMidYMin meet"
    // height={height || size}
    // width={width || size}
  >
    <defs>
      <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
        <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="1" />
        <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="1" />
        <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill={fill === "active" ? baseFill : fill}
      d={paths[name][0]}
    />

    <path
      fill={fill === "active" ? "url(#PSgrad_0)" : fill}
      d={paths[name][1] ? paths[name][1] : ""}
    />
  </svg>
);

// width="42px" height="30px"

export default Icon;
