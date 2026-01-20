import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Set the base path for deployment
  server: {
    host: true, // Expose to network if needed
    port: 5173
  }
});