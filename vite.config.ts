import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        index:    resolve(__dirname, 'index.html'),
        ecosia:   resolve(__dirname, 'ecosia.html'),
        n26:      resolve(__dirname, 'n26.html'),
        trivago:  resolve(__dirname, 'trivago.html'),
        password: resolve(__dirname, 'password.html'),
      },
    },
  },
});
