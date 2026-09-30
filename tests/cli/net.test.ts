import { describe, expect, test, vi } from 'vitest';
import { neonConfig } from '@neondatabase/serverless';

const Socket = neonConfig;

class FakeWebSocket {
  readyState = 1;
  binaryType = '';
  #listeners: Record<string, Array<(ev: unknown) => void>> = {};
  addEventListener(type: string, listener: (ev: unknown) => void) {
    (this.#listeners[type] ??= []).push(listener);
  }
  close() {
    this.readyState = 3;
    for (const listener of this.#listeners.close ?? []) listener({});
  }
  send() {}
}

function socketWithMockTls(read: () => Promise<Uint8Array | undefined>) {
  const socket = new Socket();
  socket.wsProxy = () => 'proxy.example/v2';
  socket.webSocketConstructor = FakeWebSocket as any;
  socket.subtls = {
    TrustedCert: { databaseFromPEM: vi.fn().mockResolvedValue({}) },
    WebSocketReadQueue: class {
      read = vi.fn();
    },
    startTls: vi.fn().mockResolvedValue({ read, write: vi.fn() }),
  } as any;
  socket.connect(5432, 'db.example');
  return socket;
}

describe('Socket TLS', () => {
  test('emits error and close when the TLS read loop rejects', async () => {
    const readError = new Error('TLS read failed');
    const socket = socketWithMockTls(() => Promise.reject(readError));
    const errors: unknown[] = [];
    const closed = new Promise<void>((resolve) => socket.on('close', resolve));
    socket.on('error', (err) => errors.push(err));
    await socket.startTls('example.com');
    await closed;
    expect(errors).toEqual([readError]);
    expect(socket.destroyed).toBe(true);
  });

  test('does not emit error if the socket is already destroyed', async () => {
    const socket = socketWithMockTls(() =>
      Promise.reject(new Error('late read')),
    );
    const errors: unknown[] = [];
    socket.on('error', (err) => errors.push(err));
    await socket.startTls('example.com');
    (socket as any).ws.close(); // already closed via the WebSocket listener
    await Promise.resolve();
    expect(errors).toEqual([]);
  });
});
