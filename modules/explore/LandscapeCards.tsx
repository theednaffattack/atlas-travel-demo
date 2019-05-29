import React from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import { Box, Card, ContentFlex, Icon, Image, Text } from "./StyledComponents";

const baseFill = "rgb(204, 204, 204)";

interface LandscapeCardState {
  isZoomed: boolean;
}

interface LandscapeCardProps {
  isModalViewActive: boolean;
  index: number;

  data: any;
  info: any;
  isModalViewActive: boolean;
  localContext: any;
  requestor: any;
}

export class LandscapeCards extends React.Component<
  LandscapeCardProps,
  LandscapeCardState
> {
  constructor(props: LandscapeCardProps) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.truncate = this.truncate.bind(this);

    this.targetRef = React.createRef();
    this.targetElement = null;

    this.state = {
      isZoomed: false
    };
  }

  toggleModal(event: React.MouseEvent) {
    const { target } = event;
    console.log(target);
  }

  toggleZoom(e: any) {
    this.setState((prevState: any, prevProps: any) => {
      return {
        isZoomed: !prevState.isZoomed
      };
    });
  }

  truncate(words: string, chars: number) {
    if (words.length > chars) {
      return words.slice(0, chars) + "...";
    } else {
      return words;
    }
  }

  render() {
    const {
      data,
      index,
      info,
      isModalViewActive,
      localContext,
      requestor
    } = this.props;

    return (
      <Card
        bg="#fafafa"
        color="text"
        pose={this.state.isZoomed && isModalViewActive ? "open" : "closed"}
        className="featureCard"
        borderRadius="17px"
        p={3}
        my={4}
        // mx={2}
        key={"landscapecards-" + index}
        id={index.toString()}
        width={[1]}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.1)"
        style={{
          overflowY: isModalViewActive ? "auto" : "hidden"
        }}
      >
        <ContentFlex
          flexWrap={isModalViewActive ? "wrap" : "nowrap"}
          id={index.toString()}
          alignItems="center"
          width={["auto", isModalViewActive ? 1 : 1]}
        >
          <ContentFlex
            id={index.toString()}
            className="modalClick"
            alignItems="center"
            width={[isModalViewActive ? 1 : 0.4, isModalViewActive ? 0.4 : 0.6]}
            minWidth={[isModalViewActive ? 1 : 0.41]}
            onClick={this.toggleModal}
          >
            <Image minHeight="77px" borderRadius="9px" src={info.image} />
          </ContentFlex>

          <ContentFlex
            pl={[2, 3]}
            width={[1, 1]}
            height="100%"
            flexDirection="column"
          >
            <ContentFlex>
              <Box mr="auto">
                <Text
                  color="text"
                  fontSize={[4, 4]}
                  fontWeight={600}
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                  }}
                >
                  {this.truncate(info.name)}
                </Text>

                <Text fontSize={[3, 3]} color="muted">
                  ${info.price}
                </Text>
              </Box>
              <Box
                id={index.toString()}
                onClick={this.toggleModal}
                // ml="auto"
                width={["6px"]}
              >
                <Icon name="more" fill="#aaa" width="100%" />
              </Box>
            </ContentFlex>
            <ContentFlex mt={4}>
              <ContentFlex>
                <Icon size="1em" name="map-pin" fill={baseFill} />
                <Text
                  color="text"
                  width={1}
                  fontSize=".9em"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                  }}
                >
                  {this.truncate(info.city, 9)}
                </Text>
              </ContentFlex>
              <ContentFlex mx={1}>
                <Icon size="1em" name="love" fill={baseFill} />
                <Text fontSize=".9em">
                  {" "}
                  <span
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {info.loveCount}
                  </span>
                </Text>
              </ContentFlex>
              <ContentFlex mx={1}>
                <Icon size="1em" name="comment" fill={baseFill} />
                <Text fontSize=".9em">{info.commentCount}</Text>
              </ContentFlex>
            </ContentFlex>
          </ContentFlex>
        </ContentFlex>
      </Card>
    );
  }
}
