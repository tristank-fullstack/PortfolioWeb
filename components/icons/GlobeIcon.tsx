
import React from 'react';

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.293-.293a1 1 0 011.414 0l.293.293m-2 2l.293.293a1 1 0 010 1.414l-.293.293m2-2l-.293.293a1 1 0 000 1.414l.293.293m0 0l.293-.293a1 1 0 00-1.414 0l-.293.293m-2-2l.293.293a1 1 0 011.414 0l.293-.293m-1.414-1.414L12 3m0 0l1.293 1.293m-1.293-1.293L10.707 4.293m1.293-1.293L12 3m0 0L12 3m0 0v.01M12 12a2 2 0 100 4 2 2 0 000-4zm0 0a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default GlobeIcon;
