// Submit URLs to IndexNow (https://www.indexnow.org/).
// Usage: node scripts/indexnow-submit.mjs <url-or-path> [...]
//   Paths like "country/kenya" are expanded to full URLs under SITE_URL.
//   With --sitemap, every <loc> in dist/sitemap-0.xml is submitted plus the sitemap index.
// The key is the name of the single 32-hex-character .txt file in public/.
// Exits 0 even on API errors so a failed ping never breaks a deploy; the status is printed.
import { readdirSync, readFileSync, existsSync } from 'node:fs';

const siteUrl = (process.env.SITE_URL || 'https://skperigon.github.io/get-paid-from-anywhere').replace(/\/+$/, '');
const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.log('IndexNow: no key file in public/, skipping.'); process.exit(0); }
const key = keyFile.replace(/\.txt$/, '');
const keyLocation = `${siteUrl}/${keyFile}`;

const args = process.argv.slice(2);
let urls = [];
if (args.includes('--sitemap')) {
  const file = 'dist/sitemap-0.xml';
  if (existsSync(file)) urls.push(...[...readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  urls.push(`${siteUrl}/sitemap-index.xml`);
}
for (const a of args.filter((a) => !a.startsWith('--'))) {
  if (/^https?:\/\//.test(a)) urls.push(a);
  else urls.push(`${siteUrl}/${a.replace(/^\/+|\/+$/g, '')}/`);
}
urls = [...new Set(urls)];
if (!urls.length) { console.log('IndexNow: nothing to submit.'); process.exit(0); }

const body = { host: new URL(siteUrl).host, key, keyLocation, urlList: urls };
try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s). ${text.slice(0, 300)}`);
  urls.forEach((u) => console.log('  ' + u));
} catch (err) {
  console.log(`IndexNow: request failed: ${err.message}`);
}
