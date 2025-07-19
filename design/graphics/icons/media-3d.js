// 3D Media Icons - Clean geometric style following web3-3d patterns
// Using layers with render types (main, depth, secondary, symbol, highlight, accent) for 3D depth
const media3dIcons = {
    'play': {
        name: 'Play',
        type: '3d-stroke',
        layers: [
            // Main play triangle
            { path: 'M8 5L19 12L8 19L8 5Z', render: 'main' },
            // Inner triangle for depth
            { path: 'M9 7L17 12L9 17L9 7Z', render: 'depth' },
            // Highlight edge
            { path: 'M8 5L8 19', render: 'highlight' }
        ]
    },
    'pause': {
        name: 'Pause',
        type: '3d-stroke',
        layers: [
            // Main pause bars
            { path: 'M6 4h4v16H6zM14 4h4v16h-4z', render: 'main' },
            // Inner bars for depth
            { path: 'M7 5h2v14H7zM15 5h2v14h-2z', render: 'depth' },
            // Top highlights
            { path: 'M6 4h4v1H6zM14 4h4v1h-4z', render: 'highlight' }
        ]
    },
    'stop': {
        name: 'Stop',
        type: '3d-stroke',
        layers: [
            // Main stop square
            { path: 'M6 6h12v12H6z', render: 'main' },
            // Inner square for depth
            { path: 'M7 7h10v10H7z', render: 'depth' },
            // Edge highlights
            { path: 'M6 6h12v1H6zM6 6h1v12H6z', render: 'highlight' }
        ]
    },
    'volume': {
        name: 'Volume',
        type: '3d-stroke',
        layers: [
            // Main speaker
            { path: 'M11 5L6 9H2v6h4l5 4V5z', render: 'main' },
            // Speaker depth
            { path: 'M11 6L7 9H3v4h4l4 3V6z', render: 'depth' },
            // Sound waves
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12c0 1.35-.53 2.61-1.46 3.54M18.07 5.93C20.26 8.12 21.5 10.96 21.5 12s-1.24 3.88-3.43 6.07', render: 'symbol' },
            // Wave highlights
            { path: 'M15.54 8.46C16.47 9.39 17 10.65 17 12', render: 'highlight' }
        ]
    },
    'camera': {
        name: 'Camera',
        type: '3d-stroke',
        layers: [
            // Main camera body
            { path: 'M9 3l1 2h5l1-2h4c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h5z', render: 'main' },
            // Camera body depth
            { path: 'M10 4l1 1h3l1-1h3c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h5z', render: 'depth' },
            // Lens
            { path: 'M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z', render: 'secondary' },
            // Lens center
            { path: 'M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z', render: 'symbol' },
            // Flash
            { path: 'M16 6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z', render: 'highlight' }
        ]
    },
    'image': {
        name: 'Image',
        type: '3d-stroke',
        layers: [
            // Main image frame
            { path: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z', render: 'main' },
            // Frame depth
            { path: 'M6 4h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1z', render: 'depth' },
            // Mountain scene
            { path: 'M4 18l4-4 3 2 5-6 4 4v4H4z', render: 'secondary' },
            // Sun
            { path: 'M15 7c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z', render: 'symbol' },
            // Frame highlight
            { path: 'M5 3h14v1H5z', render: 'highlight' }
        ]
    },
    'music': {
        name: 'Music',
        type: '3d-stroke',
        layers: [
            // Main music staff
            { path: 'M12 3v10.5c-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V7l6-2v5.5c-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3l-6 2z', render: 'main' },
            // Note stems depth
            { path: 'M12 4v9.5c-.3-.2-.7-.3-1-.3-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V7.5l5-1.5v4.5c-.3-.2-.7-.3-1-.3-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V4l-5 1.5z', render: 'depth' },
            // Note heads
            { path: 'M10.5 13c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM17.5 10c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z', render: 'symbol' },
            // Staff lines
            { path: 'M12 3v2M18 5v2', render: 'highlight' }
        ]
    },
    'video-play': {
        name: 'Video Play',
        type: '3d-stroke',
        layers: [
            // Main video frame
            { path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', render: 'main' },
            // Frame depth
            { path: 'M5 5h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1z', render: 'depth' },
            // Play button
            { path: 'M10 8l6 4-6 4V8z', render: 'secondary' },
            // Play button depth
            { path: 'M11 9l4 3-4 3V9z', render: 'symbol' },
            // Screen highlight
            { path: 'M4 4h16v1H4z', render: 'highlight' }
        ]
    }
};

// Export the icons
if (typeof module !== 'undefined' && module.exports) {
    module.exports = media3dIcons;
}
