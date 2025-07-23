import { Menu } from 'lucide-react';
import React from 'react';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  showLogo?: boolean;
  children?: React.ReactNode;
  className?: string;
}

function Header({
  title,
  onMenuClick,
  showMenuButton = true,
  showLogo = false,
  children,
  className,
}: HeaderProps): React.JSX.Element {
  return (
    <header
      className={`dashboard-header ${className || ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--trnkts-glass-bg)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--trnkts-border-radius)',
        padding: 'var(--trnkts-spacing-md)',
        boxShadow: 'var(--trnkts-glass-shadow)',
      }}
    >
      <div className='flex items-center space-x-4'>
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            className='btn-trnkts btn-menu'
            style={{
              padding: '0.5rem',
              minWidth: 'auto',
              backgroundColor: 'transparent',
              border: '2px solid rgba(175, 75, 14, 0.2)',
            }}
          >
            <Menu size={20} />
          </button>
        )}

        {showLogo && (
          <div style={{ marginRight: '1rem' }}>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="floating-logo"
            >
              <defs>
                <linearGradient 
                  id="header-logo-gradient" 
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
              <g className="logo-gem">
                <path 
                  d="M100 20L20 70L100 120L180 70L100 20Z" 
                  fill="url(#header-logo-gradient)"
                />
                <path 
                  d="M20 70L100 120L100 170L20 120L20 70Z" 
                  fill="url(#header-logo-gradient)" 
                  fillOpacity="0.7"
                />
                <path 
                  d="M180 70L100 120L100 170L180 120L180 70Z" 
                  fill="url(#header-logo-gradient)" 
                  fillOpacity="0.5"
                />
              </g>
            </svg>
          </div>
        )}

        {title && (
          <h1
            className='header-title gradient-text'
            style={{
              fontSize: 'var(--trnkts-font-size-2xl)',
              fontWeight: '700',
              margin: 0,
            }}
          >
            {title}
          </h1>
        )}
      </div>

      <div className='flex-items-center space-x-4'>{children}</div>
    </header>
  );
}

export { type HeaderProps, Header };
