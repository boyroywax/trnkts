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
                path: "M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97L2.46 14.6c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.13-.22.07-.49-.12-.64L19.43 13z",
                render: "primary"
            },
            // Inner gear mechanism (accent)
            {
                path: "M12 10.5A1.5 1.5 0 0 0 10.5 12A1.5 1.5 0 0 0 12 13.5A1.5 1.5 0 0 0 13.5 12A1.5 1.5 0 0 0 12 10.5",
                render: "accent"
            },
            // Gear teeth detail (base)
            {
                path: "M14.5 4.5L14.13 7.15M16.85 7.15L14.13 7.15M19.5 9.5L16.85 7.15M19.5 14.5L16.85 16.85M16.85 16.85L14.13 16.85M14.5 19.5L14.13 16.85M9.5 19.5L9.87 16.85M7.15 16.85L9.87 16.85M4.5 14.5L7.15 16.85M4.5 9.5L7.15 7.15M7.15 7.15L9.87 7.15M9.5 4.5L9.87 7.15",
                render: "base"
            }
        ]
    },

    // Home Icon
    home: {
        name: "Home",
        type: "3d-stroke",
        layers: [
            // House structure (primary)
            {
                path: "M3 12L5 10V20H19V10L21 12M12 3L20 10H4L12 3Z",
                render: "primary"
            },
            // Roof detail (accent)
            {
                path: "M12 3L20 10L12 7L4 10L12 3Z",
                render: "accent"
            },
            // Door and windows (base)
            {
                path: "M9 16V20H15V16H9ZM7 12H9V14H7V12ZM15 12H17V14H15V12Z",
                render: "base"
            }
        ]
    },

    // Folder Icon
    folder: {
        name: "Folder",
        type: "3d-stroke",
        layers: [
            // Main folder body (primary)
            {
                path: "M4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V8C20 6.9 19.1 6 18 6H12L10 4H6C4.9 4 4 4.9 4 6Z",
                render: "primary"
            },
            // Folder tab (accent)
            {
                path: "M4 6V8H20V6H12L10 4H6C4.9 4 4 4.9 4 6Z",
                render: "accent"
            },
            // Folder contents indicator (base)
            {
                path: "M7 12H17M7 14H15M7 16H13",
                render: "base"
            }
        ]
    },

    // File Icon
    file: {
        name: "File",
        type: "3d-stroke",
        layers: [
            // Document body (primary)
            {
                path: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z",
                render: "primary"
            },
            // Document corner fold (accent)
            {
                path: "M14 2V8H20L14 2Z",
                render: "accent"
            },
            // Document lines (base)
            {
                path: "M7 12H17M7 14H17M7 16H14M7 18H16",
                render: "base"
            }
        ]
    },

    // Search Icon
    search: {
        name: "Search",
        type: "3d-stroke",
        layers: [
            // Magnifying glass body (primary)
            {
                path: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z",
                render: "primary"
            },
            // Glass lens (accent)
            {
                path: "M9.5 7C8.12 7 7 8.12 7 9.5C7 10.88 8.12 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7Z",
                render: "accent"
            },
            // Handle detail (base)
            {
                path: "M18.5 19.5L21 22",
                render: "base"
            }
        ]
    },

    // Download Icon
    download: {
        name: "Download",
        type: "3d-stroke",
        layers: [
            // Download container (primary)
            {
                path: "M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z",
                render: "primary"
            },
            // Arrow shaft (accent)
            {
                path: "M11 3H13V12H11V3Z",
                render: "accent"
            },
            // Arrow head detail (base)
            {
                path: "M12 13L15 10H13V12H11V10L12 13Z",
                render: "base"
            }
        ]
    },

    // Upload Icon
    upload: {
        name: "Upload",
        type: "3d-stroke",
        layers: [
            // Upload container (primary)
            {
                path: "M5 20H19V18H5V20ZM12 4L5 11H9V17H15V11H19L12 4Z",
                render: "primary"
            },
            // Arrow shaft (accent)
            {
                path: "M11 17H13V8H11V17Z",
                render: "accent"
            },
            // Arrow head detail (base)
            {
                path: "M12 7L9 10H11V8H13V10L12 7Z",
                render: "base"
            }
        ]
    },

    // Lock Icon
    lock: {
        name: "Lock",
        type: "3d-stroke",
        layers: [
            // Lock body (primary)
            {
                path: "M6 10V8C6 5.79 7.79 4 10 4H14C16.21 4 18 5.79 18 8V10H19C20.1 10 21 10.9 21 12V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V12C3 10.9 3.9 10 5 10H6ZM8 8V10H16V8C16 6.9 15.1 6 14 6H10C8.9 6 8 6.9 8 8Z",
                render: "primary"
            },
            // Lock shackle (accent)
            {
                path: "M8 8C8 6.9 8.9 6 10 6H14C15.1 6 16 6.9 16 8V10H8V8Z",
                render: "accent"
            },
            // Keyhole (base)
            {
                path: "M12 14C11.45 14 11 14.45 11 15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15C13 14.45 12.55 14 12 14ZM12 17V19",
                render: "base"
            }
        ]
    },

    // User/Profile Icon
    user: {
        name: "User",
        type: "3d-stroke",
        layers: [
            // User silhouette (primary)
            {
                path: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.75L9 7V9L15 8.25L21 9ZM16 12C16 14.69 13.31 17 12 17S8 14.69 8 12V10L12 10.75L16 10V12Z",
                render: "primary"
            },
            // Head detail (accent)
            {
                path: "M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2Z",
                render: "accent"
            },
            // Body detail (base)
            {
                path: "M12 10C16 10 19 13 19 17V22H5V17C5 13 8 10 12 10Z",
                render: "base"
            }
        ]
    },

    // Database Icon
    database: {
        name: "Database",
        type: "3d-stroke",
        layers: [
            // Database shadow (base)
            {
                path: "M12.5 2.5C16.9 2.5 20.5 4.29 20.5 6.5V17.5C20.5 19.71 16.9 21.5 12.5 21.5C8.1 21.5 4.5 19.71 4.5 17.5V6.5C4.5 4.29 8.1 2.5 12.5 2.5Z",
                render: "base"
            },
            // Database cylinders (primary)
            {
                path: "M12 2C16.4 2 20 3.79 20 6V17C20 19.21 16.4 21 12 21C7.6 21 4 19.21 4 17V6C4 3.79 7.6 2 12 2ZM12 4C8.69 4 6 5.12 6 6.5C6 7.88 8.69 9 12 9C15.31 9 18 7.88 18 6.5C18 5.12 15.31 4 12 4Z",
                render: "primary"
            },
            // Database rings (accent)
            {
                path: "M6 11.5C6 12.88 8.69 14 12 14C15.31 14 18 12.88 18 11.5M6 16.5C6 17.88 8.69 19 12 19C15.31 19 18 17.88 18 16.5",
                render: "accent"
            }
        ]
    },

    // Server Icon
    server: {
        name: "Server",
        type: "3d-stroke",
        layers: [
            // Server shadow (base)
            {
                path: "M3.5 4.5H20.5V8.5H3.5V4.5ZM3.5 10.5H20.5V14.5H3.5V10.5ZM3.5 16.5H20.5V20.5H3.5V16.5Z",
                render: "base"
            },
            // Server units (primary)
            {
                path: "M3 4H21V8H3V4ZM3 10H21V14H3V10ZM3 16H21V20H3V16Z",
                render: "primary"
            },
            // Server lights and vents (accent)
            {
                path: "M5 5.5H6V6.5H5V5.5ZM7 5.5H8V6.5H7V5.5ZM5 11.5H6V12.5H5V11.5ZM7 11.5H8V12.5H7V11.5ZM5 17.5H6V18.5H5V17.5ZM7 17.5H8V18.5H7V17.5ZM18 6H19V6H18ZM18 12H19V12H18ZM18 18H19V18H18Z",
                render: "accent"
            }
        ]
    },

    // Cloud Icon
    cloud: {
        name: "Cloud",
        type: "3d-stroke",
        layers: [
            // Cloud shadow (base)
            {
                path: "M19.35 10.54C18.67 6.59 15.64 3.5 12 3.5C9.11 3.5 6.6 5.64 5.35 8.54C2.34 8.84 0 11.18 0 14C0 16.82 2.18 19 5 19H18C20.76 19 23 16.76 23 14C23 11.64 21.5 9.67 19.35 10.54Z",
                render: "base"
            },
            // Cloud body (primary)
            {
                path: "M19.35 10.04C18.67 6.59 15.64 3.5 12 3.5C9.11 3.5 6.6 5.64 5.35 8.04C2.34 8.34 0 10.68 0 13.5C0 16.32 2.18 18.5 5 18.5H18C20.76 18.5 23 16.26 23 13.5C23 11.14 21.5 9.17 19.35 10.04Z",
                render: "primary"
            },
            // Cloud highlights (accent)
            {
                path: "M8 8C9.5 6.5 11.5 6 12 6C14.5 6 16.5 7.5 17 9.5M6 13.5C6 12 7 11 8.5 11H18C19.5 11 20.5 12 20.5 13.5",
                render: "accent"
            }
        ]
    },

    // Monitor Icon
    monitor: {
        name: "Monitor",
        type: "3d-stroke",
        layers: [
            // Monitor shadow (base)
            {
                path: "M2.5 3.5H21.5V16.5H2.5V3.5ZM9.5 19.5H14.5V21.5H9.5V19.5ZM7.5 21.5H16.5V23.5H7.5V21.5Z",
                render: "base"
            },
            // Monitor screen (primary)
            {
                path: "M2 3H22V16H2V3ZM4 5V14H20V5H4Z",
                render: "primary"
            },
            // Stand and details (accent)
            {
                path: "M9 19H15V21H9V19ZM7 21H17V23H7V21ZM6 7H18M6 9H16M6 11H14",
                render: "accent"
            }
        ]
    },

    // CPU Icon
    cpu: {
        name: "CPU",
        type: "3d-stroke",
        layers: [
            // CPU shadow (base)
            {
                path: "M5.5 5.5H18.5V18.5H5.5V5.5ZM8.5 8.5H15.5V15.5H8.5V8.5ZM3.5 7.5H5.5M3.5 10.5H5.5M3.5 13.5H5.5M18.5 7.5H20.5M18.5 10.5H20.5M18.5 13.5H20.5M7.5 3.5V5.5M10.5 3.5V5.5M13.5 3.5V5.5M7.5 18.5V20.5M10.5 18.5V20.5M13.5 18.5V20.5",
                render: "base"
            },
            // CPU body (primary)
            {
                path: "M5 5H19V19H5V5ZM8 8H16V16H8V8Z",
                render: "primary"
            },
            // CPU pins and core (accent)
            {
                path: "M3 7H5M3 10H5M3 13H5M19 7H21M19 10H21M19 13H21M7 3V5M10 3V5M13 3V5M7 19V21M10 19V21M13 19V21M10 10H14V14H10V10Z",
                render: "accent"
            }
        ]
    },

    // Network Icon
    network: {
        name: "Network",
        type: "3d-stroke",
        layers: [
            // Network shadow (base)
            {
                path: "M1.5 9.5C2.05 9.5 2.5 9.95 2.5 10.5C2.5 11.05 2.05 11.5 1.5 11.5C0.95 11.5 0.5 11.05 0.5 10.5C0.5 9.95 0.95 9.5 1.5 9.5ZM12.5 1.5C13.05 1.5 13.5 1.95 13.5 2.5C13.5 3.05 13.05 3.5 12.5 3.5C11.95 3.5 11.5 3.05 11.5 2.5C11.5 1.95 11.95 1.5 12.5 1.5ZM22.5 9.5C23.05 9.5 23.5 9.95 23.5 10.5C23.5 11.05 23.05 11.5 22.5 11.5C21.95 11.5 21.5 11.05 21.5 10.5C21.5 9.95 21.95 9.5 22.5 9.5ZM6.5 18.5C7.05 18.5 7.5 18.95 7.5 19.5C7.5 20.05 7.05 20.5 6.5 20.5C5.95 20.5 5.5 20.05 5.5 19.5C5.5 18.95 5.95 18.5 6.5 18.5ZM17.5 18.5C18.05 18.5 18.5 18.95 18.5 19.5C18.5 20.05 18.05 20.5 17.5 20.5C16.95 20.5 16.5 20.05 16.5 19.5C16.5 18.95 16.95 18.5 17.5 18.5Z",
                render: "base"
            },
            // Network nodes (primary)
            {
                path: "M1 9C1.55 9 2 9.45 2 10C2 10.55 1.55 11 1 11C0.45 11 0 10.55 0 10C0 9.45 0.45 9 1 9ZM12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3 12 3C11.45 3 11 2.55 11 2C11 1.45 11.45 1 12 1ZM23 9C23.55 9 24 9.45 24 10C24 10.55 23.55 11 23 11C22.45 11 22 10.55 22 10C22 9.45 22.45 9 23 9ZM6 18C6.55 18 7 18.45 7 19C7 19.55 6.55 20 6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18ZM18 18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19C17 18.45 17.45 18 18 18Z",
                render: "primary"
            },
            // Network connections (accent)
            {
                path: "M2 10L11 2M13 2L22 10M2 10L5 18M22 10L19 18M6 18H18",
                render: "accent"
            }
        ]
    },

    // Shield Icon
    shield: {
        name: "Shield",
        type: "3d-stroke",
        layers: [
            // Shield shadow (base)
            {
                path: "M12.5 1.5L21.5 4.5V11.5C21.5 16.5 18.39 21.08 12.5 22.5C6.61 21.08 3.5 16.5 3.5 11.5V4.5L12.5 1.5Z",
                render: "base"
            },
            // Shield body (primary)
            {
                path: "M12 1L21 4V11C21 16 17.89 20.58 12 22C6.11 20.58 3 16 3 11V4L12 1Z",
                render: "primary"
            },
            // Shield details (accent)
            {
                path: "M9 11L11 13L15 9M12 3L19 5.5V11C19 15 16.5 18.5 12 20C7.5 18.5 5 15 5 11V5.5L12 3Z",
                render: "accent"
            }
        ]
    },

    // Terminal Icon
    terminal: {
        name: "Terminal",
        type: "3d-stroke",
        layers: [
            // Terminal shadow (base)
            {
                path: "M2.5 3.5H21.5C22.6 3.5 23.5 4.4 23.5 5.5V18.5C23.5 19.6 22.6 20.5 21.5 20.5H2.5C1.4 20.5 0.5 19.6 0.5 18.5V5.5C0.5 4.4 1.4 3.5 2.5 3.5Z",
                render: "base"
            },
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
