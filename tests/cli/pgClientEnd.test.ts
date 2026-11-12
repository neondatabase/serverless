/**
 * @see https://github.com/neondatabase/serverless/issues/230
 * @see https://github.com/brianc/node-postgres/pull/2717
 */
import { EventEmitter } from 'node:events';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';
import { Client } from '@neondatabase/serverless';

function closedConnection() {
  const connection = new EventEmitter() as EventEmitter & {
    _connecting: boolean;
    stream: {
      writable: boolean;
      destroy: () => void;
      end: () => void;
      write: () => boolean;
    };
    end: () => void;
    parsedStatements: Record<string, string>;
  };
  connection._connecting = true;
  connection.parsedStatements = {};
  // Socket already closed: further end/destroy must not emit again (the hang).
  connection.stream = {
    writable: false,
    destroy() {},
    end() {},
    write() {
      return false;
    },
  };
  connection.end = () => {};
  return connection;
}

describe('Client.end after connection close', () => {
  test('bundle includes the pg #2717 _ended early-return', () => {
    const bundle = readFileSync(resolve(__dirname, '../../index.js'), 'utf8');
    expect(bundle).toMatch(/this\._ended=!1/);
    expect(bundle).toMatch(/this\._ended=\s*!0/);
    expect(bundle).toMatch(/_connecting\|\|this\._ended/);
  });

  test('resolves when the connection has already ended', async () => {
    const connection = closedConnection();
    const client = new Client({
      connection,
      host: 'db.example',
      user: 'user',
      database: 'db',
      password: 'secret',
    } as ConstructorParameters<typeof Client>[0]);

    // State after a live connection's once('end') handler ran (set in _connect).
    (client as unknown as { _ended: boolean })._ended = true;

    await expect(
      Promise.race([
        client.end(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error('Client.end hung after connection end')),
            1000,
          ),
        ),
      ]),
    ).resolves.toBeUndefined();
  });
});
