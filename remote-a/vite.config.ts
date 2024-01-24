import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_a",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./Home": "./src/pages/Home.tsx",
        "./Page1": "./src/pages/Page1.tsx",
        "./Page2": "./src/pages/Page2.tsx",
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})