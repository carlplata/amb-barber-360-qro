// src/components/icons/TiktokIcon.tsx
import React from 'react';

export const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12a4 4 0 1 0 4 4V12a4 4 0 1 0-4-4z" />
    <path d="M12 12v8a4 4 0 0 0 4-4" />
    <path d="M12 8V4a4 4 0 0 0-4 4h4" />
  </svg>
);