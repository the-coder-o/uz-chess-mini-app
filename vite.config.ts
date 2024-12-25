import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // https://vite.dev/config/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'jquery': 'jquery/dist/jquery.min.js',
      'chessboardjs': 'chessboardjs/dist/chessboard-1.0.0.min.css',
    },
  },
})
