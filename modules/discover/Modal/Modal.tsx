import React from "react";
import {
  Box as BoxBase,
  Button as ButtonBase,
  Flex as FlexBase,
  Image as ImageBase,
  Text
} from "rebass";
import styled from "styled-components";
import {
  borders,
  borderRadius,
  height,
  minHeight,
  minWidth,
  space,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex
} from "styled-system";

import casual from "casual-browserify";

import posed, { PoseGroup } from "react-pose";

import {
  bitemMotionProps,
  contentMotionProps,
  itemMotionProps,
  laneMotionProps,
  posedFlexMotionProps
} from "./motionConfig";

import { StyledFrame } from "./StyledFrame";

import DayPlansIconBase from "../../../static/images/discover/day_plans.svg";
import ShareIconBase from "../../../static/images/discover/share.svg";
import MoreDarkIconBase from "../../../static/images/discover/more_dark.svg";
import { string } from "yup";

const DayPlansIcon = styled(DayPlansIconBase)`
${space}
${height}
${width}
`;

const ShareIcon = styled(ShareIconBase)`
${space}
${height}
${width}
`;

const MoreDarkIcon = styled(MoreDarkIconBase)`
${space}
${height}
${width}
`;

const Button = styled(ButtonBase)`
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
`;

const OuterFlex = styled(FlexBase)`
  ${minHeight}
  ${borderRadius}
  ${minWidth}
  ${borders}
  overflow-y: auto;
`;

const Flex = styled(FlexBase)`
  ${minHeight}
  ${borderRadius}
  ${minWidth}
  ${borders}
`;

const Box = styled(BoxBase)`
  ${borders}
`;

const devBorder1 = "2px red solid";
const devBorder3 = "2px #dddddd solid";

// const devBorder1 = "";

const devBorder2 = "2px green solid";

// posed configs

const Content = posed.div(contentMotionProps);
const PosedFlex = posed(Flex)(posedFlexMotionProps);
const OuterPosedFlex = posed(OuterFlex)(posedFlexMotionProps);
const Lane = posed(Flex)(laneMotionProps);

const Item = posed.div(itemMotionProps);

const BItem = posed(Box)(bitemMotionProps);
const FItem = posed(Flex)(bitemMotionProps);

const Login = ({ text }) => (
  <FItem>
    <h1>Login</h1>
    <p>{text}</p>
  </FItem>
);

const genBitem = (component: any, styles: any, name: string) => {
  const { border } = styles;
  return (
    <BItem border={border ? border : "2px transparent solid"} {...styles}>
      {component}
    </BItem>
  );
};

// ICON BAR COMPONENTS

const EmptySpan = ({ words }: any) => <span>{words}</span>;

const DayPlans = styles =>
  genBitem(<DayPlansIcon px={2} height="18px" />, styles, "DAY PLANS");

const Share = styles =>
  genBitem(<ShareIcon px={2} height="18px" />, styles, "SHARE");

const More = styles =>
  genBitem(
    <MoreDarkIcon mx={3} width="4px" height="18px" />,
    styles,
    "MORE DARK"
  );

const LocalWeather = styles =>
  genBitem(<EmptySpan words="LOCAL WEATHER" />, styles, "");

// const LocalWeather = ({ border, width }) => (
//   <BItem width={1 / 4} border={border ? border : "2px transparent solid"}>
//     WEATHER ICON
//   </BItem>
// );

const AboutText = props => (
  <BItem
    width={1}
    border={props.border ? border : "2px transparent solid"}
    {...props}
  >
    <Text color="#888888">{casual.sentences(8)}</Text>
  </BItem>
);

interface UserRatingProps {
  border: any;
  data: any;
  width: any;
}

function MakeNThings(num: number, thing: any) {
  const collectionOfThings = [];
  for (let index = 0; index < num; index++) {
    collectionOfThings.push(thing);
  }
  return collectionOfThings;
}

const UserRatings = ({ border, data, votes, width }) => (
  <FItem
    flexDirection="column"
    width={1 / 4}
    border={border ? border : "2px transparent solid"}
  >
    <FItem alignItems="center">
      <Text fontWeight={3} fontSize={4} pr={1}>
        {data}
      </Text>
      <Text px={1}>{votes} votes</Text>
    </FItem>
    <FItem>
      {MakeNThings(parseFloat(data), "start").map((x, index, array) => (
        <Text style={{ opacity: index === array.length - 1 ? data % 1 : 1 }}>
          START
        </Text>
      ))}
    </FItem>
  </FItem>
);

const UserPhotos = ({ border, width }) => (
  <BItem width={2 / 4} border={border ? border : "2px transparent solid"}>
    PHOTOS
  </BItem>
);

