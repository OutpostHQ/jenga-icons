import * as React from "react";
import { SVGProps } from "react";

const SvgArrowArcRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 22c0-2.373.69-4.693 1.982-6.667a11.816 11.816 0 0 1 5.279-4.42 11.545 11.545 0 0 1 6.796-.682 11.692 11.692 0 0 1 6.022 3.284l3.921 4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 11.515v6h-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowArcRight;
