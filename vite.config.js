import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/sala1/', // Nome do seu repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
