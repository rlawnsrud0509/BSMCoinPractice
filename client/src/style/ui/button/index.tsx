import fonts from "@/style/font";
import { ButtonProptypes, ButtonType, Font } from "@/types/ui/ButtonProptypes";
import React from "react";
import styled from "styled-components";
import { buttonStyle } from "./button.style";

const Button = ({
  width = "fit-content",
  height = "fit-content",
  backgroundColor = "",
  color = "",
  fontType = "Route",
  buttonType = "Buy",
  padding = "0.5rem",
  ...restType
}: ButtonProptypes) => {
  return (
    <Container
      {...restType}
      style={{ width, height, backgroundColor, color, padding }}
      fontType={fontType}
      buttonType={buttonType}
    ></Container>
  );
};

export default Button;

const Container = styled.button<{
  fontType: Font;
  buttonType: ButtonType;
}>`
  ${({ fontType }) => fonts[fontType]};
  ${({ buttonType }) => buttonStyle[buttonType]};
  transition: 0.15s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;
