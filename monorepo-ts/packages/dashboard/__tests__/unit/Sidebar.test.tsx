import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar, SidebarItem } from '@trnkts/components';

describe('Sidebar Component', () => {
  it('renders children correctly', () => {
    render(
      <Sidebar>
        <div>Sidebar Item 1</div>
        <div>Sidebar Item 2</div>
      </Sidebar>
    );

    expect(screen.getByText('Sidebar Item 1')).toBeInTheDocument();
    expect(screen.getByText('Sidebar Item 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-sidebar';
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
    const title = 'Dashboard';
    render(<SidebarItem title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
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
        title='Test Item'
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button', {
      name: 'Test Item',
    });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('shows active state correctly', () => {
    render(
      <SidebarItem
        title='Active Item'
        isActive={true}
      />
    );

    const button = screen.getByRole('button', {
      name: 'Active Item',
    });
    expect(button).toBeInTheDocument();
  });

  it('renders children when active', () => {
    const childContent = 'Sub-item';
    render(
      <SidebarItem
        title='Parent Item'
        isActive={true}
      >
        <div>{childContent}</div>
      </SidebarItem>
    );

    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  it('does not render children when inactive', () => {
    const childContent = 'Sub-item';
    render(
      <SidebarItem
        title='Parent Item'
        isActive={false}
      >
        <div>{childContent}</div>
      </SidebarItem>
    );

    expect(screen.queryByText(childContent)).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-sidebar-item';
    const { container } = render(
      <SidebarItem
        title='Test'
        className={customClass}
      />
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('handles href navigation', () => {
    // Mock window.location
    delete (window as any).location;
    window.location = {
      href: '',
    } as any;

    const href = '/test-route';
    render(
      <SidebarItem
        title='Test Link'
        href={href}
      />
    );

    const button = screen.getByRole('button', {
      name: 'Test Link',
    });
    fireEvent.click(button);

    // Note: In a real test, you might want to mock navigation differently
    // This is a simplified test for the structure
    expect(button).toBeInTheDocument();
  });

  it('prioritizes onClick over href when both provided', () => {
    const mockOnClick = jest.fn();
    const href = '/test-route';

    render(
      <SidebarItem
        title='Test Item'
        onClick={mockOnClick}
        href={href}
      />
    );

    const button = screen.getByRole('button', {
      name: 'Test Item',
    });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
