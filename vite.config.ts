import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // alias config
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.png']
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
})
