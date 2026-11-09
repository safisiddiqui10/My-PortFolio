import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Public address of the deployed site. Used for canonical URLs, link previews and the sitemap.
const SITE_URL = 'https://safisiddiqui.vercel.app';

// Every page the router serves (keep in sync with src/router.jsx).
const ROUTES = ['/', '/projects', '/skills', '/certifications'];

/**
 * - Replaces %SITE_URL% in index.html.
 * - Emits sitemap.xml and robots.txt at build time.
 */
function seo() {
  return {
    name: 'portfolio-seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    generateBundle() {
      const urls = ROUTES.map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(SITE_URL),
  },
});
