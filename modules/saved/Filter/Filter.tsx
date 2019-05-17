import React from "react";
import { Box as BoxBase, Flex, Text } from "rebass";
import { Field, Formik } from "formik";
import styled from "styled-components";
import { borders, minWidth } from "styled-system";

import { Button } from "../../../components/Button/Button";
import { Amenities } from "./Features";
import { PriceRange } from "./PriceRange";
import TimePeriod from "./TimePeriod";
import SVGSlider from "./SVGSlider/SVGSlider";
import { FilterCheckBox } from "../../../components/fields/CheckBox";

const Box = styled(BoxBase)`
  ${borders}
  ${minWidth}
`;
interface FilterState {
  amenities: any;
  priceRange: any;
  timePeriod: any;
  timeKeysSensed: string[];
}

type SideBarOpenStatusTypes = "isOpen" | "isClosed";
interface FilterProps {
  filterBoxOpenOrClosed: SideBarOpenStatusTypes;
  hotelRefetch: any;
}

export class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props) {
    super(props);

    this.handleAmenitiesUpdate = this.handleAmenitiesUpdate.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleTimePeriodUpdate = this.handleTimePeriodUpdate.bind(this);

    this.state = {
      amenities: {},
      priceRange: {},
      timePeriod: {},
      timeKeysSensed: []
    };
  }

  handleAmenitiesUpdate() {}

  handlePriceRange(low, high) {
    console.log("handlePreicRange");
    console.log(low);
    this.setState({ priceRange: { low, high } });
  }

  handleTimePeriodUpdate(obj: any) {
    this.setState({ timePeriod: obj });
  }

  render() {
    console.log("test rerenders in FILTER");

    let { filterBoxOpenOrClosed, hotelRefetch } = this.props;
    let { amenities, priceRange, timePeriod } = this.state;
    return (
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (data, { setErrors }) => {
          let response;
          try {
            response = await login({
              variables: data,
              update: (cache, { data }) => {
                if (!data || !data.login) {
                  return;
                }
                cache.writeQuery<MeQuery>({
                  query: meQuery,
                  data: {
                    __typename: "Query",
                    me: data.login
                  }
                });
              }
            });
          } catch (error) {
            console.error(error);
            // return error;
            // alert(Object.keys(error));
            alert(error);
            const displayErrors: { [key: string]: string } = {};

            // let networkErrors = error.networkError;

            let gqlErrors = error.graphQLErrors; //.extensions.exception.validationErrors;

            gqlErrors.forEach((errorThing: any) => {
              displayErrors[errorThing.path[0]] = errorThing.message;
            });

            // I need to investigate: I'm not returning validationErrors but
            // validation errors as general errors, for some reason

            // myErrors.forEach((validationError: any) => {
            //   Object.values(validationError.constraints).forEach(
            //     (message: any) => {
            //       displayErrors[validationError.property] = message;
            //     }
            //   );
            // });
            // console.log(displayErrors);
            // return setErrors(displayErrors);

            // pluck off confirmation errors only, everything else
            // is "invalid login" for obfuscation purposes
            return setErrors({
              email:
                displayErrors &&
                displayErrors.login === "Please confirm your account"
                  ? displayErrors.login
                  : "invalid login"
            });
          }

          if (response && response.data && !response.data.login) {
            // alert(response.data);
            setErrors({
              email: "invalid login"
            });
            return;
          }
          Router.push("/");
        }}
        initialValues={{
          email: "",
          password: "",
          businessTrip: true
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Flex
            flexDirection="column"
            bg="#eee"
            width={1}
            style={{ overflow: "hidden" }}
          >
            <Flex flexWrap="wrap" bg="#eee" width={1}>
              <svg
                style={{ width: 0, height: 0, position: "absolute" }}
                aria-hidden="true"
                focusable="false"
              >
                <linearGradient
                  id="atlas-svg-button-fill"
                  x1="0%"
                  x2="5.234%"
                  y1="99.863%"
                  y2="0%"
                >
                  <stop
                    offset="6%"
                    stopColor="rgb(210,48,120)"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="74%"
                    stopColor="rgb(254,97,97)"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(255,121,85)"
                    stopOpacity="0.5"
                  />
                </linearGradient>
              </svg>
              <Box width={[1, 1 / 3]} mr={2}>
                <TimePeriod
                  handleTimePeriodUpdate={this.handleTimePeriodUpdate}
                  filterBoxOpenOrClosed={filterBoxOpenOrClosed}
                  containerState={timePeriod}
                />
              </Box>
              <Box width={[1, 1 / 3]} ml={2} mr={2}>
                <PriceRange
                  handlePriceRange={this.handlePriceRange}
                  containerState={priceRange}
                />
                <Amenities containerState={amenities} />
              </Box>
              <Box width={[1, 1 / 3]} ml={2} mr={2}>
                <PriceRange
                  handlePriceRange={this.handlePriceRange}
                  containerState={priceRange}
                />
                <Amenities containerState={amenities} />
              </Box>
            </Flex>
            <Flex px={[1, 5]} mx="auto" width={[1, 1]}>
              <Box width={1} mr="auto">
                <label htmlFor="businessTrip">
                  <Field
                    id="businessTrip"
                    name="businessTrip"
                    type="checkbox"
                    shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                    component={FilterCheckBox}
                  />
                </label>{" "}
                I'm going on a business trip
              </Box>
              <Box minWidth="200px">
                <Button
                  onClick={() =>
                    hotelRefetch({
                      data: {
                        skip: 0,
                        take: 5
                      }
                    })
                  }
                  type="button"
                >
                  Filter
                </Button>
              </Box>
            </Flex>
          </Flex>
        )}
      </Formik>
    );
  }
}
