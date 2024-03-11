import { css } from "styled-components";

const fontGenerator = (weight: number, size: number, lineHeight: number) => css`
  font-family: "Pretendard";
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}rem;
`;

const fonts = {
  LargeTitle: fontGenerator(600, 3.2, 4),

  Title1: fontGenerator(600, 2.6, 3.6),
  Title2: fontGenerator(600, 2, 3),
  Title3: fontGenerator(600, 1.8, 2.4),

  HeadLine: fontGenerator(500, 1.5, 1.9),
  Callout: fontGenerator(500, 1.4, 1.7),
  SubHead: fontGenerator(500, 1.3, 1.5),
  Footnote: fontGenerator(400, 1.2, 1.4),
  Caption: fontGenerator(400, 1.1, 1.3),
  Route: fontGenerator(500, 1.1, 1.3),
  Small: fontGenerator(400, 0.9, 1.1),
  MegaSmall: fontGenerator(400, 0.7, 0.9),
  ReallySmall: fontGenerator(400, 0.6, 0.8),
  UltraSmall: fontGenerator(400, 0.5, 0.7),
};

export default fonts;
