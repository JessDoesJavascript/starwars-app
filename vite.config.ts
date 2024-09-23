/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/starwars-app',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testing/vitest.setup.ts',
  },
})