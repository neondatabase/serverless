import { test, expect } from 'vitest';
import { Client, parseIntoClientConfig } from '@neondatabase/serverless'; // see package.json: this points to 'file:.'

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

test('Client.end() calls back when the connection has already ended', async () => {
  // pg-pool waits for this callback before serving queued queries (#230)
  const client = new Client('postgresql://u@h/d');
  (client.connection as any)._connecting = true;
  client.connection.emit('end');

  const ended = await Promise.race([
    new Promise((resolve) => client.end(() => resolve(true))),
    new Promise((resolve) => setTimeout(() => resolve(false), 500)),
  ]);
  expect(ended).toBe(true);
  await expect(client.end()).resolves.toBeUndefined();
});
