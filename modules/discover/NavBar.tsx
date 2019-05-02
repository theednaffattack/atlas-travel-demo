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

// import MyLink from "../components/MyLink";
import MenuBase from "../../static/images/discover/menu2.svg";
import TravelIconBase from "../../static/images/discover/travels.svg";
import ExploreIconBase from "../../static/images/discover/explore.svg";
import SavedIconBase from "../../static/images/discover/saved.svg";
import ChatIconBase from "../../static/images/discover/chat.svg";
import ProfileIconBase from "../../static/images/discover/profile.svg";
import ActivityIconBase from "../../static/images/discover/activity.svg";
import SearchIconBase from "../../static/images/discover/search.svg";
import DotIconBase from "../../static/images/discover/dot.svg";

import NavLink from "../../components/NavLink";
import Icon from "../traveling/Icon/Icon";

const fadedText = "rgba(255,255,255,0.6)";

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

const navItemXMargin = "4em";

const NavBar = styled(FlexBase)`
${borders}
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

const ActivityIcon = styled(ActivityIconBase)`
${height}
${width}
${space}
`;

const SearchIcon = styled(SearchIconBase)`
${height}
${width}
${space}
`;

const DotIcon = styled(DotIconBase)`
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

export class NavBarTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavBar
        px={[4]}
        justifyContent="center"
        alignItems="center"
        height="100px"
        bg="transparent"
        width={1}
        mt={3}
        mb={3}
      >
        <ContentFlex
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          width={[1]}
        >
          <ContentFlex width="200px">
            <ContentFlex
              justifyContent="center"
              alignItems="center"
              width={1 / 2}
              style={{
                border: "3px green solid"
              }}
            >
              <FlexBase
                flexDirection="column"
                // justifyContent="center"
                // alignItems="center"
                // mr="16px"
                // mt={3}
                // height="40px"
                width="35px"
                style={{ border: "3px red solid" }}
                onClick={this.props.menuToggle}
              >
                <Icon height="40px" width="40px" name="menu" fill={baseFill} />
              </FlexBase>
              <Text
                onClick={this.props.menuToggle}
                // mt={-2}
                color={baseFill}
                fontFamily="montserrat"
              >
                Menu
              </Text>
            </ContentFlex>
          </ContentFlex>
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
              <div style={{ width: "40px" }}>
                <TravelIcon
                  height="40px"
                  width="40px"
                  fill="active"
                  name="travels"
                />
              </div>
              {/* <TravelIcon mb={2} height="40px" /> */}
              <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink color="#e9486d" href="/traveling" name="Traveling" />
              </Text>
            </ContentNav>
            <ContentNav
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <ExploreIcon
                height="40px"
                width="40px"
                fill={baseFill}
                name="explore"
                mb={2}
                height="40px"
              />
              <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/explore"
                  name="Explore"
                  fill={fadedText}
                />
              </Text>
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
              <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/saved"
                  name="Saved"
                  fill={fadedText}
                />
              </Text>
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
              <Text color={baseFill} fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/chat"
                  name="Chat"
                  fill={fadedText}
                />
              </Text>
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
              />
              <Text fontSize=".9em" fontFamily="montserrat">
                <NavLink
                  color={baseFill}
                  href="/profile"
                  name="Profile"
                  fill={baseFill}
                />
              </Text>
            </ContentNav>
          </ContentFlex>

          <ContentFlex>
            <ContentFlex
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <ActivityIcon height="40px" />
              <DotIcon mt={-3} height="10px" />
            </ContentFlex>
            <ContentFlex
              alignItems="center"
              flexDirection="column"
              p={4}
              width={1 / 5}
            >
              <SearchIcon mb={2} height="40px" />
            </ContentFlex>
          </ContentFlex>
        </ContentFlex>
      </NavBar>
    );
  }
}
