import * as React from "react";
import { SVGProps } from "react";

const SvgArrowURightDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.879 22V11a7 7 0 0 1 7-7h0a7 7 0 0 1 7 7v17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.636 23.757 20.879 28l4.242-4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowURightDown;
