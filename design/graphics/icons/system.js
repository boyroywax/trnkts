// System Icons - File operations and system actions
const systemIcons = {
    'home': {
        name: 'Home',
        paths: [
            'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        ]
    },
    'download': {
        name: 'Download',
        paths: [
            'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3'
        ]
    },
    'upload': {
        name: 'Upload',
        paths: [
            'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12'
        ]
    },
    'edit': {
        name: 'Edit',
        paths: [
            'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z'
        ]
    },
    'delete': {
        name: 'Delete',
        paths: [
            'M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6'
        ]
    },
    'copy': {
        name: 'Copy',
        paths: [
            'M20 9H11a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2zM5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
        ]
    },
    'folder': {
        name: 'Folder',
        paths: [
            'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
        ]
    },
    'file': {
        name: 'File',
        paths: [
            'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = systemIcons;
}
