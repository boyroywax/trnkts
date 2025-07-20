import { render, screen } from '@testing-library/react';
import { Header } from '../../src/components/Header';

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

    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveClass('header-title');
  });
});
