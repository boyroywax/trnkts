// 3D Media Icons - Simple style matching navigation 3D icons
// Using primary/accent split or main/secondary depth for cleaner geometric forms
const media3dSimpleIcons = {
    'play': {
        name: 'Play',
        type: '3d-stroke',
        layers: [
            // Left side - primary segment
            { path: 'M8 5L19 12L8 19L8 12L8 5Z', render: 'primary' },
            // Right side - accent segment  
            { path: 'M8 12L19 12L8 19L8 12Z', render: 'accent' }
        ]
    },
    'pause': {
        name: 'Pause',
        type: '3d-stroke',
        layers: [
            // Left bar - primary segment
            { path: 'M6 4L10 4L10 20L6 20L6 4Z', render: 'primary' },
            // Right bar - accent segment
            { path: 'M14 4L18 4L18 20L14 20L14 4Z', render: 'accent' }
        ]
    },
    'stop': {
        name: 'Stop',
        type: '3d-stroke',
        layers: [
            // Main stop square
            { path: 'M6 6L18 6L18 18L6 18L6 6Z', render: 'main' },
            // Depth shadow
            { path: 'M6.3 6.3L18.3 6.3L18.3 18.3L6.3 18.3L6.3 6.3Z', render: 'secondary', opacity: 0.3 }
        ]
    },
    'volume': {
        name: 'Volume',
        type: '3d-stroke',
        layers: [
            // Speaker - primary segment
            { path: 'M11 5L6 9L2 9L2 15L6 15L11 19L11 5Z', render: 'primary' },
            // Sound waves - accent segment
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'accent' }
        ]
    },
    'camera': {
        name: 'Camera',
        type: '3d-stroke',
        layers: [
            // Camera body - main shape
            { path: 'M9 3L15 3L16 5L20 5C21.1 5 22 5.9 22 7L22 18C22 19.1 21.1 20 20 20L4 20C2.9 20 2 19.1 2 18L2 7C2 5.9 2.9 5 4 5L8 5L9 3Z', render: 'main' },
            // Lens - accent overlay
            { path: 'M12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z', render: 'accent' }
        ]
    },
    'image': {
        name: 'Image',
        type: '3d-stroke',
        layers: [
            // Frame - main shape
            { path: 'M5 3L19 3C20.1 3 21 3.9 21 5L21 19C21 20.1 20.1 21 19 21L5 21C3.9 21 3 20.1 3 19L3 5C3 3.9 3.9 3 5 3Z', render: 'main' },
            // Content - accent overlay
            { path: 'M14 8L16 12L20 12L20 18L4 18L4 15L8 11L10 13L14 8ZM15 7C15.6 7 16 6.4 16 5.8C16 5.2 15.6 4.8 15 4.8C14.4 4.8 14 5.2 14 5.8C14 6.4 14.4 7 15 7Z', render: 'accent' }
        ]
    },
    'music': {
        name: 'Music',
        type: '3d-stroke',
        layers: [
            // Note stems - primary segment
            { path: 'M12 3V13.5L13 13.5V7L19 5V10.5L20 10.5V3L12 3Z', render: 'primary' },
            // Note heads - accent segment
            { path: 'M10.5 13C11.9 13 13 14.1 13 15.5C13 16.9 11.9 18 10.5 18C9.1 18 8 16.9 8 15.5C8 14.1 9.1 13 10.5 13ZM17.5 10C18.9 10 20 11.1 20 12.5C20 13.9 18.9 15 17.5 15C16.1 15 15 13.9 15 12.5C15 11.1 16.1 10 17.5 10Z', render: 'accent' }
        ]
    },
    'video-play': {
        name: 'Video Play',
        type: '3d-stroke',
        layers: [
            // Video frame - main shape
            { path: 'M4 4L20 4C21.1 4 22 4.9 22 6L22 18C22 19.1 21.1 20 20 20L4 20C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4Z', render: 'main' },
            // Play button - accent overlay
            { path: 'M10 8L16 12L10 16L10 8Z', render: 'accent' }
        ]
    },
    'microphone': {
        name: 'Microphone',
        type: '3d-stroke',
        layers: [
            // Mic body - primary segment
            { path: 'M12 2C13.1 2 14 2.9 14 4L14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10L10 4C10 2.9 10.9 2 12 2Z', render: 'primary' },
            // Stand and base - accent segment
            { path: 'M12 12V16L12 18L7 18L7 20L17 20L17 18L12 18V16M8 10C8 13.3 10.7 16 14 16M6 10C6 14.4 9.6 18 14 18', render: 'accent' }
        ]
    },
    'headphones': {
        name: 'Headphones',
        type: '3d-stroke',
        layers: [
            // Headband - main shape
            { path: 'M12 1C16.97 1 21 4.03 21 9V14C21 15.1 20.1 16 19 16H18C16.9 16 16 15.1 16 14V11C16 9.9 16.9 9 18 9H21C21 5.13 17.87 2 12 2C6.13 2 3 5.13 3 9H6C7.1 9 8 9.9 8 11V14C8 15.1 7.1 16 6 16H5C3.9 16 3 15.1 3 14V9C3 4.03 7.03 1 12 1Z', render: 'main' },
            // Ear cups - accent overlay
            { path: 'M6 9C7.1 9 8 9.9 8 11V14C8 15.1 7.1 16 6 16H5C3.9 16 3 15.1 3 14V11C3 9.9 3.9 9 5 9H6ZM18 9C19.1 9 20 9.9 20 11V14C20 15.1 19.1 16 18 16H17C15.9 16 15 15.1 15 14V11C15 9.9 15.9 9 17 9H18Z', render: 'accent' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = media3dSimpleIcons;
}
