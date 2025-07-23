import React, { type ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
  className?: string;
  showThemeToggle?: boolean;
  isDark?: boolean;
  onThemeToggle?: () => void;
}

function Footer({
  children,
  className,
  showThemeToggle = true,
  isDark = false,
  onThemeToggle,
}: FooterProps): React.JSX.Element {
  const handleThemeToggle = (): void => {
    if (onThemeToggle) {
      onThemeToggle();
    }
  };

  return (
    <footer
      className={`footer-container ${className || ''}`}
      style={{
        position: 'relative',
        marginTop: 'auto',
        padding: 'var(--trnkts-spacing-lg) var(--trnkts-spacing-md)',
        background: 'linear-gradient(135deg, var(--trnkts-primary-dark) 0%, var(--trnkts-secondary-dark) 100%)',
        color: 'var(--trnkts-text-light)',
        borderTopLeftRadius: 'var(--trnkts-border-radius-lg)',
        borderTopRightRadius: 'var(--trnkts-border-radius-lg)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Rounded corner overlay to create seamless transition */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          left: 0,
          right: 0,
          height: '20px',
          background: 'linear-gradient(135deg, var(--trnkts-primary-dark) 0%, var(--trnkts-secondary-dark) 100%)',
          borderTopLeftRadius: 'var(--trnkts-border-radius-lg)',
          borderTopRightRadius: 'var(--trnkts-border-radius-lg)',
          backdropFilter: 'blur(10px)',
        }}
      />

      <div
        className="footer-content"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--trnkts-spacing-md)',
        }}
      >
        {/* Footer content */}
        <div
          className="footer-text"
          style={{
            flex: 1,
            fontSize: 'var(--trnkts-font-size-sm)',
            opacity: 0.9,
          }}
        >
          {children || (
            <span>
              © 2025 trnkts - Distributed Infrastructure Platform
            </span>
          )}
        </div>

        {/* Theme toggle button */}
        {showThemeToggle && (
          <button
            onClick={handleThemeToggle}
            className="theme-toggle-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--trnkts-text-light)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: 'var(--trnkts-font-size-lg)',
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        )}
      </div>
    </footer>
  );
}

export { type FooterProps, Footer };
