import {
    render,
    screen,
    fireEvent,
} from '@testing-library/react';
import {
    Sidebar,
    SidebarItem,
} from '../../src/page/Sidebar';

describe('Sidebar Component', () => {
    it('renders children correctly', () => {
        const childText = 'Sidebar content';
        render(
            <Sidebar>
                <div>{childText}</div>
            </Sidebar>
        );

        expect(
            screen.getByText(childText)
        ).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const customClass = 'custom-sidebar-class';
        const { container } = render(
            <Sidebar className={customClass}>
                <div>Content</div>
            </Sidebar>
        );

        expect(container.firstChild).toHaveClass(
            customClass
        );
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
        expect(
            screen.getByText('Test Item')
        ).toBeInTheDocument();
    });

    it('renders icon when provided', () => {
        const icon = (
            <span data-testid='test-icon'>🏠</span>
        );
        render(<SidebarItem title='Home' icon={icon} />);

        expect(
            screen.getByTestId('test-icon')
        ).toBeInTheDocument();
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
            <SidebarItem title='Test Link' href={href} />
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
            backgroundColor: 'var(--dashboard-primary)',
            color: 'var(--dashboard-surface)',
        });
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

        expect(
            screen.getByText(childText)
        ).toBeInTheDocument();
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

        expect(
            screen.queryByText(childText)
        ).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
        const customClass = 'custom-item-class';
        const { container } = render(
            <SidebarItem
                title='Test'
                className={customClass}
            />
        );

        expect(container.firstChild).toHaveClass(
            customClass
        );
    });
});
