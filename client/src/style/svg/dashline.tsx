import { SvgProptypes } from "@/types/svg/SvgProptypes";
import React from "react";

const Dashline = ({
  width,
  height,
  degree = 0,
  backgroundColor = "black",
}: SvgProptypes) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${degree})`}
    >
      <path
        d="M3 11.625C3 11.3266 3.11853 11.0405 3.3295 10.8295C3.54048 10.6185 3.82663 10.5 4.125 10.5H19.125C19.4234 10.5 19.7095 10.6185 19.9205 10.8295C20.1315 11.0405 20.25 11.3266 20.25 11.625C20.25 11.9234 20.1315 12.2095 19.9205 12.4205C19.7095 12.6315 19.4234 12.75 19.125 12.75H4.125C3.82663 12.75 3.54048 12.6315 3.3295 12.4205C3.11853 12.2095 3 11.9234 3 11.625Z"
        fill={`${backgroundColor}`}
      />
    </svg>
  );
};

export default Dashline;
