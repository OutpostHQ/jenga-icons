import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 4 4 16l12 12v-6h11a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H16V4Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLeft;
