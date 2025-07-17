// Media Icons - Audio, video, and media control tools
const mediaIcons = {
    'play': {
        name: 'Play',
        paths: [
            'M8 5v14l11-7z',
            'M9 7v10l8-5z',
            'M10 9v6l5-3z'
        ]
    },
    'pause': {
        name: 'Pause',
        paths: [
            'M6 4h4v16H6zM14 4h4v16h-4z',
            'M7 6h2v12H7zM15 6h2v12h-2z',
            'M8 8h1v8H8zM16 8h1v8h-1z'
        ]
    },
    'stop': {
        name: 'Stop',
        paths: [
            'M6 6h12v12H6z',
            'M7 7h10v10H7z',
            'M8 8h8v8H8z'
        ]
    },
    'volume': {
        name: 'Volume',
        paths: [
            'M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07',
            'M10 7L7 10H4v4h3l3 3V7zM17.5 6.5a8 8 0 010 11M14.5 9.5a3 3 0 010 5',
            'M9 9L8 10H6v4h2l1 1V9zM16 8a6 6 0 010 8M13 11v2'
        ]
    },
    'camera': {
        name: 'Camera',
        paths: [
            'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z',
            'M22 18a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h4l1.5-2h7l1.5 2h4a1 1 0 011 1zM12 16a3 3 0 100-6 3 3 0 000 6z',
            'M21 17H3V10h3l1-1h10l1 1h3v7zM12 15a2 2 0 100-4 2 2 0 000 4zM18 11h1'
        ]
    },
    'image': {
        name: 'Image',
        paths: [
            'M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 15l-5-5L5 21',
            'M6 20h12a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1v13a1 1 0 001 1zM8 9a1 1 0 11-2 0 1 1 0 012 0zM19 14l-4-4L6 19',
            'M7 19h10V7H7v12zM7.5 10a.5.5 0 11-1 0 .5.5 0 011 0zM17 13l-3-3L8 16'
        ]
    },
    'music': {
        name: 'Music',
        paths: [
            'M9 18V5l12-2v13M9 13a3 3 0 100 6 3 3 0 000-6zM21 11a3 3 0 100 6 3 3 0 000-6z',
            'M10 17V6l10-1.5v11M10 14a2 2 0 100 4 2 2 0 000-4zM20 12a2 2 0 100 4 2 2 0 000-4z',
            'M11 16V7l8-1v9M11 15a1 1 0 100 2 1 1 0 000-2zM19 13a1 1 0 100 2 1 1 0 000-2zM11 9l8-1'
        ]
    },
    'video-camera': {
        name: 'Video Camera',
        paths: [
            'M23 7l-7 5 7 5V7zM16 5H2a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1z',
            'M22 8l-6 4 6 4V8zM15 6H3v10h12V6z',
            'M21 9l-4 3 4 3v-6zM14 7H4v8h10V7zM9 10l3 2-3 2v-4'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mediaIcons;
}
