import styled, { css } from "styled-components";
import { Textproptypes } from "@/types/ui/TextProptypes";
import fonts from "@/style/font";

type Font = keyof typeof fonts;

const Text = ({
  width = "fit-content",
  height = "fit-content",
  fontType,
  color = "white",
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
