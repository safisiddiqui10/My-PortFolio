import { useEffect } from 'react';
import { site } from '../data/site';

function setTag(selector, create, attribute, value) {
  let element = document.head.querySelector(selector);
  if (value == null) {
    element?.remove();
    return;
  }
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

const meta = (key, name) => () => {
  const element = document.createElement('meta');
  element.setAttribute(key, name);
  return element;
};

/**
 * Per-page title, description and canonical URL.
 * index.html holds the site-wide defaults that link-preview crawlers read; this keeps the
 * browser tab and search engines (which run JavaScript) accurate on every route.
 *
 * @param {object} options
 * @param {string} [options.title]        Page name; omitted on the homepage for the full site title
 * @param {string} [options.description]
 * @param {string} options.path           Route path, used for the canonical URL
 * @param {boolean} [options.noIndex]     Ask search engines not to index the page (404)
 */
export function usePageMeta({ title, description = site.description, path, noIndex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;
    const url = `${site.url}${path}`;

    document.title = fullTitle;
    setTag('meta[name="description"]', meta('name', 'description'), 'content', description);
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', fullTitle);
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', description);
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', url);
    setTag('meta[name="robots"]', meta('name', 'robots'), 'content', noIndex ? 'noindex' : null);
    setTag(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement('link');
        link.rel = 'canonical';
        return link;
      },
      'href',
      noIndex ? null : url,
    );
  }, [title, description, path, noIndex]);
}
