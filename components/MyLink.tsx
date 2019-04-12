import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  color: ${props =>
    props.shade === "dark" ? props.theme.colors.text : "white"};
`;

export default ({ href, name, shade, theme, underline }: any) => (
  <Link prefetch href={href} passHref>
    <StyledLink underline={underline} shade={shade}>
      {name}
    </StyledLink>
  </Link>
);
