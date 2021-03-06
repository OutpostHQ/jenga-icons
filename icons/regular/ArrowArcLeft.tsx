import * as React from "react";
import { SVGProps } from "react";

const SvgArrowArcLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 22c0-2.373-.69-4.693-1.982-6.667a11.815 11.815 0 0 0-5.279-4.42 11.545 11.545 0 0 0-6.796-.682 11.692 11.692 0 0 0-6.022 3.284l-3.921 4"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 11.515v6h6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowArcLeft;
