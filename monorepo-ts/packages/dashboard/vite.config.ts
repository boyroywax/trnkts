import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@trnkts/utils': resolve(__dirname, '../utils/src'),
            '@trnkts/core': resolve(__dirname, '../core/src'),
            '@trnkts/components': resolve(__dirname, '../components/src'),
        },
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 3000,
        open: true,
    },
});
