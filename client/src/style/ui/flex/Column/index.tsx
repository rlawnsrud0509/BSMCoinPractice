import React from "react";
import styled, { css } from "styled-components";
import { ColumnContainerProptypes } from "@/types/ui/FlexContainerProptypes";
import fonts from "@/style/font";

const Column = (options: ColumnContainerProptypes) => {
  return <Container {...options}>{options.children}</Container>;
};

export default Column;

const Container = styled.div<ColumnContainerProptypes>`
  display: flex;
  flex-direction: column;

  position: relative;
  color: white;

  ${({
    width = "fit-content",
    height = "fit-content",
    justifyContent = "center",
    alignItems = "center",
    gap = 0,
    fontType = "Footnote",
  }) => css`
    width: ${width};
    height: ${height};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
    ${fonts[fontType]};
  `};
`;
