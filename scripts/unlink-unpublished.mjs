#!/usr/bin/env node
// Runs after the build and before the link check.
// Inside markdown page bodies (<article data-md>), an internal link to a page that is not
// built yet (for example a country guide still in drafts/) is rendered as plain text, so a
// page can mention a guide that publishes later. The markdown source keeps the link, so the
// link comes back automatically on the first build after the target goes live.
// Links in templates and layouts are not touched: those still fail the link check.
// Usage: node scripts/unlink-unpublished.mjs [--dist=dist]
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv.find((a) => a.startsWith('--dist='))?.slice(7) || 'dist');
const SITE_URL = process.env.SITE_URL || 'https://skperigon.github.io/get-paid-from-anywhere';
const BASE = new URL(SITE_URL).pathname.replace(/\/+$/, '');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
function resolves(href) {
  let clean = decodeURI(href.replace(/&amp;/g, '&').split('#')[0].split('?')[0]);
  if (BASE) {
    if (clean !== BASE + '/' && !clean.startsWith(BASE + '/')) return true; // leave base problems to the link check
    clean = clean.slice(BASE.length) || '/';
  }
  const p = path.join(DIST, clean);
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return true;
  return fs.existsSync(path.join(p, 'index.html'));
}

let count = 0;
for (const f of walk(DIST).filter((x) => x.endsWith('.html'))) {
  const html = fs.readFileSync(f, 'utf8');
  const out = html.replace(/<article data-md>[\s\S]*?<\/article>/g, (body) =>
    body.replace(/<a\s([^>]*?)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (whole, pre, href, post, text) => {
      if (href.startsWith('//') || resolves(href)) return whole;
      count++;
      console.log(`  UNLINKED ${path.relative(DIST, f)} -> ${href} (target not published yet; shown as plain text)`);
      return `<span class="pending-link">${text}</span>`;
    })
  );
  if (out !== html) fs.writeFileSync(f, out);
}
console.log(`Unlink pass: ${count} link(s) to unpublished pages rendered as plain text.`);
