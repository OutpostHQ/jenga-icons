import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 20h-6v6M28 28l-8-8M6 20h6v6M4 28l8-8M20 6v6h6M28 4l-8 8M12 6v6H6M4 4l8 8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsIn;
