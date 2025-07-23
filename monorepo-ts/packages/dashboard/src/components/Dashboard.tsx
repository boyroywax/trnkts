import React, { type ReactNode } from 'react';
import { Layout } from '@trnkts/components';
import { useDashboard } from '../hooks/useDashboard';
import { DashboardProvider } from '../providers/DashboardProvider';
import type { DashboardConfig } from '../types';

interface DashboardProps {
  config: DashboardConfig;
  children?: ReactNode;
  className?: string;
}

function DashboardContent({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}): React.JSX.Element {
  const { theme, isDark } = useDashboard();

  return (
    <div 
      className={`dashboard-container ${className || ''}`}
      style={{
        minHeight: '100vh',
        fontFamily: 'var(--trnkts-font-family)',
        color: isDark ? theme.darkColors?.text : theme.colors.text,
        backgroundColor: isDark ? theme.darkColors?.background : theme.colors.background,
      }}
    >
      <Layout
        header={
          <div className='flex-items-center-justify-between full-width'>
            <h1
              className='header-title'
              style={{
                color: isDark ? theme.darkColors?.text : theme.colors.text,
              }}
            >
              Dashboard
            </h1>
          </div>
        }
      >
        {children}
      </Layout>
    </div>
  );
}

function Dashboard({
  config,
  children,
  className,
}: DashboardProps): React.JSX.Element {
  return (
    <DashboardProvider config={config}>
      <DashboardContent className={className || ''}>
        {children}
      </DashboardContent>
    </DashboardProvider>
  );
}

export { type DashboardProps, Dashboard };
