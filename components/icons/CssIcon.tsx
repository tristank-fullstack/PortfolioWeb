import React from 'react';

const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path fill="#1572B6" d="M19 0l9 101.6L64 128l36-26.4L109 0H19z" />
    <path fill="#33A9DC" d="M64 117.2l29.1-20.9L100.2 9H64v108.2z" />
    <path
      fill="#fff"
      d="M64 52.5H82.5l1.2-13.5H64V26h33.2l-.3 3.6-3.1 34.9H64V52.5zM64 88.7l15.6-4.2 1.6-18.1h14.1l-2.9 32.6L64 107.8V88.7z"
    />
    <path
      fill="#EBEBEB"
      d="M64 52.5V65H45.5l-1.2-13.5H64V26H30.8l.3 3.6 3.1 34.9H64V52.5zM64 88.7v19.1l-.1.1-26.2-7.3-2-22.5h11.6l1 11.2 15.6 4.2.1-.1z"
    />
  </svg>
);

export default CssIcon;
