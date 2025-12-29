import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'base' setting is CRITICAL for shared hosting. 
  // It ensures the site works even if you put it in a subfolder.
  base: './', 
  build: {
    outDir: 'dist',
  }
});