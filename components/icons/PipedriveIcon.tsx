import React from 'react';

const PipedriveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <circle cx="64" cy="64" r="64" fill="#21B352" />

    <text
      x="50%"
      y="40%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="80"
      fill="#FFFFFF"
    >
      p
    </text>
  </svg>
);

export default PipedriveIcon;
