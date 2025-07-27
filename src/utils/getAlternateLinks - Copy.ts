// src/utils/getAlternateLinks.ts

import { existsSync } from "fs";
import { join } from "path";

export function getAlternateLinks(currentPath: string) {
  const locales = ["en", "it", "fr", "de", "es", "hi", "ar", "id", "ru", "pt", "ko", "tl", "nl", "ms", "tr"];
  const alternateLinks = [];

  for (const locale of locales) {
    if (locale === "en") continue; // Skip default lang if needed

    const localizedPath = `/${locale}${currentPath}`;

    // Convert URL path to filesystem path
    const filePath = join(process.cwd(), "src", "pages", locale, currentPath.replace(/^\//, ""));

    // Check if file exists locally
    if (existsSync(`${filePath}.astro`) || existsSync(`${filePath}/index.astro`)) {
      alternateLinks.push({ hreflang: locale, href: localizedPath });
    }
  }

  return alternateLinks;
}