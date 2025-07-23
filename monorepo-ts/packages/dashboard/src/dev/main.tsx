import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import {
    Layout,
    Header,
    Sidebar,
    SidebarItem,
    Widget,
    Logo,
    Footer,
} from '@trnkts/components';
import { Dashboard } from '../components/Dashboard';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import {
    Home,
    Settings,
    Users,
    BarChart,
    TrendingUp,
    Activity,
    Clock,
    Shield,
    Zap,
    Globe,
} from 'lucide-react';
import '../styles/globals.css';
import '../styles/theme.css';

// Sample dashboard for demonstrating the new design
function App(): React.JSX.Element {
    const [activeItem, setActiveItem] = React.useState<string>('home');
    const { isDark, toggleTheme } = useTheme();

    // Dashboard configuration
    const dashboardConfig = {
        title: 'Trnkts Dashboard',
        plugins: [],
    };

    const sidebarContent = (
        <Sidebar>
            <SidebarItem
                title='Dashboard'
                icon={<Home size={18} />}
                isActive={activeItem === 'home'}
                onClick={() => setActiveItem('home')}
            />
            <SidebarItem
                title='Analytics'
                icon={<BarChart size={18} />}
                isActive={activeItem === 'analytics'}
                onClick={() => setActiveItem('analytics')}
            />
            <SidebarItem
                title='Users'
                icon={<Users size={18} />}
                isActive={activeItem === 'users'}
                onClick={() => setActiveItem('users')}
            />
            <SidebarItem
                title='Settings'
                icon={<Settings size={18} />}
                isActive={activeItem === 'settings'}
                onClick={() => setActiveItem('settings')}
            />
        </Sidebar>
    );

    const headerContent = (
        <Header
            title='Trnkts Dashboard'
            showLogo={true}
            showMenuButton={false}
            transparent={true}
            onMenuClick={() => console.log('Menu clicked')}
        />
    );

    const getMainContent = (): React.JSX.Element => {
        switch (activeItem) {
            case 'analytics':
                return (
                    <div
                        style={{
                            display: 'grid',
                            gap: 'var(--trnkts-spacing-md)',
                        }}
                    >
                        <Widget title='📊 Analytics Overview'>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '1rem',
                                }}
                            >
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <TrendingUp
                                        size={24}
                                        style={{
                                            color: 'var(--trnkts-primary-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        $12,345
                                    </h4>
                                    <p
                                        className="text-light"
                                        style={{
                                            margin: '0.25rem 0 0 0',
                                        }}
                                    >
                                        Revenue
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Activity
                                        size={24}
                                        style={{
                                            color: 'var(--trnkts-secondary-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        89.5%
                                    </h4>
                                    <p
                                        className="text-light"
                                        style={{
                                            margin: '0.25rem 0 0 0',
                                        }}
                                    >
                                        Uptime
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Users
                                        size={24}
                                        style={{
                                            color: 'var(--trnkts-accent-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        1,234
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.25rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Active Users
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Zap
                                        size={24}
                                        style={{
                                            color: 'var(--trnkts-warning-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        567
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.25rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        API Calls
                                    </p>
                                </div>
                            </div>
                        </Widget>
                        <Widget title='📈 Performance Trends'>
                            <div
                                style={{
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '1.2rem',
                                        color: 'var(--trnkts-text-light)',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Performance chart would go here
                                </p>
                                <button className='btn-trnkts-gradient'>
                                    View Full Report
                                </button>
                            </div>
                        </Widget>
                    </div>
                );
            case 'users':
                return (
                    <div
                        style={{
                            display: 'grid',
                            gap: 'var(--trnkts-spacing-md)',
                        }}
                    >
                        <Widget title='👥 User Management'>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '1rem',
                                    marginBottom: '2rem',
                                }}
                            >
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Users
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-primary-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4 style={{ margin: '0' }}>Total Users</h4>
                                    <p
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.5rem',
                                            margin: '0.5rem 0 0 0',
                                        }}
                                    >
                                        12,847
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Activity
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-success-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4 style={{ margin: '0' }}>Active Now</h4>
                                    <p
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.5rem',
                                            margin: '0.5rem 0 0 0',
                                        }}
                                    >
                                        1,234
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Clock
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-warning-500)',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h4 style={{ margin: '0' }}>New Today</h4>
                                    <p
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.5rem',
                                            margin: '0.5rem 0 0 0',
                                        }}
                                    >
                                        87
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    justifyContent: 'center',
                                }}
                            >
                                <button className='btn-trnkts'>Add User</button>
                                <button className='btn-trnkts-gradient'>
                                    Export Users
                                </button>
                            </div>
                        </Widget>
                    </div>
                );
            case 'settings':
                return (
                    <div
                        style={{
                            display: 'grid',
                            gap: 'var(--trnkts-spacing-md)',
                        }}
                    >
                        <Widget title='⚙️ System Settings'>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                <div
                                    className='glass-card'
                                    style={{ padding: '1.5rem' }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        <Shield
                                            size={24}
                                            style={{
                                                color: 'var(--trnkts-primary-500)',
                                            }}
                                        />
                                        <h4 style={{ margin: '0' }}>
                                            Security
                                        </h4>
                                    </div>
                                    <p
                                        style={{
                                            margin: '0 0 1rem 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Configure security settings and
                                        authentication
                                    </p>
                                    <button className='btn-trnkts'>
                                        Configure
                                    </button>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{ padding: '1.5rem' }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        <Globe
                                            size={24}
                                            style={{
                                                color: 'var(--trnkts-secondary-500)',
                                            }}
                                        />
                                        <h4 style={{ margin: '0' }}>
                                            API Settings
                                        </h4>
                                    </div>
                                    <p
                                        style={{
                                            margin: '0 0 1rem 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Manage API keys and rate limiting
                                    </p>
                                    <button className='btn-trnkts'>
                                        Manage APIs
                                    </button>
                                </div>
                            </div>
                        </Widget>
                    </div>
                );
            default:
                return (
                    <div
                        style={{
                            display: 'grid',
                            gap: 'var(--trnkts-spacing-lg)',
                        }}
                    >
                        {/* Welcome Section */}
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '2rem',
                            }}
                        >
                            <Logo
                                size={120}
                                animated={true}
                            />
                            <h1
                                className='gradient-text-logo'
                                style={{
                                    fontSize: 'var(--trnkts-font-size-4xl)',
                                    margin: '1rem 0',
                                }}
                            >
                                Welcome to Trnkts
                            </h1>
                            <p
                                style={{
                                    fontSize: 'var(--trnkts-font-size-lg)',
                                    color: 'var(--trnkts-text-light)',
                                }}
                            >
                                A beautiful dashboard with glassmorphism design
                                and animated components
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: 'var(--trnkts-spacing-md)',
                            }}
                        >
                            <Widget title='🚀 Quick Start'>
                                <p style={{ marginBottom: '1rem' }}>
                                    Get started with your dashboard by exploring
                                    the sidebar navigation.
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        className='btn-trnkts-gradient'
                                        onClick={() =>
                                            setActiveItem('analytics')
                                        }
                                    >
                                        View Analytics
                                    </button>
                                </div>
                            </Widget>

                            <Widget title='📊 Features'>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    <li
                                        style={{
                                            padding: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <Zap
                                            size={16}
                                            style={{
                                                color: 'var(--trnkts-primary-500)',
                                            }}
                                        />
                                        Glassmorphism design
                                    </li>
                                    <li
                                        style={{
                                            padding: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <TrendingUp
                                            size={16}
                                            style={{
                                                color: 'var(--trnkts-secondary-500)',
                                            }}
                                        />
                                        Gradient backgrounds
                                    </li>
                                    <li
                                        style={{
                                            padding: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <Activity
                                            size={16}
                                            style={{
                                                color: 'var(--trnkts-accent-500)',
                                            }}
                                        />
                                        Animated logo
                                    </li>
                                    <li
                                        style={{
                                            padding: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <Globe
                                            size={16}
                                            style={{
                                                color: 'var(--trnkts-warning-500)',
                                            }}
                                        />
                                        Responsive layout
                                    </li>
                                </ul>
                            </Widget>

                            <Widget title='🎨 Design System'>
                                <p style={{ marginBottom: '1rem' }}>
                                    Built with the Trnkts design system
                                    featuring:
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '0.5rem',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <span
                                        className='btn-trnkts'
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        Glass Effects
                                    </span>
                                    <span
                                        className='btn-trnkts'
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        Gradients
                                    </span>
                                    <span
                                        className='btn-trnkts'
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        Animations
                                    </span>
                                </div>
                            </Widget>
                        </div>

                        {/* Stats Dashboard */}
                        <Widget title='📈 Dashboard Overview'>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '1rem',
                                }}
                            >
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <BarChart
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-primary-500)',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        2,847
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.5rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Total Projects
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Users
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-secondary-500)',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        12.5K
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.5rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Active Users
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Activity
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-accent-500)',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        99.9%
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.5rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Uptime
                                    </p>
                                </div>
                                <div
                                    className='glass-card'
                                    style={{
                                        padding: '1.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <TrendingUp
                                        size={32}
                                        style={{
                                            color: 'var(--trnkts-warning-500)',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                    <h4
                                        className='gradient-text'
                                        style={{
                                            fontSize: '1.8rem',
                                            margin: '0',
                                        }}
                                    >
                                        +24%
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0.5rem 0 0 0',
                                            color: 'var(--trnkts-text-light)',
                                        }}
                                    >
                                        Growth
                                    </p>
                                </div>
                            </div>
                        </Widget>
                    </div>
                );
        }
    };

    return (
        <div style={{ 
            padding: 'var(--trnkts-spacing-md)', 
            display: 'flex', 
            flexDirection: 'column',
            gap: '0.125rem',
            position: 'relative',
        }}>
            {/* Dark mode overlay - handled by CSS */}
            <div className="dark-mode-overlay" />
            
            {/* Header floating above the main layout */}
            {headerContent}
            
            {/* Main rounded container with sidebar and content */}
            <div 
                className="main-layout-container glass-container"
                style={{
                    overflow: 'hidden',
                }}
            >
                <Dashboard config={dashboardConfig}>
                    <Layout sidebar={sidebarContent}>
                        {getMainContent()}
                    </Layout>
                </Dashboard>
            </div>
            
            {/* Footer floating below the main layout */}
            <div style={{ marginTop: '0.125rem' }}>
                <Footer
                    onThemeToggle={toggleTheme}
                    showThemeToggle={true}
                />
            </div>
        </div>
    );
}

function AppWithTheme(): React.JSX.Element {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

// Mount the application
const container = document.getElementById('root') as HTMLElement;

// Create root if it doesn't exist or reuse existing one
if (import.meta.hot) {
    // In development with HMR, we need to handle the root carefully
    let root = (window as any).__vite_react_root;
    if (!root) {
        root = ReactDOM.createRoot(container);
        (window as any).__vite_react_root = root;
    }
    root.render(
        <React.StrictMode>
            <AppWithTheme />
        </React.StrictMode>
    );
} else {
    // In production, create root normally
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <AppWithTheme />
        </React.StrictMode>
    );
}
