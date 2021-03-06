import * as React from "react";
import { SVGProps } from "react";

const SvgArrowBendDoubleUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 24.121a12 12 0 0 0-12-12h-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.243 7.879 10 12.12l4.243 4.243M8.243 7.879 4 12.12l4.243 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowBendDoubleUpLeft;
