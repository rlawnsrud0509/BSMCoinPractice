import React from "react";
import styled, { css } from "styled-components";
import { ColumnContainerProptypes, RowContainerProptypes } from "@/types/ui/FlexContainerProptypes";
import fonts from "@/style/font";

const Row = (options: ColumnContainerProptypes) => {
  return <Container {...options}>{options.children}</Container>;
};

export default Row;

const Container = styled.div<RowContainerProptypes>`
  display: flex;

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
