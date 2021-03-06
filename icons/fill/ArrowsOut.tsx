import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.38 4.283h-6v6M12.293 12.195 4.381 4.283M22.206 4.283h6v6M20.294 12.195l7.912-7.912M4.38 22.108v6h6M12.293 20.196l-7.912 7.912M28.206 22.108v6h-6M20.294 20.195l7.912 7.913"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOut;
