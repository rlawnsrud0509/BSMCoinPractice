import styled, { css } from "styled-components";
import { Textproptypes } from "@/types/ui/TextProptypes";
import fonts from "@/style/font";
import Color from "@/style/color";

type Font = keyof typeof fonts;

const Text = ({
  width = "fit-content",
  height = "fit-content",
  fontType,
  color = Color.gray1400,
  textAlign = "center",
  ellipsis = false,
  children,
}: Textproptypes) => {
  return (
    <Container
      fontType={fontType}
      ellipsis={ellipsis}
      style={{ color, textAlign, width, height }}
    >
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  ${({ fontType }) => fonts[fontType]};
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
