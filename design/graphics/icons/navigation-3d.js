// 3D Navigation Icons - Offset layers like trnkts gem logo for true 3D effect
// Using tightly connected layers with different opacities
const navigation3dIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        type: '3d-stroke',
        layers: [
            // Full arrow - top face
            { path: 'M12 2L22 12L17 12L17 22L7 22L7 12L2 12L12 2Z', render: 'main' },
            // Left side - primary segment
            { path: 'M12 2L2 12L7 12L7 22L12 22L12 2Z', render: 'primary', opacity: 0.7 },
            // Right side - accent segment
            { path: 'M12 2L22 12L17 12L17 22L12 22L12 2Z', render: 'accent', opacity: 0.5 }
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        type: '3d-stroke',
        layers: [
            // Full arrow - main shape
            // { path: 'M12 22L2 12L7 12L7 2L17 2L17 12L22 12L12 22Z', render: 'main' },
            // Left side - primary segment
            { path: 'M12 22L2 12L7 12L7 2L12 2L12 22Z', render: 'primary'},
            // Right side - accent segment
            { path: 'M12 22L22 12L17 12L17 2L12 2L12 22Z', render: 'accent' }
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        type: '3d-fill',
        paths: [
            // Main shape - full opacity
            { d: 'M2 12L12 2L12 7L22 7L22 17L12 17L12 22L2 12Z', opacity: 1.0 },
            // Top side - medium opacity
            { d: 'M2 12L12 2L12 7L22 7L22 12L2 12Z', opacity: 0.7 },
            // Bottom side - lower opacity
            { d: 'M2 12L12 22L12 17L22 17L22 12L2 12Z', opacity: 0.5 }
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        type: '3d-fill',
        paths: [
            // Main shape - full opacity
            { d: 'M22 12L12 22L12 17L2 17L2 7L12 7L12 2L22 12Z', opacity: 1.0 },
            // Top side - medium opacity
            { d: 'M22 12L12 2L12 7L2 7L2 12L22 12Z', opacity: 0.7 },
            // Bottom side - lower opacity
            { d: 'M22 12L12 22L12 17L2 17L2 12L22 12Z', opacity: 0.5 }
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        type: '3d-stroke',
        layers: [
            // Main chevron shape
            { path: 'M7 14L12 9L17 14L15.59 15.41L12 11.83L8.41 15.41L7 14Z', render: 'main' },
            // Right shadow (completely separate path)
            { path: 'M7.2 14.2L12.2 9.2L17.2 14.2L15.79 15.61L12.2 12.03L8.61 15.61L7.2 14.2Z', render: 'secondary', opacity: 0.3 }
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        type: '3d-stroke',
        layers: [
            // Main chevron shape
            { path: 'M17 10L12 15L7 10L8.41 8.59L12 12.17L15.59 8.59L17 10Z', render: 'main' },
            // Right shadow (completely separate path)
            { path: 'M17.2 9.8L12.2 14.8L7.2 9.8L8.61 8.39L12.2 11.97L15.79 8.39L17.2 9.8Z', render: 'secondary', opacity: 0.3 }
        ]
    },
    'chevron-left': {
        name: 'Chevron Left',
        type: '3d-stroke',
        layers: [
            // Main chevron shape (top face)
            { path: 'M14 7L9 12L14 17L15.41 15.59L11.83 12L15.41 8.41L14 7Z', render: 'main' },
            // Side depth (much lighter, without seam)
            { path: 'M13.8 6.8L8.8 11.8L13.8 16.8L15.21 15.39L11.63 11.8L15.21 8.21L13.8 6.8Z', render: 'secondary', opacity: 0.4 }
        ]
    },
    'chevron-right': {
        name: 'Chevron Right',
        type: '3d-stroke',
        layers: [
            // Main chevron shape (top face)
            { path: 'M10 17L15 12L10 7L8.59 8.41L12.17 12L8.59 15.59L10 17Z', render: 'main' },
            // Side depth (much lighter, without seam)
            { path: 'M9.8 16.8L14.8 11.8L9.8 6.8L8.39 8.21L11.97 11.8L8.39 15.21L9.8 16.8Z', render: 'secondary', opacity: 0.4 }
        ]
    },
        'compass': {
        name: 'Compass',
        type: '3d-stroke',
        layers: [
            // Main compass shape (top face)
            { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8l7-4 4 7-7 4-4-7z', render: 'main' },
            // Left depth (slight offset)
            { path: 'M11.7 1.7C6.18 1.7 1.7 6.18 1.7 11.7s4.48 10 10 10 10-4.48 10-10S16.22 1.7 11.7 1.7zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8l7-4 4 7-7 4-4-7z', render: 'depth' },
            // Right depth (slight offset)
            { path: 'M12.3 1.7C6.78 1.7 2.3 6.18 2.3 11.7s4.48 10 10 10 10-4.48 10-10S17.82 1.7 12.3 1.7zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8l7-4 4 7-7 4-4-7z', render: 'secondary' }
        ]
    },
    'location': {
        name: 'Location',
        type: '3d-stroke',
        layers: [
            // Main location shape (top face)
            { path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', render: 'main' },
            // Left depth (slight offset)
            { path: 'M11.7 1.7C7.83 1.7 4.7 4.83 4.7 8.7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', render: 'depth' },
            // Right depth (slight offset)
            { path: 'M12.3 1.7C8.43 1.7 5.3 4.83 5.3 8.7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', render: 'secondary' }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = navigation3dIcons;
}
