import React, { Component } from "react";
import { Box, Flex as FlexBase, Heading } from "rebass";
import styled from "styled-components";

import { borders, maxWidth, minHeight } from "styled-system";

import { DiscoverButton } from "./DiscoverButton";

import { FeaturedCards } from "./FeaturedCards";

const ContentFlex = styled(FlexBase)`
  ${minHeight}
  ${maxWidth}
  ${borders}


`;

type FlexProps = {
  minHeight?: any;
  maxWidth?: any;
  borders?: string;
  fontWeight: number;
  justifyContent: string;
  alignItems: string;
  flexWrap: string;
  width: any;
  mx: string;
  px: any;
};

const CardFlex: React.FunctionComponent<FlexProps> = styled(FlexBase)`
  ${minHeight}
  ${maxWidth}
  ${borders}

  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.9);


}
`;

export default class ViewBox extends Component {
  constructor(props: any) {
    super(props);
    this.truncate = this.truncate.bind(this);
  }
  truncate(words: string) {
    console.log("words", words);
    console.log("words length", words.length);
    if (words.length > 16) {
      return words.slice(0, 16) + "...";
    } else {
      return words;
    }
  }
  render() {
    let self = this;
    return (
      <ContentFlex py={4} width={1} flexDirection="column">
        <ContentFlex
          justifyContent="center"
          flexWrap="wrap"
          width={2 / 3}
          mx="auto"
          pb={5}
        >
          <Box>
            <Heading
              letterSpacing=".02em"
              fontSize={[5]}
              fontWeight={200}
              width={1}
              as="h2"
            >
              Featured
            </Heading>
          </Box>
          <Box ml="auto">
            <DiscoverButton />
          </Box>
        </ContentFlex>
        <CardFlex
          justifyContent="center"
          alignItems="center"
          fontWeight={200}
          flexWrap="nowrap"
          width={1 / 2}
          minHeight="400px"
          mx="auto"
          px={6}
        >
          <FeaturedCards localContext={this.truncate} />
        </CardFlex>
      </ContentFlex>
    );
  }
}
