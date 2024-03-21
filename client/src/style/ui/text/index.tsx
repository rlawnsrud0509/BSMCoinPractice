import styled, { css } from "styled-components";
import { Textproptypes } from "@/types/ui/TextProptypes";
import fonts from "@/style/font";
import Color from "@/style/color";

const Text = (options: Textproptypes) => {
  return <Container {...options}>{options.children}</Container>;
};

export default Text;

const Container = styled.div<Textproptypes>`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  ${({
    width = "fit-content",
    height = "fit-content",
    color = Color.gray1400,
    textAlign = "center",
    fontType,
  }) =>
    css`
      width: ${width};
      height: ${height};
      color: ${color};
      text-align: ${textAlign};
      ${fontType};
    `};

  ${({ ellipsis }) =>
    ellipsis
      ? css`
          text-overflow: ellipsis;
        `
      : css`
          text-overflow: clip;
        `}

  white-space: nowrap;
  overflow: hidden;
`;
