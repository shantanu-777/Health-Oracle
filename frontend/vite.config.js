import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/diabetes': 'http://localhost:5000',
      '/heart_disease': 'http://localhost:5000',
      '/kidney_disease': 'http://localhost:5000',
    },
  },
});
