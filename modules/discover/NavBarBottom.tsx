import React, { Component } from "react";
import {
  Flex as FlexBase,
  Text,
  Card as CardBase,
  Box as BoxBase
} from "rebass";
import styled from "styled-components";
import {
  borders,
  boxShadow,
  height,
  width,
  minHeight,
  maxWidth,
  space,
  position,
  top,
  right,
  bottom,
  left,
  zIndex
} from "styled-system";
import { withRouter } from "next/router";

import NavLink from "../../components/NavLink";
import Icon from "../traveling/Icon/Icon";
import MenuIcon from "../traveling/Icon/MenuIcon";

const fadedText = "rgba(255,255,255,0.6)";

const activeIcon = "rgb(233, 72, 109)";

const Card = styled(CardBase)`
  ${maxWidth}
`;

const Menu = styled(Icon)`
  ${space}
  ${height}
  ${width}
`;

const InnerFlex = styled(FlexBase)`
  ${minHeight}
  background: url('/static/images/login/bg.png') center center no-repeat;
  background-size: cover;
`;

const ContentFlex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const NavBar = styled(FlexBase)`
${borders}
${boxShadow}
${height}
${position}
${minHeight}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${zIndex}

  box-sizing: border-box;
`;

//Icons
const TravelIcon = styled(Icon)`
${height}
${width}
${space}
`;

const ExploreIcon = styled(Icon)`
${height}
${width}
${space}
`;

const SavedIcon = styled(Icon)`
${height}
${width}
${space}
`;

const ChatIcon = styled(Icon)`
${height}
${width}
${space}
`;

const ProfileIcon = styled(Icon)`
${height}
${width}
${space}
`;

const ActivityIcon = styled(Icon)`
${height}
${width}
${space}
`;

const SearchIcon = styled(Icon)`
${height}
${width}
${space}
`;

const DotIcon = styled(Icon)`
${height}
${width}
${space}
`;

const Box = styled(BoxBase)`
  ${borders}
  border-bottom: 3px transparent solid;
  box-sizing: border-box;
  :hover {
    border-bottom: 3px pink solid;
  }
`;

const ContentNav = styled(FlexBase)`
  ${minHeight}
  ${borders}
  border-bottom: 3px transparent solid;
  box-sizing: border-box;
  :hover {
    border-bottom: 3px #e9486d solid;
  }
  :focus {
    border-bottom: 3px #e9486d solid;
  }
`;

const baseFill = "rgb(204, 204, 204)";

interface CustomIconLinkProps {
  router: any;
  href: string;
  name: string;
}

function ActiveIcon({ router, href, name }: CustomIconLinkProps) {
  const handleClick = (e: any) => {
    e.preventDefault();
    let prepHref = `/${href}`;
    router.push(prepHref);
  };

  return (
    <Icon
      onClick={handleClick}
      name={name}
      height="40px"
      fill={router.pathname === "/traveling" ? "active" : baseFill}
    />
  );
}

const AIcon = withRouter(ActiveIcon);

export class NavBarBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavBar
        // px={[6]}
        boxShadow="0px -40px 100px 0px rgba(0, 0, 0, 0.1)"
        justifyContent="center"
        alignItems="center"
        height="100px"
        // position="fixed"
        // bottom={0}
        zIndex={1805}
        bg="#fefefe"
        width={1}
        mt={3}
      >
        <ContentFlex
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          width={[1]}
        >
          <ContentFlex
            alignItems="center"
            justifyContent="center"
            // border={devBorder1}
            width={[1 / 2]}
            mx="auto"
          >
            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <Box width="40px">
                <TravelIcon
                  height="40px"
                  width="40px"
                  fill="active"
                  name="discover"
                />
              </Box>
              {/* <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink color="#e9486d" href="/traveling" name="Traveling" />
              </Text> */}
            </ContentNav>

            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <Box width="40px">
                <AIcon
                  height="40px"
                  width="40px"
                  fill="active"
                  name="explore"
                />
              </Box>
              {/* <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/explore"
                  name="Explore"
                  fill={fadedText}
                />
              </Text> */}
            </ContentNav>

            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <SavedIcon
                height="40px"
                width="40px"
                name="saved"
                fill={baseFill}
                mb={2}
                height="40px"
              />
              {/* <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/saved"
                  name="Saved"
                  fill={fadedText}
                />
              </Text> */}
            </ContentNav>
            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <ChatIcon
                height="40px"
                width="40px"
                name="chat"
                fill={baseFill}
                mb={2}
                height="40px"
              />
              {/* <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/chat"
                  name="Chat"
                  fill={fadedText}
                />
              </Text> */}
            </ContentNav>
            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <ProfileIcon
                height="40px"
                width="40px"
                name="profile"
                fill={baseFill}
                mb={2}
                height="40px"
              />
              {/* <Text fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/profile"
                  name="Profile"
                  fill={baseFill}
                />
              </Text> */}
            </ContentNav>
          </ContentFlex>
        </ContentFlex>
      </NavBar>
    );
  }
}
