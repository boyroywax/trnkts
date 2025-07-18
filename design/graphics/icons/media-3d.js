// 3D Media Icons - Tri-tone geometric style inspired by trnkts logo
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
            // Main stop square - top face
            { path: 'M6 6L18 6L18 18L6 18L6 6Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M6.5 6.5L18.5 6.5L18.5 18.5L6.5 18.5L6.5 6.5Z', render: 'depth' },
            // Side edge highlights - right and bottom edges
            { path: 'M18 6L18.3 6L18.3 18L18 18L18 6Z M6 18L18 18L18 18.3L6 18.3L6 18Z', render: 'highlight' }
        ]
    },
    'volume': {
        name: 'Volume',
        type: '3d-stroke',
        layers: [
            // Main speaker - top face
            { path: 'M11 5L6 9L2 9L2 15L6 15L11 19L11 5Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M11.5 5.5L6.5 9.5L2.5 9.5L2.5 15.5L6.5 15.5L11.5 19.5L11.5 5.5Z', render: 'depth' },
            // Inner sound wave - accent layer
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54', render: 'accent' },
            // Outer sound wave - secondary layer
            { path: 'M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'secondary' }
        ]
    },
    'camera': {
        name: 'Camera',
        type: '3d-stroke',
        layers: [
            // Main camera body - top face
            { path: 'M9 3L15 3L16 5L20 5C21.1 5 22 5.9 22 7L22 18C22 19.1 21.1 20 20 20L4 20C2.9 20 2 19.1 2 18L2 7C2 5.9 2.9 5 4 5L8 5L9 3Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M9.5 3.5L15.5 3.5L16.5 5.5L20.5 5.5C21.6 5.5 22.5 6.4 22.5 7.5L22.5 18.5C22.5 19.6 21.6 20.5 20.5 20.5L4.5 20.5C3.4 20.5 2.5 19.6 2.5 18.5L2.5 7.5C2.5 6.4 3.4 5.5 4.5 5.5L8.5 5.5L9.5 3.5Z', render: 'depth' },
            // Lens - accent element
            { path: 'M12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z', render: 'accent' },
            // Flash - highlight element
            { path: 'M16 6C16.6 6 17 6.4 17 7C17 7.6 16.6 8 16 8C15.4 8 15 7.6 15 7C15 6.4 15.4 6 16 6Z', render: 'highlight' }
        ]
    },
    'image': {
        name: 'Image',
        type: '3d-stroke',
        layers: [
            // Main image frame - top face
            { path: 'M5 3L19 3C20.1 3 21 3.9 21 5L21 19C21 20.1 20.1 21 19 21L5 21C3.9 21 3 20.1 3 19L3 5C3 3.9 3.9 3 5 3Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M5.5 3.5L19.5 3.5C20.6 3.5 21.5 4.4 21.5 5.5L21.5 19.5C21.5 20.6 20.6 21.5 19.5 21.5L5.5 21.5C4.4 21.5 3.5 20.6 3.5 19.5L3.5 5.5C3.5 4.4 4.4 3.5 5.5 3.5Z', render: 'depth' },
            // Mountain - accent element
            { path: 'M14 8L16 12L20 12L20 18L4 18L4 15L8 11L10 13L14 8Z', render: 'accent' },
            // Sun - highlight element
            { path: 'M15 7C15.6 7 16 6.4 16 5.8C16 5.2 15.6 4.8 15 4.8C14.4 4.8 14 5.2 14 5.8C14 6.4 14.4 7 15 7Z', render: 'highlight' }
        ]
    },
    'music': {
        name: 'Music',
        type: '3d-stroke',
        layers: [
            // Main music notes - top face
            { path: 'M12 3V13.5C11.6 13.2 11.1 13 10.5 13C9.1 13 8 14.1 8 15.5C8 16.9 9.1 18 10.5 18C11.9 18 13 16.9 13 15.5V7L19 5V10.5C18.6 10.2 18.1 10 17.5 10C16.1 10 15 11.1 15 12.5C15 13.9 16.1 15 17.5 15C18.9 15 20 13.9 20 12.5V3L12 3Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M12.5 3.5V14C12.1 13.7 11.6 13.5 11 13.5C9.6 13.5 8.5 14.6 8.5 16C8.5 17.4 9.6 18.5 11 18.5C12.4 18.5 13.5 17.4 13.5 16V7.5L19.5 5.5V11C19.1 10.7 18.6 10.5 18 10.5C16.6 10.5 15.5 11.6 15.5 13C15.5 14.4 16.6 15.5 18 15.5C19.4 15.5 20.5 14.4 20.5 13V3.5L12.5 3.5Z', render: 'depth' },
            // Note heads - accent elements
            { path: 'M10.5 13C11.9 13 13 14.1 13 15.5C13 16.9 11.9 18 10.5 18C9.1 18 8 16.9 8 15.5C8 14.1 9.1 13 10.5 13Z M17.5 10C18.9 10 20 11.1 20 12.5C20 13.9 18.9 15 17.5 15C16.1 15 15 13.9 15 12.5C15 11.1 16.1 10 17.5 10Z', render: 'accent' }
        ]
    },
    'video-play': {
        name: 'Video Play',
        type: '3d-stroke',
        layers: [
            // Main video frame - top face
            { path: 'M4 4L20 4C21.1 4 22 4.9 22 6L22 18C22 19.1 21.1 20 20 20L4 20C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4Z', render: 'main' },
            // Depth shadow - bottom right shadow
            { path: 'M4.5 4.5L20.5 4.5C21.6 4.5 22.5 5.4 22.5 6.5L22.5 18.5C22.5 19.6 21.6 20.5 20.5 20.5L4.5 20.5C3.4 20.5 2.5 19.6 2.5 18.5L2.5 6.5C2.5 5.4 3.4 4.5 4.5 4.5Z', render: 'depth' },
            // Play button - accent element
            { path: 'M10 8L16 12L10 16L10 8Z', render: 'accent' },
            // Screen highlight - secondary element
            { path: 'M4 4L20 4L20 6L4 6L4 4Z', render: 'secondary' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = media3dIcons;
}
