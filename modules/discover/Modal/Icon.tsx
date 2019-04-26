import React from "react";
// import "./icons.svg";
// import "static/images/discover/amenities-sprite.svg"

// import AmenitiesIconBase from "../../../static/images/discover/amenities-sprite2.svg";
import paths from "./IconPaths.json";

// interface Random {
//   [key: string]: any;
// }

const Icon = ({
  name = "warning",
  size = "1em",
  fill = "currentColor",
  width,
  height,
  ...props
}) => {
  const path: any = paths[name];

  return (
    <svg
      {...props}
      width={width || size}
      height={height || size}
      fill={fill}
      data-id={`geomicon-${name}`}
      //   viewBox="0 0 32 32"
      viewBox="0 0 54 74"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
