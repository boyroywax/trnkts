import React, { type ReactNode } from 'react';

interface WidgetProps {
    title: string;
    children: ReactNode;
    className?: string;
    config?: Record<string, unknown>;
}

function Widget({
    title,
    children,
    className,
}: WidgetProps): React.JSX.Element {
    return (
        <div
            className={`glass-card ${className || ''}`}
            style={{
                marginBottom: 'var(--trnkts-spacing-md)',
                color: 'var(--trnkts-text-primary)',
            }}
        >
            <div
                className='widget-header gradient-text'
                style={{
                    fontSize: 'var(--trnkts-font-size-xl)',
                    fontWeight: '600',
                    marginBottom: 'var(--trnkts-spacing-sm)',
                }}
            >
                {title}
            </div>
            <div 
                className="widget-content"
                style={{ 
                    color: 'var(--trnkts-text-primary)',
                }}
            >
                {children}
            </div>
        </div>
    );
}

export { type WidgetProps, Widget };
