// Icon Layer Renderer - Unified rendering system for 3D icons
// Handles all render types with consistent styling and effects

class IconRenderer {
    constructor() {
        // Default render configurations
        this.defaults = {
            strokeWidth: {
                thin: 0.5,
                normal: 1.0,
                thick: 1.5,
                heavy: 1.8
            },
            opacity: {
                main: 1.0,
                accent: 0.7,
                base: 0.5,
                secondary: 0.85,
                tertiary: 0.7,
                background: 0.3,
                detail: 0.9,
                highlight: 0.6,
                depth: 0.2
            }
        };
    }

    // Main rendering function for individual layers
    renderLayer(layer, fillColor, iconData, opacityOverride = null) {
        const opacity = opacityOverride || this.defaults.opacity[layer.render] || 1.0;
        
        switch (layer.render) {
            case 'main':
                return this._renderMain(layer.path, fillColor, opacity);
            
            case 'depth':
                return this._renderDepth(layer.path, opacity);
            
            case 'secondary':
                return this._renderSecondary(layer.path, fillColor, opacity);
            
            case 'tertiary':
                return this._renderTertiary(layer.path, fillColor, opacity);
            
            case 'background':
                return this._renderBackground(layer.path, opacity);
            
            case 'symbol':
                return this._renderSymbol(layer.path, iconData, opacity);
            
            case 'highlight':
                return this._renderHighlight(layer.path, opacity);
            
            case 'detail':
                return this._renderDetail(layer.path, opacity);
            
            case 'primary':
                return this._renderPrimary(layer.path, fillColor, opacity);
            
            case 'accent':
                return this._renderAccent(layer.path, fillColor, opacity);
            
            case 'base':
                return this._renderBase(layer.path, fillColor, opacity);
            
            default:
                return this._renderDefault(layer.path);
        }
    }

    // Individual render type methods
    _renderMain(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderDepth(path, opacity) {
        return `<path d="${path}" fill="black" fill-opacity="${opacity}" stroke="white" stroke-width="${this.defaults.strokeWidth.normal}" stroke-opacity="0.3"/>`;
    }

    _renderSecondary(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="white" stroke-width="${this.defaults.strokeWidth.thin}" stroke-opacity="0.4"/>`;
    }

    _renderTertiary(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderBackground(path, opacity) {
        return `<path d="${path}" fill="black" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderSymbol(path, iconData, opacity) {
        // Special handling for Bitcoin icons
        if (iconData.name === 'Bitcoin') {
            return `<path d="${path}" stroke="white" stroke-width="${this.defaults.strokeWidth.heavy}" stroke-linecap="round" fill="none"/>`;
        } else {
            return `<path d="${path}" fill="white" fill-opacity="${opacity}" stroke="none"/>`;
        }
    }

    _renderHighlight(path, opacity) {
        return `<path d="${path}" fill="none" stroke="white" stroke-width="1.2" stroke-opacity="${opacity}" stroke-linecap="round"/>`;
    }

    _renderDetail(path, opacity) {
        return `<path d="${path}" fill="white" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderPrimary(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderAccent(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderBase(path, fillColor, opacity) {
        return `<path d="${path}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
    }

    _renderDefault(path) {
        // Fallback for unknown render types - basic white stroke
        return `<path d="${path}" stroke="white" stroke-width="${this.defaults.strokeWidth.thick}" stroke-linecap="round" fill="none"/>`;
    }

    // Batch render multiple layers
    renderLayers(layers, fillColor, iconData) {
        return layers.map(layer => {
            const opacityOverride = layer.opacity !== undefined ? layer.opacity : null;
            return this.renderLayer(layer, fillColor, iconData, opacityOverride);
        }).join('');
    }

    // Legacy rendering methods for backwards compatibility
    renderPrototypePaths(paths, fillColor) {
        return paths.map(pathData => {
            const opacity = pathData.opacity || 1;
            return `<path d="${pathData.d}" fill="${fillColor}" fill-opacity="${opacity}" stroke="none"/>`;
        }).join('');
    }

    renderLegacyPaths(paths, fills) {
        let result = `<path d="${paths[0]}" stroke="${fills[0]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="1.0"/>`;
        if (paths[1]) {
            result += `<path d="${paths[1]}" stroke="${fills[1]}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.7"/>`;
        }
        return result;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IconRenderer;
}

// Global instance for browser use
if (typeof window !== 'undefined') {
    window.IconRenderer = IconRenderer;
}
