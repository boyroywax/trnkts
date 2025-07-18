// Translucent Icons - 3D geometric style inspired by trnkts gem logo
// Using tri-tone filled paths with opacity levels (1.0, 0.7, 0.5) for 3D depth
const translucentIcons = {
    'diamond': {
        name: 'Diamond',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L6 8L12 10L18 8L12 2Z', opacity: 1.0 },
            { d: 'M6 8L12 10L12 18L6 16L6 8Z', opacity: 0.7 },
            { d: 'M18 8L12 10L12 18L18 16L18 8Z', opacity: 0.5 }
        ]
    },
    'cube': {
        name: 'Cube',
        type: '3d-fill',
        paths: [
            { d: 'M8 4L16 4L20 8L12 8L8 4Z', opacity: 1.0 },
            { d: 'M8 4L12 8L12 16L8 12L8 4Z', opacity: 0.7 },
            { d: 'M16 4L20 8L20 16L16 12L16 4Z', opacity: 0.5 }
        ]
    },
    'pyramid': {
        name: 'Pyramid',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L4 18L20 18L12 2Z', opacity: 1.0 },
            { d: 'M12 2L4 18L8 20L12 8L12 2Z', opacity: 0.7 },
            { d: 'M12 2L20 18L16 20L12 8L12 2Z', opacity: 0.5 }
        ]
    },
    'hexagon': {
        name: 'Hexagon',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L20 7L20 17L12 22L4 17L4 7L12 2Z', opacity: 1.0 },
            { d: 'M12 4L18 8L18 16L12 20L6 16L6 8L12 4Z', opacity: 0.7 },
            { d: 'M12 6L16 9L16 15L12 18L8 15L8 9L12 6Z', opacity: 0.5 }
        ]
    },
    'sphere': {
        name: 'Sphere',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z', opacity: 1.0 },
            { d: 'M12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4Z', opacity: 0.7 },
            { d: 'M12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6Z', opacity: 0.5 }
        ]
    },
    'crystal': {
        name: 'Crystal',
        type: '3d-fill',
        paths: [
            { d: 'M12 1L8 6L16 6L12 1Z', opacity: 1.0 },
            { d: 'M8 6L16 6L18 16L6 16L8 6Z', opacity: 0.7 },
            { d: 'M6 16L18 16L12 23L6 16Z', opacity: 0.5 }
        ]
    },
    'prism': {
        name: 'Prism',
        type: '3d-fill',
        paths: [
            { d: 'M12 3L21 8L21 16L12 21L3 16L3 8L12 3Z', opacity: 1.0 },
            { d: 'M12 3L3 8L12 12L12 3Z', opacity: 0.7 },
            { d: 'M12 3L21 8L12 12L12 3Z', opacity: 0.5 }
        ]
    },
    'octahedron': {
        name: 'Octahedron',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L18 12L6 12L12 2Z', opacity: 1.0 },
            { d: 'M12 22L6 12L18 12L12 22Z', opacity: 0.7 },
            { d: 'M6 12L18 12L16 14L8 14L6 12Z', opacity: 0.5 }
        ]
    },
    'tetrahedron': {
        name: 'Tetrahedron',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L20 20L4 20L12 2Z', opacity: 1.0 },
            { d: 'M12 2L4 20L8 16L12 2Z', opacity: 0.7 },
            { d: 'M12 2L20 20L16 16L12 2Z', opacity: 0.5 }
        ]
    },
    'cone': {
        name: 'Cone',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L20 20C20 21.1 16.4 22 12 22C7.6 22 4 21.1 4 20L12 2Z', opacity: 1.0 },
            { d: 'M12 2L4 20C4 20.5 6.7 21 10 21L12 2Z', opacity: 0.7 },
            { d: 'M12 2L20 20C20 20.5 17.3 21 14 21L12 2Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translucentIcons;
}
