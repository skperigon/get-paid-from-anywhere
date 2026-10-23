// Every country page on the site: data-driven pages from countries.json plus
// published markdown pages whose path is "country/<slug>".
import countries from '../data/countries.json';
import data from '../data/providers.json';

const mods = Object.values(import.meta.glob('../published/*.md', { eager: true }));
const titleCase = (slug) => slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const OPEN = ['listed', 'not-excluded'];

export function allCountries() {
  const list = countries.map((c) => ({ slug: c.slug, name: c.name, data: true }));
  for (const m of mods) {
    const p = m.frontmatter.path || '';
    const match = p.match(/^country\/([a-z-]+)$/);
    if (match && !list.some((c) => c.slug === match[1])) list.push({ slug: match[1], name: m.frontmatter.country || titleCase(match[1]), data: false });
  }
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

// Counts from the dataset for a data-driven country: merchants of record that list
// or do not exclude it, and Stripe's status.
export function countryStats(slug) {
  const mors = data.providers.filter((p) => p.category === 'Merchant of record');
  const known = mors.filter((p) => p.sellerCountries && p.sellerCountries[slug]);
  if (!known.length) return null;
  const open = known.filter((p) => OPEN.includes(p.sellerCountries[slug].status)).length;
  const stripe = data.providers.find((p) => p.slug === 'stripe');
  return { open, total: known.length, stripe: stripe?.sellerCountries?.[slug]?.status || 'unknown' };
}

// Published markdown pages (guides, comparisons and markdown country pages).
export function publishedPages() {
  return mods.map((m) => ({ ...m.frontmatter, raw: typeof m.rawContent === 'function' ? m.rawContent() : '' }));
}
// Published pages whose body links to the given root-relative path, e.g. "/provider/polar/".
export function pagesLinkingTo(p) {
  return publishedPages().filter((g) => g.raw.includes(`](${p})`) || g.raw.includes(`](${p}#`));
}
// Provider slugs linked from a markdown body.
export function providersIn(raw) {
  const slugs = [...raw.matchAll(/\]\(\/provider\/([a-z0-9-]+)\/\)/g)].map((m) => m[1]);
  return [...new Set(slugs)].map((s) => data.providers.find((p) => p.slug === s)).filter(Boolean);
}
