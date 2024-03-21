import fonts from "@/style/font";
import { ButtonProptypes } from "@/types/ui/ButtonProptypes";
import React from "react";
import styled, { css } from "styled-components";
import { buttonStyle } from "./button.style";
import Color from "@/style/color";

const Button = (options: ButtonProptypes) => {
  return <Container {...options}></Container>;
};

export default Button;

const Container = styled.button<ButtonProptypes>`
  ${({
    width = "fit-content",
    height = "fit-content",
    backgroundColor = Color.white,
    color = Color.black,
    padding = "0.5rem",
    fontType = "Callout",
  }) =>
    css`
      width: ${width};
      height: ${height};
      background-color: ${backgroundColor};
      color: ${color};
      padding: ${padding};
      ${fonts[fontType]};
    `};

  ${({ buttonType = "Custom" }) => buttonStyle[buttonType]};

  transition: 0.15s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;
