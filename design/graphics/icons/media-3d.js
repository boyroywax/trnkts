// 3D Media Icons - Tri-tone geometric style inspired by trnkts gem logo
// Using filled paths with opacity levels (1.0, 0.7, 0.5) for 3D depth
const media3dIcons = {
    'play': {
        name: 'Play',
        type: '3d-stroke',
        layers: [
            // Main play triangle - top face
            { path: 'M8 5L19 12L8 19L8 5Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M8.5 5.5L19.5 12.5L8.5 19.5L8.5 5.5Z', render: 'depth' },
            // Top edge highlight - left edge of triangle
            { path: 'M8 5L8 19L8.2 18.8L8.2 5.2L8 5Z', render: 'highlight' }
        ]
    },
    'pause': {
        name: 'Pause',
        type: '3d-stroke',
        layers: [
            // Main pause bars - top face
            { path: 'M6 4L10 4L10 20L6 20L6 4Z M14 4L18 4L18 20L14 20L14 4Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M6.5 4.5L10.5 4.5L10.5 20.5L6.5 20.5L6.5 4.5Z M14.5 4.5L18.5 4.5L18.5 20.5L14.5 20.5L14.5 4.5Z', render: 'depth' },
            // Top edge highlights - top edges of bars
            { path: 'M6 4L10 4L10 4.3L6 4.3L6 4Z M14 4L18 4L18 4.3L14 4.3L14 4Z', render: 'highlight' }
        ]
    },
    'stop': {
        name: 'Stop',
        type: '3d-stroke',
        layers: [
            // Main stop square (commented out)
            // { path: 'M6 6L18 6L18 18L6 18L6 6Z', render: 'main' },
            // Left half - primary segment
            { path: 'M6 6L12 6L12 18L6 18L6 6Z', render: 'primary' },
            // Right half - accent segment
            { path: 'M12 6L18 6L18 18L12 18L12 6Z', render: 'accent' }
        ]
    },
    'volume': {
        name: 'Volume',
        type: '3d-stroke',
        layers: [
            // Main volume icon (commented out)
            // { path: 'M11 5L6 9L2 9L2 15L6 15L11 19L11 5Z M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'main' },
            // Speaker cone - primary segment
            { path: 'M11 5L6 9L2 9L2 15L6 15L11 19L11 5Z', render: 'primary' },
            // Sound waves - accent segment
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'accent' }
        ]
    },
    'camera': {
        name: 'Camera',
        type: '3d-stroke',
        layers: [
            // Main camera body (commented out)
            // { path: 'M9 3L7 5L4 5C2.9 5 2 5.9 2 7L2 19C2 20.1 2.9 21 4 21L20 21C21.1 21 22 20.1 22 19L22 7C22 5.9 21.1 5 20 5L17 5L15 3L9 3Z M12 17C14.21 17 16 15.21 16 13C16 10.79 14.21 9 12 9C9.79 9 8 10.79 8 13C8 15.21 9.79 17 12 17Z', render: 'main' },
            // Camera body - primary segment
            { path: 'M9 3L7 5L4 5C2.9 5 2 5.9 2 7L2 19C2 20.1 2.9 21 4 21L20 21C21.1 21 22 20.1 22 19L22 7C22 5.9 21.1 5 20 5L17 5L15 3L9 3Z', render: 'primary' },
            // Camera lens - accent segment
            { path: 'M12 17C14.21 17 16 15.21 16 13C16 10.79 14.21 9 12 9C9.79 9 8 10.79 8 13C8 15.21 9.79 17 12 17Z', render: 'accent' }
        ]
    },
    'image': {
        name: 'Image',
        type: '3d-stroke',
        layers: [
            // Main image frame (commented out)
            // { path: 'M5 3C3.9 3 3 3.9 3 5L3 19C3 20.1 3.9 21 5 21L19 21C20.1 21 21 20.1 21 19L21 5C21 3.9 20.1 3 19 3L5 3Z M14.25 10L11 14.25L8.75 11.5L5.5 16L18.5 16L14.25 10Z', render: 'main' },
            // Image frame - primary segment
            { path: 'M5 3C3.9 3 3 3.9 3 5L3 19C3 20.1 3.9 21 5 21L19 21C20.1 21 21 20.1 21 19L21 5C21 3.9 20.1 3 19 3L5 3Z', render: 'primary' },
            // Mountain/sun content - accent segment
            { path: 'M14.25 10L11 14.25L8.75 11.5L5.5 16L18.5 16L14.25 10Z', render: 'accent' }
        ]
    },
    'music': {
        name: 'Music',
        type: '3d-stroke',
        layers: [
            // Main music note (commented out)
            // { path: 'M12 3L22 6L22 16C22 18.21 20.21 20 18 20C15.79 20 14 18.21 14 16C14 13.79 15.79 12 18 12C19.1 12 20.1 12.4 20.83 13.04L20.83 7.17L12 5.17L12 15C12 17.21 10.21 19 8 19C5.79 19 4 17.21 4 15C4 12.79 5.79 11 8 11C9.1 11 10.1 11.4 10.83 12.04L10.83 3L12 3Z', render: 'main' },
            // Music note stem and left circle - primary segment
            { path: 'M12 3L22 6L22 16C22 18.21 20.21 20 18 20C15.79 20 14 18.21 14 16C14 13.79 15.79 12 18 12C19.1 12 20.1 12.4 20.83 13.04L20.83 7.17L12 5.17L12 15C12 17.21 10.21 19 8 19C5.79 19 4 17.21 4 15C4 12.79 5.79 11 8 11C9.1 11 10.1 11.4 10.83 12.04L10.83 3L12 3Z', render: 'primary' },
            // Music note accents - accent segment (empty for unified look)
            { path: '', render: 'accent' }
        ]
    },
    'video-play': {
        name: 'Video Play',
        type: '3d-fill',
        paths: [
            { d: 'M2 4C2 2.9 2.9 2 4 2L20 2C21.1 2 22 2.9 22 4L22 20C22 21.1 21.1 22 20 22L4 22C2.9 22 2 21.1 2 20L2 4Z M9 8L17 12L9 16L9 8Z', opacity: 1.0 },
            { d: 'M4 4L20 4L20 20L4 20L4 4Z M10 10L15 12L10 14L10 10Z', opacity: 0.7 },
            { d: 'M6 6L18 6L18 18L6 18L6 6Z M11 11L13 12L11 13L11 11Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = media3dIcons;
}
