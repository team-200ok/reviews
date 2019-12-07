import React from 'react';

const Icon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M 12 2 C 6.477 2 2 6.477 2 12 s 4.477 10 10 10 s 10 -4.477 10 -10 S 17.523 2 12 2 Z m 0 16.5 a 5.405 5.405 0 0 1 -5 -3.357 a 8.6 8.6 0 0 0 5 1.6 a 8.6 8.6 0 0 0 5 -1.6 a 5.405 5.405 0 0 1 -5 3.357 Z m 3.96 -5.5 h -0.002 c -1.617 0 -3.028 -0.9 -3.67 -2.224 a 0.32 0.32 0 0 0 -0.575 0 C 11.07 12.1 9.66 13 8.043 13 H 8.04 c -2.01 0 -3.74 -1.15 -4.035 -3.018 l -0.124 -0.734 c -0.07 -0.305 0.257 -0.25 0.634 -0.248 h 14.972 c 0.39 0 0.673 -0.04 0.632 0.248 l -0.124 0.517 C 19.647 11.612 17.97 13 15.96 13 Z" fill="#666666" />
    </svg>
  );
};

// plan for icons: make a file with multiple named exports and export all the icons there
// but first just export one icon to see if it works

export default Icon;
