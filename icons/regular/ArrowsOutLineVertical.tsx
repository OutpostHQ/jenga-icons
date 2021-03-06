import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOutLineVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 16H6M16 4.515v8M11.757 8.757 16 4.515l4.243 4.242M11.757 23.243 16 27.485l4.243-4.242M16 19.485v8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOutLineVertical;
