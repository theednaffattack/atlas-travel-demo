import React from "react";
import { Flex as FlexBase } from "rebass";
import styled from "styled-components";
import { height, width } from "styled-system";
import posed from "react-pose";

import { zoomImageProps } from "../motionConfig";

// const Frame = posed.div({
//   init: {
//     applyAtEnd: { display: "none" },
//     opacity: 0
//   },
//   zoom: {
//     applyAtStart: { display: "block" },
//     opacity: 1
//   }
// });

// const transition = {
//   duration: 400,
//   ease: [0.08, 0.69, 0.2, 0.99]
// };

const Image = posed.img(zoomImageProps);

const Flex = styled(FlexBase)`
  ${width}
  ${height}
`;

interface CustomZoomProps {
  imageHeight: any;
  imageWidth: any;
  poseState: string;
  src: string;
}

class ZoomImg extends React.Component<CustomZoomProps> {
  // state = { isZoomed: false };

  // zoomIn() {
  //   // window.addEventListener("scroll", this.zoomOut);
  //   this.setState({ isZoomed: true });
  // }

  // zoomOut = () => {
  //   // window.removeEventListener("scroll", this.zoomOut);
  //   this.setState({ isZoomed: false });
  // };

  // toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    // const { isZoomed } = this.state;
    const { imageWidth, imageHeight, src, ...props } = this.props;
    const pose = this.props.poseState === "zoomedIn" ? "zoom" : "init";

    return (
      <FlexBase width={1} onClick={this.toggleZoom}>
        {/* <Frame pose={pose} className="frame" /> */}
        <Image height="100%" width="100%" src={src} {...props} />
      </FlexBase>
    );
  }
}

export default ZoomImg;
