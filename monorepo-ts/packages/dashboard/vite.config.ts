import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['**/*.test.*', '**/*.spec.*', '__tests__/**/*'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@trnkts/utils': resolve(__dirname, '../utils/src'),
      '@trnkts/core': resolve(__dirname, '../core/src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TrnktsDashboard',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
