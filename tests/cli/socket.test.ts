import { expect, test } from 'vitest';
import { neonConfig } from '@neondatabase/serverless';

test('end() does not throw when called before the WebSocket is assigned', () => {
  const socket = new neonConfig();
  expect(() => socket.end()).not.toThrow();
});
