/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/starwars-app/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testing/vitest.setup.ts',
  },
})