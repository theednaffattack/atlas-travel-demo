// @ts-ignore
import react from "React";
import paths from "./paths.json";

interface SVGProps {
  name?: string;
  fill?: string;
}

interface PathProps {
  travels: string[];
  explore: string[];
}

const colorfulFill = "rgb(204, 204, 204)";

export const TravelGradientIcon = ({
  fill = "white",
  name = "travels"
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 42 42"
  >
    <defs>
      <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
        <stop offset="6%" stop-color="rgb(210,48,120)" stop-opacity="1" />
        <stop offset="74%" stop-color="rgb(254,97,97)" stop-opacity="1" />
        <stop offset="100%" stop-color="rgb(255,121,85)" stop-opacity="1" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill={fill === "active" ? colorfulFill : fill}
      d={paths[name][0]}
    />
    <path
      fill={fill === "active" ? "url(#PSgrad_0)" : fill}
      d={paths[name][1]}
    />
  </svg>
);

// width="42px" height="30px"
