import * as React from "react";
import { SVGProps } from "react";

const SvgArrowULeftUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.081 10.283v11a7 7 0 0 1-7 7h0a7.001 7.001 0 0 1-7-7v-17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m7.839 8.526 4.242-4.243 4.243 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowULeftUp;
