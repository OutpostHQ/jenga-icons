import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsInCardinal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.79 20v8M11.547 24.243 15.789 20l4.243 4.243M11.547 7.757 15.789 12l4.243-4.243M15.79 4v8M19.79 15.553h8M24.032 11.31l-4.243 4.242 4.243 4.243M7.547 11.308l4.242 4.242-4.481 3.99M11.79 15.55h-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsInCardinal;
