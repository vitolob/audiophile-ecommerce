import React from "react";

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      fill="none"
      viewBox="0 0 7 12"
    >
      <path stroke="#D87D4A" strokeWidth="2" d="M1.322 1l5 5-5 5"></path>
    </svg>
  );
}

export default Icon;
