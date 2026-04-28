// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
    host: true,
    port: 4321,
    allowedHosts: [
      '.trycloudflare.com'
    ]
  },
  vite: {
    server: {
      host: true,
      port: 4321,
      allowedHosts: [
        '.trycloudflare.com'
      ]
    }
  }
});
