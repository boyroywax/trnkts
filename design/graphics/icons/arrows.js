// Arrow Icons - Directional and navigation elements
const arrowIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        paths: [
            'M18 15l-6-6-6 6',
            'M12 19V5',
            'M12 9l-2 2m4-2l-2 2'
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        paths: [
            'M6 9l6 6 6-6',
            'M12 5v14',
            'M12 15l-2-2m4 2l-2-2'
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        paths: [
            'M15 18l-6-6 6-6',
            'M19 12H5',
            'M9 12l2-2m-2 2l2 2'
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        paths: [
            'M9 18l6-6-6-6',
            'M5 12h14',
            'M15 12l-2-2m2 2l-2 2'
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        paths: [
            'M6 15l6-6 6 6',
            'M8 13l4-4 4 4',
            ''
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        paths: [
            'M18 9l-6 6-6-6',
            'M16 11l-4 4-4-4',
            ''
        ]
    },
    'expand': {
        name: 'Expand',
        paths: [
            'M15 3h6v6m-6 6h6v6M9 3H3v6m6 6H3v6',
            'M21 3l-7 7m0 4l7 7M3 3l7 7m-7 4l7 7',
            ''
        ]
    },
    'compress': {
        name: 'Compress',
        paths: [
            'M8 3v3h3m2 0V3h3M8 21v-3h3m2 0v3h3',
            'M11 6h2v2m0 8h-2v2',
            ''
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrowIcons;
}
