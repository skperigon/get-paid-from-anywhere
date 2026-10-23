export const SITE_NAME = 'Get Paid From Anywhere';
export const CHECKED_ON = '2026-10-22';
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
export function host(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}
// Prefix a root-relative path ("/country/india/") with the configured base path.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
export function u(p) { return BASE + p; }
