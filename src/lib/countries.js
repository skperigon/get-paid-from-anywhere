// Every country page on the site: data-driven pages from countries.json plus
// published markdown pages whose path is "country/<slug>".
import countries from '../data/countries.json';

const mods = Object.values(import.meta.glob('../published/*.md', { eager: true }));
const titleCase = (slug) => slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

export function allCountries() {
  const list = countries.map((c) => ({ slug: c.slug, name: c.name }));
  for (const m of mods) {
    const p = m.frontmatter.path || '';
    const match = p.match(/^country\/([a-z-]+)$/);
    if (match && !list.some((c) => c.slug === match[1])) list.push({ slug: match[1], name: m.frontmatter.country || titleCase(match[1]) });
  }
  return list.sort((a, b) => a.name.localeCompare(b.name));
}
