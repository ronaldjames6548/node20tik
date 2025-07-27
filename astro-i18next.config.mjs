/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],

  // Generate pages for default locale without language suffix in URL
  generateDefaultLanguagePage: true,
  defaultLangHasNoSuffix: true,

  // Set base URL for hreflang canonical URLs
  baseUrl: "https://tiktokio.cam",

  // Map locales to their route overrides (optional)
  routeOverrides: {
    en: "", // Root is English
  },

  // i18next config
  i18next: {
    interpolation: {
      escapeValue: false, // React-like escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  },

  // Backend plugin to load translation files
  i18nextServerPlugins: {
    backend: "i18next-http-backend",
  },
};