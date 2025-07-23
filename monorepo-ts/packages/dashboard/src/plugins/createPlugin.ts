import type { ComponentType } from 'react';
import type { Plugin, PluginProps } from '../types';

export interface CreatePluginOptions {
    id: string;
    name: string;
    version: string;
    description?: string;
    component: ComponentType<PluginProps>;
    config?: Record<string, any>;
    dependencies?: string[];
    permissions?: string[];
}

export function createPlugin(
    options: CreatePluginOptions
): Plugin {
    return {
        id: options.id,
        name: options.name,
        version: options.version,
        description: options.description || '',
        component: options.component,
        config: options.config || {},
        dependencies: options.dependencies || [],
        permissions: options.permissions || [],
    };
}
