import React from "react";
import { Image as ImageBase, Text } from "rebass";
import casual from "casual-browserify";
import posed, { PoseGroup } from "react-pose";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import {
  bitemMotionProps,
  fitemMotionProps,
  itemMotionProps,
  laneMotionProps,
  posedFlexMotionProps
} from "./motionConfig";

import {
  AbWrapper,
  ButtonR,
  Box,
  Flex,
  OuterFlex
} from "./LocalStyledComponents/Comps";

import { RefFrame } from "./StyledFrame";

import Carousel from "./Carousel/CarouselContainer";

import { Button } from "../../../components/Button/Button";

import Icon from "../../../components/AllIcons/UserActionIcon";

import {
  DayPlansIcon,
  HotelRestaurantIcon,
  InnBarIcon,
  ThumbsIcon,
  MapPinIcon,
  MoreDarkIcon,
  NightClubIcon,
  ParkingIcon,
  PoolIcon,
  StarIcon,
  ShareIcon,
  WifiIcon
} from "./Icons/Icons";
import { createReservationMutation } from "../../../graphql/reservation/mutations/CreateReservation";

const checkoutRules = [
  "Payment at checkout",
  "Wi-Fi network is off by 12:00 p.m.",
  "No swimming after 10:00 p.m.",
  "No more than 2 bags of luggage",
  "No singing while showering",
  "No refunds"
];

const devBorder3 = "2px #dddddd solid";

const MobileQueryLane = styled(Flex)`
  @media (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const DesktopQueryLane = styled(Flex)`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

// posed configs
const OuterPosedFlex = posed(OuterFlex)(posedFlexMotionProps);
const Lane = posed(Flex)(laneMotionProps);
const LeftLane = posed(Flex)(laneMotionProps);
const BItem = posed(Box)(bitemMotionProps);
const FItem = posed(Flex)(fitemMotionProps);

export const Item = posed.div(itemMotionProps);

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

interface AmenityIcons {
  wifi: any;
  hotelRestaurant: any;
  pool: any;
  innBar: any;
  parking: any;
  nightClub: any;
}

//
const amenityIcons: AmenityIcons = {
  wifi: { component: <WifiIcon width="54px" />, label: "WiFi" },
  hotelRestaurant: {
    component: <HotelRestaurantIcon width="54px" />,
    label: "Hotel Restaurant"
  },
  pool: {
    component: <PoolIcon width="54px" />,
    label: "Pool"
  },
  innBar: {
    component: <InnBarIcon width="54px" />,
    label: "Inn Bar"
  },
  parking: {
    label: "Parking",
    component: <ParkingIcon width="54px" />
  },
  nightClub: {
    component: <NightClubIcon width="54px" />,
    label: "Night Club"
  }
};

// ICON BAR COMPONENTS

const EmptySpan = ({ words }: any) => <span>{words}</span>;

const DayPlans = ({ fill, ...styles }) =>
  genBitem(
    <Icon fill={fill} height="100%" width="100%" name="dayPlans" px={2} />,
    styles,
    "DAY PLANS"
  );

const Share = ({ fill, ...styles }) =>
  genBitem(
    <Icon fill={fill} height="100%" width="100%" name="share" px={2} />,
    styles,
    "SHARE"
  );

