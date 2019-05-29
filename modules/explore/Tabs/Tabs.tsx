import React, { Component } from "react";

import { Box, Flex, OlStyled, Text } from "../StyledComponents";
import { TabHeader } from "./TabHeader";
import Tab from "./Tab";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[1].props.label
    };
  }

  onClickTabItem = (event: any) => {
    const label = event.currentTarget.id;
    this.setState({ activeTab: label });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <>
        <TabHeader
          children={children}
          activeTab={activeTab}
          onClickTabItem={onClickTabItem}
        />
        {/* <Flex alignItems="center" width={1} color="text"> */}
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          width={1}
          className="tab-content"
        >
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </Flex>
        {/* </Flex> */}
      </>
    );
  }
}

export default Tabs;
