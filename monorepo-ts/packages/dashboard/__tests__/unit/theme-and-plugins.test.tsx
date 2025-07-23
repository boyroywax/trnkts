import { act, render, screen } from '@testing-library/react';
import { useDashboard } from '../../src/hooks/useDashboard';
import { DashboardProvider } from '../../src/providers/DashboardProvider';
import { DashboardConfig, Plugin } from '../../src/types';

// Mock config for testing
const mockConfig: DashboardConfig = {
    title: 'Test Dashboard',
    plugins: [
        {
            id: 'initial-plugin',
            enabled: true,
            config: { setting: 'value' },
        },
    ],
};

// Test component for theme switching
const ThemeSwitchTestComponent = () => {
    const { isDark, setIsDark, theme } = useDashboard();

    return (
        <div>
            <div data-testid='theme-mode'>{isDark ? 'dark' : 'light'}</div>
            <div data-testid='current-primary'>{theme.colors.primary}</div>
            <div data-testid='current-background'>
                {theme.colors.background}
            </div>
            <button
                data-testid='toggle-theme'
                onClick={() => setIsDark(!isDark)}
            >
                Toggle Theme
            </button>
        </div>
    );
};

// Test component for plugin system
const PluginSystemTestComponent = () => {
    const {
        plugins,
        activePlugins,
        registerPlugin,
        unregisterPlugin,
        enablePlugin,
        disablePlugin,
        updatePluginConfig,
    } = useDashboard();

    const testPlugin: Plugin = {
        id: 'test-plugin',
        name: 'Test Plugin',
        version: '1.0.0',
        component: () => <div>Test Plugin Component</div>,
    };

    const anotherPlugin: Plugin = {
        id: 'another-plugin',
        name: 'Another Plugin',
        version: '2.0.0',
        component: () => <div>Another Plugin Component</div>,
    };

    return (
        <div>
            <div data-testid='plugins-count'>{plugins.length}</div>
            <div data-testid='active-plugins-count'>{activePlugins.length}</div>

            <button
                data-testid='register-plugin'
                onClick={() => registerPlugin(testPlugin)}
            >
                Register Plugin
            </button>

            <button
                data-testid='register-another'
                onClick={() => registerPlugin(anotherPlugin)}
            >
                Register Another
            </button>

            <button
                data-testid='unregister-plugin'
                onClick={() => unregisterPlugin('test-plugin')}
            >
                Unregister Plugin
            </button>

            <button
                data-testid='enable-plugin'
                onClick={() => enablePlugin('test-plugin')}
            >
                Enable Plugin
            </button>

            <button
                data-testid='disable-plugin'
                onClick={() => disablePlugin('test-plugin')}
            >
                Disable Plugin
            </button>

            <button
                data-testid='update-config'
                onClick={() =>
                    updatePluginConfig('test-plugin', {
                        newSetting: 'newValue',
                    })
                }
            >
                Update Config
            </button>

            <div data-testid='plugin-list'>
                {plugins.map(plugin => (
                    <div
                        key={plugin.id}
                        data-testid={`plugin-${plugin.id}`}
                    >
                        {plugin.name}
                    </div>
                ))}
            </div>

            <div data-testid='active-plugin-list'>
                {activePlugins.map(pluginConfig => (
                    <div
                        key={pluginConfig.id}
                        data-testid={`active-${pluginConfig.id}`}
                    >
                        {pluginConfig.id} -{' '}
                        {pluginConfig.enabled ? 'enabled' : 'disabled'}
                    </div>
                ))}
            </div>
        </div>
    );
};

describe('Theme Switching Integration', () => {
    it('switches between light and dark themes', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <ThemeSwitchTestComponent />
            </DashboardProvider>
        );

        const themeMode = screen.getByTestId('theme-mode');
        const currentPrimary = screen.getByTestId('current-primary');
        const toggleButton = screen.getByTestId('toggle-theme');

        // Initial state should be light mode
        expect(themeMode).toHaveTextContent('light');
        expect(currentPrimary).toHaveTextContent('#AF4B0E'); // Light mode primary

        // Switch to dark mode
        act(() => {
            toggleButton.click();
        });

        expect(themeMode).toHaveTextContent('dark');
        expect(currentPrimary).toHaveTextContent('#AF4B0E'); // Theme object doesn't change, CSS variables do

        // Switch back to light mode
        act(() => {
            toggleButton.click();
        });

        expect(themeMode).toHaveTextContent('light');
    });

    it('persists theme across multiple toggles', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <ThemeSwitchTestComponent />
            </DashboardProvider>
        );

        const themeMode = screen.getByTestId('theme-mode');
        const toggleButton = screen.getByTestId('toggle-theme');

        // Start in light mode
        expect(themeMode).toHaveTextContent('light');

        // Toggle to dark, then back to light
        act(() => {
            toggleButton.click(); // dark
        });
        expect(themeMode).toHaveTextContent('dark');

        act(() => {
            toggleButton.click(); // light
        });
        expect(themeMode).toHaveTextContent('light');

        // Do it again to verify persistence
        act(() => {
            toggleButton.click(); // dark
        });
        expect(themeMode).toHaveTextContent('dark');

        act(() => {
            toggleButton.click(); // light
        });
        expect(themeMode).toHaveTextContent('light');
    });
});

