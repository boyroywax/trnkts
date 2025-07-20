import { render, screen } from '@testing-library/react';
import { Widget } from '../../src/components/Widget';

describe('Widget Component', () => {
  it('renders title correctly', () => {
    const title = 'Test Widget';
    render(
      <Widget title={title}>
        <div>Widget content</div>
      </Widget>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const childText = 'Widget content goes here';
    render(
      <Widget title="Test Widget">
        <div>{childText}</div>
      </Widget>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-widget-class';
    const { container } = render(
      <Widget title="Test Widget" className={customClass}>
        <div>Content</div>
      </Widget>
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('has proper structure with title and content sections', () => {
    const title = 'Widget Title';
    const content = 'Widget Content';

    const { container } = render(
      <Widget title={title}>
        <div>{content}</div>
      </Widget>
    );

    // Check that the widget has the expected structure
    const widget = container.firstChild as HTMLElement;
    expect(widget).toBeInTheDocument();

    // Check title section
    const titleElement = widget.querySelector('div:first-child');
    expect(titleElement).toHaveTextContent(title);
    expect(titleElement).toHaveClass('widget-header');

    // Check content section
    const contentElement = widget.querySelector('div:last-child');
    expect(contentElement).toHaveTextContent(content);
  });

  it('applies CSS custom properties for theming', () => {
    const { container } = render(
      <Widget title="Themed Widget">
        <div>Content</div>
      </Widget>
    );

    const widget = container.firstChild as HTMLElement;
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
      <Widget title="Complex Widget">
        <ComplexChild />
      </Widget>
    );

    expect(screen.getByText('Complex Widget')).toBeInTheDocument();
    expect(screen.getByText('Nested Title')).toBeInTheDocument();
    expect(screen.getByText('Some paragraph text')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();
  });
});
