import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    VITE_APP_API_URL: process.env.VITE_APP_API_URL,
    VITE_APP_URL: process.env.VITE_APP_URL
  },
})
