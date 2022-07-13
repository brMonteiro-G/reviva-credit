import * as React from "react";
function SvgSpinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104px"
      height="104px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g transform="rotate(0 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-1.8181818181818181s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(32.72727272727273 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-1.6363636363636365s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(65.45454545454545 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-1.4545454545454546s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(98.18181818181819 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-1.2727272727272727s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(130.9090909090909 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-1.0909090909090908s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(163.63636363636363 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-0.9090909090909091s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(196.36363636363637 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-0.7272727272727273s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(229.0909090909091 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-0.5454545454545454s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(261.8181818181818 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-0.36363636363636365s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(294.54545454545456 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="-0.18181818181818182s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(327.27272727272725 50 50)">
        <rect x="43.5" y="11.5" rx="6.5" ry="6.5" width="13" height="13">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  );
}
export default SvgSpinner;
