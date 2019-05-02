import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.color || "white"};
`;

export default ({ href, name, fill, theme, color }: any) => (
  <Link prefetch href={href} passHref>
    <StyledLink color={color}>{name}</StyledLink>
  </Link>
);
