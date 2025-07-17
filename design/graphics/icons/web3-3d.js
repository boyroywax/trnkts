// Web3 3D Icons - Blockchain, crypto, and decentralized technology icons with 3D effects
const web3Icons = {
    'bitcoin': {
        name: 'Bitcoin',
        type: '3d-stroke',
        layers: [
            // Outer circle
            { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', render: 'main' },
            // Inner circle - both fill and stroke for depth
            { path: 'M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z', render: 'depth' },
            // Perfect centered Bitcoin B with proper vertical extensions
            // Main vertical spine (moved slightly left and up)
            { path: 'M10.2 8.7V15.2', render: 'symbol' },
            // Top vertical extension from center of top bar (moved left and up)
            { path: 'M12.2 7.2V8.2', render: 'symbol' },
            // Bottom vertical extension from center of bottom bar (moved left and up)
            { path: 'M12.2 16.7V17.7', render: 'symbol' },
            // Top curve section (fixed to connect properly, moved left and up)
            { path: 'M10.2 8.7h3c1 0 1.8 0.8 1.8 1.8s-0.8 1.8-1.8 1.8h-2.5', render: 'symbol' },
            // Bottom curve section (moved left and up)
            { path: 'M10.2 12.7h3c1 0 1.8 0.8 1.8 1.8s-0.8 1.8-1.8 1.8h-3', render: 'symbol' },
            // Middle connecting line (moved left and up)
            { path: 'M10.7 12.3h1.5', render: 'symbol' }
        ]
    },
    'ethereum': {
        name: 'Ethereum',
        type: '3d-stroke',
        layers: [
            // Main diamond shape with 3D effect (scaled up)
            { path: 'M12 1L3 13L12 18L21 13L12 1z', render: 'main' },
            // Inner diamond layers for depth
            { path: 'M12 2.5L5 13L12 16.5L19 13L12 2.5z', render: 'depth' },
            // Bottom section
            { path: 'M12 18L3 13L12 23L21 13L12 18z', render: 'secondary' },
            // Highlight lines for 3D effect
            { path: 'M12 1L12 18M12 18L21 13M12 18L3 13', render: 'highlight' }
        ]
    },
    'nft': {
        name: 'NFT',
        type: '3d-stroke',
        layers: [
            // Main frame - outer border
            { path: 'M3 3h18v18H3z', render: 'main' },
            // Inner frame for depth
            { path: 'M4 4h16v16H4z', render: 'depth' },
            // Punk face - head shape
            { path: 'M7 7h10v8H7z', render: 'secondary' },
            // Punk hair - spiky top
            { path: 'M7 7h2v-2H7zM10 6h2v-2h-2zM13 7h2v-2h-2zM16 8h1v-2h-1z', render: 'symbol' },
            // Punk features - eyes and accessories
            { path: 'M9 9h1v1H9zM14 9h1v1h-1zM11 11h2v1h-2zM8 13h1v1H8zM15 13h1v1h-1z', render: 'highlight' },
            // NFT label
            { path: 'M6 17h12v2H6z', render: 'detail' }
        ]
    },
    'wallet': {
        name: 'Crypto Wallet',
        type: '3d-stroke',
        layers: [
            // Main wallet body
            { path: 'M2 6h20v14H2z', render: 'main' },
            // Wallet flap
            { path: 'M2 6V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2', render: 'secondary' },
            // Card slot
            { path: 'M5 10h14v4H5z', render: 'depth' },
            // Security chip
            { path: 'M17 15h3v3h-3z', render: 'symbol' },
            // Edge highlight
            { path: 'M2 6L1 5M22 6L23 5', render: 'highlight' }
        ]
    },
    'blockchain': {
        name: 'Blockchain',
        type: '3d-stroke',
        layers: [
            // Three main blocks
            { path: 'M2 6h5v8H2zM9.5 6h5v8h-5zM17 6h5v8h-5z', render: 'main' },
            // Block depth
            { path: 'M2.5 6.5h4v7h-4zM10 6.5h4v7h-4zM17.5 6.5h4v7h-4z', render: 'depth' },
            // Block centers
            { path: 'M3.5 8h2v3h-2zM11 8h2v3h-2zM18.5 8h2v3h-2z', render: 'symbol' },
            // Chain connections
            { path: 'M7 10h2.5v1H7zM14.5 10h2.5v1h-2.5z', render: 'highlight' }
        ]
    },
    'defi': {
        name: 'DeFi',
        type: '3d-stroke',
        layers: [
            // Central hub
            { path: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z', render: 'main' },
            // Four corner nodes
            { path: 'M4 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM20 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM4 16c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM20 16c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z', render: 'secondary' },
            // Node inner details
            { path: 'M4 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', render: 'depth' },
            // Central hub detail
            { path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', render: 'symbol' },
            // Connection lines
            { path: 'M7 7L9 9M17 7L15 9M7 17L9 15M17 17L15 15', render: 'highlight' }
        ]
    },
    'dao': {
        name: 'DAO',
        type: '3d-stroke',
        layers: [
            // Main governance circle
            { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', render: 'main' },
            // Inner circle for depth
            { path: 'M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z', render: 'depth' },
            // Voting nodes
            { path: 'M8 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM16 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM16 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', render: 'secondary' },
            // Central governance hub
            { path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', render: 'symbol' },
            // Connection lines
            { path: 'M10 10L8 8M14 10L16 8M10 14L8 16M14 14L16 16', render: 'highlight' }
        ]
    },
    'metaverse': {
        name: 'Metaverse',
        type: '3d-stroke',
        layers: [
            // Virtual world sphere
            { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', render: 'main' },
            // Inner sphere for depth
            { path: 'M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z', render: 'depth' },
            // VR headset overlay
            { path: 'M6 8h12v6H6z', render: 'secondary' },
            // Eye pieces
            { path: 'M8 10h3v2H8zM13 10h3v2h-3z', render: 'symbol' },
            // Grid lines for virtual space
            { path: 'M12 2V22M2 12H22', render: 'highlight' }
        ]
    },
    'smart-contract': {
        name: 'Smart Contract',
        type: '3d-stroke',
        layers: [
            // Contract document
            { path: 'M5 2h14v20H5z', render: 'main' },
            // Inner document depth
            { path: 'M6 3h12v18H6z', render: 'depth' },
            // Contract lines
            { path: 'M8 6h8v1H8zM8 8h8v1H8zM8 10h5v1H8z', render: 'secondary' },
            // Smart chip
            { path: 'M9 13h6v5H9z', render: 'symbol' },
            // Circuit pattern
            { path: 'M10 14h1v1h-1zM13 14h1v1h-1zM10 16h1v1h-1zM13 16h1v1h-1z', render: 'highlight' }
        ]
    },
    'mining': {
        name: 'Crypto Mining',
        type: '3d-stroke',
        layers: [
            // Mining rig base
            { path: 'M2 10h20v8H2z', render: 'main' },
            // Inner rig depth
            { path: 'M3 11h18v6H3z', render: 'depth' },
            // Graphics cards
            { path: 'M4 12h3v3H4zM8.5 12h3v3h-3zM13 12h3v3h-3zM17.5 12h3v3h-3z', render: 'secondary' },
            // Fans
            { path: 'M5.5 13.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM10 13.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM14.5 13.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM19 13.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z', render: 'symbol' },
            // Heat lines
            { path: 'M5.5 11V8M10 11V8M14.5 11V8M19 11V8', render: 'highlight' }
        ]
    },
    'token': {
        name: 'Token',
        type: '3d-stroke',
        layers: [
            // Main coin circle - simplified outer ring
            { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', render: 'main' },
            // Inner coin body - creates depth
            { path: 'M12 3.5C7.31 3.5 3.5 7.31 3.5 12s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5z', render: 'depth' },
            // Token symbol (T) - clean and simple
            { path: 'M8 8h8v2h-3v6h-2v-6H8V8z', render: 'symbol' },
            // Subtle highlight for 3D effect
            { path: 'M12 3.5C8.5 3.5 5.5 5.8 4.5 9', render: 'highlight' }
        ]
    },
    'staking': {
        name: 'Staking',
        type: '3d-stroke',
        layers: [
            // Staking platform
            { path: 'M3 14h18v6H3z', render: 'main' },
            // Platform depth
            { path: 'M4 15h16v4H4z', render: 'depth' },
            // Three staking coins
            { path: 'M6 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM18 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z', render: 'secondary' },
            // Coin inner details
            { path: 'M6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM18 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', render: 'symbol' },
            // Staking arrows
            { path: 'M6 10V14M12 8V14M18 10V14', render: 'highlight' }
        ]
    }
};