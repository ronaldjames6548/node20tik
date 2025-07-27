// src/pages/sitemap.xml.js
export async function get() {
  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>https://tiktokio.cam/sitemap-0.xml</loc>
        </sitemap>
      </sitemapindex>`
  };
}