import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Header } from '../../src/page/Header';
import { Layout } from '../../src/page/Layout';
import {
  Sidebar,
  SidebarItem,
} from '../../src/page/Sidebar';
import { Widget } from '../../src/page/Widget';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders title when provided', () => {
    const title = 'Test Dashboard';
    render(<Header title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<Header />);

    const heading = screen.queryByRole('heading');
    expect(heading).not.toBeInTheDocument();
  });

  it('renders menu button by default', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });

  it('hides menu button when showMenuButton is false', () => {
    render(<Header showMenuButton={false} />);

    const menuButton = screen.queryByRole('button');
    expect(menuButton).not.toBeInTheDocument();
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const mockOnMenuClick = jest.fn();
    render(<Header onMenuClick={mockOnMenuClick} />);

    const menuButton = screen.getByRole('button');
    menuButton.click();

    expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    const childText = 'Header child content';
    render(
      <Header>
        <div>{childText}</div>
      </Header>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-header-class';
    const { container } = render(<Header className={customClass} />);

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('menu button has proper styling', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button');
    expect(menuButton).toHaveClass('btn-menu');
  });

  it('title has proper styling', () => {
    const title = 'Styled Title';
    render(<Header title={title} />);

    const titleElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(titleElement).toHaveClass('header-title');
  });
});

describe('Layout Component', () => {
  it('renders children correctly', () => {
    const testContent = 'Main content here';
    render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders header when provided', () => {
    const headerContent = 'Header content';
    render(
      <Layout header={<div>{headerContent}</div>}>
        <div>Main content</div>
      </Layout>
    );

    expect(screen.getByText(headerContent)).toBeInTheDocument();
  });

  it('renders sidebar when provided', () => {
    const sidebarContent = 'Sidebar content';
    render(
      <Layout sidebar={<div>{sidebarContent}</div>}>
        <div>Main content</div>
      </Layout>
    );

    expect(screen.getByText(sidebarContent)).toBeInTheDocument();
  });

  it('applies consistent styling', () => {
    const { container } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    const layoutElement = container.firstChild as HTMLElement;
    expect(layoutElement).toHaveClass('dashboard-container');
    expect(layoutElement).toHaveStyle({
      minHeight: '100vh',
      fontFamily: 'var(--trnkts-font-family)',
      color: 'var(--trnkts-text-primary)',
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

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders without header, sidebar, and footer when not provided', () => {
    const { container } = render(
      <Layout>
        <div>Main Content Only</div>
      </Layout>
    );

    expect(screen.getByText('Main Content Only')).toBeInTheDocument();

    const headerElement = container.querySelector('header');
    const asideElement = container.querySelector('aside');
    const footerElement = container.querySelector('footer');

    expect(headerElement).not.toBeInTheDocument();
    expect(asideElement).not.toBeInTheDocument();
    expect(footerElement).not.toBeInTheDocument();
  });
});

describe('Sidebar Component', () => {
  it('renders children correctly', () => {
    const childText = 'Sidebar content';
    render(
      <Sidebar>
        <div>{childText}</div>
      </Sidebar>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-sidebar-class';
    const { container } = render(
      <Sidebar className={customClass}>
        <div>Content</div>
      </Sidebar>
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('has proper navigation structure', () => {
    const { container } = render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const navElement = container.querySelector('nav');
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass('sidebar-nav');
  });
});

describe('SidebarItem Component', () => {
  it('renders title correctly', () => {
    render(<SidebarItem title='Test Item' />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    const icon = <span data-testid='test-icon'>🏠</span>;
    render(
      <SidebarItem
        title='Home'
        icon={icon}
      />
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <SidebarItem
        title='Clickable Item'
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('handles href navigation', () => {
    const href = '/test-route';
    render(
      <SidebarItem
        title='Test Link'
        href={href}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeTruthy();

    // Just test that clicking doesn't throw an error
    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('applies active styles when isActive is true', () => {
    const { container } = render(
      <SidebarItem
        title='Active Item'
        isActive={true}
      />
    );

    const button = container.querySelector('button');
    expect(button).toHaveStyle({
      color: 'rgb(255, 255, 255)',
    });
    
    // Check that the button has the expected classes
    expect(button).toHaveClass('btn-trnkts', 'sidebar-item');
  });

  it('renders children when active', () => {
    const childText = 'Submenu item';
    render(
      <SidebarItem
        title='Parent Item'
        isActive={true}
      >
        <div>{childText}</div>
      </SidebarItem>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('does not render children when inactive', () => {
    const childText = 'Submenu item';
    render(
      <SidebarItem
        title='Parent Item'
        isActive={false}
      >
        <div>{childText}</div>
      </SidebarItem>
    );

    expect(screen.queryByText(childText)).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-item-class';
    const { container } = render(
      <SidebarItem
        title='Test'
        className={customClass}
      />
    );

    expect(container.firstChild).toHaveClass(customClass);
  });
});

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
      <Widget title='Test Widget'>
        <div>{childText}</div>
      </Widget>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-widget-class';
    const { container } = render(
      <Widget
        title='Test Widget'
        className={customClass}
      >
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
      <Widget title='Themed Widget'>
        <div>Content</div>
      </Widget>
    );

    const widget = container.firstChild as HTMLElement;
    const titleElement = widget.querySelector('.widget-header') as HTMLElement;

    // Check that the widget has the glass-card class
    expect(widget).toHaveClass('glass-card');
    
    // Check that title element exists and has proper styling
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle({
      fontSize: 'var(--trnkts-font-size-xl)',
      fontWeight: '600',
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
      <Widget title='Complex Widget'>
        <ComplexChild />
      </Widget>
    );

    expect(screen.getByText('Complex Widget')).toBeInTheDocument();
    expect(screen.getByText('Nested Title')).toBeInTheDocument();
    expect(screen.getByText('Some paragraph text')).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'Action Button',
      })
    ).toBeInTheDocument();
  });
});
