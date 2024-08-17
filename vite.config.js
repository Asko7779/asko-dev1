import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      base: '/src/main.jsx',
      input: 'index.html',
      external: ['react', 'react-dom'] // Ensure this is correct if you have a custom setup
    },
    },
})
