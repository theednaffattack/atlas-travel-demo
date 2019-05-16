import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const activeColor = "#e9486d";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;

export default ({ href, name, fill, router, theme, color }: any) => {
  const colorToUse =
    router && router.pathname && router.pathname === href ? activeColor : color;

  return (
    <Link prefetch href={href} passHref>
      <StyledLink color={colorToUse}>{name}</StyledLink>
    </Link>
  );
};
