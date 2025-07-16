// solopass-web-ui/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@solopass/sdk': path.resolve(__dirname, '../../packages/sdk/dist') // 👈 must match this
    }
  },
  base: './',
  build: {
    rollupOptions: {
      external: ['openai']
    }
  }
});

