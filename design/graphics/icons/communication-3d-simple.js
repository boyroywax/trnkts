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
            { path: 'M12 2L20 2C21.1 2 22 2.9 22 4L22 16C22 17.1 21.1 18 20 18L12 18L12 2Z', render: 'accent' },
            // Message text lines - line layer (using stroke rendering)
            { path: 'M6 6L18 6', render: 'line' },
            { path: 'M6 9L16 9', render: 'line' },
            { path: 'M6 12L14 12', render: 'line' }
        ]
    },
    'phone': {
        name: 'Phone',
        type: '3d-stroke',
        layers: [
            // Left half of phone handset - primary segment
            { path: 'M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5L21 20C21 20.55 20.55 21 20 21C15.5 21 11.5 19.5 8.5 16.5C5.5 13.5 3.5 9.5 3.5 5C3.5 3.45 3.95 3 4.5 3L7.5 3L6.62 10.79Z', render: 'primary' },
            // Right half and connection curves - accent segment
            { path: 'M8.5 16.5C11.5 19.5 15.5 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3L7.5 3C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L8.5 16.5Z', render: 'accent' }
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
            // Email envelope flap - line layer
            { path: 'M2 6L12 13L22 6', render: 'line' },
            // Email content lines - line layer
            { path: 'M6 9L18 9', render: 'line' },
            { path: 'M6 12L18 12', render: 'line' },
            { path: 'M6 15L14 15', render: 'line' }
        ]
    },
    'chat': {
        name: 'Chat',
        type: '3d-stroke',
        layers: [
            // Main chat bubble - primary segment
            { path: 'M8 3C4.13 3 1 6.13 1 10L1 14C1 17.87 4.13 21 8 21L10 21L10 23L14 20L20 20C21.1 20 22 19.1 22 18L22 8C22 6.9 21.1 6 20 6L12 6C10.5 4.5 9.5 3 8 3Z', render: 'primary' },
            // Chat tail and secondary bubble - accent segment  
            { path: 'M10 21L10 23L14 20L20 20C21.1 20 22 19.1 22 18L22 8C22 6.9 21.1 6 20 6L12 6L10 21Z', render: 'accent' },
            // Chat text lines - line layer
            { path: 'M5 9L19 9', render: 'line' },
            { path: 'M5 12L19 12', render: 'line' },
            { path: 'M5 15L15 15', render: 'line' }
        ]
    },
    'wifi': {
        name: 'WiFi',
        type: '3d-stroke',
        layers: [
            // Left side wifi arcs - primary segment
            { path: 'M1 9C2.5 7.5 4.5 6.5 6.8 6.1C8.5 5.8 10.2 5.7 12 5.7L12 7C10.5 7 9 7.2 7.6 7.6C5.8 8.1 4.2 9 3 10.2L1 9ZM4 12C4.8 11.2 5.8 10.6 6.9 10.2C8.5 9.6 10.2 9.4 12 9.4L12 11C10.5 11 9.1 11.2 7.8 11.7C6.8 12.1 5.9 12.6 5.1 13.4L4 12Z', render: 'primary' },
            // Right side wifi arcs - accent segment
            { path: 'M12 5.7C13.8 5.7 15.5 5.8 17.2 6.1C19.5 6.5 21.5 7.5 23 9L21 10.2C19.8 9 18.2 8.1 16.4 7.6C15 7.2 13.5 7 12 7L12 5.7ZM12 9.4C13.8 9.4 15.5 9.6 17.1 10.2C18.2 10.6 19.2 11.2 20 12L18.9 13.4C18.1 12.6 17.2 12.1 16.2 11.7C14.9 11.2 13.5 11 12 11L12 9.4Z', render: 'accent' },
            // Center signal point - detail layer
            { path: 'M11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18Z', render: 'detail' }
        ]
    },
    'bluetooth': {
        name: 'Bluetooth',
        type: '3d-stroke',
        layers: [
            // Left side of bluetooth symbol - primary segment
            { path: 'M12 2L11 3L11 9.5L7.5 6L6 7.5L10.5 12L6 16.5L7.5 18L11 14.5L11 21L12 22L12 13L12 11L12 2Z', render: 'primary' },
            // Right side zigzag pattern - accent segment  
            { path: 'M12 2L17 7L13 11L12 11L12 13L13 13L17 17L12 22L12 21L15 18L13 16L13 13L15 15L17 17L12 22L12 13L13 13L17 17L15 15L13 13L13 11L15 9L17 7L12 2Z', render: 'accent' },
            // Bluetooth connection points - detail layer
            { path: 'M13 5L15 7L13 9L13 5ZM13 15L15 17L13 19L13 15Z', render: 'detail' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communication3dSimpleIcons;
}
