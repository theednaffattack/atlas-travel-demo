// import react from "React";
import styled from "styled-components";
import { flex, flexDirection, flexBasis, flexWrap } from "styled-system";
import { Box as BoxBase, Card as CardBase } from "rebass";
import { frameMotionProps } from "./motionConfig";

import posed from "react-pose";

interface CustomZoomProps {
  imageHeight: any;
  imageWidth: any;
}

const TheCard = posed(CardBase)(frameMotionProps);

const Box = posed(BoxBase)(frameMotionProps);

export const ZoomCard = styled(TheCard)`
${flex}
 ${flexDirection}
 ${flexBasis}
 ${flexWrap}
`;

// const pose = isZoomed ? "zoom" : "init";

export class ZoomSupreme extends React.Component<CustomZoomProps> {
  constructor(props: any) {
    super(props);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }
  state = { isZoomed: false };

  zoomIn() {
    console.log("zoom in ");
    // window ? window.addEventListener("scroll", this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    // window.removeEventListener("scroll", this.zoomOut);
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    // const { imageWidth, imageHeight, ...props } = this.props;
    const { isZoomed } = this.state;
    // const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? "zoom" : "init";

    return (
      <Box
        onClick={
          this.state.isZoomed ? () => this.zoomOut() : () => this.zoomIn()
        }
        pose={pose}
        {...this.props}
      />
    );
  }
}
