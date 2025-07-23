import type { Plugin, PluginConfig } from '../types';

class PluginManager {
    private plugins: Map<string, Plugin> = new Map();
    private activeConfigs: Map<string, PluginConfig> = new Map();

    registerPlugin(plugin: Plugin): void {
        if (this.plugins.has(plugin.id)) {
            // Plugin already registered, skip silently or could use a logger here
            return;
        }

        // Check dependencies
        if (plugin.dependencies) {
            for (const depId of plugin.dependencies) {
                if (!this.plugins.has(depId)) {
                    throw new Error(
                        `Plugin "${plugin.id}" depends on "${depId}" which is not registered`
                    );
                }
            }
        }

        this.plugins.set(plugin.id, plugin);
    }

    unregisterPlugin(pluginId: string): void {
        // Check if any other plugins depend on this one
        for (const [id, plugin] of this.plugins) {
            if (plugin.dependencies?.includes(pluginId)) {
                throw new Error(
                    `Cannot unregister plugin "${pluginId}" because "${id}" depends on it`
                );
            }
        }

        this.plugins.delete(pluginId);
        this.activeConfigs.delete(pluginId);
    }

    getPlugin(pluginId: string): Plugin | undefined {
        return this.plugins.get(pluginId);
    }

    getAllPlugins(): Plugin[] {
        return Array.from(this.plugins.values());
    }

    enablePlugin(pluginId: string, config?: Record<string, unknown>): void {
        const plugin = this.plugins.get(pluginId);
        if (!plugin) {
            throw new Error(`Plugin "${pluginId}" is not registered`);
        }

        this.activeConfigs.set(pluginId, {
            id: pluginId,
            enabled: true,
            config: {
                ...plugin.config,
                ...config,
            },
        });
    }

    disablePlugin(pluginId: string): void {
        const activeConfig = this.activeConfigs.get(pluginId);
        if (activeConfig) {
            this.activeConfigs.set(pluginId, {
                ...activeConfig,
                enabled: false,
            });
        }
    }

    updatePluginConfig(
        pluginId: string,
        config: Record<string, unknown>
    ): void {
        const activeConfig = this.activeConfigs.get(pluginId);
        if (activeConfig) {
            this.activeConfigs.set(pluginId, {
                ...activeConfig,
                config: {
                    ...activeConfig.config,
                    ...config,
                },
            });
        }
    }

    getActivePlugins(): PluginConfig[] {
        return Array.from(this.activeConfigs.values()).filter(
            config => config.enabled
        );
    }

    getPluginConfig(pluginId: string): PluginConfig | undefined {
        return this.activeConfigs.get(pluginId);
    }

    isPluginEnabled(pluginId: string): boolean {
        const config = this.activeConfigs.get(pluginId);
        return config?.enabled ?? false;
    }

    getPluginsByArea(area: string): Array<{
        plugin: Plugin;
        config: PluginConfig;
    }> {
        return this.getActivePlugins()
            .filter(config => config.position?.area === area)
            .sort((a, b) => (a.position?.order ?? 0) - (b.position?.order ?? 0))
            .map(config => {
                const plugin = this.plugins.get(config.id);
                return plugin ? { plugin, config } : null;
            })
            .filter(
                (
                    item
                ): item is {
                    plugin: Plugin;
                    config: PluginConfig;
                } => item !== null
            );
    }
}

export { PluginManager };
