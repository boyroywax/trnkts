// Main dashboard exports
export { Dashboard } from './components/Dashboard';
export { DashboardProvider } from './providers/DashboardProvider';
export { PluginManager } from './plugins/PluginManager';

// Component exports
export { Sidebar } from './components/Sidebar';
export { Header } from './components/Header';
export { Widget } from './components/Widget';
export { Layout } from './components/Layout';

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
