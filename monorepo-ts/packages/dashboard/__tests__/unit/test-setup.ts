import '@testing-library/jest-dom';

// Mock window object for tests
declare global {
  interface Window {
    location: Location;
  }
  
  var ResizeObserver: jest.Mock;
  var IntersectionObserver: jest.Mock;
}

// Mock CSS custom properties
if (typeof document !== 'undefined') {
  Object.defineProperty(document.documentElement.style, 'setProperty', {
    writable: true,
    value: jest.fn(),
  });
}

// Mock ResizeObserver
(global as any).ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
(global as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));