import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 6.879h11a7 7 0 0 1 7 7v0a7.002 7.002 0 0 1-7 7H4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.243 16.636 4 20.879l4.243 4.242"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowUDownLeft;
