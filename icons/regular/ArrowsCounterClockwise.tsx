import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 12.464H5v-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.799 8.222a11 11 0 0 0-15.556 0L5 12.464M21 19.535h6v6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.2 23.778a11 11 0 0 0 15.557 0L27 19.536"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsCounterClockwise;
