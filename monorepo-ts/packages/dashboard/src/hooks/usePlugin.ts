import { useDashboard } from './useDashboard';

export function usePlugin(pluginId: string) {
    const {
        plugins,
        activePlugins,
        enablePlugin,
        disablePlugin,
        updatePluginConfig,
    } = useDashboard();

    const plugin = plugins.find(p => p.id === pluginId);
    const config = activePlugins.find(
        c => c.id === pluginId
    );
    const isEnabled = config?.enabled ?? false;

    const enable = () => enablePlugin(pluginId);
    const disable = () => disablePlugin(pluginId);
    const updateConfig = (newConfig: Record<string, any>) =>
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
