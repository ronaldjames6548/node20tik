/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"],
  load: ["server", "client"],
  i18nextServer: {
    debug: false,
    backend: {
      loadPath: "./src/locales/{{lng}}/translation.json",
    },
  },
  i18nextClient: {
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  },
  // Simplified configuration to prevent build issues
  showDefaultLocale: false,
  // Remove problematic options that can cause HeadHrefLangs to fail
};