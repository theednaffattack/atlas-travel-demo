import React, { Component } from "react";
import { Box, Flex as FlexBase } from "rebass";
import styled from "styled-components";
import { minHeight } from "styled-system";

import SideBar from "./SideBar";

const Flex = styled(FlexBase)`
  ${minHeight}
`;

interface CustomLayoutContainerProps {
  wrapperRef: any;
}

interface CustomState {
  sideBar: string;
}
export default class LayoutContainer extends Component<
  CustomLayoutContainerProps,
  CustomState
> {
  constructor(props: any) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  state = {
    sideBar: "isClosed"
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState(prevState => {
        return {
          sideBar: "isClosed"
        };
      });
    }
  }

  /**
   * Toggle sidebar menu
   */
  toggleMenu() {
    console.log("MENU TOGGLED");
    console.log(this.state);
    this.setState(prevState => {
      console.log("PREV STATE");
      console.log(prevState.sideBar);
      return {
        sideBar: prevState.sideBar === "isOpen" ? "isClosed" : "isOpen"
      };
    });
  }

  render() {
    const childWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        // add: this.addReservation, // put a function here
        menuToggle: this.toggleMenu,
        menu: this.state.sideBar
      });
    });
    return (
      <Flex flexDirection="column">
        <div ref={this.setWrapperRef}>
          <SideBar
            id="SideBar"
            toggleMenu={this.toggleMenu}
            status={this.state.sideBar}
          />
        </div>

        {childWithProp}
      </Flex>
    );
  }
}
