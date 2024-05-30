import { defineConfig } from 'vite'

import { ViteArtalkPluginKit } from '@artalk/plugin-kit'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  plugins: [ViteArtalkPluginKit({
    artalkInitOptions: {
      pageKey: '/',
      server: 'http://localhost:23366',
      site: 'ArtalkDev',
    }
  })],
})
