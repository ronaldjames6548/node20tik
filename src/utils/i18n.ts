// src/utils/i18n.ts
import fs from 'fs';
import path from 'path';

// Cache for loaded translations
const translationCache: Record<string, any> = {};

// Load translation file for a specific language
function loadTranslations(lang: string) {
  if (translationCache[lang]) {
    return translationCache[lang];
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    translationCache[lang] = JSON.parse(fileContent);
    return translationCache[lang];
  } catch (error) {
    console.warn(`Translation file not found for language: ${lang}`);
    // Fallback to English if available
    if (lang !== 'en' && !translationCache['en']) {
      return loadTranslations('en');
    }
    return {};
  }
}

// Get nested value from object using dot notation
function getNestedValue(obj: any, path: string): string | undefined {
  // Handle undefined or empty path
  if (!path || typeof path !== 'string') {
    console.warn('Invalid translation key provided:', path);
    return undefined;
  }
  
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Main translation function
export function t(key: string, lang: string = 'en'): string {
  // Handle undefined or empty key
  if (!key || typeof key !== 'string') {
    console.warn('Invalid translation key provided:', key);
    return key || '';
  }

  const translations = loadTranslations(lang);
  const value = getNestedValue(translations, key);
  
  // Return the value if found, otherwise try English fallback, or return the key
  if (value !== undefined) {
    return value;
  }
  
  // Fallback to English if current language doesn't have the key
  if (lang !== 'en') {
    const englishTranslations = loadTranslations('en');
    const englishValue = getNestedValue(englishTranslations, key);
    if (englishValue !== undefined) {
      return englishValue;
    }
  }
  
  // Return the key itself if no translation found
  console.warn(`Translation missing for key: ${key} in language: ${lang}`);
  return key;
}

// Get current language from URL (for Astro pages)
export function getCurrentLanguage(url: URL): string {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  // List of supported languages
  const supportedLanguages = ['en', 'it', 'fr', 'de', 'es', 'hi', 'ar', 'id', 'ru', 'pt', 'ko', 'tl', 'nl', 'ms', 'tr'];
  
  // Check if first segment is a language code
  if (segments.length > 0 && supportedLanguages.includes(segments[0])) {
    return segments[0];
  }
  
  // Default to English
  return 'en';
}

// Helper function to get localized URL
export function getLocalizedUrl(path: string, lang: string): string {
  // Remove leading slash and language prefix if present
  const cleanPath = path.replace(/^\/([a-z]{2})?(\/|$)/, '/');
  
  // Return URL with or without language prefix
  if (lang === 'en') {
    return cleanPath;
  }
  
  return `/${lang}${cleanPath}`;
}