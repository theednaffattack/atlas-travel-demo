import * as React from "react";
import Head from "next/head";
import { Flex as FlexBase } from "rebass";
import { minHeight, borders } from "styled-system";
import styled from "styled-components";

import { NavBarBottom } from "../modules/discover/NavBarBottom";
import { NavBarTop } from "../modules/discover/NavBarTop";

import LayoutContainer from "./LayoutContainer";
import { MenuBar } from "../modules/discover/MenuBar";

const Flex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

const PlainFlex = styled(FlexBase)`
  ${minHeight}
  ${borders}

  background-color: #eee;
`;

const Footer = (props?: any) => {
  return <NavBarBottom />;
};

type Props = {
  title?: string;
  menu: string;
  menuToggle: any;
  modal: any;
  modalToggle: any;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Atlas Travel"
}) => {
  return (
    <Flex
      bg="#eee"
      m={[0]}
      minHeight="100vh"
      flexDirection="column"
      width={[1]}
    >
      <PlainFlex color="white" flexDirection="column">
        <LayoutContainer>
          <MenuBar />
          <NavBarTop />
          {/* <NavBarBottom /> */}
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <Flex width={1} flexDirection="column" p={0}>
            {children}
          </Flex>
        </LayoutContainer>
      </PlainFlex>
    </Flex>
  );
};

export default Layout;
