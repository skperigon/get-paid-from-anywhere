#!/usr/bin/env node
// Builds the favicon PNGs and the Open Graph image from assets/*.svg into public/.
// Run locally after editing the SVGs (uses sharp, which ships with Astro). Outputs are committed.
import sharp from 'sharp';
import fs from 'node:fs';
const icon = fs.readFileSync('assets/icon.svg');
fs.copyFileSync('assets/icon.svg', 'public/favicon.svg');
for (const [name, size] of [['favicon-48.png', 48], ['apple-touch-icon.png', 180], ['icon-512.png', 512]]) {
  await sharp(icon, { density: 72 * size / 64 }).resize(size, size).png().toFile(`public/${name}`);
}
await sharp(fs.readFileSync('assets/og.svg')).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('Wrote public/favicon.svg, favicon-48.png, apple-touch-icon.png, icon-512.png, og.png');
