import { defineConfig } from 'astro/config';
import { brand } from './src/data/site';

export default defineConfig({
  site: brand.siteUrl,
  output: 'static',
  image: {
    responsiveStyles: true,
  },
});
