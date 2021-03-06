import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.96 12.747h6v-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.161 8.505a11 11 0 0 1 15.557 0l4.242 4.242M11.96 19.818h-6v6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.759 24.061a11.001 11.001 0 0 1-15.556 0L5.96 19.818"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsClockwise;
