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
    }
};
