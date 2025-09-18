import React from 'react';

interface AmorphicLogoProps {
  size?: number;
  className?: string;
}

export const AmorphicLogo: React.FC<AmorphicLogoProps> = ({ size = 32, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Continuous loop-like line forming stylized A */}
      <path 
        d="M6 26C6 26 8 22 10 20C12 18 14 16 16 14C18 12 20 10 22 8C24 6 26 8 26 10C26 12 24 14 22 16C20 18 18 20 16 22C14 24 12 26 10 28C8 30 6 30 6 26Z" 
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner accent line for depth */}
      <path 
        d="M10 24C10 24 12 20 14 18C16 16 18 14 20 12C21 11 22 12 22 13C22 14 21 15 20 16C18 18 16 20 14 22C12 24 10 24 10 24Z" 
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
