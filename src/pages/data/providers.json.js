import data from '../../data/providers.json';
export function GET() {
  return new Response(JSON.stringify(data, null, 2), { headers: { 'Content-Type': 'application/json' } });
}
