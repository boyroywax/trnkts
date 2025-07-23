import type { DashboardTheme } from '../types';

const defaultTheme: DashboardTheme = {
    colors: {
        // Light mode primary colors from trnkts design spec
        primary: '#AF4B0E', // Light Accent Primary - Rich, earthy orange
        secondary: '#666666', // Light Text Secondary - Warm gray
        background: '#FFE5D9', // Light Surface - Warm, welcoming foundation
        surface: '#FFFFFF', // Light Surface Elevated - Pure white for cards/modals
        text: '#333333', // Light Text Primary - Soft black
        textSecondary: '#666666', // Light Text Secondary - Warm gray
        border: '#E0E0E0', // Light Border - Light gray for gentle contrast

        // Secondary palette colors from design spec
        success: '#00E676', // Electric Mint - Success states, positive feedback
        warning: '#FF6B35', // Coral Burst - Warning states, attention-grabbing
        error: '#FF1493', // Neon Rose - Error states, urgent notifications
        info: '#00BCD4', // Aqua Glow - Info states, links, secondary actions
        highlight: '#FFEB3B', // Solar Lime - Highlights, badges, energy indicators
        interactive: '#7B68EE', // Lavender Electric - Interactive elements, hover states

        // Logo gradient colors
        gradient: {
            purple: '#833AB4', // Logo Purple - Deep purple foundation
            pink: '#E1306C', // Logo Pink - Vibrant pink bridge
            orange: '#F77737', // Logo Orange - Energetic orange
            gold: '#FCAF45', // Logo Gold - Golden yellow completion
        },

        // Background gradient (from design spec)
        backgroundGradient:
            'linear-gradient(135deg, #89CFF0, #A855F7, #EC4899, #F97316, #FCD34D)',
    },

    // Dark mode theme
    darkColors: {
        primary: '#FF8A5B', // Dark Accent Primary - Warmer, softer orange
        secondary: '#A0A0A0', // Dark Text Secondary - Organic gray
        background: '#1A1A1A', // Dark Surface - Rich charcoal with warmth
        surface: '#2D2D2D', // Dark Surface Elevated - Slightly lighter for layering
        text: '#E8E8E8', // Dark Text Primary - Soft white
        textSecondary: '#A0A0A0', // Dark Text Secondary - Organic gray
        border: '#3A3A3A', // Dark Border - Warm gray for definitions

        // Secondary colors remain the same as they work in both modes
        success: '#00E676', // Electric Mint
        warning: '#FF6B35', // Coral Burst
        error: '#FF1493', // Neon Rose
        info: '#00BCD4', // Aqua Glow
        highlight: '#FFEB3B', // Solar Lime
        interactive: '#7B68EE', // Lavender Electric

        // Logo gradient colors (same)
        gradient: {
            purple: '#833AB4',
            pink: '#E1306C',
            orange: '#F77737',
            gold: '#FCAF45',
        },

        backgroundGradient:
            'linear-gradient(135deg, #89CFF0, #A855F7, #EC4899, #F97316, #FCD34D)',
    },

    typography: {
        // SF Pro Display for interface text (from design spec)
        fontFamily:
            '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        monoFontFamily:
            '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',

        fontSize: {
            xs: '0.75rem', // 12px - Caption text
            sm: '0.875rem', // 14px - Body small, button text
            md: '1rem', // 16px - Body medium (default)
            lg: '1.125rem', // 18px - Body large, H5
            xl: '1.25rem', // 20px - H4
            '2xl': '1.5rem', // 24px - H3
            '3xl': '2rem', // 32px - H2
            '4xl': '2.5rem', // 40px - H1
        },

        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },

        lineHeight: {
            tight: 1.2, // For headings and display text
            normal: 1.5, // Default for body text
            relaxed: 1.75, // For important content
        },
    },

    spacing: {
        xs: '0.5rem', // 8px
        sm: '0.75rem', // 12px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '3rem', // 48px
        '3xl': '4rem', // 64px
    },

    borderRadius: {
        sm: '0.375rem', // 6px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
};

export { defaultTheme };
