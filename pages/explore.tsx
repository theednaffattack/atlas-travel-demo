import React from "react";

import {
  BgFlex,
  Box,
  Card,
  Flex,
  Positioner,
  Text
} from "../modules/explore/StyledComponents";
import Layout from "../components/AuthLayoutPlain";
import { MeComponent } from "../generated/apolloComponents";
import { ExplorePage } from "../modules/explore/Explore";
import Tabs from "../modules/explore/Tabs/Tabs";
import ExploreIcons from "../modules/explore/ExploreIcons/ExploreIcons";
import { ExploreTabReal } from "../modules/explore/ExploreTabReal";
// import { MyContext } from "../interfaces/MyContext";

export default class Explore extends React.Component {
  render() {
    return (
      <Layout>
        <MeComponent>
          {data => (
            <Flex flexDirection="column" flex="1 1 auto" width={1} px={[0, 4]}>
              <Tabs>
                {/* ACTIVITIES TAB */}
                <Flex width={1} flexWrap="wrap" label="Activities">
                  <Flex minHeight={["250px", "600px"]} width={[1, 0.32]}>
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
                    >
                      <BgFlex
                        image="linear-gradient(20deg, rgba(235,57,155,.8) 0%, rgba(254,123,93,.8) 100%)"
                        p={4}
                        borderRadius="17px"
                        flexDirection="column"
                        flex="1 1 auto"
                      >
                        <Box width="60px">
                          <ExploreIcons
                            name="natures_light"
                            className="explore-icon"
                            fill="rgb(255,255,255)"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Positioner bottom={20} position="absolute">
                          <Text fontSize={[3, 4]}>Nature's Light</Text>
                          <Text fontSize={[2, 3]}>xxx spots</Text>
                        </Positioner>
                      </BgFlex>
                    </Card>
                  </Flex>
                  <Flex flexDirection="column" width={[1, 1 / 3]}>
                    <Card
                      bg="pink"
                      backgroundImage="url(http://picsum.photos/600/300)"
                      backgroundSize="cover"
                      borderRadius="17px"
                      boxShadow="0px 20px 33px 0px rgba(0, 0, 0, 0.1)"
                      color="white"
                      mx={3}
                      mb={[3]}
                      position="relative"
                      display="flex"
                      style={{ flexDirection: "column" }}
                      minHeight="250px"
                    >
                      <BgFlex
                        image="linear-gradient(20deg, rgba(190,60,218,0.8) 0%, rgba(239,62,150,0.8) 100%)"
                        p={4}
                        borderRadius="17px"
                        flexDirection="column"
                        flex="1 1 auto"
                      >
                        <Box width="60px">
                          <ExploreIcons
                            name="cultural"
                            className="explore-icon"
                            fill="rgb(255,255,255)"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Positioner bottom={20} position="absolute">
                          <Text fontSize={[3, 4]}>Cultural</Text>
                          <Text fontSize={[2, 3]}>xxx spots</Text>
                        </Positioner>
                      </BgFlex>
                    </Card>
                    <Card
                      bg="pink"
                      backgroundImage="url(http://picsum.photos/600/300)"
                      backgroundSize="cover"
                      borderRadius="17px"
                      boxShadow="0px 20px 33px 0px rgba(0, 0, 0, 0.1)"
                      color="white"
                      mx={3}
                      // p={3}
                      mt={3}
                      mb={[3]}
                      position="relative"
                      flex="1 1 auto"
                      display="flex"
                      style={{ flexDirection: "column" }}
                      minHeight="150px"
                    >
                      <BgFlex
                        image="linear-gradient(20deg, rgba(190,60,218,0.8) 0%, rgba(239,62,150,0.8) 100%)"
                        p={4}
                        borderRadius="17px"
                        flexDirection="column"
                        flex="1 1 auto"
                      >
                        <Box width="60px">
                          <ExploreIcons
                            name="popularity"
                            className="explore-icon"
                            fill="rgb(255,255,255)"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Positioner bottom={20} position="absolute">
                          <Text fontSize={[3, 4]}>Popularity</Text>
                          <Text fontSize={[2, 3]}>xxx spots</Text>
                        </Positioner>
                      </BgFlex>
                    </Card>
                  </Flex>

                  <Flex flexDirection="column" mx={3} width={[1, 0.32]}>
                    <Card
                      bg="pink"
                      backgroundImage="url(http://picsum.photos/600/300)"
                      backgroundSize="cover"
                      borderRadius="17px"
                      boxShadow="0px 20px 33px 0px rgba(0, 0, 0, 0.1)"
                      color="white"
                      // p={3}
                      mb={2}
                      position="relative"
                      display="flex"
                      style={{ flexDirection: "column" }}
                    >
                      <BgFlex
                        image="linear-gradient(20deg, rgba(190,60,218,0.8) 0%, rgba(239,62,150,0.8) 100%)"
                        borderRadius="17px"
                        p={4}
                        flexDirection="column"
                        flex="1 1 auto"
                        minHeight="200px"
                      >
                        <Box width="60px">
                          <ExploreIcons
                            name="modern_life"
                            className="explore-icon"
                            fill="rgb(255,255,255)"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Positioner bottom={20} position="absolute">
                          <Text fontSize={[3, 4]}>Modern Life</Text>
                          <Text fontSize={[2, 3]}>xxx spots</Text>
                        </Positioner>
                      </BgFlex>
                    </Card>
                    <Card
                      bg="pink"
                      backgroundImage="url(http://picsum.photos/600/300)"
                      backgroundSize="cover"
                      borderRadius="17px"
                      boxShadow="0px 20px 33px 0px rgba(0, 0, 0, 0.1)"
                      color="white"
                      // p={3}
                      mt={2}
                      position="relative"
                      flex="1 1 auto"
                      display="flex"
                      style={{
                        flexDirection: "column"
                      }}
                      minHeight="150px"
                    >
                      <BgFlex
                        image="linear-gradient(20deg, rgba(190,60,218,0.8) 0%, rgba(239,62,150,0.8) 100%)"
                        borderRadius="17px"
                        p={4}
                        flexDirection="column"
                        flex="1 1 auto"
                      >
                        <Box width="60px">
                          <ExploreIcons
                            name="sun_sand"
                            className="explore-icon"
                            fill="rgb(255,255,255)"
                            height="100%"
                            width="100%"
                          />
                        </Box>
                        <Positioner bottom={20} position="absolute">
                          <Text fontSize={[3, 4]}>Sun & Sand</Text>
                          <Text fontSize={[2, 3]}>xxx spots</Text>
                        </Positioner>
                      </BgFlex>
                    </Card>
                  </Flex>
                </Flex>
                {/* EXPLORE TAB */}
                <Flex width={1} justifyContent="center" label="Explore">
                  {/* <ExplorePage data={data} /> */}
                  <ExploreTabReal />
                </Flex>
              </Tabs>
            </Flex>
          )}
        </MeComponent>
      </Layout>
    );
  }
}
