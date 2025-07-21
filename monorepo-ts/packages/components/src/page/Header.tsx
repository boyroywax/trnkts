import { Menu } from 'lucide-react';
import React from 'react';

export interface HeaderProps {
    title?: string;
    onMenuClick?: () => void;
    showMenuButton?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export function Header({
    title,
    onMenuClick,
    showMenuButton = true,
    children,
    className,
}: HeaderProps) {
    return (
        <header
            className={`header ${className || ''}`}
            style={{
                backgroundColor: 'var(--dashboard-surface)',
                borderColor: 'var(--dashboard-border)',
            }}
        >
            <div className='flex-items-center space-x-4'>
                {showMenuButton && (
                    <button
                        onClick={onMenuClick}
                        className='btn-menu'
                        style={{
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Menu size={20} />
                    </button>
                )}

                {title && (
                    <h1
                        className='header-title'
                        style={{
                            color: 'var(--dashboard-text)',
                        }}
                    >
                        {title}
                    </h1>
                )}
            </div>

            <div className='flex-items-center space-x-4'>
                {children}
            </div>
        </header>
    );
}
