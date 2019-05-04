import React from "react";
import { Image as ImageBase, Text } from "rebass";
import casual from "casual-browserify";
import posed, { PoseGroup } from "react-pose";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import {
  bitemMotionProps,
  fitemMotionProps,
  itemMotionProps,
  laneMotionProps,
  posedFlexMotionProps
} from "./motionConfig";

import { ButtonR, Box, Flex, OuterFlex } from "./LocalStyledComponents/Comps";

import { StyledFrame } from "./StyledFrame";

import Carousel from "./Carousel/CarouselContainer";

import { Button } from "../../../components/Button/Button";

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
  show: boolean;
  fakeAmenities: string[];
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
    const { show, toggle, fakeAmenities } = this.props;
    const { index } = this.state;
    const items = [Login, Signup];
    console.log(this.props.data);
    return (
      <PoseGroup preEnterPose="init">
        {show && this.props.data && (
          <StyledFrame key="frame">
            <OuterPosedFlex bg="#eee" color="text" key="content">
              <ButtonR
                id="close-button"
                bg="rgba(0,0,0,.3)"
                color="white"
                borderRadius="28px"
                onClick={toggle}
                position="absolute"
                top={20}
                left={20}
                zIndex={30}
              >
                X
              </ButtonR>
              <PoseGroup preEnterPose="init">
                <LeftLane
                  flexDirection="column"
                  key="leftPane"
                  height="800px"
                  width={1 / 2}
                  minHeight="100vh"
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
                  width={1 / 2}
                  p={4}
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
                  <BItem px={4} py={4}>
                    <Text fontWeight="400" fontSize={2}>
                      ABOUT {this.props.data.name.toUpperCase()}
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
                    <FItem px={3} justifyContent="space-between" width={1}>
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
                      <MapPinIcon height="60px" width="60px" />
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
          </StyledFrame>
        )}
      </PoseGroup>
    );
  }
}

export default Modal;
