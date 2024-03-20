import fonts from "@/style/font";
import { ButtonHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

export type Font = keyof typeof fonts;
export type ButtonType = "Submit" | "Buy" | "Sell";

export interface ButtonProptypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontType?: Font;
  padding?: CSSProperties["padding"];
  buttonType?: ButtonType;
}
