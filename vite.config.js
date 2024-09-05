import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  serveur: {
    watch: {usePolling: true,

    },
  },
  plugins: [react()],
})
