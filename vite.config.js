import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        packages: resolve(__dirname, 'packages.html'),
        palace: resolve(__dirname, 'palace.html'),
        payment: resolve(__dirname, 'payment.html'),
      },
    },
  },
})