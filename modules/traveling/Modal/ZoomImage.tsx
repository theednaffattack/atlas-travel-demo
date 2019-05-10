import React from "react";
import { Flex as FlexBase } from "rebass";
import posed from "react-pose";
import { minHeight } from "styled-system";
import styled from "styled-components";

import CarouselBase from "../Carousel/CarouselContainer";
import { itemMotionProps } from "../../discover/Modal/motionCon ";

export const ZoomImageAnimation = {
  zoomedIn: {
    applyAtEnd: { display: "none" },
    position: "fixed",
    borderRadius: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
    width: "auto"
    // height: "auto"
    // zIndex: 999
  },
  zoomedOut: {
    applyAtEnd: { display: "block" },
    position: "static",
    borderRadius: "8px",
    width: "100%",
    height: "100%",
    flip: true
  }
};

const Image = posed.img(ZoomImageAnimation);

interface CustomZoomProps {
  zoomState: any;
  imageHeight: any;
  imageWidth: any;
  poseState: boolean;
  clicky: any;
  src: string;
}

type CustomState = {
  isZoomed: boolean;
};

const FrameBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: transparent;
  transform: translateZ(0);
`;

const Frame = posed(FrameBase)({
  zoomedIn: {
    applyAtStart: { display: "block" },
    opacity: 1
  },
  zoomedOut: {
    applyAtEnd: { display: "none" },
    opacity: 0
  }
});

const Flex = styled(FlexBase)`
  ${minHeight}
`;

class ZoomImg extends React.Component<CustomZoomProps, CustomState> {
  constructor(props: any) {
    super(props);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.truncate = this.truncate.bind(this);
  }

  state = {
    isZoomed: false,
    showDetails: false,
    detailData: ""
  };

  truncate(words: string) {
    if (words.length > 16) {
      return words.slice(0, 16) + "...";
    } else {
      return words;
    }
  }

  toggleZoom(e: any) {
    e.preventDefault();
    let { target } = e;
    // console.log(target);

    this.setState((prevState: any, prevProps) => {
      return {
        isZoomed: !prevState.isZoomed,
        showDetails: !prevState.showDetails
        // detailData: prevProps.data[target.id]
      };
    });
  }

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, photos, src, ...props } = this.props;
    const pose = isZoomed ? "zoomedIn" : "zoomedOut";

    // https://github.com/zeit/next.js/issues/2177
    const isBrowser = typeof window !== "undefined";
    if (isBrowser && isZoomed) {
      document.body.style.overflowY = "hidden";
    }
    if (isBrowser && !isZoomed) {
      document.body.style.overflowY = "auto";
    }
    return (
      <Flex width={1}>
        {/* <Frame pose={pose} className="frame" /> */}
        {/*  */}
        <Frame pose={pose}>
          <Flex flexWrap="wrap" flexDirection="row" width={1}>
            <Flex id="leftPane" bg="pink" width={[1, 1 / 2]}>
              <CarouselBase
                clickFunc={this.toggleZoom}
                photos={[this.props.photos[0]]}
              />
            </Flex>
            <Flex id="rightPane" bg="yellow" width={[1, 1 / 2]}>
              {JSON.stringify(this.props.photos, null, 2)}
            </Flex>
          </Flex>
        </Frame>
        <Image
          onClick={this.toggleZoom}
          pose={pose}
          height={imageHeight}
          width={imageWidth}
          src={src}
          {...props}
          style={{
            borderRadius: "8px",
            maxWidth: this.state.isZoomed ? "50%" : "100%",
            opacity: this.state.isZoomed ? 0 : 1
          }}
        />
      </Flex>
    );
  }
}

export default ZoomImg;
