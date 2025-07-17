// Media Icons - Audio, video, and media control tools
const mediaIcons = {
    'play': {
        name: 'Play',
        paths: [
            'M8 5v14l11-7z',
            'M6 4a2 2 0 00-2 2v12a2 2 0 004 0V6a2 2 0 00-2-2z',
            'M19 12a1 1 0 100-2 1 1 0 000 2z'
        ]
    },
    'pause': {
        name: 'Pause',
        paths: [
            'M6 4h4v16H6zM14 4h4v16h-4z',
            'M8 6v12m8-12v12',
            'M4 10h16'
        ]
    },
    'stop': {
        name: 'Stop',
        paths: [
            'M6 6h12v12H6z',
            'M4 4h16v16H4z',
            'M8 8h8v8H8z'
        ]
    },
    'volume': {
        name: 'Volume',
        paths: [
            'M11 5L6 9H2v6h4l5 4V5z',
            'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07',
            'M13 8v8'
        ]
    },
    'camera': {
        name: 'Camera',
        paths: [
            'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z',
            'M12 17a4 4 0 100-8 4 4 0 000 8z',
            'M16 6h2'
        ]
    },
    'image': {
        name: 'Image',
        paths: [
            'M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z',
            'M8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
            'M21 15l-5-5L5 21'
        ]
    },
    'music': {
        name: 'Music',
        paths: [
            'M9 18V5l12-2v13',
            'M9 13a3 3 0 100 6 3 3 0 000-6zm12-2a3 3 0 100 6 3 3 0 000-6z',
            'M9 9l12-2'
        ]
    },
    'video-camera': {
        name: 'Video Camera',
        paths: [
            'M23 7l-7 5 7 5V7z',
            'M15 5H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1z',
            'M8 10a2 2 0 11-4 0 2 2 0 014 0z'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mediaIcons;
}
