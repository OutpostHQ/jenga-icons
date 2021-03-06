import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOutCardinal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.998 4.283v8M12.717 8.526l4.243-4.243 4.243 4.242M12.717 24.041l4.244 4.242 4.242-4.243M16.998 20.283v8M4.96 16.321h8M9.203 12.079 4.96 16.32l4.243 4.243M24.718 12.04l4.242 4.242-4.241 4.244M28.96 16.319h-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOutCardinal;
