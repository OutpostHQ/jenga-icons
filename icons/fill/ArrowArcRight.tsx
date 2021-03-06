import * as React from "react";
import { SVGProps } from "react";

const SvgArrowArcRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.96 22.283c0-2.373.69-4.694 1.982-6.667a11.817 11.817 0 0 1 5.28-4.42 11.546 11.546 0 0 1 6.795-.682 11.692 11.692 0 0 1 6.023 3.284l3.92 4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.96 11.798v6h-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowArcRight;
