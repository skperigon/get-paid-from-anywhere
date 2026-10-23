#!/usr/bin/env node
// Fails if any source, draft or data file contains an em dash.
import fs from 'node:fs';
import path from 'node:path';
const roots = ['src', 'drafts'];
const bad = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else fs.readFileSync(p, 'utf8').split('\n').forEach((l, i) => { if (l.includes('\u2014')) bad.push(`${p}:${i + 1}`); });
  }
}
roots.forEach((r) => fs.existsSync(r) && walk(r));
bad.forEach((b) => console.log('EM DASH ' + b));
console.log(`Style check: ${bad.length} em dashes found.`);
process.exit(bad.length ? 1 : 0);
