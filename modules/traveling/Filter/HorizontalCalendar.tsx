import React from "react";
import { Box, Button as ButtonBase, Flex as FlexBase, Text } from "rebass";
import {
  height,
  borders,
  boxShadow,
  color,
  minWidth,
  overflow,
  space,
  width
} from "styled-system";
import styled from "styled-components";
import { format, subDays, addDays } from "date-fns";
import enLocale from "date-fns/locale/en";
import posed from "react-pose";

import Icon from "./Icon/CalendarIcon";
import CalendarIcon from "./Icon/CalendarIcon";

const Flex = styled(FlexBase)`
  ${borders}
  ${boxShadow}
  ${overflow}
  ${minWidth}

`;

const Button = styled(ButtonBase)`
  ${height}
`;

const Line = styled.hr`
  ${color}
  ${space}
  ${width}
`;

interface CustomProps {
  skip: number;
  take: number;
}

export default class HorizontalCalendar extends React.Component<CustomProps> {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      indexLastClicked: 0,
      selectedGroup: [],
      fromCalendar: [],
      toCalendar: [],
      fromSelected: [],
      toSelected: []
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.createCalendar = this.createCalendar.bind(this);
    this.addDaysToDateAndFormat_DD = this.addDaysToDateAndFormat_DD.bind(this);
    this.formatMyDateToNumber = this.formatMyDateToNumber.bind(this);
  }

  createCalendar() {
    const arrayOfNumbers = [];
    const arrayOfFromDates: any[] = [];
    const arrayOfToDates: any[] = [];
    const today = new Date();

    for (var i = this.props.skip; i <= this.props.take; i++) {
      arrayOfNumbers.push(i);
      arrayOfFromDates.push(
        this.addDaysToDateAndFormat_DD(today, i + 1, "MM/DD/YYYY")
      );
      arrayOfToDates.push(
        this.addDaysToDateAndFormat_DD(today, i + 2, "MM/DD/YYYY")
      );
    }

    this.setState({
      fromCalendar: [...arrayOfFromDates],
      toCalendar: [...arrayOfToDates]
    });

    return { from: arrayOfFromDates, to: arrayOfToDates };
  }

  formatMyDateToNumber = (date: Date, formatter: string) => {
    return format(date, formatter);
  };

  addDaysToDateAndFormat_DD = (
    date: Date,
    numOfDays: number,
    formatter: string
  ) => format(addDays(date, numOfDays), formatter);

  handleSelection(event: any) {
    event.preventDefault();
    const { currentTarget } = event;
    const { id } = currentTarget;
    console.log("FROM THE CLICK HANDLER");
    console.log(id);

    const includesChar = (word: string, queryChar: string) => {
      return word.includes(queryChar);
    };

    const findChar = (word: string, queryChar: string) => {
      return word.indexOf(queryChar);
    };

    const isFromDate = includesChar(id, "from");

    const arrAccessor = isFromDate ? "fromSelected" : "toSelected";

    function getTheDate(idString) {
      const startOfDate = findChar(idString, "--");

      const datePosDelimiterLength = 2;

      return idString.slice(startOfDate + datePosDelimiterLength, id.length);
    }

    // const isToDate = findChar(id, "to");
    // const targetID =
    const statePos = this.state[arrAccessor].indexOf(getTheDate(id));
    //   .map(function(x) {
    //     return x.name;
    //   }).indexOf(id);

    console.log("statePos".toUpperCase());
    console.log(statePos);
    console.log(getTheDate(id));
    // console.log(startOfDate);
    console.log(getTheDate(id));

    // if (elementPos === -1) {
    //   return;
    // }

    const objectFound = this.state[arrAccessor][statePos];
    // const statePos = this.state.selectedGroup
    //   .map(x => x.name)
    //   .indexOf(objectFound.name);

    if (statePos !== -1) {
      let selectedCopy = [...this.state[arrAccessor]];
      console.log("selectedCopy");
      console.log(selectedCopy);
      selectedCopy.splice(statePos, 1);
      this.setState(prevState => {
        return {
          indexLastClicked: statePos,
          [arrAccessor]: [...selectedCopy]
        };
      });
    } else {
      console.log("selectedCopy bypassed");
      console.log(statePos);

      this.setState(prevState => ({
        [arrAccessor]: [...prevState[arrAccessor], getTheDate(id)]
      }));
    }
  }

  componentDidMount = (prevProps, prevState) => {
    this.createCalendar();
  };

  render() {
    console.log("this.state");
    console.log(this.state);
    const addDaysToDateAndFormat_DD = (
      date: Date,
      numOfDays: number,
      formatter: string
    ) => format(addDays(date, numOfDays), formatter);

    return (
      <Flex width={1} flexDirection="column" border="dev2">
        {/* FROM!!! */}

        <Text color="rgb(160,160,160)" border="dev1" className="title-label">
          FROM
        </Text>
        <Flex
          flexDirection="column"
          border="dev3"
          style={{ overflowX: "scroll" }}
        >
          <Flex>
            {this.state.fromCalendar.map((item, index) => {
              return (
                <Flex
                  key={"from-item--" + index}
                  id={"from-item--" + item}
                  flexDirection="column"
                  boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
                  border="dev2"
                  minWidth="70px"
                  onClick={this.handleSelection}
                >
                  <Text color="rgb(204,204,204)" mx="auto">
                    {this.formatMyDateToNumber(item, "dd").slice(0, 1)}
                  </Text>
                  <CalendarIcon
                    className="test"
                    height="100%"
                    width="100%"
                    name="calendar-date"
                    date={this.formatMyDateToNumber(item, "D")}
                    selected={this.state.fromSelected.indexOf(item) !== -1}
                  />
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Flex border="dev1" className="horizontal-rule">
          <Line width={0.9} bg="rgba(221,221,221, 1)" />
        </Flex>

        {/* TO!!! */}

        <Text color="rgb(160,160,160)" border="dev1" className="title-label">
          TO
        </Text>

        <Flex
          flexDirection="column"
          border="dev3"
          style={{ overflowX: "scroll" }}
        >
          <Flex>
            {this.state.toCalendar.map((item, index) => (
              <Flex
                key={"to-item--" + index}
                id={"to-item--" + item}
                flexDirection="column"
                boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
                border="dev2"
                onClick={this.handleSelection}
                minWidth="70px"
              >
                <Text color="rgb(204,204,204)" mx="auto">
                  {this.formatMyDateToNumber(item, "dd").slice(0, 1)}
                </Text>
                <CalendarIcon
                  className="test"
                  height="100%"
                  width="100%"
                  name="calendar-date"
                  selected={this.state.toSelected.indexOf(item) !== -1}
                  date={this.formatMyDateToNumber(item, "D")}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}
