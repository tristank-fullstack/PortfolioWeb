
import React from 'react';

const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" cx="12" cy="12"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

export default ReactIcon;
