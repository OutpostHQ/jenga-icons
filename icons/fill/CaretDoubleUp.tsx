import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12.717 15.404 4.243-4.242 4.243 4.242M12.717 21.404l4.243-4.242 4.243 4.242"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleUp;
