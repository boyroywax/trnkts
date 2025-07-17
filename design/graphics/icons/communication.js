// Communication Icons - Messaging and sharing tools
const communicationIcons = {
    'message': {
        name: 'Message',
        paths: [
            'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
            'M8 10h8m-8 4h6',
            'M18 8l-6 4-6-4'
        ]
    },
    'mail': {
        name: 'Mail',
        paths: [
            'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
            'M22 6l-10 7L2 6',
            'M8 12h8'
        ]
    },
    'phone': {
        name: 'Phone',
        paths: [
            'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
            'M9 1v3m6-3v3',
            'M15.5 7.5S14 9 12 9s-3.5-1.5-3.5-1.5'
        ]
    },
    'video': {
        name: 'Video',
        paths: [
            'M23 7l-7 5 7 5V7z',
            'M15 5H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1z',
            'M5 9l6 3-6 3V9z'
        ]
    },
    'share': {
        name: 'Share',
        paths: [
            'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8',
            'M16 6l-4-4-4 4',
            'M12 2v13'
        ]
    },
    'link': {
        name: 'Link',
        paths: [
            'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71',
            'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71',
            'M8 12h8'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communicationIcons;
}
