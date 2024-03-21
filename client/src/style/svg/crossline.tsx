import { SvgProptypes } from "@/types/svg/SvgProptypes";
import React from "react";
import Color from "../color";

const CrossIcon = ({ width, height }: SvgProptypes) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20L4 4M20 4L4 20"
        stroke={Color.gray1000}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CrossIcon;
