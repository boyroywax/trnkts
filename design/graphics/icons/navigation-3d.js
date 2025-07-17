// 3D Navigation Icons - Tri-tone geometric style inspired by trnkts gem logo
// Using filled paths with opacity levels (1.0, 0.7, 0.5) for 3D depth
const navigation3dIcons = {
    'arrow-up': {
        name: 'Arrow Up',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L22 12L17 12L17 22L7 22L7 12L2 12L12 2Z', opacity: 1.0 },
            { d: 'M12 4L19 11L16 11L16 20L12 20L12 4Z', opacity: 0.7 },
            { d: 'M12 6L17 11L15 11L15 18L12 18L12 6Z', opacity: 0.5 }
        ]
    },
    'arrow-down': {
        name: 'Arrow Down',
        type: '3d-fill',
        paths: [
            { d: 'M12 22L2 12L7 12L7 2L17 2L17 12L22 12L12 22Z', opacity: 1.0 },
            { d: 'M12 20L5 13L8 13L8 4L12 4L12 20Z', opacity: 0.7 },
            { d: 'M12 18L7 13L9 13L9 6L12 6L12 18Z', opacity: 0.5 }
        ]
    },
    'arrow-left': {
        name: 'Arrow Left',
        type: '3d-fill',
        paths: [
            { d: 'M2 12L12 2L12 7L22 7L22 17L12 17L12 22L2 12Z', opacity: 1.0 },
            { d: 'M4 12L11 5L11 8L20 8L20 12L4 12Z', opacity: 0.7 },
            { d: 'M6 12L11 7L11 9L18 9L18 12L6 12Z', opacity: 0.5 }
        ]
    },
    'arrow-right': {
        name: 'Arrow Right',
        type: '3d-fill',
        paths: [
            { d: 'M22 12L12 22L12 17L2 17L2 7L12 7L12 2L22 12Z', opacity: 1.0 },
            { d: 'M20 12L13 19L13 16L4 16L4 12L20 12Z', opacity: 0.7 },
            { d: 'M18 12L13 17L13 15L6 15L6 12L18 12Z', opacity: 0.5 }
        ]
    },
    'chevron-up': {
        name: 'Chevron Up',
        type: '3d-fill',
        paths: [
            { d: 'M7 14L12 9L17 14L15.59 15.41L12 11.83L8.41 15.41L7 14Z', opacity: 1.0 },
            { d: 'M8.5 13.5L12 10L15.5 13.5L14.5 14.5L12 12L9.5 14.5L8.5 13.5Z', opacity: 0.7 },
            { d: 'M10 13L12 11L14 13L13.3 13.7L12 12.4L10.7 13.7L10 13Z', opacity: 0.5 }
        ]
    },
    'chevron-down': {
        name: 'Chevron Down',
        type: '3d-fill',
        paths: [
            { d: 'M17 10L12 15L7 10L8.41 8.59L12 12.17L15.59 8.59L17 10Z', opacity: 1.0 },
            { d: 'M15.5 10.5L12 14L8.5 10.5L9.5 9.5L12 12L14.5 9.5L15.5 10.5Z', opacity: 0.7 },
            { d: 'M14 11L12 13L10 11L10.7 10.3L12 11.6L13.3 10.3L14 11Z', opacity: 0.5 }
        ]
    },
    'compass': {
        name: 'Compass',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z M8 8L16 10L14 16L6 14L8 8Z', opacity: 1.0 },
            { d: 'M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4Z M9 9L15 11L13 15L7 13L9 9Z', opacity: 0.7 },
            { d: 'M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z M10 10L14 11L13 14L9 13L10 10Z', opacity: 0.5 }
        ]
    },
    'location': {
        name: 'Location',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2Z M12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z', opacity: 1.0 },
            { d: 'M12 4C14.76 4 17 6.24 17 9C17 12.5 12 18.5 12 18.5C12 18.5 7 12.5 7 9C7 6.24 9.24 4 12 4Z M12 7C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7Z', opacity: 0.7 },
            { d: 'M12 5C13.66 5 15 6.34 15 8C15 10.5 12 15 12 15C12 15 9 10.5 9 8C9 6.34 10.34 5 12 5Z M12 7.5C11.72 7.5 11.5 7.72 11.5 8C11.5 8.28 11.72 8.5 12 8.5C12.28 8.5 12.5 8.28 12.5 8C12.5 7.72 12.28 7.5 12 7.5Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = navigation3dIcons;
}
