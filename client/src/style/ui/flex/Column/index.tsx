import React from "react";
import styled from "styled-components";
import { ColumnContainerProptypes } from "@/types/ui/FlexContainerProptypes";
import fonts from "@/style/font";

type Font = keyof typeof fonts;

const Column = ({
  width = "fit-content",
  height = "fit-content",
  justifyContent = "center",
  alignItems = "center",
  gap,
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

export default Column;

const Container = styled.div<{ fontType: Font }>`
  display: flex;
  flex-direction: column;

  position: relative;

  ${({ fontType }) => fonts[fontType]};
`;
