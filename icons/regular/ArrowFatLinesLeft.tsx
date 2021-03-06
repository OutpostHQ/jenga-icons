import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLinesLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 4 4 16l12 12v-6h4V10h-4V4ZM28 22V10M24 22V10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLinesLeft;
