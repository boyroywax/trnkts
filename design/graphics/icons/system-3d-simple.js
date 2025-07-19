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
            // Left half of folder body - primary segment
            {
                path: "M2 6C2 4.9 2.9 4 4 4H8L10 6H12V20H4C2.9 20 2 19.1 2 18V6Z",
                render: "primary"
            },
            // Right half of folder body - accent segment
            {
                path: "M12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H12V6Z",
                render: "accent"
            },
            // Folder tab - accent layer
            {
                path: "M4 4H8L10 6H20C21.1 6 22 6.9 22 8H12V6H10L8 4H4Z",
                render: "accent"
            },
            // Folder content indicators - detail layer
            {
                path: "M6 10H18M6 12H16M6 14H17M6 16H15M6 18H18",
                render: "detail"
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
                path: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12V2H6Z",
                render: "primary"
            },
            // Right half of document with corner fold - accent segment
            {
                path: "M12 2H16L18 4L20 6V20C20 21.1 19.1 22 18 22H12V2Z",
                render: "accent"
            },
            // Corner fold triangle - detail layer
            // {
            //     path: "M16 2L18 4L16 6V2Z",
            //     render: "detail"
            // },
            // File content lines - single column - detail layer
            {
                path: "M6 8H16M6 10H14M6 12H15M6 14H13M6 16H16M6 18H14",
                render: "details"
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
            // Left half of lock body - primary segment
            {
                path: "M5 10C3.9 10 3 10.9 3 12V20C3 21.1 3.9 22 5 22H12V10H5Z",
                render: "primary"
            },
            // Right half of lock body - accent segment
            {
                path: "M12 10H19C20.1 10 21 10.9 21 12V20C21 21.1 20.1 22 19 22H12V10Z",
                render: "accent"
            },
            // Shackle - accent layer
            {
                path: "M8 10V6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6V10H14V6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6V10H8Z",
                render: "accent"
            },
            // Lock mechanism details - detail layer
            {
                path: "M12 14C13.1 14 14 14.9 14 16C14 16.7 13.6 17.3 13 17.7V19H11V17.7C10.4 17.3 10 16.7 10 16C10 14.9 10.9 14 12 14ZM6 12H18M6 18H18",
                render: "detail"
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
            // Left half of database cylinders - primary segment
            {
                path: "M12 2C6.48 2 2 3.79 2 6V18C2 20.21 6.48 22 12 22V2ZM4 6C4 5.17 7.58 4 12 4V6C7.58 6 4 5.17 4 6ZM4 10C4 9.17 7.58 8 12 8V10C7.58 10 4 9.17 4 10ZM4 14C4 13.17 7.58 12 12 12V14C7.58 14 4 13.17 4 14ZM4 18C4 17.17 7.58 16 12 16V18C7.58 18 4 17.17 4 18Z",
                render: "primary"
            },
            // Right half of database cylinders - accent segment
            {
                path: "M12 2C17.52 2 22 3.79 22 6V18C22 20.21 17.52 22 12 22V2ZM20 6C20 5.17 16.42 4 12 4V6C16.42 6 20 5.17 20 6ZM20 10C20 9.17 16.42 8 12 8V10C16.42 10 20 9.17 20 10ZM20 14C20 13.17 16.42 12 12 12V14C16.42 14 20 13.17 20 14ZM20 18C20 17.17 16.42 16 12 16V18C16.42 18 20 17.17 20 18Z",
                render: "accent"
            },
            // Database connection indicators - detail layer
            {
                path: "M8 7H16M8 11H16M8 15H16M6 9H18M6 13H18M6 17H18",
                render: "detail"
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
            },
            // Server details - LED lights, drives, and ports
            {
                path: "M5 5.5H6.5V6.5H5V5.5ZM7.5 5.5H9V6.5H7.5V5.5ZM17 5.5H18.5V6.5H17V5.5ZM19 5.5H20V6.5H19V5.5ZM5 11.5H6.5V12.5H5V11.5ZM7.5 11.5H9V12.5H7.5V11.5ZM17 11.5H18.5V12.5H17V11.5ZM19 11.5H20V12.5H19V11.5ZM5 17.5H6.5V18.5H5V17.5ZM7.5 17.5H9V18.5H7.5V17.5ZM17 17.5H18.5V18.5H17V17.5ZM19 17.5H20V18.5H19V17.5Z",
                render: "detail"
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
                render: "details"
            }
        ]
    },

    // CPU Icon
    cpu: {
        name: "CPU",
        type: "3d-stroke",
        layers: [
            // Left half of CPU package - primary segment
            {
                path: "M4 4H12V20H4V4ZM6 6V18H12V6H6Z",
                render: "primary"
            },
            // Right half of CPU package - accent segment
            {
                path: "M12 4H20V20H12V4ZM12 6V18H18V6H12Z",
                render: "accent"
            },
            // CPU heat spreader and die - detail layer
            {
                path: "M8 8H16V16H8V8ZM9 9H15V15H9V15ZM10 10H14V14H10V10Z",
                render: "accent"
            },
            // CPU pins and connection points - detail layer
            {
                path: "M4 5H6M4 7H6M4 9H6M4 11H6M4 13H6M4 15H6M4 17H6M4 19H6M18 5H20M18 7H20M18 9H20M18 11H20M18 13H20M18 15H20M18 17H20M18 19H20M5 4V6M7 4V6M9 4V6M11 4V6M13 4V6M15 4V6M17 4V6M19 4V6M5 18V20M7 18V20M9 18V20M11 18V20M13 18V20M15 18V20M17 18V20M19 18V20",
                render: "detail"
            }
        ]
    },

    // Network Icon
    network: {
        name: "Network",
        type: "3d-stroke",
        layers: [
            // Network connection lines - primary segment
            {
                path: "M12 2L2 10M12 2L22 10M2 10L6 18M22 10L18 18M6 18L18 18",
                render: "primary"
            },
            // Left side nodes - primary segment
            {
                path: "M12 0C13.1 0 14 0.9 14 2C14 3.1 13.1 4 12 4C10.9 4 10 3.1 10 2C10.9 0 10.9 0 12 0ZM2 8C3.1 8 4 8.9 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8ZM6 16C7.1 16 8 16.9 8 18C8 19.1 7.1 20 6 20C4.9 20 4 19.1 4 18C4 16.9 4.9 16 6 16Z",
                render: "primary"
            },
            // Right side nodes - accent segment  
            {
                path: "M22 8C23.1 8 24 8.9 24 10C24 11.1 23.1 12 22 12C20.9 12 20 11.1 20 10C20 8.9 20.9 8 22 8ZM18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16Z",
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
                render: "accent"
            }
        ]
    }
};
