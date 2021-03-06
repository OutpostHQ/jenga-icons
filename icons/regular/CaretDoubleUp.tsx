import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.757 15.121 16 10.88l4.243 4.242M11.757 21.121 16 16.88l4.243 4.242"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleUp;
