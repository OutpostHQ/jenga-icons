import * as React from "react";
import { SVGProps } from "react";

const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.96 28.283c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12-6.627 0-12 5.372-12 12 0 6.627 5.373 12 12 12Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="m12.717 17.04 4.243 4.243 4.243-4.243M16.96 11.283v10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowCircleDown;
