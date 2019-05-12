import React from "react";
import styled from "styled-components";
import { minHeight, minWidth } from "styled-system";
import { Box as BoxBase, Flex, Text } from "rebass";

import MenuIcon from "../traveling/Icon/MenuIcon";

const VanishingFlex = styled(Flex)`
  ${minHeight}

  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Box = styled(BoxBase)`
  ${minHeight}
  ${minWidth}
`;

const baseFillSub = "rgb(204, 204, 204)";

interface MenuBarProps {
  menuToggle: any;
}

export const MenuBar = ({ menuToggle }: MenuBarProps) => (
  <VanishingFlex pl={1} mb={4} mt={3} minHeight="30px" width="200px">
    <Flex
      //   height="auto"
      justifyContent="center"
      alignItems="center"
      width={1 / 2}
    >
      <Box
        minHeight="30px"
        minWidth="30px"
        pt={2}
        width="30px"
        onClick={menuToggle}
      >
        <MenuIcon
          className="menu"
          height="100%"
          width="100%"
          name="menu"
          fill={baseFillSub}
        />
      </Box>

      <Text
        ml={2}
        onClick={menuToggle}
        fontSize=".8em"
        // mt={-2}
        color="baseFill"
        fontFamily="montserrat"
      >
        Menu
      </Text>
    </Flex>
  </VanishingFlex>
);
