import * as React from "react";
import { SVGProps } from "react";

const SvgArrowElbowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.96 11.283 11.077 12 12.923-14"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.96 9.283h6v6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowElbowRight;
