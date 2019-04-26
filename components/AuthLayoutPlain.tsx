import * as React from "react";
import Head from "next/head";
import { Flex as FlexBase } from "rebass";
import { minHeight, borders } from "styled-system";
import styled from "styled-components";

import { NavBarTop } from "../modules/discover/NavBar";

import LayoutContainer from "./LayoutContainer";

const Flex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const PlainFlex = styled(FlexBase)`
  ${minHeight}

  background-color: #eee;
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
      <PlainFlex color="white" flexDirection="column" minHeight="100vh">
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
      </PlainFlex>
    </Flex>
  );
};

export default Layout;
