import React, { Component } from "react";
import { FinalLi, LiStyled, Text } from "../StyledComponents";

interface TabProps {
  label: string;
  onClick: any;
  activeTab: string;
  key: any;
}

class Tab extends Component<TabProps> {
  onClick = () => {
    const { label, onClick } = this.props;
    console.log("VIEW this.props");
    console.log(this.props);
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let className = "tab-list-item";

    return (
      <FinalLi
        active={activeTab === label ? "active" : "normal"}
        onClick={onClick}
      >
        <Text fontSize={5}>{label}</Text>
      </FinalLi>
    );
  }
}

export default Tab;
