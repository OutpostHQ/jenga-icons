import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4 4h24v24H4z"
    />
    <path
      d="M11.757 16.757 16 21l4.243-4.243M16 11v10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareDown;
