#!/usr/bin/env node
// Checks every internal link in dist/ resolves to a built file.
// With --external, also requests each external URL once (HEAD, then GET fallback).
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv.find((a) => a.startsWith('--dist='))?.slice(7) || 'dist');
const external = process.argv.includes('--external');
// Base path the site is served under (from SITE_URL), e.g. "/get-paid-from-anywhere".
const SITE_URL = process.env.SITE_URL || 'https://skperigon.github.io/get-paid-from-anywhere';
const BASE = new URL(SITE_URL).pathname.replace(/\/+$/, '');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const broken = [];
const ext = new Map();

function resolves(href) {
  const clean = decodeURI(href.split('#')[0].split('?')[0]);
  const p = path.join(DIST, clean);
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return true;
  if (fs.existsSync(path.join(p, 'index.html'))) return true;
  return false;
}

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (href.startsWith('#') || href.startsWith('mailto:')) continue;
    if (/^https?:\/\//.test(href)) {
      if (!ext.has(href)) ext.set(href, new Set());
      ext.get(href).add(path.relative(DIST, f));
      continue;
    }
    if (href.startsWith('/')) {
      if (BASE && href !== BASE + '/' && !href.startsWith(BASE + '/')) { broken.push(`${path.relative(DIST, f)} -> ${href} (missing base ${BASE})`); continue; }
      if (!resolves(BASE ? href.slice(BASE.length) || '/' : href)) broken.push(`${path.relative(DIST, f)} -> ${href}`);
      if (!href.split('#')[0].split('?')[0].endsWith('/') && !path.extname(href.split('#')[0])) broken.push(`${path.relative(DIST, f)} -> ${href} (missing trailing slash)`);
    } else {
      broken.push(`${path.relative(DIST, f)} -> ${href} (relative link)`);
    }
  }
}

console.log(`Checked ${htmlFiles.length} HTML files. Internal broken: ${broken.length}. External URLs: ${ext.size}.`);
broken.forEach((b) => console.log('  BROKEN ' + b));

let extBroken = 0;
if (external) {
  const UA = 'Mozilla/5.0 (compatible; link-check)';
  for (const [url] of ext) {
    if (url.startsWith(SITE_URL)) continue;
    let status = 0;
    for (const method of ['HEAD', 'GET']) {
      try {
        const r = await fetch(url, { method, redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
        status = r.status;
        if (status < 400) break;
      } catch (e) { status = -1; }
    }
    const ok = status > 0 && status < 400;
    if (!ok) extBroken++;
    console.log(`  ${ok ? 'OK ' : 'BAD'} ${status} ${url}`);
  }
  console.log(`External broken or blocked: ${extBroken}`);
}
process.exit(broken.length ? 1 : 0);
