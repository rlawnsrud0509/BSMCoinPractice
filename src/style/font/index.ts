import { css } from "styled-components";

const fontGenerator = (weight: number, size: number, lineHeight: number) => css`
  font-family: "WantedSans";
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}rem;
`;

const fonts = {
  LargeTitle: fontGenerator(800, 3.2, 3.9),

  Title1: fontGenerator(700, 2.6, 3.2),
  Title2: fontGenerator(700, 2, 2.5),
  Title3: fontGenerator(700, 1.8, 2.3),

  HeadLine: fontGenerator(600, 1.5, 2),
  Body: fontGenerator(500, 1.5, 2),
  Callout: fontGenerator(500, 1.4, 1.9),
  SubHead: fontGenerator(600, 1.3, 1.8),
  Footnote: fontGenerator(400, 1.2, 1.7),
  Caption: fontGenerator(300, 1.1, 1.6),
};

export default fonts;
