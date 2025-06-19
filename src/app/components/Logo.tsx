import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="45" fill="#0ea5e9" />
    
    {/* Futuristic S */}
    <path d="M 30 35 L 50 25 L 70 35 L 50 45 L 30 55 L 50 65 L 70 55" stroke="white" strokeWidth="5" fill="none" strokeLinejoin="bevel" />
    
    {/* Futuristic M */}
    <path d="M 30 75 L 30 55 L 50 65 L 70 55 L 70 75" stroke="white" strokeWidth="5" fill="none" strokeLinejoin="bevel" />
    
    {/* Tech elements */}
    <circle cx="25" cy="25" r="3" fill="white" opacity="0.8" />
    <circle cx="75" cy="25" r="3" fill="white" opacity="0.8" />
    <circle cx="25" cy="75" r="3" fill="white" opacity="0.8" />
    <circle cx="75" cy="75" r="3" fill="white" opacity="0.8" />
    
    {/* Connection lines */}
    <path d="M 25 25 L 75 25" stroke="white" strokeWidth="1" opacity="0.4" />
    <path d="M 25 75 L 75 75" stroke="white" strokeWidth="1" opacity="0.4" />
    <path d="M 25 25 L 25 75" stroke="white" strokeWidth="1" opacity="0.4" />
    <path d="M 75 25 L 75 75" stroke="white" strokeWidth="1" opacity="0.4" />
  </svg>
); 