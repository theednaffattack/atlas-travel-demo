import Link from "next/link";
import { withRouter } from "next/router";
import { Text } from "rebass";
import styled from "styled-components";
import { space, width } from "styled-system";

const StyledLink = styled.a`
  ${space}
  ${width}
  text-decoration: none !important;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: goldenrod;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;

interface CustomLinkProps {
  router: any;
  href: string;
  name: string;
}

function ActiveLink({ router, href, name }: CustomLinkProps) {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? "red" : "white"
  };

  const handleClick = e => {
    e.preventDefault();
    let prepHref = `/${href}`;
    router.push(prepHref);
  };

  return (
    <StyledLink href={href} onClick={handleClick} style={style}>
      <Text
        color={router.pathname.replace("/", "") === href ? "crimson" : "white"}
      >
        {name}
      </Text>
    </StyledLink>
  );
}
export default withRouter(ActiveLink);
