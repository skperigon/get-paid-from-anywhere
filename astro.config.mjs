import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// SITE_URL is the full public URL of the site, including any subpath.
// Default: the custom domain at the root. Set the SITE_URL repo variable to override it.
const siteUrl = new URL(process.env.SITE_URL || 'https://founderpayouts.com');
const site = siteUrl.origin;
const base = siteUrl.pathname.replace(/\/+$/, '') || '/';
const prefix = base === '/' ? '' : base;

const rootDir = dirname(fileURLToPath(import.meta.url));

function sitemapDates() {
  const map = new Map();
  let fallback = new Date().toISOString().slice(0, 10);
  try {
    const providers = JSON.parse(readFileSync(join(rootDir, 'src/data/providers.json'), 'utf8'));
    if (providers.checkedOn) fallback = providers.checkedOn;
    for (const p of providers.providers || []) {
      const dates = [p.merchantOfRecord?.checkedOn, ...(p.facts || []).map((f) => f.checkedOn)].filter(Boolean).sort();
      map.set(`/provider/${p.slug}/`, dates[dates.length - 1] || fallback);
    }
    const countries = JSON.parse(readFileSync(join(rootDir, 'src/data/countries.json'), 'utf8'));
    for (const c of countries) map.set(`/country/${c.slug}/`, fallback);
  } catch {}
  try {
    const dir = join(rootDir, 'src/published');
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const text = readFileSync(join(dir, f), 'utf8');
      const path = /^\s*path:\s*"?([^"\n]+)"?/m.exec(text)?.[1]?.trim();
      const checked = /^\s*checkedOn:\s*"?([^"\n]+)"?/m.exec(text)?.[1]?.trim();
      if (path && checked) map.set(`/${path.replace(/^\/+|\/+$/g, '')}/`, checked);
    }
  } catch {}
  return { map, fallback };
}
const lastmods = sitemapDates();

// Prefix root-relative links in markdown (for example "/country/india/") with the base path,
// and mark outbound links nofollow.
function rehypeBaseLinks() {
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      const href = node.properties.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && prefix && !href.startsWith(prefix + '/')) {
        node.properties.href = prefix + href;
      }
      // Outbound links in markdown: not endorsements, so nofollow. Affiliate links are never written in markdown.
      if (typeof href === 'string' && /^https?:\/\//.test(href) && !href.startsWith(site)) {
        node.properties.rel = ['nofollow', 'noopener'];
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
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
    serialize(item) {
      const path = new URL(item.url).pathname;
      item.lastmod = lastmods.map.get(path) || lastmods.fallback;
      return item;
    },
  })],
});
