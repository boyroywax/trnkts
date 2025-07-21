import { ReactNode } from 'react';
import { Layout } from '@trnkts/components';
import { useDashboard } from '../hooks/useDashboard';
import { DashboardProvider } from '../providers/DashboardProvider';
import type { DashboardConfig } from '../types';

export interface DashboardProps {
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
}) {
    const { theme, isDark } = useDashboard();

    return (
        <Layout
            className={className || ''}
            isDark={isDark}
            header={
                <div className='flex-items-center-justify-between full-width'>
                    <h1
                        className='header-title'
                        style={{
                            color: isDark
                                ? theme.darkColors?.text
                                : theme.colors.text,
                        }}
                    >
                        Dashboard
                    </h1>
                </div>
            }
        >
            {children}
        </Layout>
    );
}

export function Dashboard({
    config,
    children,
    className,
}: DashboardProps) {
    return (
        <DashboardProvider config={config}>
            <DashboardContent className={className || ''}>
                {children}
            </DashboardContent>
        </DashboardProvider>
    );
}
