import React from 'react';

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function Layout({
  header,
  sidebar,
  children,
}: LayoutProps): React.JSX.Element {
  return (
    <div
      className="dashboard-container"
      style={{
        minHeight: '100vh',
        fontFamily: 'var(--trnkts-font-family)',
        color: 'var(--trnkts-text-primary)',
      }}
    >
      {header && (
        <header className="layout-header">
          {header}
        </header>
      )}

      <div 
        className="layout-main-wrapper"
        style={{
          display: 'grid',
          gridTemplateColumns: sidebar ? '300px 1fr' : '1fr',
          gap: 'var(--trnkts-spacing-md)',
          alignItems: 'start',
        }}
      >
        {sidebar && (
          <aside className="dashboard-sidebar">
            {sidebar}
          </aside>
        )}

        <main 
          className="dashboard-main"
          style={{
            minHeight: '70vh',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export type { LayoutProps };