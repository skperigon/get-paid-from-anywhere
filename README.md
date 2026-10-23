# Get Paid From Anywhere

Static Astro site: which payment providers and merchants of record accept founders from each country, with a source URL and checked date for every fact.

Live site: https://skperigon.github.io/get-paid-from-anywhere/

## Publishing

- Hosted on GitHub Pages (Settings > Pages > Source: GitHub Actions).
- `.github/workflows/nightly.yml` runs nightly at 06:00 UTC (2:00 AM New York on EDT, 1:00 AM on EST): promotes the next ready draft, checks style and links, builds, commits the promoted page and deploys. Pushes to `main` and manual runs build and deploy without promoting.
- Every run is gated on the repo variable `PUBLISH_ENABLED`. **To stop publishing, set `PUBLISH_ENABLED` to `false`** (Settings > Secrets and variables > Actions > Variables), or disable the workflow in the Actions tab.
- `SITE_URL` (repo variable) is the full public URL, including the subpath. It sets Astro `site` and `base`, canonical URLs, the sitemap and robots.txt.

## Layout

- `src/data/providers.json`: the dataset (also served at `/data/providers.json`). Every fact has `source` and `checkedOn`. Unverified values are `"unknown"`.
- `src/data/countries.json`: editorial text for country pages (`/country/{slug}/`).
- `src/published/*.md`: published guide and comparison pages, routed by their `path` frontmatter.
- `drafts/*.md`: queue of planned pages, ordered by `order`. Only `status: ready` drafts can be promoted.
- `scripts/promote-next.mjs`: moves the next ready draft into `src/published/`. Refuses drafts with no sources, no `checkedOn`, a `checkedOn` older than 30 days, an em dash, or a duplicate path.
- `scripts/check-links.mjs`: internal link check on `dist/` (`--external` also requests outbound links).
- `scripts/check-style.mjs`: fails on em dashes.
- `.github/workflows/nightly.yml`: nightly promote, build, link check, GitHub Pages deploy; also deploys on push to `main`. Gated on repo variable `PUBLISH_ENABLED=true`.
- `deploy/cloudflare-pages-step.yml`: optional Cloudflare Pages deploy step.

## Commands

    npm install
    npm run build
    npm run check:links
    npm run check:style
    npm run promote:dry

`SITE_URL` defaults to `https://skperigon.github.io/get-paid-from-anywhere`. Change it (env var, or repo variable in Actions) if the site moves to a custom domain. Internal links in pages and markdown are prefixed with the base path automatically.

## Writing a draft

1. Verify each fact on the provider's own site.
2. Write the body, fill `sources`, set `checkedOn` to the check date, set `status: ready`.
3. New country pages are better added to `countries.json` plus `sellerCountries` in `providers.json` than as markdown.
