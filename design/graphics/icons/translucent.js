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
            { d: 'M12 8L20 8L20 16L12 16L12 8Z', opacity: 0.5 }
        ]
    },
    'pyramid': {
        name: 'Pyramid',
        type: '3d-fill',
        paths: [
            // Left face (1.0 opacity, triangle)
            { d: 'M12 2L4 20L12 15L12 2Z', opacity: 1.0 },
            // Front face (0.7 opacity, triangle)
            { d: 'M12 2L12 15L20 20L12 2Z', opacity: 0.7 },
            // Base (0.5 opacity, 4-sided polygon)
            { d: 'M4 20L12 15L20 20L12 22L4 20Z', opacity: 0.5 }
        ]
    },
    'sphere': {
        name: 'Sphere',
        type: '3d-fill',
        paths: [
            // Largest circle - lightest (0.5 opacity)
            { d: 'M12 2A10 10 0 1 1 12 22A10 10 0 1 1 12 2Z', opacity: 0.5 },
            // Medium circle - medium (0.7 opacity)
            { d: 'M10 4A7 7 0 1 1 10 18A7 7 0 1 1 10 4Z', opacity: 0.7 },
            // Smallest circle - darkest (1.0 opacity) - positioned in top-left for isometric look
            { d: 'M8 6A4 4 0 1 1 8 14A4 4 0 1 1 8 6Z', opacity: 1.0 }
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
            // Top face
            { d: 'M6 8L18 4L22 12L10 16L6 8Z', opacity: 1.0 },
            // Left face
            { d: 'M6 8L10 16L10 22L6 14L6 8Z', opacity: 0.7 },
            // Right face
            { d: 'M18 4L22 12L22 18L10 22L10 16L22 12L18 4Z', opacity: 0.5 }
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
            // Front face (brightest, facing viewer)
            { d: 'M12 4L18 18L6 18L12 4Z', opacity: 1.0 },
            // Left face (medium brightness, isometric left)
            { d: 'M12 4L6 18L9 14L12 4Z', opacity: 0.7 },
            // Right face (darkest, isometric right)
            { d: 'M12 4L15 14L18 18L12 4Z', opacity: 0.5 }
        ]
    },
    'cone': {
        name: 'Cone',
        type: '3d-fill',
        paths: [
            // Main cone face (triangular side)
            { d: 'M12 4L19 18L5 18L12 4Z', opacity: 1.0 },
            // Left side face
            { d: 'M12 4L5 18L10 16L12 4Z', opacity: 0.7 },
            // Rounded base (ellipse to show circular bottom)
            { d: 'M5 18Q12 22 19 18Q12 20 5 18Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translucentIcons;
}
