import * as React from "react";
import { SVGProps } from "react";

const SvgRocketLaunchFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7 1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6 8 8 0 0 0 8 8 91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1Z" />
    <path d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9 16 16 0 0 0 12.2 11.1l39.5 7.9 41.8 41.8 7.9 39.5a16 16 0 0 0 11.1 12.2 14.7 14.7 0 0 0 4.6.7 15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2ZM74.7 79.4H120l-39.9 39.9-37.7-7.5Zm101.9 101.9-32.4 32.3-7.5-37.7 39.9-39.9Z" />
  </svg>
);

export default SvgRocketLaunchFill;