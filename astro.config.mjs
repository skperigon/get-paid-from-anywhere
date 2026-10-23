import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL is the full public URL of the site, including any subpath.
// Default: the GitHub Pages project site. Set the SITE_URL repo variable to change it
// (for example to a custom domain, where the base becomes "/").
const siteUrl = new URL(process.env.SITE_URL || 'https://skperigon.github.io/get-paid-from-anywhere');
const site = siteUrl.origin;
const base = siteUrl.pathname.replace(/\/+$/, '') || '/';
const prefix = base === '/' ? '' : base;

// Prefix root-relative links in markdown (for example "/country/india/") with the base path.
function rehypeBaseLinks() {
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      const href = node.properties.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && prefix && !href.startsWith(prefix + '/')) {
        node.properties.href = prefix + href;
      }
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  markdown: { rehypePlugins: [rehypeBaseLinks] },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
