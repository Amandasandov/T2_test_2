import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/T2_test_2/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/T2_test_2/',
      scope: '/T2_test_2/',
      manifest: {
        name: 'Mi Img PWA',
        short_name: 'ImgPWA',
        start_url: '/T2_test_2/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ],
})
