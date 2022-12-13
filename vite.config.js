import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mylink/',
  server: {
    port: 4173,
    open: false,
    strictPort: true,
    host: true
  }
})
