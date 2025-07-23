import React, { type ReactNode, useEffect } from 'react';
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

    // Update CSS custom properties when theme changes
    useEffect(() => {
        const root = document.documentElement;
        const colors = isDark ? theme.darkColors : theme.colors;
        
        if (colors) {
            // Update CSS custom properties for theme
            root.style.setProperty('--trnkts-text-primary', colors.text || '#333');
            root.style.setProperty('--trnkts-text-secondary', colors.textSecondary || '#666');
            root.style.setProperty('--trnkts-surface', colors.surface || '#ffffff');
            root.style.setProperty('--trnkts-surface-bg', colors.background || '#ffffff');
            root.style.setProperty('--trnkts-border', colors.border || '#e0e0e0');
            root.style.setProperty('--trnkts-primary', colors.primary || '#af4b0e');
            
            // Update glass effect for dark/light mode
            if (isDark) {
                root.style.setProperty('--trnkts-glass-bg', 'rgba(45, 45, 45, 0.95)');
                root.style.setProperty('--trnkts-glass-border', 'rgba(255, 255, 255, 0.1)');
            } else {
                root.style.setProperty('--trnkts-glass-bg', 'rgba(255, 255, 255, 0.95)');
                root.style.setProperty('--trnkts-glass-border', 'rgba(255, 255, 255, 0.2)');
            }
        }
        
        // Add/remove theme class to body
        document.body.classList.toggle('dark-theme', isDark);
        document.body.classList.toggle('light-theme', !isDark);
    }, [isDark, theme]);

    const handleThemeToggle = (): void => {
        setIsDark(!isDark);
    };

    return (
        <div
            className={`dashboard-container ${isDark ? 'dark-theme' : 'light-theme'} ${className || ''}`}
            style={{
                fontFamily: 'var(--trnkts-font-family)',
                color: 'var(--trnkts-text-primary)',
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
