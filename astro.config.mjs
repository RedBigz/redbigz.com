// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  fonts: [{
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono"
  }],

  adapter: node({
    mode: "standalone"
  })
});