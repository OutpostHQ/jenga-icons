import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOutSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.85 4.15h6v6M19.425 12.575l8.426-8.426M4 22v6h6M12.425 19.575 4 28"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOutSimple;
