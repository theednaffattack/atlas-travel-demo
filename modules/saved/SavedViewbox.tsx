import React, { Component } from "react";
import { Box, Flex as FlexBase, Heading } from "rebass";
import styled from "styled-components";

import { borders, maxWidth, minHeight } from "styled-system";

import { SavedCards } from "./SavedCards";

// import { FeaturedCards as FeaturedCards2 } from "../saved/SavedCards";

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

interface ViewBoxProps {
  data: any;
  requestor: any;
  filterOpen: any;
}
interface ViewBoxState {
  showModal: boolean;
  isZoomed: boolean;
}

export default class ViewBox extends Component<ViewBoxProps, ViewBoxState> {
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

  shouldComponentUpdate(nextProps: ViewBoxProps, nextState: ViewBoxState) {
    // console.log(nextState);
    // console.log(this.state);

    if (nextProps.filterOpen !== this.props.filterOpen) {
      // console.log("ViewBox SHOULDCOMPONENTUPDATE(): NEXTPROPS THEN THIS.PROPS");
      // console.log(nextProps.filterOpen !== this.props.filterOpen);
      // console.log(this.props);
      // console.log(this.props.data.getAllHotel);
      // console.log(nextProps.data.getAllHotel);
      return false;
    } else {
      return true;
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
    console.log("test rerenders in VIEWBOX");
    return (
      <SavedCards
        // toggle={this.toggleModal}
        requestor={this.props.requestor}
        zoomState={this.state.isZoomed}
        localContext={this.truncate}
        data={this.props.data.getAllHotel}
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
