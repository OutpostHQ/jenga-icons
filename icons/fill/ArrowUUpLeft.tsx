import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.96 25.404h11a7 7 0 0 0 7-7v0a7.002 7.002 0 0 0-7-7h-17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.203 7.162 4.96 11.404l4.243 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowUUpLeft;
