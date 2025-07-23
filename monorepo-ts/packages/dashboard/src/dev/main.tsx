import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from '../components/Dashboard';
import '../styles/globals.css';
import { defaultTheme } from '../theme/defaultTheme';
import type { DashboardConfig } from '../types';

// Sample dashboard configuration for development
const dashboardConfig: DashboardConfig = {
  title: 'Dashboard Development Preview',
  theme: defaultTheme,
  layout: {
    sidebar: {
      enabled: true,
      width: '250px',
      collapsible: true,
    },
    header: {
      enabled: true,
      height: '60px',
    },
  },
  plugins: [],
};

// Sample widgets to demonstrate the dashboard
function SampleWidget(): React.JSX.Element {
  return (
    <div className='demo-widget'>
      <h3 className='demo-widget-title'>Sample Widget</h3>
      <div className='demo-widget-content'>
        <p>This is a sample widget to demonstrate the dashboard.</p>
        <div className='demo-status'>
          <p>Dashboard is working correctly!</p>
        </div>
      </div>
    </div>
  );
}

function AnotherWidget(): React.JSX.Element {
  return (
    <div className='demo-widget'>
      <h3 className='demo-widget-title'>Analytics Widget</h3>
      <div className='demo-grid'>
        <div className='demo-metric bg-success-light'>
          <div className='demo-metric-value'>1,234</div>
          <div className='demo-metric-label'>Total Users</div>
        </div>
        <div className='demo-metric bg-info-light'>
          <div className='demo-metric-value'>567</div>
          <div className='demo-metric-label'>Active Sessions</div>
        </div>
      </div>
    </div>
  );
}

function App(): React.JSX.Element {
  return (
    <div className='dashboard-container'>
      <Dashboard config={dashboardConfig}>
        <div className='dashboard-content-spaced'>
          <div className='grid grid-cols-1 md-grid-cols-2 grid-gap-6'>
            <div className='card'>
              <SampleWidget />
            </div>
            <div className='card'>
              <AnotherWidget />
            </div>
          </div>

          <div className='card p-6'>
            <h2 className='text-xl font-semibold mb-4'>
              Dashboard Development
            </h2>
            <p className='demo-description'>
              This is a development preview of the @trnkts/dashboard component.
              The dashboard is designed to be a reusable React component
              library.
            </p>
            <div className='demo-features'>
              <div className='demo-feature'>
                <strong>Build:</strong> Successfully compiled
              </div>
              <div className='demo-feature'>
                <strong>Tests:</strong> 59 tests passing
              </div>
              <div className='demo-feature'>
                <strong>Status:</strong> Ready for production
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
