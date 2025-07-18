// Interface Icons - Essential UI elements  
const interfaceIcons = {
    'menu': {
        name: 'Menu',
        paths: [
            'M3 6h18M3 12h18M3 18h18'
        ]
    },
    'search': {
        name: 'Search',
        paths: [
            'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        ]
    },
    'user': {
        name: 'User', 
        paths: [
            'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z'
        ]
    },
    'settings': {
        name: 'Settings',
        paths: [
            'M12 1l3 6 6 3-6 3-3 6-3-6-6-3 6-3z'
        ]
    },
    'heart': {
        name: 'Heart',
        paths: [
            'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
        ]
    },
    'star': {
        name: 'Star',
        paths: [
            'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
        ]
    },
    'bell': {
        name: 'Notification',
        paths: [
            'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0'
        ]
    },
    'lock': {
        name: 'Lock',
        paths: [
            'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4'
        ]
    },
    'home': {
        name: 'Home',
        paths: [
            'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        ]
    },
    'dashboard': {
        name: 'Dashboard',
        paths: [
            'M3 3h18v18H3zM3 9h18M9 9v12M15 9v12M6 12v6M12 13v5M18 15v3'
        ]
    },
    'grid': {
        name: 'Grid',
        paths: [
            'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z'
        ]
    },
    'list': {
        name: 'List',
        paths: [
            'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'
        ]
    },
    'plus': {
        name: 'Plus',
        paths: [
            'M12 5v14M5 12h14'
        ]
    },
    'minus': {
        name: 'Minus',
        paths: [
            'M5 12h14'
        ]
    },
    'x': {
        name: 'Close',
        paths: [
            'M18 6L6 18M6 6l12 12'
        ]
    },
    'check': {
        name: 'Check',
        paths: [
            'M20 6L9 17l-5-5'
        ]
    },
    'info': {
        name: 'Info',
        paths: [
            'M12 2a10 10 0 1010 10A10 10 0 0012 2zM12 8v4M12 16h.01'
        ]
    },
    'alert': {
        name: 'Alert',
        paths: [
            'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01'
        ]
    },
    'help': {
        name: 'Help',
        paths: [
            'M12 2a10 10 0 1010 10A10 10 0 0012 2zM9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01'
        ]
    },
    'eye': {
        name: 'Eye',
        paths: [
            'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z'
        ]
    },
    'eye-off': {
        name: 'Eye Off',
        paths: [
            'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6zM4 4l16 16'
        ]
    },
    'filter': {
        name: 'Filter',
        paths: [
            'M22 3H2l8 9.46V19l4 2v-8.54L22 3z'
        ]
    },
    'sort': {
        name: 'Sort',
        paths: [
            'M3 6h18M3 12h12M3 18h6'
        ]
    },
    'refresh': {
        name: 'Refresh',
        paths: [
            'M23 4v6h-6M1 20v-6h6M20.49 9A9 9 0 005.64 5.64L1 10M3.51 15a9 9 0 0014.85 3.36L23 14'
        ]
    },
    'bookmark': {
        name: 'Bookmark',
        paths: [
            'M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z'
        ]
    },
    'tag': {
        name: 'Tag',
        paths: [
            'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01'
        ]
    },
    'calendar': {
        name: 'Calendar',
        paths: [
            'M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM16 2v4M8 2v4M3 10h18'
        ]
    },
    'clock': {
        name: 'Clock',
        paths: [
            'M12 2a10 10 0 1010 10A10 10 0 0012 2zM12 6v6l4 2'
        ]
    },
    'maximize': {
        name: 'Maximize',
        paths: [
            'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'
        ]
    },
    'minimize': {
        name: 'Minimize',
        paths: [
            'M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3'
        ]
    },
    'sidebar': {
        name: 'Sidebar',
        paths: [
            'M3 3h4v18H3zM10 3h11v18H10z'
        ]
    },
    'layout': {
        name: 'Layout',
        paths: [
            'M3 3h18v4H3zM3 10h6v11H3zM12 10h9v11H12z'
        ]
    },
    'window': {
        name: 'Window',
        paths: [
            'M3 3h18v18H3zM3 9h18M6 6h.01M9 6h.01M12 6h.01'
        ]
    },
    'fullscreen': {
        name: 'Fullscreen',
        paths: [
            'M4 6l3 -3l-3 0l0 3M20 6l-3 -3l3 0l0 3M20 18l-3 3l3 0l0 -3M4 18l3 3l-3 0l0 -3'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = interfaceIcons;
}
