import { test, expect } from 'vitest';
import { parseIntoClientConfig } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'

test('log version', () => {
  if (typeof process !== 'undefined' && process.versions) {
    console.log(`Node v${process.versions.node}`);
  }
});

test('parseIntoClientConfig export', () => {
  const { user, host, database, ssl } = parseIntoClientConfig(
    'postgresql://u@h/d?sslmode=verify-full',
  );

  expect(user).toBe('u');
  expect(host).toBe('h');
  expect(database).toBe('d');
  expect(ssl).toStrictEqual(Object.create(null));
});
