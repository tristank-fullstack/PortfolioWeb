import React from 'react';

const ExcelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <rect width="128" height="128" rx="16" fill="#217346" />

    <rect x="36" y="24" width="72" height="80" fill="#fff" rx="4" />

    <path
      fill="#217346"
      d="M52 44h10l10 16 10-16h10l-15 24 15 24H82l-10-16-10 16H52l15-24-15-24z"
    />
  </svg>
);

export default ExcelIcon;
