import React from "react";
import styled from "styled-components";
import { ColumnContainerProptypes } from "@/types/ui/FlexContainerProptypes";
import fonts from "@/style/font";

type Font = keyof typeof fonts;

const Row = ({
  width = "fit-content",
  height = "fit-content",
  justifyContent = "center",
  alignItems = "center",
  gap = "0",
  fontType = "Footnote",
  children,
}: ColumnContainerProptypes) => {
  return (
    <Container
      fontType={fontType}
      style={{ width, height, justifyContent, alignItems, gap }}
    >
      {children}
    </Container>
  );
};

export default Row;

const Container = styled.div<{ fontType: Font }>`
  display: flex;

  position: relative;
  color: white;

  ${({ fontType }) => fonts[fontType]};
`;
