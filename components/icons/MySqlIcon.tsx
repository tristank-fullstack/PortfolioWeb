import React from 'react';

const MySqlTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <text
      x="8"
      y="100"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="40"
      fill="#4479A1"
    >
      My
    </text>

    <text
      x="55"
      y="100"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="40"
      fill="#F29111"
    >
      SQL
    </text>
  </svg>
);

export default MySqlTextIcon;
