import React, { Component } from "react";
import { Box, Flex as FlexBase, Heading } from "rebass";
import styled from "styled-components";

import { borders, maxWidth, minHeight } from "styled-system";

import { FeaturedCards } from "./FeaturedCards";

import { FeaturedCards as FeaturedCards2 } from "../discover/FeaturedCards";

// import { cardInfo } from "./cardInfo";

// import Modal from "./Modal/Modal";

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

interface CustomViewBoxProps {
  data: any;
  requestor: any;
}
interface CustomState {
  showModal: boolean;
  isZoomed: boolean;
}

export default class ViewBox extends Component<
  CustomViewBoxProps,
  CustomState
> {
  constructor(props: any) {
    super(props);
    this.truncate = this.truncate.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
  }

  state = {
    showModal: false,
    isZoomed: false
  };

  truncate(words: string) {
    if (words.length > 16) {
      return words.slice(0, 16) + "...";
    } else {
      return words;
    }
  }

  /**
   * Toggle hotel modal (example)
   */

  // toggleModal = event => {
  //   console.log();
  //   event.preventDefault();
  //   console.log(event.target);
  //   this.setState(prevState => ({
  //     showModal: !prevState.showModal
  //   }));
  // };

  render() {
    return (
      <FeaturedCards
        // toggle={this.toggleModal}
        requestor={this.props.requestor}
        zoomState={this.state.isZoomed}
        localContext={this.truncate}
        data={this.props.data ? this.props.data.getAllHotel : []}
      />
      //   <ContentFlex py={4} width={1} flexDirection="column">
      //     <CardFlex
      //       justifyContent="center"
      //       alignItems="center"
      //       fontWeight={200}
      //       flexWrap="nowrap"
      //       width={1 / 2}
      //       minHeight="400px"
      //       mx="auto"
      //       px={6}
      //     >
      //       <FeaturedCards
      //         // toggle={this.toggleModal}
      //         zoomState={this.state.isZoomed}
      //         localContext={this.truncate}
      //         data={this.props.data ? this.props.data.getAllHotel : []}
      //       />
      //     </CardFlex>
      //   </ContentFlex>
    );
  }
}
