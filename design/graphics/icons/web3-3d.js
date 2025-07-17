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
            // Main diamond shape with 3D effect (scaled up)
            'M12 1L3 13L12 18L21 13L12 1z',
            // Inner diamond layers for depth
            'M12 2.5L5 13L12 16.5L19 13L12 2.5z',
            // Bottom section
            'M12 18L3 13L12 23L21 13L12 18z',
            // Highlight lines for 3D effect
            'M12 1L12 18M12 18L21 13M12 18L3 13'
        ]
    },
    'nft': {
        name: 'NFT',
        type: '3d-stroke',
        paths: [
            // Frame with 3D depth - main shape (scaled up)
            'M2 2h20v20H2z',
            // Inner frame for depth
            'M3 3h18v18H3z',
            // Inner artwork representation
            'M5 5h14v8H5z',
            // Inner artwork detail
            'M6 6h12v6H6z',
            // NFT badge
            'M5 15h14v4H5z',
            // 3D effect lines
            'M2 2L1 1M22 2L23 1M22 22L23 23M2 22L1 23',
            // Artwork details
            'M7 7h10v2H7zM8 13h8v1H8z'
        ]
    },
    'wallet': {
        name: 'Crypto Wallet',
        type: '3d-stroke',
        paths: [
            // Wallet main body with 3D effect (scaled up)
            'M1 6h22v14H1z',
            // Inner wallet depth
            'M2 7h20v12H2z',
            // Wallet flap
            'M1 6V3c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v3',
            // Card slot
            'M4 10h16v3H4z',
            // Security chip
            'M17 14h4v4h-4z',
            // Chip detail
            'M18 15h2v2h-2z',
            // 3D depth lines
            'M1 6L0 5M23 6L24 5M23 20L24 21M1 20L0 21'
        ]
    },
    'blockchain': {
        name: 'Blockchain',
        type: '3d-stroke',
        paths: [
            // Block 1 with 3D effect - main shape (scaled up)
            'M1 4h7v8H1z',
            // Block 1 depth layer
            'M2 5h5v6H2z',
            // Block 2 main
            'M8.5 4h7v8h-7z',
            // Block 2 depth
            'M9.5 5h5v6h-5z',
            // Block 3 main
            'M16 4h7v8h-7z',
            // Block 3 depth
            'M17 5h5v6h-5z',
            // Chain connections
            'M8 8h0.5v1H8zM15.5 8h0.5v1h-0.5z',
            // 3D depth effect
            'M1 4L0 3M8 4L9 3M8.5 4L9.5 3M15.5 4L16.5 3M16 4L17 3M23 4L24 3',
            // Bottom depth lines
            'M1 12L0 13M8 12L9 13M15.5 12L16.5 13M23 12L24 13'
        ]
    },
    'defi': {
        name: 'DeFi',
        type: '3d-stroke',
        paths: [
            // Central hub with 3D effect - main shape (scaled up)
            'M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z',
            // Inner hub depth layer
            'M12 7.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z',
            // Connected nodes (scaled up)
            'M3 3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            'M21 3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            'M3 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            'M21 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            // Connection lines
            'M6 6L9 9M18 6L15 9M6 18L9 15M18 18L15 15'
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
            // Virtual world sphere with 3D effect - main shape (scaled up)
            'M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1z',
            // Inner sphere for depth
            'M12 2.5C6.75 2.5 2.5 6.75 2.5 12s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5z',
            // Grid lines for virtual space
            'M12 1V23M1 12H23',
            'M4.76 4.76L19.24 19.24M19.24 4.76L4.76 19.24',
            // VR headset overlay
            'M5 7h14v8H5z',
            // VR headset inner detail
            'M6 8h12v6H6z',
            // Eye pieces
            'M8 10h3v3H8zM13 10h3v3h-3z',
            // Strap
            'M4 10h1v4H4zM19 10h1v4h-1z'
        ]
    },
    'smart-contract': {
        name: 'Smart Contract',
        type: '3d-stroke',
        paths: [
            // Contract document with 3D effect - main shape (scaled up)
            'M4 1h16v22H4z',
            // Inner document depth
            'M5 2h14v20H5z',
            // Contract lines
            'M7 5h10v1H7zM7 7h10v1H7zM7 9h6v1H7z',
            // Smart chip overlay
            'M8 11h8v6H8z',
            // Chip inner detail
            'M9 12h6v4H9z',
            // Circuit pattern
            'M8 11h1v1H8zM15 11h1v1h-1zM8 16h1v1H8zM15 16h1v1h-1z',
            // 3D depth lines
            'M4 1L3 0M20 1L21 0M20 23L21 24M4 23L3 24',
            // More contract text
            'M7 18h10v1H7zM7 20h6v1H7z'
        ]
    },
    'mining': {
        name: 'Crypto Mining',
        type: '3d-stroke',
        paths: [
            // Mining rig with 3D effect - main shape (scaled up)
            'M1 8h22v10H1z',
            // Inner rig depth
            'M2 9h20v8H2z',
            // Graphics cards
            'M3 10h4v4H3zM8 10h4v4H8zM13 10h4v4h-4zM18 10h4v4h-4z',
            // Fans
            'M5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S5 11.17 5 12z',
            'M9 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S9 11.17 9 12z',
            'M15 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S15 11.17 15 12z',
            'M19 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S19 11.17 19 12z',
            // Heat/power lines
            'M5 9V6M10 9V6M15 9V6M20 9V6',
            // 3D depth lines
            'M1 8L0 7M23 8L24 7M23 18L24 19M1 18L0 19'
        ]
    },
    'token': {
        name: 'Token',
        type: '3d-stroke',
        paths: [
            // Token coin with 3D effect - main shape (scaled up)
            'M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1z',
            // Inner coin depth
            'M12 2.5C6.75 2.5 2.5 6.75 2.5 12s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5z',
            // Token symbol (T) - scaled up
            'M6 6h12v3h-4.5v9h-3v-9H6V6z',
            // Inner circle for depth
            'M12 4C7.86 4 4.5 7.36 4.5 12s3.36 8.5 8.5 8.5 8.5-3.36 8.5-8.5S16.14 4 12 4z',
            // Highlight arc
            'M12 2.5C7.37 2.5 3.29 5.41 1.5 9.5',
            // Edge detail
            'M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z'
        ]
    },
    'staking': {
        name: 'Staking',
        type: '3d-stroke',
        paths: [
            // Staking platform with 3D effect - main shape (scaled up)
            'M2 12h20v8H2z',
            // Platform depth
            'M3 13h18v6H3z',
            // Staked coins (scaled up)
            'M6 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            'M12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            'M18 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            // Staking arrows
            'M6 9V12M12 7V12M18 9V12',
            // Reward indicators
            'M4 15h4v1H4zM8 15h4v1H8zM12 15h4v1h-4z',
            // 3D depth lines
            'M2 12L1 11M22 12L23 11M22 20L23 21M2 20L1 21'
        ]
    }
};

// Export for use in icons.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = web3Icons;
}
