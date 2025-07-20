import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';

  return {
    plugins: [
      react(),
      ...(isLibrary ? [
        dts({
          insertTypesEntry: true,
          include: ['src/**/*'],
          exclude: ['**/*.test.*', '**/*.spec.*', '__tests__/**/*', 'src/dev/**/*'],
        }),
      ] : [])
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@trnkts/utils': resolve(__dirname, '../utils/src'),
        '@trnkts/core': resolve(__dirname, '../core/src'),
        '@trnkts/components': resolve(__dirname, '../components/src'),
      },
    },
    build: isLibrary ? {
      // Library build configuration
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
    } : {
      // App build configuration for preview
      outDir: 'dist-app',
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
  };
});