const Image = (props: any) => (
  <Item>
    <ImageBase width={[1, 1, 1]} src={props.src.uri} />
    <Text as="caption"> {props.src.uri}</Text>
  </Item>
);

const Signup = () => (
  <Item>
    <h1>Signup</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa.
    </p>
  </Item>
);

interface CustomModalProps {
  show: boolean;
  toggle: any;
  data: any;
}

class Modal extends React.Component<CustomModalProps> {
  state = {
    index: 0,
    data: this.props.data
  };

  showLogin = () => this.setState({ index: 0 });
  showSignup = () => this.setState({ index: 1 });

  render() {
    const { show, toggle } = this.props;
    const { index } = this.state;
    const items = [Login, Signup];

    return (
      <PoseGroup preEnterPose="init">
        {show && this.props.data && (
          <StyledFrame key="frame">
            <OuterPosedFlex bg="#eee" color="text" key="content">
              <Button
                id="close-button"
                bg="rgba(0,0,0,.3)"
                color="white"
                borderRadius="25px"
                onClick={toggle}
                position="absolute"
                top={0}
                left={0}
                zIndex={10}
              >
                X
              </Button>
              <PoseGroup preEnterPose="init">
                <Lane
                  key="login"
                  height="800px"
                  width={1 / 2}
                  border={devBorder1}
                >
                  <Image src={this.props.data.photos[0]} />
                </Lane>
                <Lane
                  key="rightPane"
                  // height="auto"
                  minHeight="0"
                  flexDirection="column"
                  width={1 / 2}
                  p={4}
                  border={devBorder1}
                >
                  <Lane alignItems="center" key="iconBar" width={1} p={2}>
                    <DayPlans ml="auto" />
                    <Share />
                    <More />
                  </Lane>

                  <Lane
                    data-key={this.props.data.id}
                    alignItems="center"
                    key="titleBar"
                    width={1}
                    px={4}
                    pb={1}
                  >
                    <Text fontSize={[4, 4, 5]}>{this.props.data.name}</Text>
                  </Lane>
                  <BItem>
                    <Lane
                      alignItems="center"
                      key="priceBar"
                      width={1}
                      pl={4}
                      pt={1}
                      pb={1}
                      flexDirection="row"
                      borderBottom={devBorder3}
                    >
                      <Text fontSize={3}>${this.props.data.price}</Text>
                      &nbsp;&nbsp;
                      <Text pb={1} fontSize={5}>
                        {" "}
                        •{" "}
                      </Text>
                      &nbsp;&nbsp;
                      <Text fontSize={3}>{this.props.data.city}</Text>
                    </Lane>
                  </BItem>
                  <BItem pt={3} px={4}>
                    <Text fontSize={2}>
                      ABOUT {this.props.data.name.toUpperCase()}
                    </Text>
                    <AboutText />

                    {/* <BItem>
                      <Text pt={2} fontSize={2} />
                    </BItem> */}
                  </BItem>

                  <BItem>
                    <Lane
                      key="weatherBar"
                      width={1}
                      alignItems="center"
                      p={4}
                      border={devBorder1}
                    >
                      <LocalWeather border={devBorder2} />
                      <UserRatings
                        data={this.props.data.averageRating}
                        votes={this.props.data.reviewCount}
                        border={devBorder2}
                      />
                      {/* {Object.keys(this.props.data).map(objKey => (
                        <Text key={Math.random()}>{objKey}</Text>
                      ))} */}
                      <UserPhotos border={devBorder2} />
                    </Lane>
                  </BItem>
                  <Lane
                    alignItems="center"
                    key="amenititesBar"
                    width={1}
                    p={4}
                    border={devBorder1}
                  >
                    AMENITIES
                    <Text> {this.props.data.amenities}</Text>
                  </Lane>

                  <Lane
                    justifyContent="center"
                    key="mapBar"
                    width={1}
                    p={4}
                    flexDirection="column"
                    border={devBorder1}
                  >
                    <Text> {this.props.data.address}</Text>
                    <Text>
                      {this.props.data.city}, {this.props.data.state}{" "}
                      {this.props.data.zip}
                    </Text>
                    <Text> {this.props.data.address}</Text>
                    <Text> {this.props.data.address}</Text>
                    <Text> {this.props.data.address}</Text>
                    <Text> {this.props.data.address}</Text>
                    <Text> {this.props.data.address}</Text>
                  </Lane>

                  <Lane
                    alignItems="center"
                    key="tripReminders"
                    width={1}
                    p={4}
                    border={devBorder1}
                  >
                    TRIP REMINDERS
                  </Lane>
                </Lane>
              </PoseGroup>
            </OuterPosedFlex>
          </StyledFrame>
        )}
      </PoseGroup>
    );
  }
}

export default Modal;
