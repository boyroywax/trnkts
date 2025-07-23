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
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            {header && <header className='layout-header'>{header}</header>}

            <div
                className='layout-main-wrapper'
                style={{
                    display: 'grid',
                    gridTemplateColumns: sidebar ? '240px 1fr' : '1fr',
                    gap: 'var(--trnkts-spacing-sm)',
                    alignItems: 'start',
                    flex: 1,
                    padding: 'var(--trnkts-spacing-sm)',
                }}
            >
                {sidebar && (
                    <aside style={{ 
                        padding: 'var(--trnkts-spacing-sm)',
                    }}>
                        {sidebar}
                    </aside>
                )}

                <main style={{ 
                    padding: 'var(--trnkts-spacing-sm)',
                }}>
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
