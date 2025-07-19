// 3D Media Icons - Simple style matching navigation 3D icons
// Using primary/accent split or main/secondary depth for cleaner geometric forms
const media3dSimpleIcons = {
    'play': {
        name: 'Play',
        type: '3d-stroke',
        layers: [
            // Left half of triangle - primary segment
            { path: 'M8 5L13.5 8.5L13.5 15.5L8 19L8 5Z', render: 'primary' },
            // Right half of triangle - accent segment
            { path: 'M13.5 8.5L19 12L13.5 15.5L13.5 8.5Z', render: 'accent' }
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
            // Lower-left triangle - primary segment
            { path: 'M6 6L6 18L18 18Z', render: 'primary' },
            // Upper-right triangle - accent segment
            { path: 'M6 6L18 6L18 18Z', render: 'accent' },
            // Diagonal highlight (optional subtle detail)
            { path: 'M6.5 6.5L17.5 17.5', render: 'detail', opacity: 0.2 }
        ]
    },
    'volume': {
        name: 'Volume',
        type: '3d-stroke',
        layers: [
            // Speaker only - primary segment  
            { path: 'M11 5L6 9L2 9L2 15L6 15L11 19L11 5Z', render: 'primary' },
            // Sound waves only - accent segment
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'accent' }
        ]
    },
    'camera': {
        name: 'Camera',
        type: '3d-stroke',
        layers: [
            // Left half of camera body - primary segment
            { path: 'M9 3L12 3L12 20L4 20C2.9 20 2 19.1 2 18L2 7C2.9 5 2.9 5 4 5L8 5L9 3Z', render: 'primary' },
            // Right half of camera body - accent segment
            { path: 'M12 3L15 3L16 5L20 5C21.1 5 22 5.9 22 7L22 18C22 19.1 21.1 20 20 20L12 20L12 3Z', render: 'accent' },
            // Lens circle - detail layer
            { path: 'M12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z', render: 'detail' }
        ]
    },
    'image': {
        name: 'Image',
        type: '3d-stroke',
        layers: [
            // Left half of frame - primary segment
            { path: 'M5 3L12 3L12 21L5 21C3.9 21 3 20.1 3 19L3 5C3 3.9 3.9 3 5 3Z', render: 'primary' },
            // Right half of frame - accent segment
            { path: 'M12 3L19 3C20.1 3 21 3.9 21 5L21 19C21 20.1 20.1 21 19 21L12 21L12 3Z', render: 'accent' },
            // Landscape elements - detail layer
            { path: 'M14 9L16 12L20 16L20 19L5 19L5 15L8 11L10 13L14 9Z M16.5 8C17.3 8 18 7.3 18 6.5C18 5.7 17.3 5 16.5 5C15.7 5 15 5.7 15 6.5C15 7.3 15.7 8 16.5 8Z', render: 'detail' }
        ]
    },
    'music': {
        name: 'Music',
        type: '3d-stroke',
        layers: [
            // Left half (x<12) - primary segment (classic eighth note, left side, stem aligned)
            { path: 'M10.84375 18A3.125 3.125 0 1 1 7.71875 14.875A3.125 3.125 0 0 1 10.84375 18ZM9 15.5V6H11V15.5', render: 'primary' },
            // Right half (x>=12) - accent segment (classic eighth note, right side, no circle, stem aligned)
            { path: 'M11 6H15V8Q15 10 13 10H11V15.5', render: 'accent' }
        ]
    },
    'video-play': {
        name: 'Video Play',
        type: '3d-stroke',
        layers: [
            // Left half of video frame - primary segment
            { path: 'M4 4L12 4L12 20L4 20C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4Z', render: 'primary' },
            // Right half of video frame - accent segment
            { path: 'M12 4L20 4C21.1 4 22 4.9 22 6L22 18C22 19.1 21.1 20 20 20L12 20L12 4Z', render: 'accent' },
            // Play triangle - detail layer
            { path: 'M10 8L16 12L10 16L10 8Z', render: 'detail' }
        ]
    },
    'microphone': {
        name: 'Microphone',
        type: '3d-stroke',
        layers: [
            // Mic body only - primary segment
            { path: 'M12 2C13.1 2 14 2.9 14 4L14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10L10 4C10 2.9 10.9 2 12 2Z', render: 'primary' },
            // Stand and base only - accent segment
            { path: 'M12 12L12 18L7 18L7 20L17 20L17 18L12 18Z M8 10C8 13.3 10.7 16 14 16 M6 10C6 14.4 9.6 18 14 18', render: 'accent' },
            // Sound waves - accent segment
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12C17 13.35 16.47 14.61 15.54 15.54M18.07 5.93C20.26 8.12 21.5 11.04 21.5 12C21.5 12.96 20.26 15.88 18.07 18.07', render: 'accent' }
        ]
    },
    'headphones': {
        name: 'Headphones',
        type: '3d-stroke',
        layers: [
            // Headband arc only - primary segment
            { path: 'M12 1C16.97 1 21 4.03 21 9C21 5.13 17.87 2 12 2C6.13 2 3 5.13 3 9C3 4.03 7.03 1 12 1Z', render: 'primary' },
            // Ear cups only - accent segment
            { path: 'M6 9C7.1 9 8 9.9 8 11L8 14C8 15.1 7.1 16 6 16L5 16C3.9 16 3 15.1 3 14L3 11C3 9.9 3.9 9 5 9L6 9Z M18 9C19.1 9 20 9.9 20 11L20 14C20 15.1 19.1 16 18 16L17 16C15.9 16 15 15.1 15 14L15 11C15 9.9 15.9 9 17 9L18 9Z', render: 'accent' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = media3dSimpleIcons;
}
