import fonts from "@/style/font";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type Font = keyof typeof fonts;

export interface Textproptypes {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  fontType: Font;
  color?: CSSProperties["color"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  children: ReactNode;
}
