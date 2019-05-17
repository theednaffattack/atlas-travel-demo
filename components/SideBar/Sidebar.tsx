import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
import {
  color,
  space,
  width,
  maxWidth,
  minHeight,
  minWidth,
  position,
  height
} from "styled-system";

import MyLink from "./Link";

import { navList } from "./navList";

const SidebarBase = styled.div`
  ${color}
  ${space}
  max-width: 200px;
  min-width: 170px;
  padding-left: 8px;
  padding-right: 8px;
  position: fixed;
  top: 0;
  left: ${props => (props.status === "isOpen" ? 0 : "-110%")};
  bottom: 0;
`;

const StyledList = styled.ul`
  ${space}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SideBar = posed(SidebarBase)({
  init: { x: "-110%", display: "none" },
  open: {
    x: "0%",
    applyAtStart: { display: "block" },
    // animate child components with 100ms between entries
    staggerChildren: 100
  },

  closed: { x: "-110%", display: "none" }
});

const StyledLi = styled.li`
  border: 2px dotted black;
  text-decoration: none !important;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: goldenrod;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;

const NavItemPosed = posed(StyledLi)({
  open: { opacity: 1 },
  closed: { opacity: 0 }
});

const NavItem = styled(NavItemPosed)`
  ${space}
  ${width}
`;

interface CustomSidebarProps {
  status: string;
  toggleMenu(): any;
  navItems: any[];
}

// const Nav = ({ isOpen, navItems }) => (
//   <Sidebar pose={isOpen ? "open" : "closed"}>
//     <StyledList>
//       {navItems.map(({ url, name }) => (
//         <NavItem key={name}>
//           <a href={url}>{name}</a>
//         </NavItem>
//       ))}
//     </StyledList>
//   </Sidebar>
// );

class SideBarClass extends Component<CustomSidebarProps> {
  render() {
    const { status, toggleMenu, navItems } = this.props;
    return (
      <SideBar
        status={status}
        bg="blue"
        initialPose="closed"
        pose={status === "isOpen" ? "open" : "closed"}
      >
        <StyledList m={0}>
          <a onClick={toggleMenu}>X</a>
          {navList.map(({ url, name }) => (
            <NavItem key={url} my={3}>
              <MyLink name={name} href={url} />
            </NavItem>
          ))}
        </StyledList>
      </SideBar>
    );
  }
}

export default SideBarClass;
