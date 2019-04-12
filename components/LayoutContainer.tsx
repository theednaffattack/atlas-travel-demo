import React, { Component } from "react";
import SideBar from "./SideBar";

export default class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  state = {
    sideBar: "isOpen"
  };

  toggleMenu() {
    console.log(this.state);
    this.setState(prevState => {
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
        menu: this.state.sideBar,
        menuToggle: this.toggleMenu
      });
    });
    let { children } = this.props;
    return (
      <>
        <SideBar toggleMenu={this.toggleMenu} status={this.state.sideBar} />
        {childWithProp}
      </>
    );
  }
}
