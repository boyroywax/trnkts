// Web3 3D Icons - Blockchain, crypto, and decentralized technology icons with 3D effects
const web3Icons = {
    'bitcoin': {
        name: 'Bitcoin',
        type: '3d-stroke',
        paths: [
            // Outer circle
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
            // Inner circle - both fill and stroke for depth
            'M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z',
            // Perfect centered Bitcoin B with proper vertical extensions
            // Main vertical spine (moved slightly left and up)
            'M10.2 8.7V15.2',
            // Top vertical extension from center of top bar (moved left and up)
            'M12.2 7.2V8.2',
            // Bottom vertical extension from center of bottom bar (moved left and up)
            'M12.2 16.7V17.7',
            // Top curve section (fixed to connect properly, moved left and up)
            'M10.2 8.7h3c1 0 1.8 0.8 1.8 1.8s-0.8 1.8-1.8 1.8h-2.5',
            // Bottom curve section (moved left and up)
            'M10.2 12.7h3c1 0 1.8 0.8 1.8 1.8s-0.8 1.8-1.8 1.8h-3',
            // Middle connecting line (moved left and up)
            'M10.7 12.3h1.5'
        ]
    },
    'ethereum': {
        name: 'Ethereum',
        type: '3d-stroke',
        paths: [
            // Main diamond shape with 3D effect
            'M12 2L5 12.5L12 17L19 12.5L12 2z',
            // Inner diamond layers for depth
            'M12 3.5L6.5 12.5L12 15.5L17.5 12.5L12 3.5z',
            // Bottom section
            'M12 17L5 12.5L12 22L19 12.5L12 17z',
            // Highlight lines for 3D effect
            'M12 2L12 17M12 17L19 12.5M12 17L5 12.5'
        ]
    },
    'nft': {
        name: 'NFT',
        type: '3d-stroke',
        paths: [
            // Frame with 3D depth - main shape
            'M4 4h16v16H4z',
            // Inner frame for depth
            'M5 5h14v14H5z',
            // Inner artwork representation
            'M7 7h10v6H7z',
            // Inner artwork detail
            'M8 8h8v4H8z',
            // NFT badge
            'M7 15h10v3H7z',
            // 3D effect lines
            'M4 4L3 3M20 4L21 3M20 20L21 21M4 20L3 21',
            // Artwork details
            'M9 9h6v2H9zM10 12h4v1h-4z'
        ]
    },
    'wallet': {
        name: 'Crypto Wallet',
        type: '3d-stroke',
        paths: [
            // Wallet main body with 3D effect
            'M3 7h18v12H3z',
            // Inner wallet depth
            'M4 8h16v10H4z',
            // Wallet flap
            'M3 7V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2',
            // Card slot
            'M6 11h12v2H6z',
            // Security chip
            'M16 13h3v3h-3z',
            // Chip detail
            'M17 14h1v1h-1z',
            // 3D depth lines
            'M3 7L2 6M21 7L22 6M21 19L22 20M3 19L2 20'
        ]
    },
    'blockchain': {
        name: 'Blockchain',
        type: '3d-stroke',
        paths: [
            // Block 1 with 3D effect - main shape
            'M2 6h6v6H2z',
            // Block 1 depth layer
            'M3 7h4v4H3z',
            // Block 2 main
            'M9 6h6v6H9z',
            // Block 2 depth
            'M10 7h4v4h-4z',
            // Block 3 main
            'M16 6h6v6h-6z',
            // Block 3 depth
            'M17 7h4v4h-4z',
            // Chain connections
            'M8 9h1v1H8zM15 9h1v1h-1z',
            // 3D depth effect
            'M2 6L1 5M8 6L9 5M9 6L10 5M15 6L16 5M16 6L17 5M22 6L23 5',
            // Bottom depth lines
            'M2 12L1 13M8 12L9 13M15 12L16 13M22 12L23 13'
        ]
    },
    'defi': {
        name: 'DeFi',
        type: '3d-stroke',
        paths: [
            // Central hub with 3D effect - main shape
            'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            // Inner hub depth layer
            'M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            // Connected nodes
            'M4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M4 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M20 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            // Connection lines
            'M6 6L10 10M18 6L14 10M6 18L10 14M18 18L14 14'
        ]
    },
    'dao': {
        name: 'DAO',
        type: '3d-stroke',
        paths: [
            // Governance circle with 3D effect - main shape
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
            // Inner circle for depth
            'M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z',
            // Voting nodes
            'M8 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M16 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M8 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            'M16 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            // Central governance
            'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            // Connection lines
            'M10 10L8 8M14 10L16 8M10 14L8 16M14 14L16 16'
        ]
    },
    'metaverse': {
        name: 'Metaverse',
        type: '3d-stroke',
        paths: [
            // Virtual world sphere with 3D effect - main shape
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
            // Inner sphere for depth
            'M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z',
            // Grid lines for virtual space
            'M12 3V21M3 12H21',
            'M6.34 6.34L17.66 17.66M17.66 6.34L6.34 17.66',
            // VR headset overlay
            'M7 8h10v6H7z',
            // VR headset inner detail
            'M8 9h8v4H8z',
            // Eye pieces
            'M9 10h2v2H9zM13 10h2v2h-2z',
            // Strap
            'M6 11h1v2H6zM17 11h1v2h-1z'
        ]
    },
    'smart-contract': {
        name: 'Smart Contract',
        type: '3d-stroke',
        paths: [
            // Contract document with 3D effect - main shape
            'M6 2h12v20H6z',
            // Inner document depth
            'M7 3h10v18H7z',
            // Contract lines
            'M9 6h6v1H9zM9 8h6v1H9zM9 10h4v1H9z',
            // Smart chip overlay
            'M10 12h4v4h-4z',
            // Chip inner detail
            'M11 13h2v2h-2z',
            // Circuit pattern
            'M10 12h1v1h-1zM13 12h1v1h-1zM10 15h1v1h-1zM13 15h1v1h-1z',
            // 3D depth lines
            'M6 2L5 1M18 2L19 1M18 22L19 23M6 22L5 23',
            // More contract text
            'M9 17h6v1H9zM9 19h4v1H9z'
        ]
    },
    'mining': {
        name: 'Crypto Mining',
        type: '3d-stroke',
        paths: [
            // Mining rig with 3D effect - main shape
            'M2 10h20v8H2z',
            // Inner rig depth
            'M3 11h18v6H3z',
            // Graphics cards
            'M5 12h3v3H5zM9 12h3v3H9zM13 12h3v3h-3zM16 12h3v3h-3z',
            // Fans
            'M6 13.5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z',
            'M10 13.5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z',
            'M14 13.5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z',
            'M17 13.5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z',
            // Heat/power lines
            'M6 11V9M10 11V9M14 11V9M17 11V9',
            // 3D depth lines
            'M2 10L1 9M22 10L23 9M22 18L23 19M2 18L1 19'
        ]
    },
    'token': {
        name: 'Token',
        type: '3d-stroke',
        paths: [
            // Token coin with 3D effect - main shape
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
            // Inner coin depth
            'M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z',
            // Token symbol (T)
            'M8 8h8v2h-3v6h-2v-6H8V8z',
            // Inner circle for depth
            'M12 6C8.69 6 6 8.69 6 12s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z',
            // Highlight arc
            'M12 4C8.13 4 4.86 6.27 3.5 9.5',
            // Edge detail
            'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1z'
        ]
    },
    'staking': {
        name: 'Staking',
        type: '3d-stroke',
        paths: [
            // Staking platform with 3D effect - main shape
            'M4 14h16v6H4z',
            // Platform depth
            'M5 15h14v4H5z',
            // Staked coins
            'M8 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            'M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            'M16 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            // Staking arrows
            'M8 11V13M12 9V13M16 11V13',
            // Reward indicators
            'M6 16h2v1H6zM10 16h2v1h-2zM14 16h2v1h-2z',
            // 3D depth lines
            'M4 14L3 13M20 14L21 13M20 20L21 21M4 20L3 21'
        ]
    }
};

// Export for use in icons.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = web3Icons;
}

// Export for use in icons.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = web3Icons;
}
