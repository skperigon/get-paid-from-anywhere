import data from './data/providers.json';

export const SITE_NAME = 'Get Paid From Anywhere';
export const SITE_TAGLINE = 'Sourced payment options for founders outside the US and EU';
export const CHECKED_ON = data.checkedOn || '2026-10-22';
export const REPO_URL = 'https://github.com/skperigon/get-paid-from-anywhere';
export const STATUS_TEXT = {
  'listed': 'Listed',
  'not-excluded': 'Not excluded',
  'invite-only': 'Invite-only',
  'label-only': 'Listed with a label',
  'conditional': 'Conditional',
  'grandfathered-only': 'Existing merchants only',
  'not-listed': 'Not listed',
  'prohibited': 'Prohibited',
  'unknown': 'Unknown',
};
export const STATUS_CLASS = {
  'listed': 'ok', 'not-excluded': 'ok', 'invite-only': 'warn', 'label-only': 'warn',
  'conditional': 'warn', 'grandfathered-only': 'no', 'not-listed': 'no', 'prohibited': 'no', 'unknown': 'unk',
};
// Sort weight for status columns: open first, closed last.
export const STATUS_RANK = { 'listed': 0, 'not-excluded': 1, 'conditional': 2, 'label-only': 3, 'invite-only': 4, 'unknown': 5, 'grandfathered-only': 6, 'not-listed': 7, 'prohibited': 8 };

export function host(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}
// Prefix a root-relative path ("/country/india/") with the configured base path.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
export function u(p) { return BASE + p; }

// Provider groups used for filters and grouping.
export const GROUPS = [
  { key: 'mor', title: 'Merchants of record', match: (p) => p.category === 'Merchant of record' },
  { key: 'processor', title: 'Payment processors', match: (p) => p.category.startsWith('Payment processor') },
  { key: 'banking', title: 'Accounts, banking and payouts', match: (p) => !p.category.startsWith('Payment processor') && p.category !== 'Merchant of record' && p.category !== 'US company formation' },
  { key: 'formation', title: 'US company formation', match: (p) => p.category === 'US company formation' },
];
export function groupOf(p) { return GROUPS.find((g) => g.match(p)); }

// A provider link counts as an affiliate link only when the data sets one that
// differs from the provider's normal website. Today none do.
export function isAffiliate(p) { return Boolean(p.affiliateUrl && p.website && p.affiliateUrl !== p.website); }
export function outHref(p) { return isAffiliate(p) ? p.affiliateUrl : p.website; }
export function outRel(p) { return isAffiliate(p) ? 'sponsored nofollow noopener' : 'nofollow noopener'; }
export const affiliateProviders = () => data.providers.filter(isAffiliate);

// The first price-type fact for a provider (fees, plans, formation price).
export function priceFact(p) { return p.facts.find((f) => /fee|plan|formation/i.test(f.label)) || null; }
// Latest checkedOn across a provider's facts.
export function providerChecked(p) {
  const dates = [p.merchantOfRecord?.checkedOn, ...p.facts.map((f) => f.checkedOn)].filter(Boolean).sort();
  return dates[dates.length - 1] || CHECKED_ON;
}
