import type { ReactNode } from 'react';

export interface SidebarProps {
    children: ReactNode;
    className?: string;
}

export interface SidebarItemProps {
    title: string;
    icon?: ReactNode;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    children?: ReactNode;
    className?: string;
    isDark?: boolean;
}

export function SidebarItem({
    title,
    icon,
    href,
    onClick,
    isActive = false,
    children,
    className,
    isDark = false,
}: SidebarItemProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            window.location.href = href;
        }
    };

    return (
        <div className={className}>
            <button
                onClick={handleClick}
                className='sidebar-item'
                style={{
                    backgroundColor: isActive
                        ? 'var(--dashboard-primary)'
                        : 'transparent',
                    color: isActive
                        ? 'var(--dashboard-surface)'
                        : isDark
                          ? 'var(--dashboard-dark-text)'
                          : 'var(--dashboard-text)',
                }}
            >
                {icon && (
                    <span className='sidebar-item-icon'>
                        {icon}
                    </span>
                )}
                <span className='sidebar-item-text'>
                    {title}
                </span>
            </button>
            {children && isActive && (
                <div className='sidebar-submenu'>
                    {children}
                </div>
            )}
        </div>
    );
}

export function Sidebar({
    children,
    className,
}: SidebarProps) {
    return (
        <nav className={`sidebar-nav ${className || ''}`}>
            {children}
        </nav>
    );
}
