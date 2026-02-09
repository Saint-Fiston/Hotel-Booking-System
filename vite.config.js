import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        palace: resolve(__dirname, 'palace.html'),
        payment: resolve(__dirname, 'payment.html'),
        package: resolve(__dirname, 'packages.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})