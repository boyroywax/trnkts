import { render, screen } from '@testing-library/react';
import { Widget } from '../../src/components/Widget';
import { DashboardProvider } from '../../src/providers/DashboardProvider';
import { DashboardConfig } from '../../src/types';

// Mock config for testing
const mockConfig: DashboardConfig = {
  title: 'Test Dashboard',
  plugins: [],
};

// Wrapper component to provide context
const WidgetWrapper = ({ children }: { children: React.ReactNode }) => (
  <DashboardProvider config={mockConfig}>
    {children}
  </DashboardProvider>
);

describe('Widget Component', () => {
  it('renders title correctly', () => {
    const title = 'Test Widget';
    render(
      <WidgetWrapper>
        <Widget title={title}>
          <div>Widget content</div>
        </Widget>
      </WidgetWrapper>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const childText = 'Widget content goes here';
    render(
      <WidgetWrapper>
        <Widget title="Test Widget">
          <div>{childText}</div>
        </Widget>
      </WidgetWrapper>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-widget-class';
    const { container } = render(
      <WidgetWrapper>
        <Widget title="Test Widget" className={customClass}>
          <div>Content</div>
        </Widget>
      </WidgetWrapper>
    );

    expect(container.firstChild?.firstChild).toHaveClass(customClass);
  });

  it('renders with config prop', () => {
    const config = {
      backgroundColor: '#f0f0f0',
      customSetting: 'test-value'
    };

    render(
      <WidgetWrapper>
        <Widget title="Configured Widget" config={config}>
          <div>Configured content</div>
        </Widget>
      </WidgetWrapper>
    );

    expect(screen.getByText('Configured Widget')).toBeInTheDocument();
    expect(screen.getByText('Configured content')).toBeInTheDocument();
  });

  it('has proper structure with title and content sections', () => {
    const title = 'Widget Title';
    const content = 'Widget Content';

    const { container } = render(
      <WidgetWrapper>
        <Widget title={title}>
          <div>{content}</div>
        </Widget>
      </WidgetWrapper>
    );

    // Check that the widget has the expected structure
    const widget = container.firstChild?.firstChild as HTMLElement;
    expect(widget).toBeInTheDocument();

    // Check title section
    const titleElement = widget.querySelector('div:first-child');
    expect(titleElement).toHaveTextContent(title);
    expect(titleElement).toHaveClass('font-medium', 'text-gray-900', 'mb-3');

    // Check content section
    const contentElement = widget.querySelector('div:last-child');
    expect(contentElement).toHaveTextContent(content);
  });

  it('applies CSS custom properties for theming', () => {
    const { container } = render(
      <WidgetWrapper>
        <Widget title="Themed Widget">
          <div>Content</div>
        </Widget>
      </WidgetWrapper>
    );

    const widget = container.firstChild?.firstChild as HTMLElement;
    const titleElement = widget.querySelector('div:first-child') as HTMLElement;

    // Check that CSS custom properties are applied
    expect(widget).toHaveStyle({
      padding: 'var(--dashboard-spacing-md)',
      borderColor: 'var(--dashboard-border)',
      backgroundColor: 'var(--dashboard-surface)',
    });

    expect(titleElement).toHaveStyle({
      color: 'var(--dashboard-text)',
      fontSize: 'var(--dashboard-font-lg)',
    });
  });

  it('renders complex children correctly', () => {
    const ComplexChild = () => (
      <div>
        <h3>Nested Title</h3>
        <p>Some paragraph text</p>
        <button>Action Button</button>
      </div>
    );

    render(
      <WidgetWrapper>
        <Widget title="Complex Widget">
          <ComplexChild />
        </Widget>
      </WidgetWrapper>
    );

    expect(screen.getByText('Complex Widget')).toBeInTheDocument();
    expect(screen.getByText('Nested Title')).toBeInTheDocument();
    expect(screen.getByText('Some paragraph text')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();
  });
});
