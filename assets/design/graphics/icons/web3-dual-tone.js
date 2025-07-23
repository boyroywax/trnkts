// Web3 Dual Tone Icons - Selected blockchain and crypto icons with sophisticated dual-tone 3D effects
// Following the dual-tone approach: primary (left half), accent (right half), detail (functional elements)

const web3DualToneIcons = {
    // Bitcoin Icon
    bitcoin: {
        name: 'Bitcoin',
        type: '3d-stroke',
        layers: [
            // Left half of outer circle - primary segment
            {
                path: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z",
                render: "primary"
            },
            // Right half of outer circle - accent segment
            {
                path: "M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22V2Z",
                render: "accent"
            },
            // Bitcoin B symbol - detail layer
            {
                path: "M10.5 8V16M10.5 8H13C14.1 8 15 8.9 15 10C15 11.1 14.1 12 13 12H10.5M10.5 12H13.5C14.6 12 15.5 12.9 15.5 14C15.5 15.1 14.6 16 13.5 16H10.5M12 6V8M12 16V18",
                render: "detail"
            }
        ]
    },

    // Token Icon
    token: {
        name: 'Token',
        type: '3d-stroke',
        layers: [
            // Left half of coin - primary segment
            {
                path: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z",
                render: "primary"
            },
            // Right half of coin - accent segment
            {
                path: "M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22V2Z",
                render: "accent"
            },
            // Token symbol (T) - detail layer
            {
                path: "M8 8H16V10H13V16H11V10H8V8Z",
                render: "detail"
            }
        ]
    },

    // DeFi Icon
    defi: {
        name: 'DeFi',
        type: '3d-stroke',
        layers: [
            // Left side of central hub and nodes - primary segment
            {
                path: "M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16V8ZM4 4C1.79 4 0 5.79 0 8C0 10.21 1.79 12 4 12C6.21 12 8 10.21 8 8C8 5.79 6.21 4 4 4ZM4 14C1.79 14 0 15.79 0 18C0 20.21 1.79 22 4 22C6.21 22 8 20.21 8 18C8 15.79 6.21 14 4 14Z",
                render: "primary"
            },
            // Right side of central hub and nodes - accent segment
            {
                path: "M12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16V8ZM20 4C17.79 4 16 5.79 16 8C16 10.21 17.79 12 20 12C22.21 12 24 10.21 24 8C24 5.79 22.21 4 20 4ZM20 14C17.79 14 16 15.79 16 18C16 20.21 17.79 22 20 22C22.21 22 24 20.21 24 18C24 15.79 22.21 14 20 14Z",
                render: "accent"
            },
            // Connection lines - detail layer
            {
                path: "M7.5 7.5L8.5 8.5M15.5 8.5L16.5 7.5M7.5 16.5L8.5 15.5M15.5 15.5L16.5 16.5M8 12H16",
                render: "detail"
            }
        ]
    },

    // DAO Icon
    dao: {
        name: 'DAO',
        type: '3d-stroke',
        layers: [
            // Left half of governance circle - primary segment
            {
                path: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z",
                render: "primary"
            },
            // Right half of governance circle - accent segment
            {
                path: "M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22V2Z",
                render: "accent"
            },
            // Central governance hub - accent layer
            {
                path: "M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z",
                render: "accent"
            },
            // Governance connection spokes - detail layer
            {
                path: "M12 2V6M12 18V22M2 12H6M18 12H22M5.64 5.64L8.22 8.22M15.78 8.22L18.36 5.64M5.64 18.36L8.22 15.78M15.78 15.78L18.36 18.36",
                render: "detail"
            }
        ]
    },

    // Ethereum Icon
    ethereum: {
        name: 'Ethereum',
        type: '3d-stroke',
        layers: [
            // Left half of diamond - primary segment
            {
                path: "M12 2L3 12L12 16V2Z",
                render: "primary"
            },
            // Right half of diamond - accent segment
            {
                path: "M12 2L21 12L12 16V2Z",
                render: "accent"
            },
            // Bottom diamond section - accent layer
            {
                path: "M12 16L3 12L12 22L21 12L12 16Z",
                render: "accent"
            },
            // Internal structure lines - detail layer
            {
                path: "M12 2V16M8 11L12 13L16 11M7 13L12 15L17 13",
                render: "detail"
            }
        ]
    },

    // NFT Icon
    nft: {
        name: 'NFT',
        type: '3d-stroke',
        layers: [
            // Left half of frame - primary segment
            {
                path: "M4 4H12V20H4V4Z",
                render: "primary"
            },
            // Right half of frame - accent segment
            {
                path: "M12 4H20V20H12V4Z",
                render: "accent"
            },
            // Artwork display area - accent layer
            {
                path: "M7 7H17V13H7V7Z",
                render: "accent"
            },
            // NFT metadata section - detail layer
            {
                path: "M7 15H17V17H7V15ZM9 16H15V16.5H9V16ZM8 6L9 5M15 6L16 5M8 18L9 19M15 18L16 19",
                render: "detail"
            }
        ]
    },

    // Wallet Icon
    wallet: {
        name: 'Crypto Wallet',
        type: '3d-stroke',
        layers: [
            // Left half of wallet body - primary segment
            {
                path: "M3 7H12V19H3V7ZM3 7V5C3 3.9 3.9 3 5 3H12V7",
                render: "primary"
            },
            // Right half of wallet body - accent segment
            {
                path: "M12 7H21V19H12V7ZM12 7V5C12 3.9 12.1 3 12 3H19C20.1 3 21 3.9 21 5V7",
                render: "accent"
            },
            // Security chip and card slot - accent layer
            {
                path: "M6 11H18V13H6V11ZM16 13H19V16H16V13Z",
                render: "accent"
            },
            // Security features - detail layer
            {
                path: "M17 14H18V15H17V14ZM2 6L3 7M22 6L21 7M2 20L3 19M22 20L21 19",
                render: "detail"
            }
        ]
    },

    // Smart Contract Icon
    smartcontract: {
        name: 'Smart Contract',
        type: '3d-stroke',
        layers: [
            // Left half of contract document - primary segment
            {
                path: "M6 2H12V22H6V2Z",
                render: "primary"
            },
            // Right half of contract document - accent segment
            {
                path: "M12 2H18V22H12V2Z",
                render: "accent"
            },
            // Smart chip overlay - accent layer
            {
                path: "M10 12H14V16H10V12ZM11 13H13V15H11V13Z",
                render: "accent"
            },
            // Contract text and circuit patterns - detail layer
            {
                path: "M9 6H15V7H9V6ZM9 8H15V9H9V8ZM9 10H13V11H9V10ZM9 17H15V18H9V17ZM9 19H13V20H9V19ZM10 12H11V13H10V12ZM13 12H14V13H13V12ZM10 15H11V16H10V15ZM13 15H14V16H13V15ZM5 1L6 2M19 1L18 2M5 23L6 22M19 23L18 22",
                render: "detail"
            }
        ]
    },

    // Staking Icon
    staking: {
        name: 'Staking',
        type: '3d-stroke',
        layers: [
            // Left half of staking platform and coins - primary segment
            {
                path: "M4 14H12V20H4V14ZM8 8C5.34 8 5 10.34 5 12C5 13.66 6.34 15 8 15C9.66 15 11 13.66 11 12C11 10.34 9.66 8 8 8ZM12 6C9.34 6 9 8.34 9 10C9 11.66 10.34 13 12 13V6Z",
                render: "primary"
            },
            // Right half of staking platform and coins - accent segment
            {
                path: "M12 14H20V20H12V14ZM12 6C14.66 6 15 8.34 15 10C15 11.66 13.66 13 12 13V6ZM16 8C13.34 8 13 10.34 13 12C13 13.66 14.34 15 16 15C17.66 15 19 13.66 19 12C19 10.34 17.66 8 16 8Z",
                render: "accent"
            },
            // Staking pool structure - accent layer
            {
                path: "M5 15H19V19H5V15Z",
                render: "accent"
            },
            // Staking arrows and rewards - detail layer
            {
                path: "M6 12V16M12 10V16M18 12V16M5 13L6 12L7 13M11 11L12 10L13 11M17 13L18 12L19 13M4 18H8M10 18H14M16 18H20",
                render: "detail"
            }
        ]
    }
};
