// @ts-ignore
import react from "React";
import paths from "./paths.json";

interface SVGProps {
  name?: string;
  fill?: string;
  height: string;
  width: string;
  className: string;
  size?: string;
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
  fill = "currentColor",
  name = "travels",
  className = "icon",
  size,
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
      <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
        <stop offset="6%" stopColor="rgb(210,48,120)" stopOpacity="1" />
        <stop offset="74%" stopColor="rgb(254,97,97)" stopOpacity="1" />
        <stop offset="100%" stopColor="rgb(255,121,85)" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill={fill === "active" ? baseFill : fill}
      d={myPaths[name]["paths"][0]}
    />
    {myPaths[name]["paths"][1] ? (
      <path
        fill={fill === "active" ? "url(#PSgrad_0)" : fill}
        d={myPaths[name]["paths"][1]}
      />
    ) : (
      ""
    )}
  </svg>
);

// width="42px" height="30px"

export default Icon;
