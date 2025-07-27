// src/utils/i18n.ts
import fs from 'fs';
import path from 'path';

// Cache for loaded translations
const translationCache: Record<string, any> = {};

// Supported languages list
const supportedLanguages = ['en', 'it', 'fr', 'de', 'es', 'hi', 'ar', 'id', 'ru', 'pt', 'ko', 'tl', 'nl', 'ms', 'tr'];

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

// Get current language from URL (for Astro pages) - WITH ERROR HANDLING
export function getCurrentLanguage(url: URL): string {
  try {
    if (!url || !url.pathname) {
      console.warn('Invalid URL provided to getCurrentLanguage');
      return 'en';
    }

    const pathname = url.pathname;
    const segments = pathname.split('/').filter(Boolean);
    
    // Check if first segment is a language code
    if (segments.length > 0 && supportedLanguages.includes(segments[0])) {
      return segments[0];
    }
    
    // Default to English
    return 'en';
  } catch (error) {
    console.warn('Error in getCurrentLanguage:', error);
    return 'en';
  }
}

// Helper function to get localized URL (replaces localizePath)
export function getLocalizedUrl(path: string, lang: string): string {
  try {
    // Validate inputs
    if (!path || typeof path !== 'string') {
      console.warn('Invalid path provided to getLocalizedUrl');
      return '/';
    }
    
    if (!lang || typeof lang !== 'string') {
      console.warn('Invalid language provided to getLocalizedUrl');
      lang = 'en';
    }

    // Remove leading slash and language prefix if present
    const cleanPath = path.replace(/^\/([a-z]{2})?(\/|$)/, '/');
    
    // Return URL with or without language prefix
    if (lang === 'en') {
      return cleanPath === '/' ? '/' : cleanPath;
    }
    
    return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  } catch (error) {
    console.warn('Error in getLocalizedUrl:', error);
    return '/';
  }
}

// Export supported languages for use in other files
export { supportedLanguages };