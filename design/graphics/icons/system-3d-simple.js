// System 3D Simple Icons - Clean simplified system icons with 3D effects
// Following the tri-tone approach: primary (1.0), accent (0.7), base (0.5)

const systemSimpleIcons = {
    // Settings/Gear Icon - Improved with proper 3D depth
    settings: {
        name: "Settings",
        type: "3d-stroke",
        layers: [
            // Gear shadow/depth (base)
            {
                path: "M12.5 16A4 4 0 0 1 8.5 12A4 4 0 0 1 12.5 8A4 4 0 0 1 16.5 12A4 4 0 0 1 12.5 16M20.43 11.47C20.47 11.68 20.5 11.84 20.5 12C20.5 12.16 20.47 12.32 20.43 12.53L22.54 14.16C22.73 14.31 22.78 14.58 22.66 14.8L20.66 18.26C20.54 18.48 20.27 18.57 20.05 18.48L17.56 17.48C17.04 17.87 16.5 18.21 15.87 18.46L15.5 21.11C15.46 21.35 15.25 21.53 15 21.53H11C10.75 21.53 10.54 21.35 10.5 21.11L10.13 18.46C9.5 18.21 8.96 17.87 8.44 17.48L5.95 18.48C5.73 18.57 5.46 18.48 5.34 18.26L3.34 14.8C3.22 14.58 3.27 14.31 3.46 14.16L5.57 12.53C5.53 12.32 5.5 12.16 5.5 12C5.5 11.84 5.53 11.68 5.57 11.47L3.46 9.84C3.27 9.69 3.22 9.42 3.34 9.2L5.34 5.74C5.46 5.52 5.73 5.43 5.95 5.52L8.44 6.52C8.96 6.13 9.5 5.79 10.13 5.54L10.5 2.89C10.54 2.65 10.75 2.47 11 2.47H15C15.25 2.47 15.46 2.65 15.5 2.89L15.87 5.54C16.5 5.79 17.04 6.13 17.56 6.52L20.05 5.52C20.27 5.43 20.54 5.52 20.66 5.74L22.66 9.2C22.78 9.42 22.73 9.69 22.54 9.84L20.43 11.47Z",
                render: "base"
            },
            // Main gear body (primary)
            {
                path: "M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 11.47C19.47 11.68 19.5 11.84 19.5 12C19.5 12.16 19.47 12.32 19.43 12.53L21.54 14.16C21.73 14.31 21.78 14.58 21.66 14.8L19.66 18.26C19.54 18.48 19.27 18.57 19.05 18.48L16.56 17.48C16.04 17.87 15.5 18.21 14.87 18.46L14.5 21.11C14.46 21.35 14.25 21.53 14 21.53H10C9.75 21.53 9.54 21.35 9.5 21.11L9.13 18.46C8.5 18.21 7.96 17.87 7.44 17.48L4.95 18.48C4.73 18.57 4.46 18.48 4.34 18.26L2.34 14.8C2.22 14.58 2.27 14.31 2.46 14.16L4.57 12.53C4.53 12.32 4.5 12.16 4.5 12C4.5 11.84 4.53 11.68 4.57 11.47L2.46 9.84C2.27 9.69 2.22 9.42 2.34 9.2L4.34 5.74C4.46 5.52 4.73 5.43 4.95 5.52L7.44 6.52C7.96 6.13 8.5 5.79 9.13 5.54L9.5 2.89C9.54 2.65 9.75 2.47 10 2.47H14C14.25 2.47 14.46 2.65 14.5 2.89L14.87 5.54C15.5 5.79 16.04 6.13 16.56 6.52L19.05 5.52C19.27 5.43 19.54 5.52 19.66 5.74L21.66 9.2C21.78 9.42 21.73 9.69 21.54 9.84L19.43 11.47Z",
                render: "primary"
            },
            // Inner gear mechanism (accent)
            {
                path: "M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z",
                render: "accent"
            }
        ]
    },

    // Home Icon - Properly reshaped
    home: {
        name: "Home",
        type: "3d-stroke",
        layers: [
            // House shadow (base)
            {
                path: "M12.5 3.5L21.5 10.5V21.5H19.5V11.5L12.5 5.5L5.5 11.5V21.5H3.5V10.5L12.5 3.5Z",
                render: "base"
            },
            // House structure (primary)
            {
                path: "M12 3L21 10V21H3V10L12 3ZM19 11.5L12 5.5L5 11.5V19H19V11.5Z",
                render: "primary"
            },
            // Door and windows (accent)
            {
                path: "M9 16V19H15V16H9ZM7 12H9V14H7V12ZM15 12H17V14H15V12Z",
                render: "accent"
            }
        ]
    },

    // Folder Icon - Improved with proper details
    folder: {
        name: "Folder",
        type: "3d-stroke",
        layers: [
            // Folder shadow (base)
            {
                path: "M4.5 6.5V18.5C4.5 19.6 5.4 20.5 6.5 20.5H18.5C19.6 20.5 20.5 19.6 20.5 18.5V8.5C20.5 7.4 19.6 6.5 18.5 6.5H12.5L10.5 4.5H6.5C5.4 4.5 4.5 5.4 4.5 6.5Z",
                render: "base"
            },
            // Main folder body (primary)
            {
                path: "M4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V8C20 6.9 19.1 6 18 6H12L10 4H6C4.9 4 4 4.9 4 6Z",
                render: "primary"
            },
            // Folder tab and contents (accent)
            {
                path: "M4 6V8H20V6H12L10 4H6C4.9 4 4 4.9 4 6ZM7 11H17M7 13H15M7 15H13",
                render: "accent"
            }
        ]
    },

    // File Icon - Improved with proper details
    file: {
        name: "File",
        type: "3d-stroke",
        layers: [
            // Document shadow (base)
            {
                path: "M6.5 2.5C5.4 2.5 4.5 3.4 4.5 4.5V20.5C4.5 21.6 5.4 22.5 6.5 22.5H18.5C19.6 22.5 20.5 21.6 20.5 20.5V8.5L14.5 2.5H6.5Z",
                render: "base"
            },
            // Document body (primary)
            {
                path: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z",
                render: "primary"
            },
            // Document corner fold and lines (accent)
            {
                path: "M14 2V8H20L14 2ZM7 11H17M7 13H17M7 15H14M7 17H16",
                render: "accent"
            }
        ]
    },

    // Search Icon - Improved with proper 3D depth
    search: {
        name: "Search",
        type: "3d-stroke",
        layers: [
            // Magnifying glass shadow (base)
            {
                path: "M15.5 14.5H14.71L14.43 14.23C15.41 13.09 16 11.61 16 10C16 6.41 13.09 3.5 9.5 3.5S3 6.41 3 10S6.41 16.5 10 16.5C11.61 16.5 13.09 15.91 14.23 14.73L14.5 15.01V15.8L19.5 20.79L21.29 19L15.5 14.5Z",
                render: "base"
            },
            // Magnifying glass body (primary)
            {
                path: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z",
                render: "primary"
            },
            // Glass lens reflection (accent)
            {
                path: "M9.5 7C8.12 7 7 8.12 7 9.5C7 10.88 8.12 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7ZM17.5 18.5L20.5 21.5",
                render: "accent"
            }
        ]
    },

    // Download Icon - Improved with proper 3D effect
    download: {
        name: "Download",
        type: "3d-stroke",
        layers: [
            // Download shadow (base)
            {
                path: "M5.5 20.5H19.5V18.5H5.5V20.5ZM12.5 4.5L5.5 11.5H9.5V17.5H15.5V11.5H19.5L12.5 4.5Z",
                render: "base"
            },
            // Download container (primary)
            {
                path: "M5 20H19V18H5V20ZM12 4L5 11H9V17H15V11H19L12 4Z",
                render: "primary"
            },
            // Arrow detail (accent)
            {
                path: "M11 11H13V15H11V11ZM12 13L14.5 10.5H13.5V12H10.5V10.5H9.5L12 13Z",
                render: "accent"
            }
        ]
    },

    // Upload Icon - Improved with proper 3D effect
    upload: {
        name: "Upload",
        type: "3d-stroke",
        layers: [
            // Upload shadow (base)
            {
                path: "M5.5 20.5H19.5V18.5H5.5V20.5ZM12.5 4.5L19.5 11.5H15.5V17.5H9.5V11.5H5.5L12.5 4.5Z",
                render: "base"
            },
            // Upload container (primary)
            {
                path: "M5 20H19V18H5V20ZM12 4L19 11H15V17H9V11H5L12 4Z",
                render: "primary"
            },
            // Arrow detail (accent)
            {
                path: "M11 11H13V15H11V11ZM12 7L9.5 9.5H10.5V8H13.5V9.5H14.5L12 7Z",
                render: "accent"
            }
        ]
    },

    // Lock Icon - Properly reshaped
    lock: {
        name: "Lock",
        type: "3d-stroke",
        layers: [
            // Lock shadow (base)
            {
                path: "M6.5 10.5V8.5C6.5 6.29 8.29 4.5 10.5 4.5H13.5C15.71 4.5 17.5 6.29 17.5 8.5V10.5H18.5C19.6 10.5 20.5 11.4 20.5 12.5V20.5C20.5 21.6 19.6 22.5 18.5 22.5H5.5C4.4 22.5 3.5 21.6 3.5 20.5V12.5C3.5 11.4 4.4 10.5 5.5 10.5H6.5ZM8.5 8.5V10.5H15.5V8.5C15.5 7.4 14.6 6.5 13.5 6.5H10.5C9.4 6.5 8.5 7.4 8.5 8.5Z",
                render: "base"
            },
            // Lock body (primary)
            {
                path: "M6 10V8C6 5.79 7.79 4 10 4H14C16.21 4 18 5.79 18 8V10H19C20.1 10 21 10.9 21 12V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V12C3 10.9 3.9 10 5 10H6ZM8 8V10H16V8C16 6.9 15.1 6 14 6H10C8.9 6 8 6.9 8 8Z",
                render: "primary"
            },
            // Keyhole (accent)
            {
                path: "M12 14C11.45 14 11 14.45 11 15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15C13 14.45 12.55 14 12 14ZM12 17V19",
                render: "accent"
            }
        ]
    },

    // User/Profile Icon - Properly reshaped
    user: {
        name: "User",
        type: "3d-stroke",
        layers: [
            // User shadow (base)
            {
                path: "M12.5 2.5C14.16 2.5 15.5 3.84 15.5 5.5C15.5 7.16 14.16 8.5 12.5 8.5C10.84 8.5 9.5 7.16 9.5 5.5C9.5 3.84 10.84 2.5 12.5 2.5ZM12.5 10.5C16.5 10.5 19.5 13.5 19.5 17.5V22.5H5.5V17.5C5.5 13.5 8.5 10.5 12.5 10.5Z",
                render: "base"
            },
            // User head (primary)
            {
                path: "M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2Z",
                render: "primary"
            },
            // User body (accent)
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
