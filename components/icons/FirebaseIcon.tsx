import React from 'react';

const FirebaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 351"
    {...props}
  >
    <path
      fill="#FFCA28"
      d="M0 277L128 0l128 277-128 74z"
    />
    <path
      fill="#FFA000"
      d="M128 0v351l128-74z"
    />
    <path
      fill="#F57C00"
      d="M0 277l128 74V0z"
    />
  </svg>
);

export default FirebaseIcon;
