// Nature & Sustainability Icons - Isometric 3D style
// This file contains only the nature and sustainability icons, separated from basic shapes.
const natureIcons = {
    'water-droplet': {
        name: 'Water Droplet',
        type: '3d-fill',
        paths: [
            { d: 'M12 2C8 6 6 10 6 14C6 18.4 8.7 22 12 22C15.3 22 18 18.4 18 14C18 10 16 6 12 2Z', opacity: 1.0 },
            { d: 'M12 2C9.5 5 8 8.5 8 12.5C8 15.5 9.8 18 12 18V2Z', opacity: 0.7 },
            { d: 'M12 2C14.5 5 16 8.5 16 12.5C16 15.5 14.2 18 12 18V2Z', opacity: 0.5 }
        ]
    },
    'recycle': {
        name: 'Recycle',
        type: '3d-fill',
        paths: [
            { d: 'M12 2L8 8L4 12L8 16L12 22L16 16L20 12L16 8L12 2Z', opacity: 1.0 },
            { d: 'M12 2L8 8L4 12L8 16L12 14L12 2Z', opacity: 0.7 },
            { d: 'M12 2L16 8L20 12L16 16L12 14L12 2Z', opacity: 0.5 }
        ]
    },
    'ocean-wave': {
        name: 'Ocean Wave',
        type: '3d-fill',
        paths: [
            { d: 'M2 12C4 8 8 8 10 12C12 16 16 16 18 12C20 8 22 8 22 12V20H2V12Z', opacity: 1.0 },
            { d: 'M2 14C4 11 7 11 9 14C11 17 14 17 16 14V18H2V14Z', opacity: 0.7 },
            { d: 'M8 16C10 14 13 14 15 16C17 18 20 18 22 16V20H8V16Z', opacity: 0.5 }
        ]
    },
    'grain': {
        name: 'Grain',
        type: '3d-fill',
        paths: [
            // Top face (grain body)
            { d: 'M10 4L14 3L17 12L13 13L10 4Z', opacity: 1.0 },
            // Left face
            { d: 'M10 4L13 13L13 20L10 15L10 4Z', opacity: 0.7 },
            // Right face
            { d: 'M14 3L17 12L17 19L13 20L13 13L17 12L14 3Z', opacity: 0.5 },
            // Details layer: Highlight (small ellipse)
            { d: 'M12.5 8A0.7 0.5 0 1 1 11.1 8A0.7 0.5 0 1 1 12.5 8Z', opacity: 1.0 }
        ]
    },
    'egg': {
        name: 'Egg',
        type: '3d-fill',
        paths: [
            // Top face (egg body)
            { d: 'M10 5L14 4L17 13L13 14L10 5Z', opacity: 1.0 },
            // Left face
            { d: 'M10 5L13 14L13 20L10 16L10 5Z', opacity: 0.7 },
            // Right face
            { d: 'M14 4L17 13L17 19L13 20L13 14L17 13L14 4Z', opacity: 0.5 },
            // Details layer: Highlight (small ellipse)
            { d: 'M12.5 9A0.7 0.5 0 1 1 11.1 9A0.7 0.5 0 1 1 12.5 9Z', opacity: 1.0 }
        ]
    },
    'fish': {
        name: 'Fish',
        type: '3d-fill',
        paths: [
            // Top face (body, parallelogram) - scaled up
            { d: 'M5 8L17 5L21 12L9 15L5 8Z', opacity: 1.0 },
            // Left face (body)
            { d: 'M5 8L9 15L9 21L5 15L5 8Z', opacity: 0.7 },
            // Right face (body)
            { d: 'M17 5L21 12L21 18L9 21L9 15L21 12L17 5Z', opacity: 0.5 },
            // Tail fin (diamond, attached at rear)
            { d: 'M21 12L24 9L24 21L21 18L21 12Z', opacity: 1.0 },
            // Head/snout (front triangle)
            { d: 'M5 8L2 6L5 15L5 8Z', opacity: 1.0 },
            // Details layer: Eye (small circle, rendered last)
            { d: 'M7.5 9.5A1 1 0 1 1 5.5 9.5A1 1 0 1 1 7.5 9.5Z', opacity: 1.0 }
        ]
    },
    'lettuce': {
        name: 'Lettuce',
        type: '3d-fill',
        paths: [
            // Top face (lettuce head)
            { d: 'M8 8L16 6L20 14L12 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L12 16L12 22L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 6L20 14L20 20L12 22L12 16L20 14L16 6Z', opacity: 0.5 },
            // Details layer: Leaf highlight (small ellipse)
            { d: 'M13.5 11A1 0.7 0 1 1 11.5 11A1 0.7 0 1 1 13.5 11Z', opacity: 1.0 }
        ]
    },
    'tomato': {
        name: 'Tomato',
        type: '3d-fill',
        paths: [
            // Top face (tomato body)
            { d: 'M8 8L16 8L18 16L10 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L10 16L10 20L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 8L18 16L18 20L10 20L10 16L18 16L16 8Z', opacity: 0.5 },
            // Details layer: Stem (small line)
            { d: 'M12 6L12 10', opacity: 1.0 }
        ]
    },
    'corn': {
        name: 'Corn',
        type: '3d-fill',
        paths: [
            // Cob top face (parallelogram)
            { d: 'M10 5L16 4L19 12L13 13L10 5Z', opacity: 1.0 },
            // Cob left face
            { d: 'M10 5L13 13L13 20L10 15L10 5Z', opacity: 0.7 },
            // Cob right face
            { d: 'M16 4L19 12L19 19L13 20L13 13L19 12L16 4Z', opacity: 0.5 },
            // Husk left (leaf wrapping left side)
            { d: 'M10 5Q6 10 10 18L13 20L10 15L10 5Z', opacity: 1.0 },
            // Husk right (leaf wrapping right side)
            { d: 'M19 12Q22 15 16 22L13 20L19 19L19 12Z', opacity: 1.0 },
            // Details layer: Kernel highlight (small ellipse, rendered last)
            { d: 'M13.5 9A1 0.7 0 1 1 11.5 9A1 0.7 0 1 1 13.5 9Z', opacity: 1.0 }
        ]
    },
    'cattle': {
        name: 'Cattle',
        type: '3d-fill',
        paths: [
            // Top face (body)
            { d: 'M7 10L17 8L19 16L9 18L7 10Z', opacity: 1.0 },
            // Left face
            { d: 'M7 10L9 18L9 22L7 18L7 10Z', opacity: 0.7 },
            // Right face
            { d: 'M17 8L19 16L19 20L9 22L9 18L19 16L17 8Z', opacity: 0.5 },
            // Details layer: Horns (small lines)
            { d: 'M8 8L10 6M16 8L14 6', opacity: 1.0 }
        ]
    },
    'chicken': {
        name: 'Chicken',
        type: '3d-fill',
        paths: [
            // Top face (body)
            { d: 'M8 8L16 6L18 14L10 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L10 16L10 20L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 6L18 14L18 20L10 20L10 16L18 14L16 6Z', opacity: 0.5 },
            // Details layer: Beak (small triangle)
            { d: 'M12 7L13 9L11 9L12 7Z', opacity: 1.0 }
        ]
    },
    'bee': {
        name: 'Bee',
        type: '3d-fill',
        paths: [
            // Top face (body)
            { d: 'M10 10L14 9L16 14L12 15L10 10Z', opacity: 1.0 },
            // Left face
            { d: 'M10 10L12 15L12 18L10 14L10 10Z', opacity: 0.7 },
            // Right face
            { d: 'M14 9L16 14L16 17L12 18L12 15L16 14L14 9Z', opacity: 0.5 },
            // Details layer: Wings (small ellipses)
            { d: 'M11 11A1 0.5 0 1 1 9 11A1 0.5 0 1 1 11 11Z M15 11A1 0.5 0 1 1 13 11A1 0.5 0 1 1 15 11Z', opacity: 1.0 }
        ]
    },
    'beehive': {
        name: 'Beehive',
        type: '3d-fill',
        paths: [
            // Top face (hive)
            { d: 'M10 6L14 4L18 12L14 14L10 6Z', opacity: 1.0 },
            // Left face
            { d: 'M10 6L14 14L14 20L10 16L10 6Z', opacity: 0.7 },
            // Right face
            { d: 'M14 4L18 12L18 18L14 20L14 14L18 12L14 4Z', opacity: 0.5 },
            // Details layer: Entrance (small ellipse)
            { d: 'M13.5 12A0.7 0.5 0 1 1 12.1 12A0.7 0.5 0 1 1 13.5 12Z', opacity: 1.0 }
        ]
    },
    'lake': {
        name: 'Lake',
        type: '3d-fill',
        paths: [
            // Top face (lake surface)
            { d: 'M8 8L16 8L18 16L10 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L10 16L10 20L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 8L18 16L18 20L10 20L10 16L18 16L16 8Z', opacity: 0.5 },
            // Details layer: Ripple (small ellipse)
            { d: 'M13 13A2 0.7 0 1 1 9 13A2 0.7 0 1 1 13 13Z', opacity: 1.0 }
        ]
    },
    'river': {
        name: 'River',
        type: '3d-fill',
        paths: [
            // Top face (river surface)
            { d: 'M6 10L18 8L20 16L8 18L6 10Z', opacity: 1.0 },
            // Left face
            { d: 'M6 10L8 18L8 22L6 16L6 10Z', opacity: 0.7 },
            // Right face
            { d: 'M18 8L20 16L20 20L8 22L8 18L20 16L18 8Z', opacity: 0.5 },
            // Details layer: Ripple (small ellipse)
            { d: 'M13 14A2 0.7 0 1 1 9 14A2 0.7 0 1 1 13 14Z', opacity: 1.0 }
        ]
    },
    'ocean': {
        name: 'Ocean',
        type: '3d-fill',
        paths: [
            // Top face (ocean surface)
            { d: 'M6 8L18 6L20 18L8 20L6 8Z', opacity: 1.0 },
            // Left face
            { d: 'M6 8L8 20L8 22L6 18L6 8Z', opacity: 0.7 },
            // Right face
            { d: 'M18 6L20 18L20 22L8 22L8 20L20 18L18 6Z', opacity: 0.5 },
            // Details layer: Wave (small ellipse)
            { d: 'M13 13A2 0.7 0 1 1 9 13A2 0.7 0 1 1 13 13Z', opacity: 1.0 }
        ]
    },
    'wetlands': {
        name: 'Wetlands',
        type: '3d-fill',
        paths: [
            // Top face (wetland surface)
            { d: 'M6 12L18 10L20 18L8 20L6 12Z', opacity: 1.0 },
            // Left face
            { d: 'M6 12L8 20L8 22L6 18L6 12Z', opacity: 0.7 },
            // Right face
            { d: 'M18 10L20 18L20 22L8 22L8 20L20 18L18 10Z', opacity: 0.5 },
            // Details layer: Marsh ripple (small ellipse)
            { d: 'M13 15A2 0.7 0 1 1 9 15A2 0.7 0 1 1 13 15Z', opacity: 1.0 }
        ]
    },
    'volcano': {
        name: 'Volcano',
        type: '3d-fill',
        paths: [
            // Top face (volcano cone)
            { d: 'M10 6L14 4L18 16L14 18L10 6Z', opacity: 1.0 },
            // Left face
            { d: 'M10 6L14 18L14 22L10 18L10 6Z', opacity: 0.7 },
            // Right face
            { d: 'M14 4L18 16L18 22L14 22L14 18L18 16L14 4Z', opacity: 0.5 },
            // Details layer: Lava (small ellipse)
            { d: 'M13.5 8A1 0.5 0 1 1 12.1 8A1 0.5 0 1 1 13.5 8Z', opacity: 1.0 }
        ]
    },
    'tree': {
        name: 'Tree',
        type: '3d-fill',
        paths: [
            // Top face (tree canopy)
            { d: 'M8 6L16 4L20 12L12 14L8 6Z', opacity: 1.0 },
            // Left face
            { d: 'M8 6L12 14L12 22L8 16L8 6Z', opacity: 0.7 },
            // Right face
            { d: 'M16 4L20 12L20 20L12 22L12 14L20 12L16 4Z', opacity: 0.5 },
            // Details layer: Trunk (small rectangle)
            { d: 'M11 18V22M13 18V22', opacity: 1.0 }
        ]
    },
    'leaf': {
        name: 'Leaf',
        type: '3d-fill',
        paths: [
            // Top face (leaf)
            { d: 'M8 8L16 6L20 14L12 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L12 16L12 22L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 6L20 14L20 20L12 22L12 16L20 14L16 6Z', opacity: 0.5 },
            // Details layer: Vein (small line)
            { d: 'M12 10L12 18', opacity: 1.0 }
        ]
    },
    'earth': {
        name: 'Earth',
        type: '3d-fill',
        paths: [
            // Top face (earth)
            { d: 'M8 8L16 6L20 14L12 16L8 8Z', opacity: 1.0 },
            // Left face
            { d: 'M8 8L12 16L12 22L8 16L8 8Z', opacity: 0.7 },
            // Right face
            { d: 'M16 6L20 14L20 20L12 22L12 16L20 14L16 6Z', opacity: 0.5 },
            // Details layer: Continent (small ellipse)
            { d: 'M13.5 12A1 0.7 0 1 1 11.5 12A1 0.7 0 1 1 13.5 12Z', opacity: 1.0 }
        ]
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = natureIcons;
}
