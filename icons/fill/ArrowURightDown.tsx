import * as React from "react";
import { SVGProps } from "react";

const SvgArrowURightDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.839 22.283v-11a7 7 0 0 1 7-7h0a7 7 0 0 1 7 7v17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m17.596 24.04 4.243 4.243 4.242-4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowURightDown;
