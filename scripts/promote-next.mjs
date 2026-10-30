#!/usr/bin/env node
// Promotes the next draft with status "ready" from drafts/ to src/published/.
// Safety gates: refuses drafts that are not ready, lack sources or checkedOn,
// were checked more than MAX_AGE_DAYS ago, or contain em dashes.
// Also lists internal links in the draft whose target page is not live yet. Those are not an
// error: scripts/unlink-unpublished.mjs (run after every build) shows them as plain text until
// the target publishes. The list is printed so the nightly prep can see it the night before.
// Usage: node scripts/promote-next.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DRAFTS = path.join(ROOT, 'drafts');
const PUBLISHED = path.join(ROOT, 'src', 'published');
const MAX_AGE_DAYS = 30;
const dryRun = process.argv.includes('--dry-run');

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
  }
  fm._hasSources = /\nsources:\n\s+- /.test(m[1]);
  return fm;
}

function setOutput(k, v) {
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `${k}=${v}\n`);
}

const files = fs.readdirSync(DRAFTS).filter((f) => f.endsWith('.md'));
const drafts = files
  .map((f) => ({ f, text: fs.readFileSync(path.join(DRAFTS, f), 'utf8') }))
  .map((d) => ({ ...d, fm: frontmatter(d.text) }))
  .sort((a, b) => Number(a.fm.order) - Number(b.fm.order));

const ready = drafts.filter((d) => d.fm.status === 'ready');
if (!ready.length) {
  console.log(`No ready drafts. ${drafts.length} planned drafts remain. Nothing promoted.`);
  setOutput('promoted', '');
  process.exit(0);
}

const d = ready[0];
const problems = [];
if (!d.fm.path) problems.push('missing path');
if (!d.fm.title || !d.fm.description) problems.push('missing title or description');
if (!d.fm._hasSources) problems.push('missing sources list');
if (!d.fm.checkedOn) problems.push('missing checkedOn');
else {
  const age = (Date.now() - Date.parse(d.fm.checkedOn)) / 86400000;
  if (Number.isNaN(age) || age > MAX_AGE_DAYS) problems.push(`checkedOn ${d.fm.checkedOn} is older than ${MAX_AGE_DAYS} days; recheck facts first`);
}
if (d.text.includes('\u2014')) problems.push('contains an em dash');
if (/\bPLANNED\b/.test(d.text)) problems.push('still contains PLANNED placeholder');
const existing = fs.existsSync(PUBLISHED) ? fs.readdirSync(PUBLISHED) : [];
for (const f of existing) {
  const fm = frontmatter(fs.readFileSync(path.join(PUBLISHED, f), 'utf8'));
  if (fm.path === d.fm.path) problems.push(`path ${d.fm.path} already published in ${f}`);
}
if (problems.length) {
  console.error(`Refusing to promote ${d.f}:\n - ${problems.join('\n - ')}`);
  process.exit(1);
}

// Internal links to pages that are not live yet (shown as plain text until they publish).
function liveRoutes() {
  const routes = new Set(['']);
  const pagesDir = path.join(ROOT, 'src', 'pages');
  for (const e of fs.readdirSync(pagesDir, { withFileTypes: true })) {
    if (e.isFile() && e.name.endsWith('.astro') && !e.name.startsWith('[') && e.name !== 'index.astro' && e.name !== '404.astro') routes.add(e.name.replace(/\.astro$/, ''));
    if (e.isDirectory() && fs.existsSync(path.join(pagesDir, e.name, 'index.astro'))) routes.add(e.name);
  }
  const read = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', f), 'utf8'));
  for (const c of read('countries.json')) routes.add(`country/${c.slug}`);
  for (const p of read('providers.json').providers) routes.add(`provider/${p.slug}`);
  for (const f of existing) {
    const fm = frontmatter(fs.readFileSync(path.join(PUBLISHED, f), 'utf8'));
    if (fm.path) routes.add(fm.path);
  }
  routes.add(d.fm.path);
  return routes;
}
const live = liveRoutes();
const pending = [...new Set([...d.text.matchAll(/\]\((\/[^)\s#?]*)[^)]*\)/g)].map((m) => m[1]))]
  .filter((href) => !live.has(href.replace(/^\/+|\/+$/g, '')));
if (pending.length) {
  console.log(`Note: ${d.f} links to ${pending.length} page(s) not live yet; they will show as plain text until published:`);
  pending.forEach((h) => {
    const queued = drafts.find((x) => x.fm.path === h.replace(/^\/+|\/+$/g, ''));
    console.log(`  - ${h} ${queued ? `(queued: ${queued.f}, status ${queued.fm.status})` : '(no draft for this path)'}`);
  });
}

const target = path.join(PUBLISHED, d.f.replace(/^\d+-/, ''));
if (dryRun) {
  console.log(`[dry run] Would promote ${d.f} -> ${path.relative(ROOT, target)} (/${d.fm.path}/)`);
} else {
  fs.mkdirSync(PUBLISHED, { recursive: true });
  const text = d.text.replace(/\nstatus: ready\n/, '\nstatus: published\n');
  fs.writeFileSync(target, text);
  fs.unlinkSync(path.join(DRAFTS, d.f));
  console.log(`Promoted ${d.f} -> ${path.relative(ROOT, target)} (/${d.fm.path}/)`);
}
setOutput('promoted', d.fm.path);
