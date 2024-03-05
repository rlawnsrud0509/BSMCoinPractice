import { CSSProperties } from "react";

export interface ImageRendererProtypes {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  src: string;
  alt?: string;
}
