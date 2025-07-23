import type { ReactNode } from 'react';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { defaultTheme } from '../theme/defaultTheme';
import type {
  DashboardConfig,
  DashboardContextValue,
  Plugin,
  PluginConfig,
} from '../types';

const DashboardContext = createContext<DashboardContextValue | null>(null);

interface DashboardProviderProps {
  config: DashboardConfig;
  children: ReactNode;
}

function DashboardProvider({
  config,
  children,
}: DashboardProviderProps): React.JSX.Element {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [activePlugins, setActivePlugins] = useState<PluginConfig[]>(
    config.plugins || []
  );
  const [isDark, setIsDark] = useState<boolean>(false);

  const theme = config.theme || defaultTheme;

  const registerPlugin = useCallback((plugin: Plugin) => {
    setPlugins(prev => {
      const exists = prev.find(p => p.id === plugin.id);
      if (exists) {
        console.warn(`Plugin with id "${plugin.id}" is already registered`);
        return prev;
      }
      return [...prev, plugin];
    });
  }, []);

  const unregisterPlugin = useCallback((pluginId: string) => {
    setPlugins(prev => prev.filter(p => p.id !== pluginId));
    setActivePlugins(prev => prev.filter(p => p.id !== pluginId));
  }, []);

  const enablePlugin = useCallback((pluginId: string) => {
    setActivePlugins(prev => {
      const exists = prev.find(p => p.id === pluginId);
      if (exists) {
        return prev.map(p => (p.id === pluginId ? { ...p, enabled: true } : p));
      }
      return [
        ...prev,
        {
          id: pluginId,
          enabled: true,
        },
      ];
    });
  }, []);

  const disablePlugin = useCallback((pluginId: string) => {
    setActivePlugins(prev =>
      prev.map(p => (p.id === pluginId ? { ...p, enabled: false } : p))
    );
  }, []);

  const updatePluginConfig = useCallback(
    (pluginId: string, config: Record<string, unknown>) => {
      setActivePlugins(prev =>
        prev.map(p =>
          p.id === pluginId
            ? {
                ...p,
                config: {
                  ...p.config,
                  ...config,
                },
              }
            : p
        )
      );
    },
    []
  );

  const contextValue: DashboardContextValue = {
    config,
    theme,
    isDark,
    setIsDark,
    plugins,
    activePlugins,
    registerPlugin,
    unregisterPlugin,
    enablePlugin,
    disablePlugin,
    updatePluginConfig,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      <div
        style={
          {
            // Light mode colors
            '--dashboard-primary': theme.colors.primary,
            '--dashboard-secondary': theme.colors.secondary,
            '--dashboard-background': theme.colors.background,
            '--dashboard-surface': theme.colors.surface,
            '--dashboard-text': theme.colors.text,
            '--dashboard-text-secondary': theme.colors.textSecondary,
            '--dashboard-border': theme.colors.border,
            '--dashboard-success': theme.colors.success,
            '--dashboard-warning': theme.colors.warning,
            '--dashboard-error': theme.colors.error,
            '--dashboard-info': theme.colors.info,
            '--dashboard-highlight': theme.colors.highlight,
            '--dashboard-interactive': theme.colors.interactive,

            // Dark mode colors
            '--dashboard-dark-primary':
              theme.darkColors?.primary || theme.colors.primary,
            '--dashboard-dark-secondary':
              theme.darkColors?.secondary || theme.colors.secondary,
            '--dashboard-dark-background':
              theme.darkColors?.background || theme.colors.background,
            '--dashboard-dark-surface':
              theme.darkColors?.surface || theme.colors.surface,
            '--dashboard-dark-text':
              theme.darkColors?.text || theme.colors.text,
            '--dashboard-dark-text-secondary':
              theme.darkColors?.textSecondary || theme.colors.textSecondary,
            '--dashboard-dark-border':
              theme.darkColors?.border || theme.colors.border,

            // Typography
            '--dashboard-font-family': theme.typography.fontFamily,
            '--dashboard-font-mono': theme.typography.monoFontFamily,

            // Spacing
            '--dashboard-spacing-xs': theme.spacing.xs,
            '--dashboard-spacing-sm': theme.spacing.sm,
            '--dashboard-spacing-md': theme.spacing.md,
            '--dashboard-spacing-lg': theme.spacing.lg,
            '--dashboard-spacing-xl': theme.spacing.xl,
            '--dashboard-spacing-2xl': theme.spacing['2xl'],
            '--dashboard-spacing-3xl': theme.spacing['3xl'],

            // Border radius
            '--dashboard-radius-sm': theme.borderRadius.sm,
            '--dashboard-radius-md': theme.borderRadius.md,
            '--dashboard-radius-lg': theme.borderRadius.lg,
            '--dashboard-radius-xl': theme.borderRadius.xl,

            // Shadows
            '--dashboard-shadow-sm': theme.shadows.sm,
            '--dashboard-shadow-md': theme.shadows.md,
            '--dashboard-shadow-lg': theme.shadows.lg,
            '--dashboard-shadow-xl': theme.shadows.xl,

            // Gradient colors
            '--dashboard-gradient-purple': theme.colors.gradient.purple,
            '--dashboard-gradient-pink': theme.colors.gradient.pink,
            '--dashboard-gradient-orange': theme.colors.gradient.orange,
            '--dashboard-gradient-gold': theme.colors.gradient.gold,
            '--dashboard-background-gradient': theme.colors.backgroundGradient,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </DashboardContext.Provider>
  );
}

function useDashboardContext(): DashboardContextValue {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider'
    );
  }
  return context;
}

export { type DashboardProviderProps, DashboardProvider, useDashboardContext };
