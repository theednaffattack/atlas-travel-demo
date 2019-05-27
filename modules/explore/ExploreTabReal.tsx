import React from "react";
import { Formik, Field } from "formik";

import {
  Box,
  Button,
  Card,
  Flex,
  Positioner,
  SVGButton,
  Text
} from "./StyledComponents";
import { InputField } from "../../components/fields/InputField";
import ExploreIcons from "./ExploreIcons/ExploreIcons";

const FeaturedCards = [
  {
    id: "111111",
    name: "Red Ballet",
    price: "967",
    city: "New York",
    image: ""
  },
  {
    id: "222222",
    name: "Mexico City Festival",
    price: "967",
    city: "Philly",
    image: ""
  }
];

export function ExploreTabReal(props: any) {
  return (
    <Flex
      justifyContent="center"
      px={6}
      width={1}
      color="text"
      flexDirection="column"
      border="lime"
    >
      {/* Carousel */}
      <Flex border="lime">
        <Card p={4} width={1} borderRadius="17px" bg="pink">
          Fake Carousel
        </Card>
      </Flex>
      {/* Lower container */}
      <Flex key="lowerPageWrap" flexDirection="row">
        {/* Featured Card */}
        <Card width={1 / 2} border="steelblue">
          <Flex alignItems="center">
            <Box mr="auto">
              <Text fontSize={[4, 5]}>Featured</Text>
            </Box>
            <Box bg="limegreen">See all Btn</Box>
          </Flex>
          <Flex>
            {FeaturedCards.map((trip: any, index: any) => (
              <Card width={1 / 2} border="crimson" key={index}>
                {trip.image}
                {trip.name}
                {trip.price}
                {trip.city}
              </Card>
            ))}
          </Flex>
          <Flex key="newsletter">
            <Card
              width={1}
              color="white"
              p={4}
              borderRadius="17px"
              backgroundImage="linear-gradient( 75deg, rgba(210,48,120,1) 6%, rgba(254,97,97,1) 74%, rgba(255,121,85,1) 100%)"
              boxShadow="0px 27px 40px 0px rgba(0, 0, 0, 0.05)"
            >
              <Text fontSize={[3, 4]}>What Newsletter</Text>
              <Text fontSize={[2, 3]}>
                Sed semper lorum ipsum at ante spendisse blandit laoreet elit et
                amttis. Nulla facilisi.
              </Text>
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
                      <Positioner position="absolute" right={-20}>
                        <SVGButton height="50px" width="50px">
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            width="50px"
                          >
                            <ExploreIcons
                              height="100%"
                              width="100%"
                              name="send_button"
                              fill="white"
                              fillAlso="rgb(234, 73, 115)"
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
        <Card width={1 / 2} border="steelblue">
          <Text fontSize={[4, 5]}>Places to Visit</Text>
        </Card>
      </Flex>
    </Flex>
  );
}
