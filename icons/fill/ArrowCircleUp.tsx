import * as React from "react";
import { SVGProps } from "react";

const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.96 28.283c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12-6.627 0-12 5.372-12 12 0 6.627 5.373 12 12 12Zm-4.95-12.05a1 1 0 0 1 0-1.415l4.243-4.242a.997.997 0 0 1 1.42.005l4.237 4.237a1 1 0 0 1-1.414 1.415l-2.536-2.536v7.586a1 1 0 1 1-2 0v-7.586l-2.535 2.536a1 1 0 0 1-1.415 0Z"
      fill="#000"
    />
  </svg>
);

export default SvgArrowCircleUp;
