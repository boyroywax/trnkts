// System Icons - File operations and system actions
const systemIcons = {
    'home': {
        name: 'Home',
        paths: [
            'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
            'M5 10l7-5 7 5v9a1 1 0 01-1 1H6a1 1 0 01-1-1z'
        ]
    },
    'download': {
        name: 'Download',
        paths: [
            'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3',
            'M19 16v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3M8 11l4 4 4-4M12 14V4'
        ]
    },
    'upload': {
        name: 'Upload',
        paths: [
            'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12',
            'M19 16v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3M16 9l-4-4-4 4M12 4v11'
        ]
    },
    'edit': {
        name: 'Edit',
        paths: [
            'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z',
            'M12 5H5a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6M17.5 3.5a1.5 1.5 0 112.12 2.12L13 12l-3 .75.75-3 7.75-7.75z'
        ]
    },
    'delete': {
        name: 'Delete',
        paths: [
            'M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6',
            'M4 7h16M18 7v12a1 1 0 01-1 1H7a1 1 0 01-1-1V7M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M11 12v4M13 12v4'
        ]
    },
    'copy': {
        name: 'Copy',
        paths: [
            'M20 9H11a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2zM5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1',
            'M19 10H12a1 1 0 00-1 1v8a1 1 0 001 1h7a1 1 0 001-1v-8a1 1 0 00-1-1zM6 14H5a1 1 0 01-1-1V5a1 1 0 011-1h7a1 1 0 011 1v1'
        ]
    },
    'folder': {
        name: 'Folder',
        paths: [
            'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z',
            'M21 18a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h4l2 2h10a1 1 0 011 1z'
        ]
    },
    'file': {
        name: 'File',
        paths: [
            'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6',
            'M13 3H7a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9zM13 3v5h5'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = systemIcons;
}
