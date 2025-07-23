import { useDashboard } from './useDashboard';
import type { Plugin, PluginConfig } from '../types';

interface UsePluginReturn {
    plugin: Plugin | undefined;
    config: PluginConfig | undefined;
    isEnabled: boolean;
    enable: () => void;
    disable: () => void;
    updateConfig: (newConfig: Record<string, unknown>) => void;
}

function usePlugin(pluginId: string): UsePluginReturn {
    const {
        plugins,
        activePlugins,
        enablePlugin,
        disablePlugin,
        updatePluginConfig,
    } = useDashboard();

    const plugin = plugins.find(p => p.id === pluginId);
    const config = activePlugins.find(c => c.id === pluginId);
    const isEnabled = config?.enabled ?? false;

    const enable = (): void => enablePlugin(pluginId);
    const disable = (): void => disablePlugin(pluginId);
    const updateConfig = (newConfig: Record<string, unknown>): void =>
        updatePluginConfig(pluginId, newConfig);

    return {
        plugin,
        config,
        isEnabled,
        enable,
        disable,
        updateConfig,
    };
}

export { usePlugin };
