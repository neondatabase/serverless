import { expect, test, vi } from 'vitest';

// client/pool.connect + transactions work
// pool.query + transaction doesn't?

test('one plus one', async () => {
  expect(1 + 1).toBe(2);
});
