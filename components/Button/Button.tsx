import * as React from "react";
import { Button as MyButton, ButtonProps, Text } from "rebass";
import styled from "styled-components";
import { borderRadius, boxShadow } from "styled-system";

export interface CustomProps extends ButtonProps {
  // what the button will read
  label: string;

  // click action
  onClick: () => void;

  // is it disabled, default is false
  disabled?: boolean;

  shadow?: string;
}

const StyledButton = styled(MyButton)`
  ${boxShadow}
  ${borderRadius}

  :focus {
    /* border: 1px lawngreen solid; */
    border-radius: 33px;
    /* outline: none; */
  }

  background-image: linear-gradient(
    0deg,
    rgb(210, 48, 120) 6%,
    rgb(254, 97, 97) 74%,
    rgb(255, 121, 85) 100%
  );
`;

export const Button = (props: CustomProps) => {
  const {
    bg,
    children,
    disabled = false,
    label,
    mt,
    mb,
    click,
    shadow,
    ...theRest
  } = props;

  return (
    <StyledButton
      type="button"
      width={1}
      mt={mt}
      bg={bg}
      borderRadius="33px"
      onClick={click}
      boxShadow="0px 10px 17px 0px rgba(0, 0, 0, 0.2)"
      {...theRest}
    >
      <Text fontWeight="200" fontFamily="sans">
        {label ? label : children}
      </Text>
    </StyledButton>
  );
};
