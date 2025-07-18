// 3D Communication Icons - Simple style matching navigation 3D icons
// Using primary/accent split or main/secondary depth for cleaner geometric forms
const communication3dSimpleIcons = {
    'message': {
        name: 'Message',
        type: '3d-stroke',
        layers: [
            // Left half of message bubble - primary segment
            { path: 'M4 2C2.9 2 2 2.9 2 4L2 16L6 18L12 18L12 2L4 2Z', render: 'primary' },
            // Right half of message bubble - accent segment
            { path: 'M12 2L20 2C21.1 2 22 2.9 22 4L22 16C22 17.1 21.1 18 20 18L12 18L12 2Z', render: 'accent' }
        ]
    },
    'phone': {
        name: 'Phone',
        type: '3d-stroke',
        layers: [
            // Left half of phone - primary segment
            { path: 'M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5L21 20C21 20.55 20.55 21 20 21C15.5 21 11.5 19.5 8.5 16.5L6.62 10.79Z', render: 'primary' },
            // Right half of phone with connection - accent segment  
            { path: 'M8.5 16.5C11.5 19.5 15.5 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3L7.5 3C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93L8.5 16.5Z', render: 'accent' }
        ]
    },
    'email': {
        name: 'Email',
        type: '3d-stroke',
        layers: [
            // Left half of envelope - primary segment
            { path: 'M4 4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20L12 20L12 4L4 4Z', render: 'primary' },
            // Right half of envelope - accent segment
            { path: 'M12 4L20 4C21.1 4 22 4.9 22 6L22 18C22 19.1 21.1 20 20 20L12 20L12 4Z', render: 'accent' },
            // Email content/lines - detail layer
            { path: 'M4 6L12 13L20 6M6 9L18 9M6 12L18 12M6 15L14 15', render: 'detail' }
        ]
    },
    'chat': {
        name: 'Chat',
        type: '3d-stroke',
        layers: [
            // Main chat bubble - primary segment
            { path: 'M8 3C4.13 3 1 6.13 1 10L1 14C1 17.87 4.13 21 8 21L10 21L10 23L16 19L20 19C21.1 19 22 18.1 22 17L22 7C22 5.9 21.1 5 20 5L12 5L8 3Z', render: 'primary' },
            // Chat lines - accent segment
            { path: 'M5 9L19 9M5 12L19 12M5 15L15 15', render: 'accent' }
        ]
    },
    'video': {
        name: 'Video',
        type: '3d-stroke',
        layers: [
            // Left half of video screen - primary segment
            { path: 'M4 4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20L12 20L12 4L4 4Z', render: 'primary' },
            // Right half of video screen - accent segment
            { path: 'M12 4L14 4C15.1 4 16 4.9 16 6L16 18C16 19.1 15.1 20 14 20L12 20L12 4Z', render: 'accent' },
            // Camera and play symbol - detail layer
            { path: 'M17 8L22 5L22 19L17 16L17 8ZM8 9L12 12L8 15L8 9Z', render: 'detail' }
        ]
    },
    'microphone': {
        name: 'Microphone',
        type: '3d-stroke',
        layers: [
            // Mic body - primary segment
            { path: 'M12 2C13.1 2 14 2.9 14 4L14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10L10 4C10 2.9 10.9 2 12 2Z', render: 'primary' },
            // Stand and base - accent segment
            { path: 'M12 12L12 18L7 18L7 20L17 20L17 18L12 18Z', render: 'accent' },
            // Audio waves - detail layer
            { path: 'M8 10C8 13.3 10.7 16 14 16M6 10C6 14.4 9.6 18 14 18', render: 'detail' }
        ]
    },
    'wifi': {
        name: 'WiFi',
        type: '3d-stroke',
        layers: [
            // Left half of wifi waves - primary segment
            { path: 'M1 9C2.5 7.5 4.5 6.5 6.8 6.1C8.5 5.8 10.2 5.7 12 5.7L12 19L1 9Z', render: 'primary' },
            // Right half of wifi waves - accent segment
            { path: 'M12 5.7C13.8 5.7 15.5 5.8 17.2 6.1C19.5 6.5 21.5 7.5 23 9L12 19L12 5.7Z', render: 'accent' },
            // Center point - detail layer
            { path: 'M11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18Z', render: 'detail' }
        ]
    },
    'bluetooth': {
        name: 'Bluetooth',
        type: '3d-stroke',
        layers: [
            // Left side of bluetooth symbol - primary segment
            { path: 'M12 2L11 3L11 9.5L7.5 6L6 7.5L10.5 12L6 16.5L7.5 18L11 14.5L11 21L12 22L12 13L12 11L12 2Z', render: 'primary' },
            // Right side of bluetooth symbol - accent segment  
            { path: 'M12 2L17 7L13 11L12 11L12 13L13 13L17 17L12 22L12 2Z', render: 'accent' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communication3dSimpleIcons;
}
