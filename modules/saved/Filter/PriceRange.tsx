import React from "react";
import { Flex, Text } from "rebass";
import posed from "react-pose";

import SliderComp from "./Slider/Slider";

export const PriceRangeX = () => {
  return <SliderComp />;
};

import { Icon } from "./Icon/AmenityIcons";

const fakeAmenities = [
  { name: "wifi", label: "WiFi" },
  { name: "pool", label: "Pool" },
  { name: "hotelRestaurant", label: "Hotel Restaurant" },
  { name: "innBar", label: "Inn-Bar" },
  { name: "parking", label: "Parking" },
  { name: "nightClub", label: "Night Club" }
];

const PFlex = posed(Flex)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, indexLastClicked: 0, selectedGroup: [] };

    this.handleSelection = this.handleSelection.bind(this);
    this.truncate = this.truncate.bind(this);
  }

  truncate(words: string, clip: number) {
    let numLetters = clip || 12;
    if (words.length > numLetters) {
      return words.slice(0, numLetters) + "...";
    } else {
      return words;
    }
  }

  handleSelection(event: any) {
    event.preventDefault();
    const { target } = event;
    const { id } = target;
    const elementPos = fakeAmenities
      .map(function(x) {
        return x.name;
      })
      .indexOf(id);

    if (elementPos === -1) {
      return;
    }

    const objectFound = fakeAmenities[elementPos];
    const statePos = this.state.selectedGroup
      .map(x => x.name)
      .indexOf(objectFound.name);

    if (statePos !== -1) {
      let selectedCopy = [...this.state.selectedGroup];
      selectedCopy.splice(statePos, 1);
      this.setState(prevState => {
        return {
          selected: !prevState.selected,
          indexLastClicked: elementPos,
          selectedGroup: [...selectedCopy]
        };
      });
    } else {
      this.setState(prevState => {
        return {
          selected: !prevState.selected,
          indexLastClicked: elementPos,
          selectedGroup: [...prevState.selectedGroup, objectFound]
        };
      });
    }
  }
  render() {
    return (
      <Flex
        flexDirection="column"
        width={[1]}
        bg="#f2f2f2"
        p={3}
        // mx={[0, 3]}
        mb={3}
        style={{
          boxShadow: "0px 13px 33px 0px rgba(0, 0, 0, 0.05)"
        }}
      >
        <Text fontWeight={600} mb={4}>
          Price Range
        </Text>

        <Flex
          mt={4}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <SliderComp />
        </Flex>
      </Flex>
    );
  }
}
