import React, { Component } from "react";
import { Box, Flex as FlexBase } from "rebass";
import styled from "styled-components";
import { height, minHeight } from "styled-system";

import SideBar from "./SideBar";

const Flex = styled(FlexBase)`
  ${height}
  ${minHeight}
`;

interface CustomLayoutContainerProps {
  wrapperRef: any;
}

interface CustomState {
  sideBar: string;
}
export default class LayoutContainer extends React.PureComponent<
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
    this.setState(prevState => {
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
      <Flex
        className="LayoutFlex"
        width={1}
        minHeight="100%"
        flexDirection="column"
        style={{ height: "100%" }}
      >
        <div
          className="wrapperRef"
          ref={this.setWrapperRef}
          style={{ height: "100%", width: "100%" }}
        >
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
