import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import vercel from '@astrojs/vercel/serverless';
import path from 'path';

export default defineConfig({
  site: "https://tiktokio.cam",
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // ADD THIS i18n CONFIGURATION
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    },
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@utils': path.resolve('./src/utils'),
        '@': path.resolve('./src'),
      }
    }
  },
  integrations: [
    tailwind(),
    alpinejs(),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.ico"],
      registerType: "autoUpdate",
      manifest: {
        name: "Tiktokio - TikTok Downloader - Download TikTok Videos Without Watermark",
        short_name: "Tikokio",
        theme_color: "#ffffff",
        icons: [{
          src: "pwa-192x192.webp",
          sizes: "192x192",
          type: "image/webp"
        }, {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp"
        }, {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
          purpose: "any maskable"
        }]
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["*.js"]
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\/404$/],
        suppressWarnings: true
      }
    }),
    icon(),
    solidJs(),
    sitemap({
      filter(page) {
        const url = new URL(page, 'https://tiktokio.cam');
        
        // All non-English language codes
        const nonEnglishLangs = ['ar', 'it', 'de', 'es', 'fr', 'hi', 'id', 'ko', 'ms', 'nl', 'pt', 'ru', 'tl', 'tr'];
        
        // Should exclude if:
        const shouldExclude = 
          // Non-English blog posts (but keeps /{lang}/blog/ index pages)
          nonEnglishLangs.some(lang => 
            url.pathname.startsWith(`/${lang}/blog/`) && 
            url.pathname !== `/${lang}/blog/`
          ) ||
          // Pagination, tags, categories
          /\/blog\/\d+\//.test(url.pathname) ||
          url.pathname.includes('/tag/') || 
          url.pathname.includes('/category/');
        return !shouldExclude;
      }
    })
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]]
  },
  experimental: {
    contentCollectionCache: true
  }
});