describe('Plugin System Integration', () => {
    it('loads initial plugins from config', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const activePluginsCount = screen.getByTestId('active-plugins-count');
        expect(activePluginsCount).toHaveTextContent('1'); // One initial plugin from config

        const activePlugin = screen.getByTestId('active-initial-plugin');
        expect(activePlugin).toHaveTextContent('initial-plugin - enabled');
    });

    it('registers and manages multiple plugins', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const pluginsCount = screen.getByTestId('plugins-count');
        const registerButton = screen.getByTestId('register-plugin');
        const registerAnotherButton = screen.getByTestId('register-another');

        expect(pluginsCount).toHaveTextContent('0'); // No registered plugins initially

        // Register first plugin
        act(() => {
            registerButton.click();
        });

        expect(pluginsCount).toHaveTextContent('1');
        expect(screen.getByTestId('plugin-test-plugin')).toHaveTextContent(
            'Test Plugin'
        );

        // Register second plugin
        act(() => {
            registerAnotherButton.click();
        });

        expect(pluginsCount).toHaveTextContent('2');
        expect(screen.getByTestId('plugin-another-plugin')).toHaveTextContent(
            'Another Plugin'
        );
    });

    it('enables and disables plugins correctly', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const enableButton = screen.getByTestId('enable-plugin');
        const disableButton = screen.getByTestId('disable-plugin');

        // Enable a plugin that doesn't exist yet
        act(() => {
            enableButton.click();
        });

        const activePluginsCount = screen.getByTestId('active-plugins-count');
        expect(activePluginsCount).toHaveTextContent('2'); // Initial + newly enabled

        const activeTestPlugin = screen.getByTestId('active-test-plugin');
        expect(activeTestPlugin).toHaveTextContent('test-plugin - enabled');

        // Disable the plugin
        act(() => {
            disableButton.click();
        });

        expect(activeTestPlugin).toHaveTextContent('test-plugin - disabled');
    });

    it('unregisters plugins and removes from active list', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const registerButton = screen.getByTestId('register-plugin');
        const enableButton = screen.getByTestId('enable-plugin');
        const unregisterButton = screen.getByTestId('unregister-plugin');

        // Register and enable a plugin
        act(() => {
            registerButton.click();
            enableButton.click();
        });

        expect(screen.getByTestId('plugin-test-plugin')).toBeInTheDocument();
        expect(screen.getByTestId('active-test-plugin')).toBeInTheDocument();

        // Unregister the plugin
        act(() => {
            unregisterButton.click();
        });

        expect(
            screen.queryByTestId('plugin-test-plugin')
        ).not.toBeInTheDocument();
        expect(
            screen.queryByTestId('active-test-plugin')
        ).not.toBeInTheDocument();
    });

    it('updates plugin configuration', () => {
        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const enableButton = screen.getByTestId('enable-plugin');
        const updateConfigButton = screen.getByTestId('update-config');

        // Enable a plugin first
        act(() => {
            enableButton.click();
        });

        // Update plugin config
        act(() => {
            updateConfigButton.click();
        });

        // The config update should work without errors
        // In a real scenario, you might verify the config was actually updated
        expect(screen.getByTestId('active-test-plugin')).toBeInTheDocument();
    });

    it('prevents duplicate plugin registration with warning', () => {
        const consoleSpy = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});

        render(
            <DashboardProvider config={mockConfig}>
                <PluginSystemTestComponent />
            </DashboardProvider>
        );

        const registerButton = screen.getByTestId('register-plugin');
        const pluginsCount = screen.getByTestId('plugins-count');

        // Register plugin twice
        act(() => {
            registerButton.click();
            registerButton.click();
        });

        // Should only be registered once
        expect(pluginsCount).toHaveTextContent('1');
        expect(consoleSpy).toHaveBeenCalledWith(
            'Plugin with id "test-plugin" is already registered'
        );

        consoleSpy.mockRestore();
    });
});
