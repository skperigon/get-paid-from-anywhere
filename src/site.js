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

// ---------- Display helpers for the comparison layout ----------
import countriesData from './data/countries.json';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// "2026-10-22" -> "Oct 22, 2026"
export function fmtDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
  return m ? `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}` : iso;
}
export const SITE_LINE = 'Which payment providers work in your country, and what they cost.';
export const SITE_SUBLINE = 'An independent, fact-checked comparison of payment processors, merchants of record, payout accounts and US company formation for founders and freelancers outside the US. Every fact links to the provider\u2019s own page and shows the date we checked it.';

const OPEN_STATUSES = ['listed', 'not-excluded'];
const CLOSED_STATUSES = ['grandfathered-only', 'not-listed', 'prohibited'];
const TRACKED = countriesData.map((c) => c.slug);
const NAME = Object.fromEntries(countriesData.map((c) => [c.slug, c.name]));
const isMor = (p) => p.merchantOfRecord.value.startsWith('Yes');
const feeKnown = (p) => { const f = priceFact(p); return Boolean(f && f.value !== 'unknown'); };
const fullyTracked = (p) => p.category !== 'US company formation' && TRACKED.every((s) => p.sellerCountries?.[s]);

export function openCountries(p) { return TRACKED.filter((s) => OPEN_STATUSES.includes(p.sellerCountries?.[s]?.status)).map((s) => NAME[s]); }
export function closedCountries(p) { return TRACKED.filter((s) => CLOSED_STATUSES.includes(p.sellerCountries?.[s]?.status)).map((s) => NAME[s]); }
export const TRACKED_COUNT = TRACKED.length;

// Checklist score. Five yes/no checks computed only from providers.json.
// It is not a quality rating and uses no reviews. See /methodology/.
export const RUBRIC = [
  { key: 'access', label: `Open to new sellers in at least 4 of the ${TRACKED.length} countries we track`, points: 2, half: `2 or 3 countries earns 1 point` },
  { key: 'mor', label: 'Acts as merchant of record, so it handles sales tax and VAT', points: 1 },
  { key: 'fee', label: 'Publishes its fees on its own site', points: 1 },
  { key: 'clear', label: 'No "unknown" status in the countries we track', points: 1 },
];
export function score(p) {
  if (!fullyTracked(p)) return null;
  const open = openCountries(p).length;
  const parts = {
    access: open >= 4 ? 2 : open >= 2 ? 1 : 0,
    mor: isMor(p) ? 1 : 0,
    fee: feeKnown(p) ? 1 : 0,
    clear: TRACKED.every((s) => p.sellerCountries[s].status !== 'unknown') ? 1 : 0,
  };
  return { total: Object.values(parts).reduce((a, b) => a + b, 0), max: 5, parts };
}

// Pros and cons built from the dataset only.
export function prosCons(p) {
  const pros = [], cons = [];
  const f = priceFact(p);
  if (isMor(p)) pros.push('Merchant of record: handles sales tax and VAT for you');
  else if (p.category !== 'US company formation') cons.push('Not a merchant of record: sales tax and VAT stay with you');
  if (p.category !== 'US company formation') {
    const open = openCountries(p), closed = closedCountries(p);
    if (fullyTracked(p)) {
      if (open.length) pros.push(`Open to new sellers in ${open.length} of ${TRACKED.length} countries we track`);
      if (closed.length) cons.push(`Not open to new sellers in ${closed.join(', ')}`);
      const unk = TRACKED.filter((s) => p.sellerCountries[s].status === 'unknown');
      if (unk.length === TRACKED.length) cons.push('Country eligibility not published per country');
    }
  }
  if (f && f.value !== 'unknown') pros.push('Fees published on its own site');
  else cons.push('Fees not published where we could find them');
  for (const x of p.facts) {
    if (/non-us founders/i.test(x.label)) (x.value === 'unknown' ? cons : pros).push(x.value === 'unknown' ? 'Not confirmed whether non-US founders are accepted' : x.value);
    if (/payout schedule/i.test(x.label)) pros.push(`Payouts: ${x.value}`);
    if (/annual account fee/i.test(x.label)) cons.push(`Annual fee: ${x.value}`);
  }
  return { pros, cons };
}

// Key number for a card: short form of the first price fact.
export function headlineFee(p) {
  const f = priceFact(p);
  if (!f || f.value === 'unknown') return 'Not published';
  const short = f.value.split(/[.;]\s|,\s/)[0].replace(/\.$/, '');
  return /\d/.test(short) ? short : 'Varies, see facts';
}

// "Best for" picks. Each one names the rule it follows so readers can check it.
export const PICKS = [
  { slug: 'paddle', label: 'Fewest country restrictions', why: 'Merchant of record that accepts sellers from anywhere except a short published list of unsupported countries.' },
  { slug: 'polar', label: 'Most countries listed by name', why: 'Merchant of record that lists India, Pakistan, Nigeria and Bangladesh on its payout list, 4 of the 5 countries we track. Polar says it works where Stripe is invite-only.' },
  { slug: 'dodo-payments', label: 'Lowest base rate', why: '4% + 40 cents on US domestic cards, the lowest base rate among the merchants of record we track before paid plans. Extra fees apply to international cards and subscriptions. Polar\u2019s paid plans go lower.' },
  { slug: 'lemon-squeezy', label: 'PayPal payouts', why: 'Merchant of record that pays out by bank or PayPal. It says PayPal payouts work in 200+ countries.' },
  { slug: 'doola', label: 'US company for non-US founders', why: 'The formation service in our data whose pricing page states that non-US citizens are accepted.' },
];
export function pickFor(slug) { return PICKS.find((x) => x.slug === slug) || null; }
