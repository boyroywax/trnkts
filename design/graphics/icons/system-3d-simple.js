// System 3D Simple Icons - Clean simplified system icons with 3D effects
// Following the tri-tone approach: primary (1.0), accent (0.7), base (0.5)

const systemSimpleIcons = {
    // Settings/Gear Icon
    settings: {
        name: "Settings",
        type: "3d-stroke",
        layers: [
            // Left half of gear - primary segment
            {
                path: "M12 9V15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9ZM12 2.47H10C9.75 2.47 9.54 2.65 9.5 2.89L9.13 5.54C8.5 5.79 7.96 6.13 7.44 6.52L4.95 5.52C4.73 5.43 4.46 5.52 4.34 5.74L2.34 9.2C2.22 9.42 2.27 9.69 2.46 9.84L4.57 11.47C4.53 11.68 4.5 11.84 4.5 12C4.5 12.16 4.53 12.32 4.57 12.53L2.46 14.16C2.27 14.31 2.22 14.58 2.34 14.8L4.34 18.26C4.46 18.48 4.73 18.57 4.95 18.48L7.44 17.48C7.96 17.87 8.5 18.21 9.13 18.46L9.5 21.11C9.54 21.35 9.75 21.53 10 21.53H12V9Z",
                render: "primary"
            },
            // Right half of gear - accent segment
            {
                path: "M12 9V15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM12 2.47H14C14.25 2.47 14.46 2.65 14.5 2.89L14.87 5.54C15.5 5.79 16.04 6.13 16.56 6.52L19.05 5.52C19.27 5.43 19.54 5.52 19.66 5.74L21.66 9.2C21.78 9.42 21.73 9.69 21.54 9.84L19.43 11.47C19.47 11.68 19.5 11.84 19.5 12C19.5 12.16 19.47 12.32 19.43 12.53L21.54 14.16C21.73 14.31 21.78 14.58 21.66 14.8L19.66 18.26C19.54 18.48 19.27 18.57 19.05 18.48L16.56 17.48C16.04 17.87 15.5 18.21 14.87 18.46L14.5 21.11C14.46 21.35 14.25 21.53 14 21.53H12V9Z",
                render: "accent"
            }
        ]
    },

    // Home Icon
    home: {
        name: "Home",
        type: "3d-stroke",
        layers: [
            // Left half of house - primary segment
            {
                path: "M12 3L3 10V21H12V3Z",
                render: "primary"
            },
            // Right half of house - accent segment
            {
                path: "M12 3L21 10V21H12V3Z",
                render: "accent"
            },
            // Door and windows - detail layer
            {
                path: "M9 15H15V21H9V15ZM7 12H9V14H7V12ZM15 12H17V14H15V12Z",
                render: "detail"
            }
        ]
    },

    // Folder Icon
    folder: {
        name: "Folder",
        type: "3d-stroke",
        layers: [
            // Left half of folder - primary segment
            {
                path: "M4 6V8H12V22H6C4.9 22 4 21.1 4 20V6C4 4.9 4.9 4 6 4H10L12 6H4Z",
                render: "primary"
            },
            // Right half of folder - accent segment
            {
                path: "M12 6H18C19.1 6 20 6.9 20 8V20C20 21.1 19.1 22 18 22H12V6Z",
                render: "accent"
            }
        ]
    },

    // File Icon
    file: {
        name: "File",
        type: "3d-stroke",
        layers: [
            // Left half of document - primary segment
            {
                path: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H14V8H14V2H6Z",
                render: "primary"
            },
            // Right half of document with corner fold - accent segment
            {
                path: "M14 2V8H20V20C20 21.1 19.1 22 18 22H14V8H14V2H18L20 8H14Z",
                render: "accent"
            }
        ]
    },

    // Search Icon
    search: {
        name: "Search",
        type: "3d-stroke",
        layers: [
            // Magnifying glass circle only - primary segment
            {
                path: "M9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z",
                render: "primary"
            },
            // Handle only - accent segment
            {
                path: "M15.5 14L20.49 19L19 20.49L14 15.5L15.5 14Z",
                render: "accent"
            }
        ]
    },

    // Download Icon
    download: {
        name: "Download",
        type: "3d-stroke",
        layers: [
            // Left half of arrow - primary segment
            {
                path: "M5 20H19V18H5V20ZM12 16L5 9H9V3H12V16Z",
                render: "primary"
            },
            // Right half of arrow - accent segment
            {
                path: "M12 16L19 9H15V3H12V16Z",
                render: "accent"
            }
        ]
    },

    // Upload Icon
    upload: {
        name: "Upload",
        type: "3d-stroke",
        layers: [
            // Left half of arrow - primary segment
            {
                path: "M5 20H19V18H5V20ZM12 4L5 11H9V17H12V4Z",
                render: "primary"
            },
            // Right half of arrow - accent segment
            {
                path: "M12 4L19 11H15V17H12V4Z",
                render: "accent"
            }
        ]
    },

    // Lock Icon
    lock: {
        name: "Lock",
        type: "3d-stroke",
        layers: [
            // Left half of lock - primary segment
            {
                path: "M6 10H5C3.9 10 3 10.9 3 12V20C3 21.1 3.9 22 5 22H12V10H6ZM8 8C8 6.9 8.9 6 10 6H12V8H8Z",
                render: "primary"
            },
            // Right half of lock with shackle - accent segment
            {
                path: "M12 10H19C20.1 10 21 10.9 21 12V20C21 21.1 20.1 22 19 22H12V10ZM12 6H14C15.1 6 16 6.9 16 8V10H12V6Z",
                render: "accent"
            }
        ]
    },

    // User/Profile Icon
    user: {
        name: "User",
        type: "3d-stroke",
        layers: [
            // Left half of user - primary segment
            {
                path: "M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8V2ZM12 10C16 10 19 13 19 17V22H12V10Z",
                render: "primary"
            },
            // Right half of user - accent segment
            {
                path: "M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8V2ZM12 10C8 10 5 13 5 17V22H12V10Z",
                render: "accent"
            }
        ]
    },

    // Database Icon
    database: {
        name: "Database",
        type: "3d-stroke",
        layers: [
            // Left half of database - primary segment
            {
                path: "M12 2C7.6 2 4 3.79 4 6V17C4 19.21 7.6 21 12 21V2ZM6 6.5C6 5.12 8.69 4 12 4V9C8.69 9 6 7.88 6 6.5Z",
                render: "primary"
            },
            // Right half of database - accent segment
            {
                path: "M12 2C16.4 2 20 3.79 20 6V17C20 19.21 16.4 21 12 21V2ZM18 6.5C18 7.88 15.31 9 12 9V4C15.31 4 18 5.12 18 6.5Z",
                render: "accent"
            }
        ]
    },

    // Server Icon
    server: {
        name: "Server",
        type: "3d-stroke",
        layers: [
            // Left half of server - primary segment
            {
                path: "M3 4H12V8H3V4ZM3 10H12V14H3V10ZM3 16H12V20H3V16Z",
                render: "primary"
            },
            // Right half of server - accent segment
            {
                path: "M12 4H21V8H12V4ZM12 10H21V14H12V10ZM12 16H21V20H12V16Z",
                render: "accent"
            }
        ]
    },

    // Cloud Icon
    cloud: {
        name: "Cloud",
        type: "3d-stroke",
        layers: [
            // Left half of cloud - primary segment
            {
                path: "M19.35 10.04C18.67 6.59 15.64 3.5 12 3.5V18.5H5C2.18 18.5 0 16.32 0 13.5C0 10.68 2.34 8.34 5.35 8.04C6.6 5.64 9.11 3.5 12 3.5Z",
                render: "primary"
            },
            // Right half of cloud - accent segment
            {
                path: "M12 3.5C15.64 3.5 18.67 6.59 19.35 10.04C21.5 9.17 23 11.14 23 13.5C23 16.26 20.76 18.5 18 18.5H12V3.5Z",
                render: "accent"
            }
        ]
    },

    // Monitor Icon
    monitor: {
        name: "Monitor",
        type: "3d-stroke",
        layers: [
            // Left half of monitor with stand - primary segment
            {
                path: "M2 3H12V16H2V3ZM4 5V14H12V5H4ZM9 19H12V21H9V19ZM7 21H12V23H7V21Z",
                render: "primary"
            },
            // Right half of monitor - accent segment
            {
                path: "M12 3H22V16H12V3ZM12 5V14H20V5H12ZM12 19H15V21H12V19ZM12 21H17V23H12V21Z",
                render: "accent"
            },
            // Screen content lines - detail layer
            {
                path: "M6 7H18M6 9H16M6 11H14",
                render: "detail"
            }
        ]
    },

    // CPU Icon
    cpu: {
        name: "CPU",
        type: "3d-stroke",
        layers: [
            // Left half of CPU - primary segment
            {
                path: "M5 5H12V19H5V5ZM8 8H12V16H8V8ZM10 10H12V14H10V10Z",
                render: "primary"
            },
            // Right half of CPU - accent segment
            {
                path: "M12 5H19V19H12V5ZM12 8H16V16H12V8ZM12 10H14V14H12V10Z",
                render: "accent"
            }
        ]
    },

    // Network Icon
    network: {
        name: "Network",
        type: "3d-stroke",
        layers: [
            // Top and left nodes - primary segment
            {
                path: "M12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3 12 3C11.45 3 11 2.55 11 2C11 1.45 11.45 1 12 1ZM1 9C1.55 9 2 9.45 2 10C2 10.55 1.55 11 1 11C0.45 11 0 10.55 0 10C0 9.45 0.45 9 1 9ZM6 18C6.55 18 7 18.45 7 19C7 19.55 6.55 20 6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18Z",
                render: "primary"
            },
            // Right and bottom nodes - accent segment
            {
                path: "M23 9C23.55 9 24 9.45 24 10C24 10.55 23.55 11 23 11C22.45 11 22 10.55 22 10C22 9.45 22.45 9 23 9ZM18 18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19C17 18.45 17.45 18 18 18Z",
                render: "accent"
            }
        ]
    },

    // Shield Icon
    shield: {
        name: "Shield",
        type: "3d-stroke",
        layers: [
            // Left half of shield - primary segment
            {
                path: "M12 1L3 4V11C3 16 6.11 20.58 12 22V1ZM5 5.5L12 3V20C7.5 18.5 5 15 5 11V5.5Z",
                render: "primary"
            },
            // Right half of shield - accent segment
            {
                path: "M12 1L21 4V11C21 16 17.89 20.58 12 22V1ZM19 5.5V11C19 15 16.5 18.5 12 20V3L19 5.5Z",
                render: "accent"
            },
            // Shield checkmark - detail layer
            {
                path: "M9 11L11 13L15 9",
                render: "detail"
            }
        ]
    },

    // Terminal Icon
    terminal: {
        name: "Terminal",
        type: "3d-stroke",
        layers: [
            // Left half of terminal - primary segment
            {
                path: "M2 3H12V20H2C0.9 20 0 19.1 0 18V5C0 3.9 0.9 3 2 3ZM2 5V18H12V5H2Z",
                render: "primary"
            },
            // Right half of terminal - accent segment
            {
                path: "M12 3H22C23.1 3 24 3.9 24 5V18C24 19.1 23.1 20 22 20H12V3ZM12 5V18H22V5H12Z",
                render: "accent"
            },
            // Terminal prompt and cursor - detail layer
            {
                path: "M4 8L7 11L4 14M9 14H15M19 8V10",
                render: "detail"
            }
        ]
    }
};
