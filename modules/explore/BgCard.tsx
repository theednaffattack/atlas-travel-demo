import React from "react";

import ExploreIcons from "./ExploreIcons/ExploreIcons";
import {
  BgFlex,
  Box,
  Card,
  Flex,
  Icon,
  Positioner,
  Text
} from "./StyledComponents";

export function BgCard(props: any) {
  return (
    <Card
      bg="pink"
      backgroundImage="url(http://picsum.photos/600/300)"
      backgroundSize="cover"
      borderRadius="17px"
      boxShadow="0px 20px 33px 0px rgba(0, 0, 0, 0.1)"
      color="white"
      mx={3}
      mb={[3]}
      // p={4}
      flex="1 1 auto"
      position="relative"
      display="flex"
      minHeight="450px"
    >
      <BgFlex
        image="linear-gradient(20deg, rgba(235,57,155,.8) 0%, rgba(254,123,93,.8) 100%)"
        p={4}
        borderRadius="17px"
        justifyContent="center"
        flexDirection="column"
        flex="1 1 auto"
      >
        <Text fontSize={[4, 5]}>Mexico City</Text>
        <Text>More fakey text</Text>
        <Text>More fakey text</Text>

        <Positioner bottom={50} position="absolute">
          <Flex alignItems="center" justifyContent>
            <Box width="40px">
              <Icon fill="white" name="weather-sunny" />
            </Box>
            <Box ml={2}>
              <Text fontSize={[3, 4]}>22°</Text>
              <Text fontSize={[2, 3]}>Sunny</Text>
            </Box>
          </Flex>
        </Positioner>
      </BgFlex>
    </Card>
  );
}
