import { describe, expect, test, vi } from 'vitest';
import { neonConfig } from '@neondatabase/serverless';

describe('Socket TLS', () => {
  test('emits error and close when the TLS read loop rejects', async () => {
    const socket = new neonConfig();
    const readError = new Error('TLS read failed');
    const errors: unknown[] = [];
    let closed = false;

    socket.on('error', (err) => errors.push(err));
    socket.on('close', () => {
      closed = true;
    });

    socket.subtls = {
      TrustedCert: {
        databaseFromPEM: vi.fn().mockResolvedValue({}),
      },
      WebSocketReadQueue: class {
        read = vi.fn();
      },
      startTls: vi.fn().mockResolvedValue({
        read: vi.fn(),
        write: vi.fn(),
      }),
    } as any;

    vi.spyOn(socket as any, 'tlsReadLoop').mockRejectedValue(readError);

    await socket.startTls('example.com');
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(errors).toEqual([readError]);
    expect(closed).toBe(true);
  });
});
