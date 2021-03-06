import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.839 12.04 4.242 4.243-4.242 4.243M17.839 12.04l4.242 4.243-4.242 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleRight;
