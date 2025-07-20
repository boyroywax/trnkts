import { ReactNode } from 'react';
import { useDashboard } from '../hooks/useDashboard';

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
}

export function SidebarItem({
  title,
  icon,
  href,
  onClick,
  isActive = false,
  children,
  className
}: SidebarItemProps) {
  const { theme, isDark } = useDashboard();

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
        className="sidebar-item"
        style={{
          backgroundColor: isActive
            ? (isDark ? theme.darkColors?.primary : theme.colors.primary)
            : 'transparent',
          color: isActive
            ? (isDark ? theme.darkColors?.surface : theme.colors.surface)
            : (isDark ? theme.darkColors?.text : theme.colors.text),
        }}
      >
        {icon && <span className="sidebar-item-icon">{icon}</span>}
        <span className="sidebar-item-text">{title}</span>
      </button>
      {children && isActive && (
        <div className="sidebar-submenu">
          {children}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ children, className }: SidebarProps) {
  return (
    <nav className={`sidebar-nav ${className || ''}`}>
      {children}
    </nav>
  );
}
