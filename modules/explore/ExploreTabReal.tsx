import React from "react";
import { Formik, Field } from "formik";

import {
  AbWrapper,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Positioner,
  SVGButton,
  Text
} from "./StyledComponents";
import { InputFieldNewsletter as InputField } from "../../components/fields/InputFieldNewsletter";
import ExploreIcons from "./ExploreIcons/ExploreIcons";
import { BgCard } from "./BgCard";
import Carousel from "./Carousel/CarouselContainer";
import { LandscapeCards } from "./LandscapeCards";

const FeaturedCards = [
  {
    id: "111111",
    name: "Red Ballet",
    price: "967",
    city: "New York",
    image: "https://source.unsplash.com/random/1280x721"
  },
  {
    id: "222222",
    name: "Mexico City Festival",
    price: "967",
    city: "Philly",
    image: "https://source.unsplash.com/random/1280x722"
  },
  {
    id: "111111",
    name: "Red Ballet",
    price: "967",
    city: "New York",
    image: "https://source.unsplash.com/random/1280x723"
  },
  {
    id: "222222",
    name: "Mexico City Festival",
    price: "967",
    city: "Philly",
    image: "https://source.unsplash.com/random/1280x724"
  }
];

interface CarouselAssetType {
  headingText: string;
  topTag: string;
  uri: string;
}

const CarouselAssets: CarouselAssetType[] = [
  {
    headingText: "An exquisite trip you'll rave about to your friends",
    topTag: "Top Tag 1",
    uri: "https://source.unsplash.com/random/1280x720"
  },
  {
    headingText: "Heading 2",
    topTag: "Top Tag 2",
    uri: "https://source.unsplash.com/random/1280x725"
  },
  {
    headingText: "Heading 3",
    topTag: "Top Tag 3",
    uri: "https://source.unsplash.com/random/1280x722"
  }
];

