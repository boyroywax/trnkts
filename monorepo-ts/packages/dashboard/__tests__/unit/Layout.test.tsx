import { render, screen } from '@testing-library/react';
import { Layout } from '@trnkts/components';

describe('Layout Component', () => {
  it('renders children correctly', () => {
    const testContent = 'Test Content';
    render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders header when provided', () => {
    const headerContent = 'Header Content';
    render(
      <Layout header={<div>{headerContent}</div>}>
        <div>Main Content</div>
      </Layout>
    );
    expect(screen.getByText(headerContent)).toBeInTheDocument();
  });

  it('renders sidebar when provided', () => {
    const sidebarContent = 'Sidebar Content';
    render(
      <Layout sidebar={<div>{sidebarContent}</div>}>
        <div>Main Content</div>
      </Layout>
    );
    expect(screen.getByText(sidebarContent)).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    const footerContent = 'Footer Content';
    render(
      <Layout footer={<div>{footerContent}</div>}>
        <div>Main Content</div>
      </Layout>
    );
    expect(screen.getByText(footerContent)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-layout';
    const { container } = render(
      <Layout className={customClass}>
        <div>Content</div>
      </Layout>
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies dark mode styles when isDark is true', () => {
    const { container } = render(
      <Layout isDark={true}>
        <div>Content</div>
      </Layout>
    );

    const layoutElement = container.firstChild as HTMLElement;
    expect(layoutElement).toHaveClass('layout-container');
    expect(layoutElement).toHaveStyle({
      backgroundColor: 'var(--dashboard-dark-background)',
      color: 'var(--dashboard-dark-text)',
    });
  });

  it('renders with proper structure', () => {
    render(
      <Layout
        header={<div>Header</div>}
        sidebar={<div>Sidebar</div>}
        footer={<div>Footer</div>}
      >
        <div>Main Content</div>
      </Layout>
    );

    // Check all sections are present
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders without header, sidebar, and footer when not provided', () => {
    const { container } = render(
      <Layout>
        <div>Main Content Only</div>
      </Layout>
    );

    expect(screen.getByText('Main Content Only')).toBeInTheDocument();

    // Check that header, sidebar, and footer elements are not present
    const headerElement = container.querySelector('header');
    const asideElement = container.querySelector('aside');
    const footerElement = container.querySelector('footer');

    expect(headerElement).not.toBeInTheDocument();
    expect(asideElement).not.toBeInTheDocument();
    expect(footerElement).not.toBeInTheDocument();
  });
});
