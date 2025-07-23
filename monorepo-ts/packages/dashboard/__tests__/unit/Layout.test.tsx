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

  it('renders header when provided', () => {
    const headerContent = 'Header Content';
    render(
      <Layout header={<div>{headerContent}</div>}>
        <div>Main Content</div>
      </Layout>
    );
    expect(screen.getByText(headerContent)).toBeInTheDocument();
  });

  it('renders with dashboard-container class', () => {
    const { container } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    );
    expect(container.firstChild).toHaveClass('dashboard-container');
  });

  it('applies correct grid layout when sidebar is provided', () => {
    const { container } = render(
      <Layout sidebar={<div>Sidebar</div>}>
        <div>Content</div>
      </Layout>
    );

    const mainWrapper = container.querySelector('.layout-main-wrapper') as HTMLElement;
    expect(mainWrapper).toHaveStyle({
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
    });
  });

  it('renders with proper structure', () => {
    render(
      <Layout
        header={<div>Header</div>}
        sidebar={<div>Sidebar</div>}
      >
        <div>Main Content</div>
      </Layout>
    );

    // Check all sections are present
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders without header and sidebar when not provided', () => {
    const { container } = render(
      <Layout>
        <div>Main Content Only</div>
      </Layout>
    );

    expect(screen.getByText('Main Content Only')).toBeInTheDocument();

    // Check that header and sidebar elements are not present
    const headerElement = container.querySelector('header');
    const asideElement = container.querySelector('aside');

    expect(headerElement).not.toBeInTheDocument();
    expect(asideElement).not.toBeInTheDocument();
  });
});
