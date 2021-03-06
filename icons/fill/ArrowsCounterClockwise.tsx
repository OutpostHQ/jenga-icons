import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.96 12.747h-6v-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.759 8.505a11 11 0 0 0-15.556 0L5.96 12.747M21.96 19.818h6v6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.161 24.061a11 11 0 0 0 15.557 0l4.242-4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsCounterClockwise;
