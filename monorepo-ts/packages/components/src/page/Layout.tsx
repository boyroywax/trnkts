import React, { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  isDark?: boolean;
}

function Layout({
  children,
  sidebar,
  header,
  footer,
  className,
  isDark = false,
}: LayoutProps): React.JSX.Element {
  return (
    <div
      className={`layout-container ${className || ''}`}
      style={{
        backgroundColor: isDark
          ? 'var(--dashboard-dark-background)'
          : 'var(--dashboard-background)',
        fontFamily: 'var(--dashboard-font-family)',
        color: isDark ? 'var(--dashboard-dark-text)' : 'var(--dashboard-text)',
      }}
    >
      {header && (
        <header
          className='layout-header'
          style={{
            backgroundColor: isDark
              ? 'rgba(45, 45, 45, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            borderColor: isDark
              ? 'var(--dashboard-dark-border)'
              : 'var(--dashboard-border)',
            boxShadow: 'var(--dashboard-shadow-md)',
          }}
        >
          <div className='layout-header-inner'>{header}</div>
        </header>
      )}

      <div className='layout-main-wrapper'>
        {sidebar && (
          <aside
            className='layout-sidebar'
            style={{
              backgroundColor: isDark
                ? 'var(--dashboard-dark-surface)'
                : 'var(--dashboard-surface)',
              borderColor: isDark
                ? 'var(--dashboard-dark-border)'
                : 'var(--dashboard-border)',
            }}
          >
            <div className='layout-sidebar-inner'>
              <div className='layout-sidebar-content'>{sidebar}</div>
            </div>
          </aside>
        )}

        <main className='layout-main'>
          <div
            className='layout-main-content'
            style={{
              minHeight: 'calc(100vh - 4rem)',
            }}
          >
            {children}
          </div>
        </main>
      </div>

      {footer && (
        <footer
          className='layout-footer'
          style={{
            backgroundColor: isDark
              ? 'var(--dashboard-dark-surface)'
              : 'var(--dashboard-surface)',
            borderColor: isDark
              ? 'var(--dashboard-dark-border)'
              : 'var(--dashboard-border)',
          }}
        >
          <div className='layout-footer-content'>{footer}</div>
        </footer>
      )}
    </div>
  );
}

export { type LayoutProps, Layout };
