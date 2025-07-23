import type { ReactNode } from 'react';

interface SidebarProps {
    children: ReactNode;
    className?: string;
}

interface SidebarItemProps {
    title: string;
    icon?: ReactNode;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    children?: ReactNode;
    className?: string;
}

function SidebarItem({
    title,
    icon,
    href,
    onClick,
    isActive = false,
    children,
    className,
}: SidebarItemProps): React.JSX.Element {
    const handleClick = (): void => {
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
                className='btn-trnkts sidebar-item'
                style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    marginBottom: 'var(--trnkts-spacing-xs)',
                    backgroundColor: isActive
                        ? 'var(--trnkts-accent-orange)'
                        : 'rgba(175, 75, 14, 0.1)',
                    color: isActive ? 'white' : 'var(--trnkts-accent-orange)',
                    border: isActive
                        ? '2px solid var(--trnkts-accent-orange)'
                        : '2px solid rgba(175, 75, 14, 0.2)',
                }}
            >
                {icon && <span className='sidebar-item-icon'>{icon}</span>}
                <span className='sidebar-item-text'>{title}</span>
            </button>
            {children && isActive && (
                <div
                    className='sidebar-submenu'
                    style={{
                        marginLeft: 'var(--trnkts-spacing-sm)',
                        paddingLeft: 'var(--trnkts-spacing-sm)',
                        borderLeft: '2px solid rgba(175, 75, 14, 0.2)',
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

function Sidebar({ children, className }: SidebarProps): React.JSX.Element {
    return (
        <nav
            className={`sidebar-nav ${className || ''}`}
            style={{
                padding: 'var(--trnkts-spacing-md)',
            }}
        >
            {children}
        </nav>
    );
}

export { type SidebarProps, type SidebarItemProps, SidebarItem, Sidebar };
