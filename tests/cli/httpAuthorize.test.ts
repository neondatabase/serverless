import { expect, test, beforeAll } from 'vitest';
import { neon } from '../..';
import { polyfill } from './polyfill';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;
const CLERK_USER = process.env.VITE_CLERK_USER!;
const CLERK_SECRET_KEY = process.env.VITE_CLERK_SECRET_KEY!;

beforeAll(polyfill);

async function clerkAPI(method: 'POST' | 'GET', endpoint: string, body?: any) {
  const fetchFn = globalThis.fetch ?? (await import('node-fetch')).default;
  const response = await fetchFn(`https://api.clerk.com/v1/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
  return response.json();
}

test('connection with Neon Authorize', async () => {
  const userEndpoint = `users?email_address[]=${CLERK_USER}`;
  const [{ id: user_id }] = await clerkAPI('GET', userEndpoint);
  const { id: session_id } = await clerkAPI('POST', 'sessions', { user_id });
  const { jwt } = await clerkAPI('POST', `sessions/${session_id}/tokens`);

  const sql = neon(DATABASE_URL);
  await sql`CREATE EXTENSION IF NOT EXISTS pg_session_jwt`;

  const authDbUrl = DATABASE_URL.replace(/[^/]+@/, 'authenticated@');
  const authSql = neon(authDbUrl, { authToken: jwt });
  const [{ user_id: queried_user_id }] = await authSql`SELECT auth.user_id()`;

  expect(queried_user_id).toBe(user_id);
});
