// Arrow Icons - Directional and navigation elements
const arrowIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        paths: [
            'M18 15l-6-6-6 6M12 19V5',
            'M16 13l-4-4-4 4M12 17V7'
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        paths: [
            'M6 9l6 6 6-6M12 5v14',
            'M8 11l4 4 4-4M12 7v10'
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        paths: [
            'M15 18l-6-6 6-6M19 12H5',
            'M13 16l-4-4 4-4M17 12H7'
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        paths: [
            'M9 18l6-6-6-6M5 12h14',
            'M11 16l4-4-4-4M7 12h10'
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        paths: [
            'M18 15l-6-6-6 6',
            'M16 13l-4-4-4 4'
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        paths: [
            'M6 9l6 6 6-6',
            'M8 11l4 4 4-4'
        ]
    },
    'expand': {
        name: 'Expand',
        paths: [
            'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M15 21h6v-6M9 3H3v6M21 21l-7-7M3 3l7 7',
            'M17 5h4v4M7 19H3v-4M19 5l-5 5M5 19l5-5M17 19h4v-4M7 5H3v4M19 19l-5-5M5 5l5 5'
        ]
    },
    'compress': {
        name: 'Compress',
        paths: [
            'M8 3v3a2 2 0 01-2 2H3M21 8h-3a2 2 0 01-2-2V3M3 16h3a2 2 0 012 2v3M16 21v-3a2 2 0 012-2h3',
            'M9 4v2a1 1 0 01-1 1H6M20 9h-2a1 1 0 01-1-1V6M4 15h2a1 1 0 011 1v2M15 20v-2a1 1 0 011-1h2'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrowIcons;
}
