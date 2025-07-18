// Arrow Icons - Directional and navigation elements
const arrowIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        paths: [
            'M18 15l-6-6-6 6M12 19V9'
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        paths: [
            'M6 9l6 6 6-6M12 5v10'
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        paths: [
            'M15 18l-6-6 6-6M19 12H9'
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        paths: [
            'M9 18l6-6-6-6M5 12h10'
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
            'M10 3v7h-7M3 3l7 7M14 3v7h7M21 3l-7 7M14 21v-7h7M21 21l-7-7M10 21v-7h-7M3 21l7-7'
        ]
    },
    'intersect': {
        name: 'Intersect',
        paths: [
            'M10 3v7h-7M14 3v7h7M14 21v-7h7M10 21v-7h-7'
        ]
    },
    'border': {
        name: 'Border',
        paths: [
            'M3 3h7M3 3v7M21 3h-7M21 3v7M21 21h-7M21 21v-7M3 21h7M3 21v-7'
        ]
    },
    'resize': {
        name: 'Resize',
        paths: [
            'M15 3h6v6M9 21H3v-6M18 6l-6 6 2-2 2-2 2 2M6 18l6-6-2 2-2 2-2-2M15 21h6v-6M9 3H3v6M18 18l-6-6 2 2 2 2 2-2M6 6l6 6-2-2-2-2-2 2'
        ]
    },
    'resize-locked': {
        name: 'Resize Locked',
        paths: [
            'M15 3h6v6M9 21H3v-6M14 10l7-7M10 14l-7 7M15 21h6v-6M9 3H3v6M10 10l7 7M14 14l-7-7'
        ]
    },
    'crop': {
        name: 'Crop',
        paths: [
            'M15 3h6v6M9 21H3v-6M21 3l7-7M3 21l-7 7M15 21h6v-6M9 3H3v6M21 21l7 7M3 3l-7-7'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrowIcons;
}
