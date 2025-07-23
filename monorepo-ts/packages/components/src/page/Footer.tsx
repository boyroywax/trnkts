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
        background: 'transparent',
        color: isDark ? '#e8e8e8' : '#333333',
        borderTopLeftRadius: 'var(--trnkts-border-radius)',
        borderTopRightRadius: 'var(--trnkts-border-radius)',
      }}
    >
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
              border: 'none',
              background: 'transparent',
              color: isDark ? '#e8e8e8' : '#333333',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: 'var(--trnkts-font-size-lg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
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
