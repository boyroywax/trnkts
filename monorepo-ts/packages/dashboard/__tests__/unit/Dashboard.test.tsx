import { render, screen } from '@testing-library/react';
import { Dashboard } from '../../src/components/Dashboard';
import type { DashboardConfig } from '../../src/types';

// Mock the useDashboard hook
jest.mock('../src/hooks/useDashboard', () => ({
  useDashboard: () => ({
    theme: {
      colors: {
        primary: '#AF4B0E',
        secondary: '#666666',
        background: '#FFE5D9',
        surface: '#FFFFFF',
        text: '#333333',
        textSecondary: '#666666',
        border: '#E0E0E0',
        success: '#00E676',
        warning: '#FF6B35',
        error: '#FF1493',
        info: '#00BCD4',
        highlight: '#FFEB3B',
        interactive: '#7B68EE',
        gradient: {
          purple: '#833AB4',
          pink: '#E1306C',
          orange: '#F77737',
          gold: '#FCAF45',
        },
        backgroundGradient: 'linear-gradient(135deg, #89CFF0, #A855F7, #EC4899, #F97316, #FCD34D)',
      },
      typography: {
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        monoFontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
          '4xl': '2.5rem',
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
          relaxed: 1.75,
        },
      },
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
    isDark: false,
    setIsDark: jest.fn(),
    config: {
      title: 'Test Dashboard',
    },
    plugins: [],
    activePlugins: [],
    registerPlugin: jest.fn(),
    unregisterPlugin: jest.fn(),
    enablePlugin: jest.fn(),
    disablePlugin: jest.fn(),
    updatePluginConfig: jest.fn(),
  }),
}));

describe('Dashboard Component', () => {
  const mockConfig: DashboardConfig = {
    title: 'Test Dashboard',
    theme: undefined,
    plugins: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Dashboard config={mockConfig} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('displays the dashboard title', () => {
    render(<Dashboard config={mockConfig} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dashboard');
  });

  it('renders children when provided', () => {
    const testContent = 'Test Content';
    render(
      <Dashboard config={mockConfig}>
        <div>{testContent}</div>
      </Dashboard>
    );
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-dashboard-class';
    const { container } = render(
      <Dashboard config={mockConfig} className={customClass} />
    );
    expect(container.firstChild?.firstChild).toHaveClass(customClass);
  });

  it('renders with theme context provided', () => {
    render(<Dashboard config={mockConfig} />);
    // Check that the component renders without throwing context errors
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
