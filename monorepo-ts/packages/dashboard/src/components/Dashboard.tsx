import React, { type ReactNode } from 'react';
import { Layout } from '@trnkts/components';
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
    return (
        <div
            className={`dashboard-content ${className || ''}`}
            style={{
                fontFamily: 'var(--trnkts-font-family)',
                color: 'var(--trnkts-text-primary)',
                height: '100%',
            }}
        >
            <Layout>
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
