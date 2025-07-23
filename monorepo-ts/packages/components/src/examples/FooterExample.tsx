import React, { useState } from 'react';
import { Layout, Header, Sidebar, Footer, Widget } from '@trnkts/components';

function ExampleApp(): React.JSX.Element {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = (): void => {
    setIsDark(!isDark);
  };

  return (
    <div 
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      <Layout
        header={
          <Header 
            title="trnkts Dashboard" 
            onMenuClick={() => console.log('Menu clicked')}
          />
        }
        sidebar={
          <Sidebar>
            <div style={{ padding: '1rem' }}>
              <h3>Navigation</h3>
              <p>Sidebar content goes here</p>
            </div>
          </Sidebar>
        }
        footer={
          <Footer 
            isDark={isDark}
            onThemeToggle={handleThemeToggle}
          />
        }
      >
        <div style={{ padding: '2rem' }}>
          <Widget title="Welcome">
            <p>
              This is an example of the trnkts component system with a footer
              that includes a theme toggle button.
            </p>
            <p>
              The footer features:
            </p>
            <ul>
              <li>Rounded top corners that create a seamless transition</li>
              <li>Gradient background for visual appeal</li>
              <li>Dark/light theme toggle button</li>
              <li>Responsive layout</li>
              <li>Custom content support</li>
            </ul>
          </Widget>
          
          <Widget title="Theme Toggle">
            <p>
              Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
            </p>
            <p>
              Click the {isDark ? '☀️' : '🌙'} button in the footer to toggle themes!
            </p>
          </Widget>
        </div>
      </Layout>
    </div>
  );
}

export default ExampleApp;
