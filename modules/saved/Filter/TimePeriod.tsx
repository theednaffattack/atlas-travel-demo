import React from "react";
import { Flex as FlexBase, Text } from "rebass";
import { borders, boxShadow, overflow } from "styled-system";
import styled from "styled-components";
import posed from "react-pose";

import HorizontalCalendar from "./HorizontalCalendar";

const Flex = styled(FlexBase)`
  ${borders}
  ${boxShadow}
  ${overflow}
`;

interface TimePeriodProps {
  containerState: any;
  filterBoxOpenOrClosed: string;
  handleTimePeriodUpdate: any;
}
export default class TimePeriod extends React.Component<TimePeriodProps> {
  render() {
    const { handleTimePeriodUpdate } = this.props;
    return (
      <Flex
        flexDirection="column"
        width={[1]}
        bg="#f2f2f2"
        p={3}
        boxShadow="0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
        // border="dev2"
        mb={3}
      >
        <Flex overflow="hidden" className="slide-calendar">
          <HorizontalCalendar
            handleTimePeriodUpdate={handleTimePeriodUpdate}
            // fromSelected={this.state.fromCalendar}
            // toSelected={this.state.toCalendar}
            skip={1}
            take={14}
          />
        </Flex>
      </Flex>
    );
  }
}
