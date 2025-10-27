import React from 'react';

const OdooIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <text
      x="50%"
      y="70%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="54"
      fill="#714B67"
    >
      odoo
    </text>
  </svg>
);

export default OdooIcon;
