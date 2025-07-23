// Communication and Media Icons - Messaging, sharing, and media tools
const communicationIcons = {
    'message': {
        name: 'Message',
        paths: [
            'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'
        ]
    },
    'mail': {
        name: 'Mail',
        paths: [
            'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6'
        ]
    },
    'phone': {
        name: 'Phone',
        paths: [
            'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z'
        ]
    },
    'video': {
        name: 'Video',
        paths: [
            'M23 7l-7 5 7 5V7zM16 5H2a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1z'
        ]
    },
    'share': {
        name: 'Share',
        paths: [
            'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z'
        ]
    },
    'link': {
        name: 'Link',
        paths: [
            'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'
        ]
    },
    'play': {
        name: 'Play',
        paths: [
            'M8 5v14l11-7z'
        ]
    },
    'pause': {
        name: 'Pause',
        paths: [
            'M6 4h4v16H6zM14 4h4v16h-4z'
        ]
    },
    'stop': {
        name: 'Stop',
        paths: [
            'M6 6h12v12H6z'
        ]
    },
    'volume': {
        name: 'Volume',
        paths: [
            'M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
        ]
    },
    'camera': {
        name: 'Camera',
        paths: [
            'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z'
        ]
    },
    'image': {
        name: 'Image',
        paths: [
            'M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 15l-5-5L5 21'
        ]
    },
    'music': {
        name: 'Music',
        paths: [
            'M9 18V5l12-2v13M6 16a3 3 0 100 6 3 3 0 000-6zM18 14a3 3 0 100 6 3 3 0 000-6z'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communicationIcons;
}
