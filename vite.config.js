import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import vitePluginCssModules from 'vite-plugin-css-modules'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginCssModules.default()],
  server: {
    host: '0.0.0.0',
    port: '3000',
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/assets'),
      },
    ],
  },
  test: {
    setupFiles: './src/setupTest.js',
    globals: true,
    environment: 'jsdom',
  },
})
