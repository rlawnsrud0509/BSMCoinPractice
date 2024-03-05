import fonts from "@/style/font";
import { CSSProperties, ReactNode } from "react";

type Font = keyof typeof fonts;

export interface RowContainerProptypes {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
  fontType?: Font;
}

export interface ColumnContainerProptypes {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
  fontType?: Font;
}
