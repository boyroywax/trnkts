import React from 'react';

interface LayoutProps {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
}

export function Layout({
    header,
    sidebar,
    footer,
    children,
}: LayoutProps): React.JSX.Element {
    return (
        <div
            className='dashboard-container'
            style={{
                fontFamily: 'var(--trnkts-font-family)',
                color: 'var(--trnkts-text-primary)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {header && <header className='layout-header'>{header}</header>}

            <div
                className='layout-main-wrapper'
                style={{
                    display: 'grid',
                    gridTemplateColumns: sidebar ? '300px 1fr' : '1fr',
                    gap: 'var(--trnkts-spacing-md)',
                    alignItems: 'start',
                    flex: 1,
                }}
            >
                {sidebar && (
                    <aside className='dashboard-sidebar'>{sidebar}</aside>
                )}

                <main
                    className='dashboard-main'
                    style={{
                        padding: 'var(--trnkts-spacing-md)',
                    }}
                >
                    {children}
                </main>
            </div>

            {footer && (
                <div className='layout-footer'>
                    {footer}
                </div>
            )}
        </div>
    );
}

export type { LayoutProps };
