// Arrow Icons - Directional and navigation elements
const arrowIcons = {
    'rotate-disabled': {
        name: 'Rotate Disabled',
        // Centered 'X' (chevron) at the center of the frame
        paths: [
            'M12 4a8 8 0 1 1-7.5 5',
            'M9 9l6 6m0-6l-6 6'
        ]
    },
    'rotate': {
        name: 'Rotate',
        // Standard rotation icon: arc from bottom right to top left, open chevron arrowhead at end
        paths: [
            // Arc: starts at ~5 o'clock, ends at ~10 o'clock (top left)
            'M18 16A8 8 0 1 0 6 8',
            // Arrowhead: match size and style to arrow-down icon chevron, placed at arc end (6,8)
            // Arrow-down chevron: 'M6 9l6 6 6-6'
            // For rotate, use: 'M4 10l2 2 2-2' (centered at (6,8))
            // For rotate, use: chevron rotated 180deg around its center (6,8), scaled 2x
            // Original: M8 6l-2 2-2-2 (center at 6,8, delta x/y = 2)
            // Chevron: scaled 1.25x about its center (6,10), point at (6,12.5), arms at (1,7.5) and (11,7.5)
            'M1 7.5L6 12.5L11 7.5'
        ]
    },
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
