import React from 'react';

const KotlinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path fill="#F18E33" d="M0 0h128L64 64z" />
    <path fill="#7F52FF" d="M0 128h128L64 64z" />
    <path fill="#A97BFF" d="M0 0l64 64-64 64z" />
  </svg>
);

export default KotlinIcon;
