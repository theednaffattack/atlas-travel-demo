import styled from "styled-components";
import {
  Box as BoxBase,
  Button as ButtonBase,
  Card as CardBase,
  Flex as FlexBase,
  Text
} from "rebass";
import {
  background,
  backgroundImage,
  borders,
  display,
  height,
  minHeight,
  position,
  space,
  width,
  ///
  top,
  right,
  left,
  bottom
} from "styled-system";

export { Text };

export const SVGButton = styled.button`
  ${height}
  ${width}
  background-color: transparent;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;
  border: 0;
  :hover {
    cursor: "pointer";
  }
`;

export const Button = styled(ButtonBase)`
  ${height}
  ${width}
`;

export const Box = styled(BoxBase)`
  ${borders}
  ${display}
  ${minHeight}
  ${position}
`;

export const Card = styled(CardBase)`
  ${display}
  ${minHeight}
  ${position}
`;

export const Positioner = styled(BoxBase)`
  ${position}
  ${top}
  ${right}
  ${left}
  ${bottom}
`;

export const Flex = styled(FlexBase)`
  ${borders}
  ${backgroundImage}
  ${minHeight}
`;

export const BgFlex = styled(FlexBase)`
${minHeight}
  background: ${props => props.image};
  border-radius: ${props => props.borderRadius};
  background-size: cover;
  overflow: hidden;
  /* padding: 16px; */
`;

export const OlStyled = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`;

export const LiStyled = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  margin-right: 40px;
  padding: 0.5rem 0.75rem;

  background-color: ${props => (props.active === "active" ? "white" : "")};
  border: ${props => (props.active === "active" ? "solid #ccc" : "")};
  border-width: ${props => (props.active === "active" ? "1px 1px 0 1px" : "")};
`;

export const LiStyledv2 = styled.li`
list-style: none;
${display}
${space}
${background}
${borders}
`;

interface FinalLiProps {
  active: string;
  children: any;
}

export const FinalLi = ({ active, children, ...otherProps }: FinalLiProps) => {
  console.log("FINALLI active status");
  console.log(active);

  return (
    <LiStyledv2
      py="8px"
      px="12px"
      border={active === "active" ? "2px solid #ccc" : ""}
      borderWidth="1px 1px 0 1px"
      background={active === "active" ? "white" : ""}
      display="inline-block"
      {...otherProps}
    >
      {children}
    </LiStyledv2>
  );
};

{
  /* <LiStyledv2
border={active === "active" ? "2px solid #ccc" : ""}
backgroundColor={active === "active" ? "white" : ""}
display="inline-block"
>
{children}
</LiStyledv2> */
}
{
  /* <LiStyled 
    py="8px"
    px="12px"
    border={active === "active" ? "2px solid #ccc" : ""}
    backgroundColor={active === "active" ? "white" : ""}
    display="inline-block"
  >
    {children}
  </LiStyled>
  */
}
