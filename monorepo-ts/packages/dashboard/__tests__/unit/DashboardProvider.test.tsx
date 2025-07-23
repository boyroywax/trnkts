import { act, render, screen } from '@testing-library/react';
import { useDashboard } from '../../src/hooks/useDashboard';
import { DashboardProvider } from '../../src/providers/DashboardProvider';
import { DashboardConfig, Plugin } from '../../src/types';

// Mock config for testing
const mockConfig: DashboardConfig = {
  title: 'Test Dashboard',
  plugins: [],
};

// Test component to use the hook
const TestComponent = () => {
  const { theme, isDark, setIsDark, plugins, registerPlugin } = useDashboard();

  const testPlugin: Plugin = {
    id: 'test-plugin',
    name: 'Test Plugin',
    version: '1.0.0',
    component: () => <div>Test Plugin Component</div>,
  };

  return (
    <div>
      <div data-testid='is-dark'>{isDark.toString()}</div>
      <div data-testid='theme-primary'>{theme.colors.primary}</div>
      <button
        data-testid='toggle-dark'
        onClick={() => setIsDark(!isDark)}
      >
        Toggle Dark Mode
      </button>
      <div data-testid='plugins-count'>{plugins.length}</div>
      <button
        data-testid='register-plugin'
        onClick={() => registerPlugin(testPlugin)}
      >
        Register Plugin
      </button>
    </div>
  );
};

describe('DashboardProvider', () => {
  it('provides default context values', () => {
    render(
      <DashboardProvider config={mockConfig}>
        <TestComponent />
      </DashboardProvider>
    );

    expect(screen.getByTestId('is-dark')).toHaveTextContent('false');
    expect(screen.getByTestId('theme-primary')).toHaveTextContent('#AF4B0E');
    expect(screen.getByTestId('plugins-count')).toHaveTextContent('0');
  });

  it('toggles dark mode correctly', () => {
    render(
      <DashboardProvider config={mockConfig}>
        <TestComponent />
      </DashboardProvider>
    );

    const toggleButton = screen.getByTestId('toggle-dark');
    const isDarkElement = screen.getByTestId('is-dark');

    expect(isDarkElement).toHaveTextContent('false');

    act(() => {
      toggleButton.click();
    });

    expect(isDarkElement).toHaveTextContent('true');

    act(() => {
      toggleButton.click();
    });

    expect(isDarkElement).toHaveTextContent('false');
  });

  it('registers plugins correctly', () => {
    render(
      <DashboardProvider config={mockConfig}>
        <TestComponent />
      </DashboardProvider>
    );

    const registerButton = screen.getByTestId('register-plugin');
    const pluginsCount = screen.getByTestId('plugins-count');

    expect(pluginsCount).toHaveTextContent('0');

    act(() => {
      registerButton.click();
    });

    expect(pluginsCount).toHaveTextContent('1');
  });

  it('provides custom theme when passed in config', () => {
    const customTheme = {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        background: '#0000FF',
        surface: '#FFFF00',
        text: '#FF00FF',
        textSecondary: '#00FFFF',
        border: '#808080',
        error: '#FF4444',
        success: '#44FF44',
        warning: '#FFAA00',
        info: '#0099FF',
        highlight: '#FFEE00',
        interactive: '#FF6600',
        gradient: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
          gold: '#F59E0B',
        },
        backgroundGradient: 'linear-gradient(135deg, #FF0000, #00FF00)',
      },
      typography: {
        fontFamily: 'Test Font',
        monoFontFamily: 'Test Mono',
        fontSize: {
          xs: '10px',
          sm: '12px',
          md: '14px',
          lg: '16px',
          xl: '18px',
          '2xl': '20px',
          '3xl': '24px',
          '4xl': '32px',
        },
        fontWeight: {
          light: 300,
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
        lineHeight: {
          tight: 1.2,
          normal: 1.5,
          relaxed: 1.8,
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
    };

    const configWithTheme = {
      ...mockConfig,
      theme: customTheme,
    };

    render(
      <DashboardProvider config={configWithTheme}>
        <TestComponent />
      </DashboardProvider>
    );

    expect(screen.getByTestId('theme-primary')).toHaveTextContent('#FF0000');
  });

  it('throws error when useDashboard is used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useDashboardContext must be used within a DashboardProvider');

    consoleSpy.mockRestore();
  });

  it('prevents duplicate plugin registration', () => {
    const TestComponentWithDuplicatePlugin = () => {
      const { plugins, registerPlugin } = useDashboard();

      const testPlugin: Plugin = {
        id: 'duplicate-plugin',
        name: 'Duplicate Plugin',
        version: '1.0.0',
        component: () => <div>Duplicate Plugin</div>,
      };

      return (
        <div>
          <div data-testid='plugins-count'>{plugins.length}</div>
          <button
            data-testid='register-duplicate'
            onClick={() => {
              registerPlugin(testPlugin);
              registerPlugin(testPlugin); // Try to register twice
            }}
          >
            Register Duplicate
          </button>
        </div>
      );
    };

    render(
      <DashboardProvider config={mockConfig}>
        <TestComponentWithDuplicatePlugin />
      </DashboardProvider>
    );

    const registerButton = screen.getByTestId('register-duplicate');
    const pluginsCount = screen.getByTestId('plugins-count');

    expect(pluginsCount).toHaveTextContent('0');

    act(() => {
      registerButton.click();
    });

    // Should only register once, even though registerPlugin was called twice
    expect(pluginsCount).toHaveTextContent('1');
  });
});
