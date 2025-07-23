import React from 'react';

export interface LogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 200, 
  animated = true,
  className = '' 
}) => {
  return (
    <div className={`logo-container ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? 'floating-logo' : ''}
      >
        <defs>
          <linearGradient 
            id="trnkts-logo-gradient" 
            x1="0" 
            y1="0" 
            x2="200" 
            y2="200" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#833AB4"/>
            <stop offset="0.3" stopColor="#E1306C"/>
            <stop offset="0.6" stopColor="#F77737"/>
            <stop offset="1" stopColor="#FCAF45"/>
          </linearGradient>
        </defs>
        <g className={animated ? 'logo-gem' : ''}>
          <path 
            d="M100 20L20 70L100 120L180 70L100 20Z" 
            fill="url(#trnkts-logo-gradient)"
          />
          <path 
            d="M20 70L100 120L100 170L20 120L20 70Z" 
            fill="url(#trnkts-logo-gradient)" 
            fillOpacity="0.7"
          />
          <path 
            d="M180 70L100 120L100 170L180 120L180 70Z" 
            fill="url(#trnkts-logo-gradient)" 
            fillOpacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
};
