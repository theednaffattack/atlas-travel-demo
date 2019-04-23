import * as React from "react";
import Head from "next/head";
import { Box, Flex as FlexBase, Text } from "rebass";
import { minHeight, borders } from "styled-system";
import styled from "styled-components";

import { NavBarTop } from "../modules/discover/NavBar";

import LayoutContainer from "./LayoutContainer";

const Flex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const GradientFlex = styled(FlexBase)`
  ${minHeight}

  background-image: linear-gradient(
    0deg,
    rgba(210, 48, 120, 1) 6%,
    rgba(254, 97, 97, 1) 74%,
    rgba(255, 121, 85, 1) 100%
  );
`;

const FlexHeader = styled(FlexBase)`
  ${minHeight}
  ${borders}

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9999;
`;

const FlexFooter = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

type Props = {
  title?: string;
  menu: string;
  menuToggle: any;
  modal: any;
  modalToggle: any;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => {
  return (
    <Flex
      // border="3px crimson solid"
      m={[0]}
      minHeight="100vh"
      flexDirection="column"
      width={[1]}
    >
      <GradientFlex color="white" flexDirection="column" minHeight="100vh">
        <LayoutContainer>
          <NavBarTop />
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <Flex flexDirection="column" minHeight="50vh">
            {children}
          </Flex>
        </LayoutContainer>
      </GradientFlex>
    </Flex>
  );
};

export default Layout;
