import * as React from "react";
import { SVGProps } from "react";

const SvgArrowArcLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.96 22.283c0-2.373-.69-4.694-1.982-6.667a11.816 11.816 0 0 0-5.279-4.42 11.546 11.546 0 0 0-6.796-.682 11.692 11.692 0 0 0-6.022 3.284l-3.92 4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.96 11.798v6h6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowArcLeft;
