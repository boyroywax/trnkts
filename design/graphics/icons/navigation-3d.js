// 3D Navigation Icons - Offset layers like trnkts gem logo for true 3D effect
// Using offset positioning with different opacities, not stacked layers
const navigation3dIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        type: '3d-stroke',
        layers: [
            // Main arrow shape (top face)
            { path: 'M12 2L22 12L17 12L17 22L7 22L7 12L2 12L12 2Z', render: 'main' },
            // Left side depth (offset left and down)
            { path: 'M11 3L1 13L6 13L6 23L11 23L11 3Z', render: 'depth' },
            // Right side depth (offset right and down)
            { path: 'M13 3L23 13L18 13L18 23L13 23L13 3Z', render: 'secondary' }
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        type: '3d-stroke',
        layers: [
            // Main arrow shape (top face)
            { path: 'M12 22L2 12L7 12L7 2L17 2L17 12L22 12L12 22Z', render: 'main' },
            // Left side depth (offset left and up)
            { path: 'M11 21L1 11L6 11L6 1L11 1L11 21Z', render: 'depth' },
            // Right side depth (offset right and up)
            { path: 'M13 21L23 11L18 11L18 1L13 1L13 21Z', render: 'secondary' }
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        type: '3d-stroke',
        layers: [
            // Main arrow shape (top face)
            { path: 'M2 12L12 2L12 7L22 7L22 17L12 17L12 22L2 12Z', render: 'main' },
            // Top side depth (offset up and left)
            { path: 'M1 11L11 1L11 6L21 6L21 11L1 11Z', render: 'depth' },
            // Bottom side depth (offset down and left)
            { path: 'M1 13L11 23L11 18L21 18L21 13L1 13Z', render: 'secondary' }
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        type: '3d-stroke',
        layers: [
            // Main arrow shape (top face)
            { path: 'M22 12L12 22L12 17L2 17L2 7L12 7L12 2L22 12Z', render: 'main' },
            // Top side depth (offset up and right)
            { path: 'M23 11L13 1L13 6L3 6L3 11L23 11Z', render: 'depth' },
            // Bottom side depth (offset down and right)
            { path: 'M23 13L13 23L13 18L3 18L3 13L23 13Z', render: 'secondary' }
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        type: '3d-stroke',
        layers: [
            // Main chevron shape (top face)
            { path: 'M7 14L12 9L17 14L15.59 15.41L12 11.83L8.41 15.41L7 14Z', render: 'main' },
            // Left side depth (offset left and down)
            { path: 'M6 15L11 10L16 15L14.59 16.41L11 12.83L7.41 16.41L6 15Z', render: 'depth' },
            // Right side depth (offset right and down)
            { path: 'M8 15L13 10L18 15L16.59 16.41L13 12.83L9.41 16.41L8 15Z', render: 'secondary' }
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        type: '3d-stroke',
        layers: [
            // Main chevron shape (top face)
            { path: 'M17 10L12 15L7 10L8.41 8.59L12 12.17L15.59 8.59L17 10Z', render: 'main' },
            // Left side depth (offset left and up)
            { path: 'M16 9L11 14L6 9L7.41 7.59L11 11.17L14.59 7.59L16 9Z', render: 'depth' },
            // Right side depth (offset right and up)
            { path: 'M18 9L13 14L8 9L9.41 7.59L13 11.17L16.59 7.59L18 9Z', render: 'secondary' }
        ]
    },
    'compass': {
        name: 'Compass',
        type: '3d-stroke',
        layers: [
            // Main compass circle (top face)
            { path: 'M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z M8 8L16 10L14 16L6 14L8 8Z', render: 'main' },
            // Left side depth (offset left and down)
            { path: 'M11 3C16.52 3 21 7.48 21 13C21 18.52 16.52 23 11 23C5.48 23 1 18.52 1 13C1 7.48 5.48 3 11 3Z M7 9L15 11L13 17L5 15L7 9Z', render: 'depth' },
            // Right side depth (offset right and down)
            { path: 'M13 3C18.52 3 23 7.48 23 13C23 18.52 18.52 23 13 23C7.48 23 3 18.52 3 13C3 7.48 7.48 3 13 3Z M9 9L17 11L15 17L7 15L9 9Z', render: 'secondary' }
        ]
    },
    'location': {
        name: 'Location',
        type: '3d-stroke',
        layers: [
            // Main location pin (top face)
            { path: 'M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2Z M12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z', render: 'main' },
            // Left side depth (offset left and down)
            { path: 'M11 3C14.87 3 18 6.13 18 10C18 15.25 11 23 11 23C11 23 4 15.25 4 10C4 6.13 7.13 3 11 3Z M11 7C12.66 7 14 8.34 14 10C14 11.66 12.66 13 11 13C9.34 13 8 11.66 8 10C8 8.34 9.34 7 11 7Z', render: 'depth' },
            // Right side depth (offset right and down)
            { path: 'M13 3C16.87 3 20 6.13 20 10C20 15.25 13 23 13 23C13 23 6 15.25 6 10C6 6.13 9.13 3 13 3Z M13 7C14.66 7 16 8.34 16 10C16 11.66 14.66 13 13 13C11.34 13 10 11.66 10 10C10 8.34 11.34 7 13 7Z', render: 'secondary' }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = navigation3dIcons;
}
