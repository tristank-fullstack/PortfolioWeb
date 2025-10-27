import React from 'react';

const SpringBootIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#6DB33F"
      d="M128 0l110.85 64v128L128 256 17.15 192V64z"
    />
    <path
      fill="#FFFFFF"
      d="M128 64c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm0 24c22.09 0 40 17.91 40 40s-17.91 40-40 40-40-17.91-40-40 17.91-40 40-40zm-8 8v32h16V96h-16z"
    />
  </svg>
);

export default SpringBootIcon;
