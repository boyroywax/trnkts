// Translucent Icons - 3D geometric style inspired by trnkts gem logo
// Using tri-tone filled paths with opacity levels (1.0, 0.7, 0.5) for 3D depth
const translucentIcons = {
    'diamond': {
        name: 'Diamond',
        type: '3d-fill',
        paths: [
            { d: 'M12 1L4 9L12 12L20 9L12 1Z', opacity: 1.0 },
            { d: 'M4 9L12 12L12 22L4 18L4 9Z', opacity: 0.7 },
            { d: 'M20 9L12 12L12 22L20 18L20 9Z', opacity: 0.5 }
        ]
    },
    'cube': {
        name: 'Cube',
        type: '3d-fill',
        paths: [
            { d: 'M4.5 0.5L19.5 0.5L24.5 5.5L9.5 5.5L4.5 0.5Z', opacity: 1.0 },
            { d: 'M4.5 0.5L9.5 5.5L9.5 20.5L4.5 15.5L4.5 0.5Z', opacity: 0.7 },
            { d: 'M9.5 5.5L24.5 5.5L24.5 20.5L9.5 20.5L9.5 5.5Z', opacity: 0.5 }
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
    'cone': {
        name: 'Cone',
        type: '3d-fill',
        paths: [
            // Main cone face (triangular side) - increased scale
            { d: 'M12 2L21 20L3 20L12 2Z', opacity: 0.5 },
            // Left side face - scaled proportionally
            { d: 'M12 2L3 20L9 17L12 2Z', opacity: 0.7 },
            // Bottom ellipse base (1.0 opacity) - larger to match scaled cone
            { d: 'M3 20A9 3 0 0 0 21 20A9 3 0 0 0 3 20Z', opacity: 1.0 }
        ]
    },
    'cylinder': {
        name: 'Cylinder',
        type: '3d-fill',
        paths: [
            // Main body (rectangular side) with top cutout - increased scale
            { d: 'M4 4L20 4L20 20L4 20L4 4Z M4 4A8 3 0 0 0 20 4A8 3 0 0 0 4 4Z', opacity: 0.5 },
            // Top ellipse (circular top) - larger scale
            { d: 'M4 4A8 3 0 0 0 20 4A8 3 0 0 0 4 4Z', opacity: 0.7 },
            // Bottom ellipse (circular bottom) - shows depth
            { d: 'M4 20A8 3 0 0 0 20 20A8 3 0 0 0 4 20Z', opacity: 1.0 }
        ]
    },
    'torus': {
        name: 'Torus',
        type: '3d-fill',
        paths: [
            // Outer ring - largest, increased scale
            { d: 'M12 1A11 11 0 1 1 12 23A11 11 0 1 1 12 1Z M12 7A5 5 0 1 1 12 17A5 5 0 1 1 12 7Z', opacity: 0.5 },
            // Middle section - scaled up
            { d: 'M12 4A8 8 0 1 1 12 20A8 8 0 1 1 12 4Z M12 8A4 4 0 1 1 12 16A4 4 0 1 1 12 8Z', opacity: 0.7 },
            // Inner highlight - positioned for isometric effect
            { d: 'M7 7A3 3 0 0 1 12 9A3 3 0 0 1 10 14A3 3 0 0 1 7 7Z', opacity: 1.0 }
        ]
    },
    'pentagonal_prism': {
        name: 'Pentagonal Prism',
        type: '3d-fill',
        paths: [
            // Top pentagon face
            { d: 'M12 2L19 6L16 14L8 14L5 6L12 2Z', opacity: 1.0 },
            // Left side face
            { d: 'M5 6L8 14L8 22L5 18L5 6Z', opacity: 0.7 },
            // Right side face
            { d: 'M19 6L16 14L16 22L19 18L19 6Z', opacity: 0.5 },
            // Front face - very transparent to show depth
            { d: 'M8 14L16 14L16 22L8 22L8 14Z', opacity: 0.3 }
        ]
    },
    'triangular_prism': {
        name: 'Triangular Prism',
        type: '3d-fill',
        paths: [
            // Front triangular face - 1.25x scale increase
            { d: 'M12 0.5L24.5 20.5L-0.5 20.5L12 0.5Z', opacity: 1.0 },
            // Left rectangular face - 1.25x scale
            { d: 'M-0.5 20.5L12 0.5L12 24.5L-0.5 20.5Z', opacity: 0.7 },
            // Bottom rectangular face - 1.25x scale
            { d: 'M-0.5 20.5L24.5 20.5L24.5 24.5L12 24.5L-0.5 20.5Z', opacity: 0.5 }
        ]
    }
};

// Export for use in main icons file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translucentIcons;
}
