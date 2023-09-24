import { defineConfig } from "vitest/config";
import path from "path";

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./vitest-setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})