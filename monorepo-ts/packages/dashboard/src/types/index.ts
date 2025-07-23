import type { ReactNode, ComponentType } from 'react';
import type { WidgetProps } from '@trnkts/components';

export interface DashboardConfig {
    title: string;
    theme?: DashboardTheme;
    plugins?: PluginConfig[];
    layout?: LayoutConfig;
    navigation?: NavigationConfig;
}

export interface DashboardTheme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        warning: string;
        error: string;
        info: string;
        highlight: string;
        interactive: string;
        gradient: {
            purple: string;
            pink: string;
            orange: string;
            gold: string;
        };
        backgroundGradient: string;
    };
    darkColors?: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        warning: string;
        error: string;
        info: string;
        highlight: string;
        interactive: string;
        gradient: {
            purple: string;
            pink: string;
            orange: string;
            gold: string;
        };
        backgroundGradient: string;
    };
    typography: {
        fontFamily: string;
        monoFontFamily: string;
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeight: {
            light: number;
            regular: number;
            medium: number;
            semibold: number;
            bold: number;
        };
        lineHeight: {
            tight: number;
            normal: number;
            relaxed: number;
        };
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
    };
    borderRadius: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}

export interface Plugin {
    id: string;
    name: string;
    version: string;
    description?: string;
    component: ComponentType<PluginProps>;
    config?: Record<string, unknown>;
    dependencies?: string[];
    permissions?: string[];
}

export interface PluginConfig {
    id: string;
    enabled: boolean;
    config?: Record<string, unknown>;
    position?: {
        area: 'sidebar' | 'main' | 'header' | 'footer';
        order: number;
    };
}

export interface PluginProps {
    config?: Record<string, unknown>;
    dashboard?: DashboardContextValue;
}

export interface WidgetConfig {
    id: string;
    title: string;
    component: ComponentType<WidgetProps>;
    gridPosition?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    config?: Record<string, unknown>;
}

export interface LayoutConfig {
    sidebar?: {
        enabled: boolean;
        width?: string;
        collapsible?: boolean;
        defaultCollapsed?: boolean;
    };
    header?: {
        enabled: boolean;
        height?: string;
    };
    footer?: {
        enabled: boolean;
        height?: string;
    };
}

export interface NavigationConfig {
    items: NavigationItem[];
}

export interface NavigationItem {
    id: string;
    label: string;
    icon?: ReactNode;
    path?: string;
    children?: NavigationItem[];
    onClick?: () => void;
}

export interface DashboardContextValue {
    config: DashboardConfig;
    theme: DashboardTheme;
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
    plugins: Plugin[];
    activePlugins: PluginConfig[];
    registerPlugin: (plugin: Plugin) => void;
    unregisterPlugin: (pluginId: string) => void;
    enablePlugin: (pluginId: string) => void;
    disablePlugin: (pluginId: string) => void;
    updatePluginConfig: (
        pluginId: string,
        config: Record<string, unknown>
    ) => void;
}
