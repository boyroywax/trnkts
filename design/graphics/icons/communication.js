// Communication Icons - Messaging and sharing tools
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
            'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13'
        ]
    },
    'link': {
        name: 'Link',
        paths: [
            'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = communicationIcons;
}
