import React, { Component } from "react";
import posed from "react-pose";
// import { Link as BaseLink, Router } from "@reach/router";
import Link from "next/link";
import styled from "styled-components";
import {
  color,
  space,
  width,
  maxWidth,
  minHeight,
  minWidth,
  position
} from "styled-system";

import MyLink from "./Link";

import { navList } from "./navList";

const SidebarBase = posed.nav({
  open: {
    x: "0%",
    // animate child components with 100ms between entries
    staggerChildren: 100
  },
  closed: { x: "-150%" }
});

const Sidebar = styled(SidebarBase)`
  ${color}
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${position}
  ${minHeight}
`;

const StyledList = styled.ul`
  ${space}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  border: 2px dotted black;
`;

const NavItemPosed = posed.li({
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
      <Sidebar
        maxWidth="200px"
        minWidth="170px"
        px={3}
        bg="blue"
        position="absolute"
        minHeight="100vh"
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
      </Sidebar>
    );
  }
}

export default SideBarClass;
