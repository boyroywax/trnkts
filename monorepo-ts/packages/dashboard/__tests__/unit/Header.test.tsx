import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '@trnkts/components';
import { DashboardProvider } from '../../src/providers/DashboardProvider';
import { DashboardConfig } from '../../src/types';

// Mock config for testing
const mockConfig: DashboardConfig = {
  title: 'Test Dashboard',
  plugins: [],
};

// Wrapper component to provide context
const HeaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <DashboardProvider config={mockConfig}>{children}</DashboardProvider>
);

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: ({ size }: { size?: number }) => (
    <svg
      data-testid='menu-icon'
      width={size}
      height={size}
    >
      <rect
        width='100%'
        height='100%'
      />
    </svg>
  ),
  X: ({ size }: { size?: number }) => (
    <svg
      data-testid='x-icon'
      width={size}
      height={size}
    >
      <rect
        width='100%'
        height='100%'
      />
    </svg>
  ),
}));

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    const title = 'Dashboard Title';
    render(
      <HeaderWrapper>
        <Header title={title} />
      </HeaderWrapper>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(title);
  });

  it('does not render title when not provided', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders menu button by default', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('hides menu button when showMenuButton is false', () => {
    render(
      <HeaderWrapper>
        <Header showMenuButton={false} />
      </HeaderWrapper>
    );

    expect(screen.queryByTestId('menu-icon')).not.toBeInTheDocument();
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const mockOnMenuClick = jest.fn();
    render(
      <HeaderWrapper>
        <Header onMenuClick={mockOnMenuClick} />
      </HeaderWrapper>
    );

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    expect(mockOnMenuClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    const childText = 'Header Action';
    render(
      <HeaderWrapper>
        <Header>
          <button>{childText}</button>
        </Header>
      </HeaderWrapper>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-header-class';
    const { container } = render(
      <HeaderWrapper>
        <Header className={customClass} />
      </HeaderWrapper>
    );

    const header = container.firstChild?.firstChild as HTMLElement;
    expect(header).toHaveClass(customClass);
  });

  it('has proper header structure and styling', () => {
    const { container } = render(
      <HeaderWrapper>
        <Header title='Test Title' />
      </HeaderWrapper>
    );

    const header = container.firstChild?.firstChild as HTMLElement;
    expect(header).toHaveClass('header');
    expect(header).toHaveStyle({
      backgroundColor: 'var(--dashboard-surface)',
      borderColor: 'var(--dashboard-border)',
    });
  });

  it('renders both title and children', () => {
    const title = 'Dashboard';
    const childText = 'User Menu';

    render(
      <HeaderWrapper>
        <Header title={title}>
          <div>{childText}</div>
        </Header>
      </HeaderWrapper>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('menu button has proper styling and hover states', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByRole('button');
    expect(menuButton).toHaveClass('btn-menu');
  });

  it('title has proper styling', () => {
    const title = 'Styled Title';
    render(
      <HeaderWrapper>
        <Header title={title} />
      </HeaderWrapper>
    );

    const titleElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(titleElement).toHaveClass('header-title');
  });

  it('handles complex children', () => {
    const ComplexChildren = () => (
      <div>
        <button>Settings</button>
        <button>Profile</button>
        <span>|</span>
        <button>Logout</button>
      </div>
    );

    render(
      <HeaderWrapper>
        <Header title='Dashboard'>
          <ComplexChildren />
        </Header>
      </HeaderWrapper>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'Settings',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'Profile',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'Logout',
      })
    ).toBeInTheDocument();
  });
});
