import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fajarsunnah.id',
  output: 'static',
  image: {
    service: passthroughImageService(),
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
