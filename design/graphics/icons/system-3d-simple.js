// System 3D Simple Icons - Clean simplified system icons with 3D effects
// Following the tri-tone approach: primary (1.0), accent (0.7), base (0.5)

const systemSimpleIcons = {
    // Settings/Gear Icon
    settings: {
        name: "Settings",
        type: "3d-stroke",
        layers: [
            // Main gear body (primary)
            {
                path: "M12 15A3 3 0 0 1 9 12A3 3 0 0 1 12 9A3 3 0 0 1 15 12A3 3 0 0 1 12 15M19.43 11.47C19.47 11.68 19.5 11.84 19.5 12C19.5 12.16 19.47 12.32 19.43 12.53L21.54 14.16C21.73 14.31 21.78 14.58 21.66 14.8L19.66 18.26C19.54 18.48 19.27 18.57 19.05 18.48L16.56 17.48C16.04 17.87 15.5 18.21 14.87 18.46L14.5 21.11C14.46 21.35 14.25 21.53 14 21.53H10C9.75 21.53 9.54 21.35 9.5 21.11L9.13 18.46C8.5 18.21 7.96 17.87 7.44 17.48L4.95 18.48C4.73 18.57 4.46 18.48 4.34 18.26L2.34 14.8C2.22 14.58 2.27 14.31 2.46 14.16L4.57 12.53C4.53 12.32 4.5 12.16 4.5 12C4.5 11.84 4.53 11.68 4.57 11.47L2.46 9.84C2.27 9.69 2.22 9.42 2.34 9.2L4.34 5.74C4.46 5.52 4.73 5.43 4.95 5.52L7.44 6.52C7.96 6.13 8.5 5.79 9.13 5.54L9.5 2.89C9.54 2.65 9.75 2.47 10 2.47H14C14.25 2.47 14.46 2.65 14.5 2.89L14.87 5.54C15.5 5.79 16.04 6.13 16.56 6.52L19.05 5.52C19.27 5.43 19.54 5.52 19.66 5.74L21.66 9.2C21.78 9.42 21.73 9.69 21.54 9.84L19.43 11.47Z",
                render: "primary"
            },
            // Inner gear center (accent)
            {
                path: "M12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5Z",
                render: "accent"
            }
        ]
    },

    // Home Icon
    home: {
        name: "Home",
        type: "3d-stroke",
        layers: [
            // House structure without door/window openings (primary)
            {
                path: "M12 3L21 10V21H15V15H9V21H3V10L12 3ZM19 12V19H17V14H15V12H17V14H19V12ZM9 12V14H7V12H9ZM7 14V19H5V12L12 6L19 12H17V14H9V12H7Z",
                render: "primary"
            },
            // Door and windows as separate solid pieces (accent)
            {
                path: "M9 15H15V21H9V15ZM7 12H9V14H7V12ZM15 12H17V14H15V12Z",
                render: "accent"
            }
        ]
    },

    // Folder Icon
    folder: {
        name: "Folder",
        type: "3d-stroke",
        layers: [
            // Main folder body excluding tab area (primary)
            {
                path: "M4 8V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V8H4Z",
                render: "primary"
            },
            // Folder tab as separate piece (accent)
            {
                path: "M4 6V8H12L10 4H6C4.9 4 4 4.9 4 6ZM12 6H18C19.1 6 20 6.9 20 8V6H12Z",
                render: "accent"
            },
            // Folder content lines (details)
            {
                path: "M7 12H17M7 14H15M7 16H13",
                render: "details"
            }
        ]
    },

    // File Icon
    file: {
        name: "File",
        type: "3d-stroke",
        layers: [
            // Document body excluding corner fold area (primary)
            {
                path: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8H14V2H6Z",
                render: "primary"
            },
            // Document corner fold as separate piece (accent)
            {
                path: "M14 2V8H20L14 2Z",
                render: "accent"
            },
            // Document content lines (details)
            {
                path: "M7 12H17M7 14H17M7 16H14M7 18H16",
                render: "details"
            }
        ]
    },

    // Search Icon
    search: {
        name: "Search",
        type: "3d-stroke",
        layers: [
            // Magnifying glass circle only (primary)
            {
                path: "M9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z",
                render: "primary"
            },
            // Handle as separate piece (accent)
            {
                path: "M15.5 14L20.49 19L19 20.49L14 15.5L15.5 14Z",
                render: "accent"
            },
            // Glass reflection line (details)
            {
                path: "M9.5 7C8.67 7 8 7.67 8 8.5",
                render: "details"
            }
        ]
    },

    // Download Icon
    download: {
        name: "Download",
        type: "3d-stroke",
        layers: [
            // Download container without arrow area (primary)
            {
                path: "M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z",
                render: "primary"
            },
            // Arrow shaft as separate piece (accent)
            {
                path: "M11 3H13V12H11V3Z",
                render: "accent"
            }
        ]
    },

    // Upload Icon
    upload: {
        name: "Upload",
        type: "3d-stroke",
        layers: [
            // Upload container without arrow area (primary)
            {
                path: "M5 20H19V18H5V20ZM12 4L5 11H9V17H15V11H19L12 4Z",
                render: "primary"
            },
            // Arrow shaft as separate piece (accent)
            {
                path: "M11 17H13V8H11V17Z",
                render: "accent"
            }
        ]
    },

    // Lock Icon
    lock: {
        name: "Lock",
        type: "3d-stroke",
        layers: [
            // Lock body only (primary)
            {
                path: "M6 10H5C3.9 10 3 10.9 3 12V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V12C21 10.9 20.1 10 19 10H18V8C18 5.79 16.21 4 14 4H10C7.79 4 6 5.79 6 8V10Z",
                render: "primary"
            },
            // Shackle as separate piece (accent)
            {
                path: "M8 8C8 6.9 8.9 6 10 6H14C15.1 6 16 6.9 16 8V10H8V8Z",
                render: "accent"
            },
            // Keyhole (details)
            {
                path: "M12 14C11.45 14 11 14.45 11 15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15C13 14.45 12.55 14 12 14ZM12 17V19",
                render: "details"
            }
        ]
    },

    // User/Profile Icon
    user: {
        name: "User",
        type: "3d-stroke",
        layers: [
            // User head only (primary)
            {
                path: "M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2Z",
                render: "primary"
            },
            // User body as separate piece (accent)
            {
                path: "M12 10C16 10 19 13 19 17V22H5V17C5 13 8 10 12 10Z",
                render: "accent"
            }
        ]
    },

    // Database Icon
    database: {
        name: "Database",
        type: "3d-stroke",
        layers: [
            // Database cylinder body (primary)
            {
                path: "M12 2C16.4 2 20 3.79 20 6V17C20 19.21 16.4 21 12 21C7.6 21 4 19.21 4 17V6C4 3.79 7.6 2 12 2ZM12 4C8.69 4 6 5.12 6 6.5C6 7.88 8.69 9 12 9C15.31 9 18 7.88 18 6.5C18 5.12 15.31 4 12 4Z",
                render: "primary"
            },
            // Database ring separators as lines (details)
            {
                path: "M6 11.5C6 12.88 8.69 14 12 14C15.31 14 18 12.88 18 11.5M6 16.5C6 17.88 8.69 19 12 19C15.31 19 18 17.88 18 16.5",
                render: "details"
            }
        ]
    },

    // Server Icon
    server: {
        name: "Server",
        type: "3d-stroke",
        layers: [
            // Server units (primary)
            {
                path: "M3 4H21V8H3V4ZM3 10H21V14H3V10ZM3 16H21V20H3V16Z",
                render: "primary"
            },
            // Server lights and vents (details)
            {
                path: "M5 5.5H6V6.5H5V5.5ZM7 5.5H8V6.5H7V5.5ZM5 11.5H6V12.5H5V11.5ZM7 11.5H8V12.5H7V11.5ZM5 17.5H6V18.5H5V17.5ZM7 17.5H8V18.5H7V17.5ZM18 6H19M18 12H19M18 18H19",
                render: "details"
            }
        ]
    },

    // Cloud Icon
    cloud: {
        name: "Cloud",
        type: "3d-stroke",
        layers: [
            // Cloud body (primary)
            {
                path: "M19.35 10.04C18.67 6.59 15.64 3.5 12 3.5C9.11 3.5 6.6 5.64 5.35 8.04C2.34 8.34 0 10.68 0 13.5C0 16.32 2.18 18.5 5 18.5H18C20.76 18.5 23 16.26 23 13.5C23 11.14 21.5 9.17 19.35 10.04Z",
                render: "primary"
            },
            // Cloud highlight lines (details)
            {
                path: "M8 8C9.5 6.5 11.5 6 12 6C14.5 6 16.5 7.5 17 9.5M6 13.5C6 12 7 11 8.5 11H18C19.5 11 20.5 12 20.5 13.5",
                render: "details"
            }
        ]
    },

    // Monitor Icon
    monitor: {
        name: "Monitor",
        type: "3d-stroke",
        layers: [
            // Monitor screen (primary)
            {
                path: "M2 3H22V16H2V3ZM4 5V14H20V5H4Z",
                render: "primary"
            },
            // Stand as separate piece (accent)
            {
                path: "M9 19H15V21H9V19ZM7 21H17V23H7V21Z",
                render: "accent"
            },
            // Screen content lines (details)
            {
                path: "M6 7H18M6 9H16M6 11H14",
                render: "details"
            }
        ]
    },

    // CPU Icon
    cpu: {
        name: "CPU",
        type: "3d-stroke",
        layers: [
            // CPU body (primary)
            {
                path: "M5 5H19V19H5V5ZM8 8H16V16H8V8Z",
                render: "primary"
            },
            // CPU core as separate piece (accent)
            {
                path: "M10 10H14V14H10V10Z",
                render: "accent"
            },
            // CPU pins (details)
            {
                path: "M3 7H5M3 10H5M3 13H5M19 7H21M19 10H21M19 13H21M7 3V5M10 3V5M13 3V5M7 19V21M10 19V21M13 19V21",
                render: "details"
            }
        ]
    },

    // Network Icon
    network: {
        name: "Network",
        type: "3d-stroke",
        layers: [
            // Network nodes (primary)
            {
                path: "M1 9C1.55 9 2 9.45 2 10C2 10.55 1.55 11 1 11C0.45 11 0 10.55 0 10C0 9.45 0.45 9 1 9ZM12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3 12 3C11.45 3 11 2.55 11 2C11 1.45 11.45 1 12 1ZM23 9C23.55 9 24 9.45 24 10C24 10.55 23.55 11 23 11C22.45 11 22 10.55 22 10C22 9.45 22.45 9 23 9ZM6 18C6.55 18 7 18.45 7 19C7 19.55 6.55 20 6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18ZM18 18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19C17 18.45 17.45 18 18 18Z",
                render: "primary"
            },
            // Network connection lines (details)
            {
                path: "M2 10L11 2M13 2L22 10M2 10L5 18M22 10L19 18M6 18H18",
                render: "details"
            }
        ]
    },

    // Shield Icon
    shield: {
        name: "Shield",
        type: "3d-stroke",
        layers: [
            // Shield body only (primary)
            {
                path: "M12 1L21 4V11C21 16 17.89 20.58 12 22C6.11 20.58 3 16 3 11V4L12 1ZM12 3L19 5.5V11C19 15 16.5 18.5 12 20C7.5 18.5 5 15 5 11V5.5L12 3Z",
                render: "primary"
            },
            // Shield checkmark as separate piece (accent)
            {
                path: "M9 11L11 13L15 9",
                render: "accent"
            }
        ]
    },

    // Terminal Icon
    terminal: {
        name: "Terminal",
        type: "3d-stroke",
        layers: [
            // Terminal window (primary)
            {
                path: "M2 3H22C23.1 3 24 3.9 24 5V18C24 19.1 23.1 20 22 20H2C0.9 20 0 19.1 0 18V5C0 3.9 0.9 3 2 3ZM2 5V18H22V5H2Z",
                render: "primary"
            },
            // Terminal prompt and cursor (accent)
            {
                path: "M4 8L7 11L4 14M9 14H15M19 8V10",
                render: "accent"
            }
        ]
    }
};
