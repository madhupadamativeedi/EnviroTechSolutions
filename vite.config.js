// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//    server: {
//     port: 3000,
//     open: true,
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: true,
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base path for GitHub Pages. Replace with your repo name if different.
  base: '/EnviroTechSolutions/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Output to 'docs' so GitHub Pages can serve from the main/docs folder
    outDir: 'docs',
    sourcemap: true,
  },
});