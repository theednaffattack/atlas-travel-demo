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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Button = styled(ButtonBase)`
  ${height}
`;

const Line = styled.hr`
  ${color}
  ${space}
  ${width}
`;

interface HorizontalCalendarProps {
  skip: number;
  take: number;
}

interface HorizontalCalendarState {
  selected: boolean;
  indexLastClicked: number;
  selectedGroup: any[];
  fromCalendar: any[];
  toCalendar: any[];
  fromSelected: string;
  toSelected: string;
}

export default class HorizontalCalendar extends React.Component<
  HorizontalCalendarProps,
  HorizontalCalendarState
> {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      indexLastClicked: 0,
      selectedGroup: [],
      fromCalendar: [],
      toCalendar: [],
      fromSelected: "",
      toSelected: ""
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.createCalendar = this.createCalendar.bind(this);
    this.addDaysToDateAndFormat_DD = this.addDaysToDateAndFormat_DD.bind(this);
    this.formatMyDateToNumber = this.formatMyDateToNumber.bind(this);
  }

  createCalendar() {
    const arrayOfNumbers: number[] = [];
    const arrayOfFromDates: string[] = [];
    const arrayOfToDates: string[] = [];
    const today: Date = new Date();

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

    const includesChar = (word: string, queryChar: string) => {
      return word.includes(queryChar);
    };

    const findChar = (word: string, queryChar: string) => {
      return word.indexOf(queryChar);
    };

    const isFromDate = includesChar(id, "from");

    const stateKeyForFromOrToSelected = isFromDate
      ? "fromSelected"
      : "toSelected";

    function getTheDate(id: string) {
      const startOfDate = findChar(id, "--");

      const datePosDelimiterLength = 2;

      return id.slice(startOfDate + datePosDelimiterLength, id.length);
    }

    const statePos = this.state[stateKeyForFromOrToSelected].indexOf(
      getTheDate(id)
    );

    // if state string has length and what's stored there
    // matches our date set state to an empty string

    if (
      this.state[stateKeyForFromOrToSelected].length > 0 &&
      this.state[stateKeyForFromOrToSelected] === getTheDate(id)
    ) {
      //   let selectedCopy = this.state[stateKeyForFromOrToSelected];
      this.setState(() => {
        return {
          indexLastClicked: statePos,
          [stateKeyForFromOrToSelected]: ""
        };
      });
    } else {
      // if it's a different number entirely add it to state
      this.setState({
        [stateKeyForFromOrToSelected]: getTheDate(id)
      });
    }
  }

  //   componentDidMount = prevState => {
  //     if (
  //       prevState.fromCalendar.length === 0 &&
  //       prevState.toCalendar.length === 0
  //     ) {
  //       this.createCalendar();
  //     }
  //   };

  componentWillReceiveProps(nextProps) {
    const { dataVar: fromCalendar } = nextProps; // pass dataVar as props
    this.createCalendar();

    // this.setState({
    //     fromCalendar,
    // });
  }

  render() {
    const addDaysToDateAndFormat_DD = (
      date: Date,
      numOfDays: number,
      formatter: string
    ) => format(addDays(date, numOfDays), formatter);

    return (
      <Flex width={1} flexDirection="column">
        {/* FROM!!! */}

        <Text color="rgb(160,160,160)" className="title-label">
          FROM
        </Text>
        <Flex flexDirection="column" style={{ overflowX: "scroll" }}>
          <Flex>
            {this.state.fromCalendar.map((item, index) => {
              return (
                <Flex
                  key={"from-item--" + index}
                  id={"from-item--" + item}
                  flexDirection="column"
                  boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
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
                    selected={this.state.fromSelected === item}
                  />
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Flex className="horizontal-rule">
          <Line width={0.9} bg="rgba(221,221,221, 1)" />
        </Flex>

        {/* TO!!! */}

        <Text color="rgb(160,160,160)" className="title-label">
          TO
        </Text>

        <Flex flexDirection="column" style={{ overflowX: "scroll" }}>
          <Flex>
            {this.state.toCalendar.map((item, index) => (
              <Flex
                key={"to-item--" + index}
                id={"to-item--" + item}
                flexDirection="column"
                boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
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
                  selected={this.state.toSelected === item}
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
