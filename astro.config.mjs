// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'OnFit Focus',
        short_name: 'OnFit',
        description: 'Plan visual de entrenamiento para construir habito, mejorar postura y entrenar con maquinas guiadas.',
        theme_color: '#165d48',
        background_color: '#f3ede4',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'es',
        orientation: 'portrait',
        categories: ['fitness', 'health', 'lifestyle'],
        screenshots: [
          {
            src: '/screenshots/mobile-home.png',
            sizes: '390x844',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Pantalla principal con los 4 dias de entrenamiento'
          },
          {
            src: '/screenshots/desktop-home.png',
            sizes: '1440x900',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Vista completa del plan de entrenamiento'
          }
        ],
        shortcuts: [
          {
            name: 'Dia 1 · Piernas y Hombros',
            short_name: 'Dia 1',
            url: '/dias/dia-1',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          },
          {
            name: 'Dia 2 · Pecho y Triceps',
            short_name: 'Dia 2',
            url: '/dias/dia-2',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          },
          {
            name: 'Dia 3 · Piernas y Hombros',
            short_name: 'Dia 3',
            url: '/dias/dia-3',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          },
          {
            name: 'Dia 4 · Espalda y Biceps',
            short_name: 'Dia 4',
            url: '/dias/dia-4',
            icons: [{ src: '/pwa-192.png', sizes: '192x192' }]
          }
        ],
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,woff2}'],
        navigateFallback: '/offline',
        navigateFallbackDenylist: [/\/api\//, /\/auth\//],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/i\.ytimg\.com\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'yt-images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'supabase-api',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24
              }
            }
          },
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/storage\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'supabase-storage',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
          }
        ]
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});