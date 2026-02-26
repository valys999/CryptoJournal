import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CryptoJournal/',
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
