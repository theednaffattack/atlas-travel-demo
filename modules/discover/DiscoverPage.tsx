// import { Field, Formik } from "formik";
import React from "react";
import { Flex as FlexBase, Heading } from "rebass";
import styled from "styled-components";
import { borders, minHeight } from "styled-system";

import DiscoverSelect from "./DiscoverSelect";
import ViewBox from "./ViewBox";
import Sidebar from "../../components/SideBar/Sidebar";

const ContentFlex = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

type Props = {
  data: any;
};

// const devBorder1 = "2px white solid";
// const devBorder2 = "4px limegreen solid";

export const DiscoverPage: React.FunctionComponent<Props> = props => {
  let { data } = props;
  return (
    <ContentFlex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width={1}
    >
      <ContentFlex mt={[0, 5, 0]} flexDirection="column" width={[1 / 2]}>
        <Heading
          color="rgba(255,255,255,0.5)"
          fontSize={[5]}
          fontFamily="sans"
          py={3}
        />
        <ContentFlex py={3} alignItems="center" width={1}>
          <DiscoverSelect />
        </ContentFlex>
      </ContentFlex>

      {data && data.data && data.data.helloWorld ? <ViewBox /> : "loading..."}
    </ContentFlex>
  );
};
