import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsDownUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.805 4v24M24.24 28V4M19.971 8.32l4.218-4.268 4.217 4.268M4.537 23.68l4.217 4.268 4.217-4.268"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsDownUp;
