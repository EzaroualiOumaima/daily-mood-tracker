import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'], // assuming the test folder is in the root of our project
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
},
})