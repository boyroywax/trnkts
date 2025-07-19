// 3D Communication Icons - Simple dual tone style matching navigation icons
// Using primary/accent split for clean geometric forms
const communication3dSimpleIcons = {
    'message': {
        name: 'Message',
        type: '3d-stroke',
        layers: [
            // Left half of message bubble with tail - primary segment
            { path: 'M4 4C2.9 4 2 4.9 2 6v10c0 1.1.9 2 2 2h6l2 4 2-4V4H4z', render: 'primary' },
            // Right half of message bubble - accent segment
            { path: 'M12 4h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-8V4z', render: 'accent' },
            // Horizontal text lines mimicking lines of text - detail layer
            { path: 'M5 8h14M5 10h12M5 12h8', render: 'details' }
        ]
    },
    'phone': {
        name: 'Phone',
        type: '3d-stroke',
        layers: [
            // Left half of smartphone - primary segment
            { path: 'M8 2C6.9 2 6 2.9 6 4v16c0 1.1.9 2 2 2h4V2H8z', render: 'primary' },
            // Right half of smartphone - accent segment
            { path: 'M12 2h4c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-4V2z', render: 'accent' },
            // Screen area - detail layer
            { path: 'M7 5h10v12H7V5z', render: 'detail' },
            // Home button - detail layer
            { path: 'M12 19c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z', render: 'detail' }
        ]
    },
    'email': {
        name: 'Email',
        type: '3d-stroke',
        layers: [
            // Left half of envelope - primary segment
            { path: 'M4 4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h8V4H4z', render: 'primary' },
            // Right half of envelope - accent segment
            { path: 'M12 4h8c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-8V4z', render: 'accent' },
            // Email envelope flap - detail layer
            { path: 'M2 6l10 7 10-7', render: 'detail' }
        ]
    },
    'chat': {
        name: 'Chat',
        type: '3d-stroke',
        layers: [
            // Left half of chat bubble - primary segment (scaled up)
            { path: 'M3 3C1.9 3 1 3.9 1 5v10c0 1.1.9 2 2 2h7l3 4v-4V3H3z', render: 'primary' },
            // Right half of chat bubble - accent segment (scaled up)
            { path: 'M12 3h7c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-7V3z', render: 'accent' },
            // Chat dots indicating conversation - detail layer (scaled up)
            { path: 'M6 10c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1zM10 10c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1zM14 10c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1z', render: 'detail' }
        ]
    },
    'wifi': {
        name: 'WiFi',
        type: '3d-stroke',
        layers: [
            // Left half of wifi signal arcs - primary segment
            { path: 'M2 16c0-5.5 4.5-10 10-10v2c-4.4 0-8 3.6-8 8h-2zM5 16c0-3.9 3.1-7 7-7v2c-2.8 0-5 2.2-5 5H5zM8 16c0-2.2 1.8-4 4-4v2c-1.1 0-2 .9-2 2H8z', render: 'primary' },
            // Right half of wifi signal arcs - accent segment
            { path: 'M12 6c5.5 0 10 4.5 10 10h-2c0-4.4-3.6-8-8-8V6zM12 9c3.9 0 7 3.1 7 7h-2c0-2.8-2.2-5-5-5V9zM12 12c2.2 0 4 1.8 4 4h-2c0-1.1-.9-2-2-2V12z', render: 'accent' },
            // Center signal dot - split circle (left half primary, right half accent)
            { path: 'M12 18c-1.1 0-2 .9-2 2s.9 2 2 2V18z', render: 'primary' },
            { path: 'M12 18v4c1.1 0 2-.9 2-2s-.9-2-2-2z', render: 'accent' }
        ]
    },
    'bluetooth': {
        name: 'Bluetooth',
        type: '3d-stroke',
        layers: [
            // Left half of bluetooth symbol - primary segment
            { path: 'M12 2v7.5L8.5 6 7 7.5 10.5 11 7 14.5 8.5 16l3.5-3.5V20l1-1V2h-1z', render: 'primary' },
            // Right half of bluetooth symbol - accent segment
            { path: 'M12 2l5.5 5.5L14 11l3.5 3.5L12 20V2z', render: 'accent' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communication3dSimpleIcons;
}
