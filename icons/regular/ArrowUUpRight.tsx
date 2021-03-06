import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 25.121H11a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.757 6.879 28 11.12l-4.243 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowUUpRight;
