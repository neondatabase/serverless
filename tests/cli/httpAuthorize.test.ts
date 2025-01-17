import { expect, test, beforeAll, assertType } from 'vitest';
import { neon } from '../../dist/npm';
import { polyfill } from './polyfill';
import { createClerkClient } from '@clerk/backend';

const DATABASE_URL = process.env.VITE_NEON_DB_URL!;
const CLERK_USER = process.env.VITE_CLERK_USER!;
const CLERK_PASSWORD = process.env.VITE_CLERK_PASSWORD!;
const CLERK_PK = process.env.VITE_CLERK_PUBLISHABLE_KEY!;
const CLERK_SECRET_KEY = process.env.VITE_CLERK_SECRET_KEY!;

beforeAll(polyfill);

async function clerkAPI(method: 'POST' | 'GET', endpoint: string, body?: any) {
  const response = await fetch(`https://api.clerk.com/v1/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
  return response.json();
}

test('connections with Neon Authorize', async () => {
  const [{ id: user_id }] = await clerkAPI(
    'GET',
    `users?email_address[]=${CLERK_USER}`,
  );
  const { id: session_id } = await clerkAPI('POST', 'sessions', { user_id });
  const { jwt } = await clerkAPI('POST', `sessions/${session_id}/tokens`);

  console.log(jwt);

  // const sql = neon(DATABASE_URL);
});
