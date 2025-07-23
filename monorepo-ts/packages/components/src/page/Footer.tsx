import React, { type ReactNode } from 'react';
import { Sun, Moon } from 'lucide-react';

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
            className="theme-toggle-btn btn-trnkts"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              padding: '0',
              fontSize: 'var(--trnkts-font-size-lg)',
            }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </footer>
  );
}

export { type FooterProps, Footer };
