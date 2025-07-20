// Main dashboard exports
export { Dashboard } from './components/Dashboard';
export { DashboardProvider } from './providers/DashboardProvider';
export { PluginManager } from './plugins/PluginManager';

// Re-export components from components library
export { Sidebar, SidebarItem, Header, Widget, Layout } from '@trnkts/components';
export type { SidebarProps, SidebarItemProps, HeaderProps, WidgetProps, LayoutProps } from '@trnkts/components';

// Plugin system exports
export { createPlugin } from './plugins/createPlugin';
export { usePlugin } from './hooks/usePlugin';
export { useDashboard } from './hooks/useDashboard';

// Type exports
export type {
  DashboardConfig,
  Plugin,
  PluginConfig,
  WidgetConfig,
  DashboardTheme,
} from './types';

// Utility exports
export { defaultTheme } from './theme/defaultTheme';
export { cn } from './utils/cn';
