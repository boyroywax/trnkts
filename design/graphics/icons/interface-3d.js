// 3D Interface Icons - Tri-tone geometric style inspired by trnkts gem logo
// Using filled paths with opacity levels (1.0, 0.7, 0.5) for 3D depth
const interface3dIcons = {
    'home': {
        name: 'Home',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L2 12L5 12L5 22L19 22L19 12L22 12L12 2Z', opacity: 1.0 },
            { d: 'M12 2L2 12L5 12L12 8L12 2Z', opacity: 0.7 },
            { d: 'M12 2L22 12L19 12L12 8L12 2Z', opacity: 0.5 }
        ]
    },
    'menu': {
        name: 'Menu',
        type: '3d-fill',
        paths: [
            { d: 'M3 6L21 6L21 8L3 8L3 6Z M3 11L21 11L21 13L3 13L3 11Z M3 16L21 16L21 18L3 18L3 16Z', opacity: 1.0 },
            { d: 'M3 6L21 6L19 8L5 8L3 6Z M3 11L21 11L19 13L5 13L3 11Z M3 16L21 16L19 18L5 18L3 16Z', opacity: 0.7 },
            { d: 'M5 8L19 8L17 10L7 10L5 8Z M5 13L19 13L17 15L7 15L5 13Z M5 18L19 18L17 20L7 20L5 18Z', opacity: 0.5 }
        ]
    },
    'settings': {
        name: 'Settings',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z M19.4 7.3L17.6 5.5L16.2 6.9L18 8.7L19.4 7.3Z M22 11L20 11L20 13L22 13L22 11Z M19.4 16.7L18 15.3L16.2 17.1L17.6 18.5L19.4 16.7Z M14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18Z M7.8 17.1L6 15.3L4.6 16.7L6.4 18.5L7.8 17.1Z M4 13L2 13L2 11L4 11L4 13Z M7.8 6.9L6.4 5.5L4.6 7.3L6 8.7L7.8 6.9Z', opacity: 1.0 },
            { d: 'M12 4C12 5.1 11.1 6 10 6C8.9 6 8 5.1 8 4C8 2.9 8.9 2 10 2C11.1 2 12 2.9 12 4Z M17.4 9.3L15.6 7.5L14.2 8.9L16 10.7L17.4 9.3Z', opacity: 0.7 },
            { d: 'M10 6C8.9 6 8 5.1 8 4C8 2.9 8.9 2 10 2C11.1 2 12 2.9 12 4C12 5.1 11.1 6 10 6Z', opacity: 0.5 }
        ]
    },
    'search': {
        name: 'Search',
        type: '3d-fill',
        paths: [
            { d: 'M11 2C15.97 2 20 6.03 20 11C20 13.12 19.25 15.07 18 16.58L22 20.58L20.58 22L16.58 18C15.07 19.25 13.12 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2Z', opacity: 1.0 },
            { d: 'M11 4C14.86 4 18 7.14 18 11C18 12.5 17.5 13.86 16.66 14.93L11 11L11 4Z', opacity: 0.7 },
            { d: 'M11 6C13.76 6 16 8.24 16 11C16 11.86 15.75 12.66 15.32 13.32L11 11L11 6Z', opacity: 0.5 }
        ]
    },
    'profile': {
        name: 'Profile',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C15.31 2 18 4.69 18 8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8C6 4.69 8.69 2 12 2Z M12 16C16.42 16 20 17.79 20 20L20 22L4 22L4 20C4 17.79 7.58 16 12 16Z', opacity: 1.0 },
            { d: 'M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4Z M12 16C14.42 16 16.5 16.89 18 18L12 18L12 16Z', opacity: 0.7 },
            { d: 'M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6Z M12 18C10.42 18 8.5 18.44 7 19.2L12 19.2L12 18Z', opacity: 0.5 }
        ]
    },
    'bell': {
        name: 'Bell',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C13.1 2 14 2.9 14 4C14 4.74 17 7.74 17 11L17 16L20 19L4 19L7 16L7 11C7 7.74 10 4.74 10 4C10 2.9 10.9 2 12 2Z M10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20L10 20Z', opacity: 1.0 },
            { d: 'M12 4C12.5 4 13 4.5 13 5C13 5.5 15 8.5 15 11L15 16L12 16L12 4Z', opacity: 0.7 },
            { d: 'M12 6C12.3 6 12.5 6.3 12.5 6.5C12.5 6.8 14 9 14 11L14 16L12 16L12 6Z', opacity: 0.5 }
        ]
    },
    'folder': {
        name: 'Folder',
        type: '3d-fill',
        paths: [
            { d: 'M2 6L2 18C2 19.1 2.9 20 4 20L20 20C21.1 20 22 19.1 22 18L22 8C22 6.9 21.1 6 20 6L12 6L10 4L4 4C2.9 4 2 4.9 2 6Z', opacity: 1.0 },
            { d: 'M4 6L4 18L20 18L20 8L12 8L10 6L4 6Z', opacity: 0.7 },
            { d: 'M6 8L6 16L18 16L18 10L12 10L10 8L6 8Z', opacity: 0.5 }
        ]
    },
    'star': {
        name: 'Star',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z', opacity: 1.0 },
            { d: 'M12 2L14.5 7.5L20 8.5L16 12.5L17 18L12 15.5L12 2Z', opacity: 0.7 },
            { d: 'M12 4L13.5 8L17 8.5L14.5 11L15 14.5L12 13L12 4Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = interface3dIcons;
}