export class ExploreTabReal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }
  handleSlideChange(event: React.MouseEvent<HTMLElement>) {
    console.log(Object.keys(event));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target.id);
  }
  render() {
    return (
      <Flex
        justifyContent="center"
        px={6}
        width={1}
        color="text"
        flexDirection="column"
      >
        {/* Carousel */}
        <Flex mb={4}>
          <Card width={1} borderRadius="17px" bg="rgba(0,0,0,0.1)">
            <Carousel
              // component={<Image />}
              // component={<ZoomImage />}
              // clickFunc={}
              photos={CarouselAssets}
            />
          </Card>
        </Flex>
        {/* Lower container */}
        <Flex key="lowerPageWrap" flexDirection="row">
          {/* Featured Card */}
          <Card
            mr={3}
            p={4}
            borderRadius="17px"
            width={1 / 2}
            bg="rgba(0,0,0,0.1)"
          >
            <Flex alignItems="center">
              <Box mr="auto">
                <Heading fontSize={[4, 5]}>Featured</Heading>
              </Box>
              <Box bg="limegreen">See all Btn</Box>
            </Flex>
            <Flex justifyContent="center" flexWrap="wrap">
              {FeaturedCards.map((trip: any, index: any) => (
                <Card
                  borderRadius="17px"
                  boxShadow="0px 20px 27px 0px rgba(0, 0, 0, 0.05)"
                  bg="rgb(250,250,250)"
                  p={3}
                  my={[3, 3]}
                  mx={[0, 3]}
                  width={[1, 0.44]}
                  key={index}
                  style={{ overflow: "hidden" }}
                >
                  <Box
                    borderRadius="9px"
                    // backgroundImage="linear-gradient( 45deg, rgb(34,34,34) 0%, rgb(34,34,34) 100%)"
                  >
                    <Image borderRadius="8px" src={trip.image} />
                  </Box>
                  <Text>{trip.name}</Text>
                  <Text>{trip.price}</Text>
                  <Text>{trip.city}</Text>
                </Card>
              ))}
            </Flex>
            <Flex mt={3} key="newsletter">
              <Card
                width={1}
                color="white"
                p={4}
                borderRadius="17px"
                backgroundImage="linear-gradient( 25deg, rgba(210,48,120,1) 6%, rgba(254,97,97,1) 74%, rgba(255,121,85,1) 100%)"
                boxShadow="0px 27px 40px 0px rgba(0, 0, 0, 0.1)"
              >
                <Heading fontSize={[3, 4]}>Newsletter</Heading>
                <Text fontSize={[2, 3]}>Tap rand horro</Text>
                <Text fontSize={[2, 3]}>Tap rand horro</Text>
                <Text fontSize={[2, 3]}>Tap rand horro</Text>
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (data, { setErrors, resetForm }) => {
                    console.log("SUBMIT!!!");
                    console.log(JSON.stringify(data, null, 2));
                    //   console.log(me);

                    resetForm();
                    // variables={{ message: "ayyyyyyy" }}

                    // let response;
                    // try {
                    //   response = await login({
                    //     variables: data,
                    //     update: (cache, { data }) => {
                    //       if (!data || !data.login) {
                    //         return;
                    //       }
                    //       cache.writeQuery<MeQuery>({
                    //         query: meQuery,
                    //         data: {
                    //           __typename: "Query",
                    //           me: data.login
                    //         }
                    //       });
                    //     }
                    //   });
                    // } catch (error) {
                    //   console.error(error);
                    //   // return error;
                    //   // alert(Object.keys(error));
                    //   alert(error);
                    //   const displayErrors: { [key: string]: string } = {};

                    //   // let networkErrors = error.networkError;

                    //   let gqlErrors = error.graphQLErrors; //.extensions.exception.validationErrors;

                    //   gqlErrors.forEach((errorThing: any) => {
                    //     displayErrors[errorThing.path[0]] = errorThing.message;
                    //   });

                    //   // I need to investigate: I'm not returning validationErrors but
                    //   // validation errors as general errors, for some reason

                    //   // myErrors.forEach((validationError: any) => {
                    //   //   Object.values(validationError.constraints).forEach(
                    //   //     (message: any) => {
                    //   //       displayErrors[validationError.property] = message;
                    //   //     }
                    //   //   );
                    //   // });
                    //   // console.log(displayErrors);
                    //   // return setErrors(displayErrors);

                    //   // pluck off confirmation errors only, everything else
                    //   // is "invalid login" for obfuscation purposes
                    //   return setErrors({
                    //     message:
                    //       displayErrors &&
                    //       displayErrors.login === "Please confirm your account"
                    //         ? displayErrors.login
                    //         : "invalid login"
                    //   });
                    // }

                    // if (response && response.data && !response.data.login) {
                    //   // alert(response.data);
                    //   setErrors({
                    //     message: "unknown error"
                    //   });
                    //   return;
                    // }
                  }}
                  initialValues={{
                    email: ""
                  }}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Box position="relative">
                        <Positioner position="absolute" right={-15} bottom={9}>
                          <SVGButton height="55px" width="55px">
                            <Flex
                              alignItems="center"
                              justifyContent="center"
                              width="55px"
                            >
                              <ExploreIcons
                                height="100%"
                                width="100%"
                                name="send_button"
                                fill="white"
                                fillAlso="rgb(234, 73, 115)"
                                style={{
                                  boxShadow:
                                    "0px 20px 27px 0px rgba(0, 0, 0, 1)"
                                }}
                              />
                            </Flex>
                          </SVGButton>
                        </Positioner>
                        <Field
                          id="email"
                          name="email"
                          placeholder="Email address"
                          component={InputField}
                        />
                      </Box>
                    </form>
                  )}
                </Formik>
              </Card>
            </Flex>
          </Card>
          {/* Places to Visit */}
          <Card
            borderRadius="17px"
            p={4}
            bg="rgba(0,0,0,0.1)"
            ml={3}
            width={1 / 2}
            style={{
              position: "relative"
            }}
          >
            <Heading mb={[3]} fontSize={[4, 5]}>
              Places to Visit
            </Heading>
            <BgCard />
            {FeaturedCards.map((cardInfo: any, index: number) => {
              return (
                <LandscapeCards
                  data={cardInfo}
                  info={cardInfo}
                  isModalViewActive={false}
                  requestor={"hi"}
                  index={index}
                />
              );
            })}
            <AbWrapper
              width={1}
              justifyContent="center"
              position="absolute"
              left={0}
            >
              <button type="button">All Trips ></button>
            </AbWrapper>

            {/* isModalViewActive: boolean;
  index: number;

  data: any;
  info: any;
  isModalViewActive: boolean;
  localContext: any;
  requestor: any; */}
          </Card>
        </Flex>
      </Flex>
    );
  }
}
