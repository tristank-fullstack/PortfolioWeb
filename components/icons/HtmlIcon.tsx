import React from 'react';

const HtmlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path fill="#E44D26" d="M19 0l9 101.6L64 128l36-26.4L109 0H19z" />
    <path fill="#F16529" d="M64 117.2l29.1-20.9L100.2 9H64v108.2z" />
    <path
      fill="#EBEBEB"
      d="M64 52.5H45.5l-1.2-13.5H64V26H30.8l.3 3.6 3.1 34.9H64v-12zM64 88.7l-.1.1-15.6-4.2-1-11.2H35.7l2 22.5 26.2 7.3.1-.1V88.7z"
    />
    <path
      fill="#fff"
      d="M63.9 52.5V65h16.5l-1.6 19.6-14.9 4v12.8l26.2-7.3.2-2.1 3-34.9.3-3.6H63.9zM63.9 26v13h31.9l.3-3.6.6-6.7.3-2.7H63.9z"
    />
  </svg>
);

export default HtmlIcon;
