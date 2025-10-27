
import React from 'react';

const SnipeItIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fill="#337AB7" d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8 s8,3.6,8,8S16.4,20,12,20z"/>
    <path fill="#337AB7" d="M12,6c-0.6,0-1,0.4-1,1v4h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4h2c0.6,0,1-0.4,1-1 s-0.4-1-1-1h-2V7C13,6.4,12.6,6,12,6z"/>
  </svg>
);

export default SnipeItIcon;
