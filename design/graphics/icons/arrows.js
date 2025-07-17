// Arrow Icons - Directional and navigation elements
const arrowIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        paths: [
            'M18 15l-6-6-6 6M12 19V5'
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        paths: [
            'M6 9l6 6 6-6M12 5v14'
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        paths: [
            'M15 18l-6-6 6-6M19 12H5'
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        paths: [
            'M9 18l6-6-6-6M5 12h14'
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        paths: [
            'M18 15l-6-6-6 6'
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        paths: [
            'M6 9l6 6 6-6'
        ]
    },
    'expand': {
        name: 'Expand',
        paths: [
            'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M15 21h6v-6M9 3H3v6M21 21l-7-7M3 3l7 7'
        ]
    },
    'compress': {
        name: 'Compress',
        paths: [
            'M8 3v3a2 2 0 01-2 2H3M21 8h-3a2 2 0 01-2-2V3M3 16h3a2 2 0 012 2v3M16 21v-3a2 2 0 012-2h3'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrowIcons;
}