const More = ({ fill, ...styles }) =>
  genBitem(
    <Icon fill={fill} height="100%" width="100%" name="more" px={2} />,
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

// TYPES

interface CustomProps {
  hotelId: string;
  requestor: string;
}
interface CustomState {
  description: string;
  url: string;
}

// COMPONENTS

class CreateReservation extends React.Component<CustomProps, CustomState> {
  state = {
    description: "",
    url: ""
  };

  render() {
    console.log("PROPS");
    console.log(this.props);
    const myData = {
      data: {
        dates: {
          from: "2019-08-02",
          to: "2019-08-07",

          hotelId: this.props.hotelId
        },
        userId: this.props.requestor.id,
        hotelId: this.props.hotelId
      }
    };
    const { description, url } = this.state;
    return (
      <Mutation mutation={createReservationMutation} variables={myData}>
        {(createReservation, { data, loading, error }) => {
          return (
            <Lane
              bg="#f2f2f2"
              boxShadow="modalItem"
              my={2}
              justifyContent="center"
              key="tripReminders"
              flexDirection="column"
              width={1}
              p={4}
            >
              <BItem>
                <Text fontWeight="400" fontSize={3}>
                  Before you go
                </Text>
                <ul>
                  {checkoutRules.map(rule => (
                    <li key={Math.random()}>{rule}</li>
                  ))}
                </ul>
              </BItem>
              <FItem justifyContent="center" alignItems="center" px={3}>
                <Button
                  onClick={createReservation}
                  py={2}
                  label="Book a Room"
                />
              </FItem>
              <FItem>{data && JSON.stringify(data, null, 2)}</FItem>
            </Lane>
          );
        }}
      </Mutation>
    );
  }
}

export const UserRatings = ({ border, data, votes, width }) => (
  <FItem
    flexDirection="column"
    width={1 / 4}
    mr={[2]}
    border={border ? border : "2px transparent solid"}
  >
    <FItem alignItems="center">
      <Text fontWeight={3} fontSize={4} pr={1}>
        {data}
      </Text>
      <Text px={1}>{votes} votes</Text>
    </FItem>
    <FItem justifyContent="center" alignItems="center">
      {MakeNThings(parseFloat(data), "start").map((x, index, array) => (
        <StarIcon
          key={`userRatings-${index}`}
          mx="auto"
          opacity={index === array.length - 1 ? data % 1 : 1}
          width="30px"
        />
      ))}
    </FItem>
  </FItem>
);

const UserPhotos = ({ border, width }) => (
  <BItem width={1 / 4} border={border ? border : "2px transparent solid"}>
    <ThumbsIcon width="88px" />
  </BItem>
);

export const Image = (props: any) => (
  <Item
    onClick={props.clickFunc}
    // width={props.width}
    // height={props.height}
    style={{
      marginLeft: "4px",
      marginRight: "4px",
      width: props.width,
      height: props.height
    }}
  >
    <ImageBase width="100%" height="100%" src={props.src.uri} />
    <Text color="text" as="figcaption">
      {props.src.uri}
    </Text>
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
  data: any;
  refPass: any;
  fakeAmenities: string[];
  isZoomed: boolean;
  show: boolean;
  toggle: any;
}

class Modal extends React.Component<CustomModalProps> {
  state = {
    index: 0,
    data: this.props.data
  };

  showLogin = () => this.setState({ index: 0 });
  showSignup = () => this.setState({ index: 1 });

  render() {
    const { fakeAmenities, isZoomed, refPass, show, toggle } = this.props;
    const { index } = this.state;
    const items = [Login, Signup];

    // https://github.com/zeit/next.js/issues/2177
    // const isBrowser = typeof window !== "undefined";
    // if (isBrowser && isZoomed) {
    //   document.body.style.overflowY = "hidden";

    // }
    // if (isBrowser && !isZoomed) {
    //   document.body.style.overflowY = "auto";
    // }

    // console.log("Discover Modal this.props.data");
    // console.log(this.props.data);
    // return React.forwardRef((props, ref) =>
    return (
      <PoseGroup preEnterPose="init">
        {((isZoomed && this.props.data) || (show && this.props.data)) && (
          <RefFrame ref={refPass} key="frame">
            <OuterPosedFlex
              position="relative"
              flexWrap="wrap"
              bg="#eee"
              color="text"
              key="content"
              width={1}
            >
              <AbWrapper
                width={[1, 1 / 2]}
                color="white"
                position="absolute"
                backgroundImage="linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.4))"
                pt={2}
                pb={4}
                px={2}
                top={0}
                left={0}
                zIndex={30}
              >
                <BItem pt={2} pl={3} onClick={toggle}>
                  <Icon name="close" fill="mobile" width="20px" />
                </BItem>
                <MobileQueryLane
                  alignItems="center"
                  key="iconBar"
                  width={1}
                  p={2}
                >
                  <DayPlans
                    fill="mobile"
                    name="dayPlans"
                    width="20px"
                    ml="auto"
                    mr={[1]}
                  />
                  <Share
                    mx={[1]}
                    fill="mobile"
                    // height="25px"
                    width="17px"
                  />
                  <More mx={[1]} fill="mobile" width="7px" />
                </MobileQueryLane>
              </AbWrapper>
              <PoseGroup preEnterPose="init">
                <LeftLane
                  flexDirection="column"
                  key="leftPane"
                  // height="auto"
                  width={[1, 1 / 2]}
                  // minHeight="100vh"
                >
                  {/* <Image src={this.props.data.photos[0]} /> */}
                  <BItem>
                    <Carousel
                      // component={<Image />}
                      // component={<ZoomImage />}
                      photos={this.props.data.photos}
                    />
                  </BItem>
                </LeftLane>
                <Lane
                  key="rightPane"
                  // height="auto"
                  minHeight="0"
                  flexDirection="column"
                  width={[1, 1 / 2]}
                  px={2}
                >
                  <DesktopQueryLane
                    alignItems="center"
                    key="iconBar"
                    width={1}
                    p={2}
                  >
                    <DayPlans name="dayPlans" width="20px" ml="auto" mr={[1]} />
                    <Share
                      mx={[1]}
                      // height="25px"
                      width="17px"
                    />
                    <More mx={[1]} width="7px" />
                  </DesktopQueryLane>

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
                  <BItem px={4} py={4}>
                    <Text fontWeight="400" fontSize={2}>
                      {/* ABOUT {this.props.data.name.toUpperCase()} */}
                    </Text>
                    <AboutText />

                    {/* <BItem>
                      <Text pt={2} fontSize={2} />
                    </BItem> */}
                  </BItem>

                  <BItem bg="#f2f2f2" boxShadow="modalItem" my={2}>
                    <Lane
                      my={2}
                      key="weatherBar"
                      width={1}
                      alignItems="center"
                      p={4}
                    >
                      <LocalWeather />
                      <UserRatings
                        data={this.props.data.averageRating}
                        votes={this.props.data.reviewCount}
                      />

                      <UserPhotos />
                    </Lane>
                  </BItem>
                  <Lane
                    bg="#f2f2f2"
                    boxShadow="modalItem"
                    my={2}
                    alignItems="center"
                    key="amenititesBar"
                    flexDirection="column"
                    width={1}
                    p={4}
                  >
                    <BItem pb={3} width={1}>
                      <Text fontWeight="600">Amenities</Text>
                    </BItem>
                    <FItem
                      px={3}
                      flexWrap="wrap"
                      justifyContent="space-between"
                      width={1}
                    >
                      {this.props.fakeAmenities.map(amenity => (
                        <FItem
                          key={Math.random()}
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          mx={2}
                        >
                          {amenityIcons[amenity].component || null}{" "}
                          {amenityIcons[amenity].label || null}
                        </FItem>
                      ))}
                    </FItem>
                  </Lane>

                  <Lane
                    bg="#f2f2f2"
                    boxShadow="modalItem"
                    my={2}
                    justifyContent="center"
                    key="mapBar"
                    width={1}
                    p={4}
                    flexDirection="column"
                  >
                    <Text fontWeight="600">Where is that</Text>
                    <FItem>
                      <MapPinIcon size="1em" />
                      <FItem flexDirection="column">
                        <Text mt={3} fontSize=".8em" fontWeight="600">
                          ADDRESS
                        </Text>
                        <Text> {this.props.data.address}</Text>
                        <Text mb={3}>
                          {this.props.data.city}, {this.props.data.state}{" "}
                          {this.props.data.zipCode}
                        </Text>
                        <Button
                          click={() => console.log("BOOK A ROOM CLICKED!")}
                          width="130px"
                          py={2}
                          label="Check it >"
                        />
                      </FItem>
                    </FItem>
                  </Lane>

                  <CreateReservation
                    hotelId={this.props.data.id}
                    requestor={this.props.requestor}
                  />

                  {/* <Lane
                    bg="#f2f2f2"
                    boxShadow="modalItem"
                    my={2}
                    justifyContent="center"
                    key="tripReminders"
                    flexDirection="column"
                    width={1}
                    p={4}
                  >
                    <BItem>
                      <Text fontWeight="400" fontSize={3}>
                        Before you go
                      </Text>
                      <ul>
                        {checkoutRules.map(rule => (
                          <li key={Math.random()}>{rule}</li>
                        ))}
                      </ul>
                    </BItem>
                    <FItem justifyContent="center" alignItems="center" px={3}>
                      <Button
                        click={() => console.log("BOOK A ROOM CLICKED!")}
                        py={2}
                        label="Book a Room"
                      />
                    </FItem>
                  </Lane> */}
                </Lane>
              </PoseGroup>
            </OuterPosedFlex>
          </RefFrame>
        )}
      </PoseGroup>
    );
    // );
  }
}

const WrappedModal = React.forwardRef(function myFunction(props, ref) {
  return (
    <Modal refPass={ref} {...props}>
      {props.children}
    </Modal>
  );
});

export default WrappedModal;
