import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Serve fonts from /public/fonts at /fonts
  server: {
    port: 5173,
  },
});
