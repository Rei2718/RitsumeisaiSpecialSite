import React from 'react';

const ScrollIndicator = () => {
  return (
  <div className="scroll-indicator">
    <a className="text-center text-sm pb-3">SCROLL</a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 scroll-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  </div>
  );
};

export default ScrollIndicator;
