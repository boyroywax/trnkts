import React, { type ReactNode } from 'react';
import { Layout, Footer } from '@trnkts/components';
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
    const { theme, isDark, setIsDark } = useDashboard();

    const handleThemeToggle = (): void => {
        setIsDark(!isDark);
    };

    return (
        <div
            className={`dashboard-container ${className || ''}`}
            style={{
                fontFamily: 'var(--trnkts-font-family)',
                color: isDark ? theme.darkColors?.text : theme.colors.text,
            }}
        >
            <Layout
                footer={
                    <Footer
                        isDark={isDark}
                        onThemeToggle={handleThemeToggle}
                        showThemeToggle={true}
                    />
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
