import { afterEach, describe, expect, it, vi } from 'vitest';

import { Socket, type subtls } from '../../src/shims/net';

function deferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}

async function createTlsSocket(tlsWrite: (data: Uint8Array) => Promise<void>) {
  const socket = new Socket();
  socket.subtls = {
    TrustedCert: {
      databaseFromPEM: vi.fn().mockResolvedValue([]),
    },
    WebSocketReadQueue: class {
      read = vi.fn().mockResolvedValue(undefined);
    },
    startTls: vi.fn().mockResolvedValue({
      read: vi.fn().mockResolvedValue(undefined),
      write: tlsWrite,
    }),
  } as unknown as subtls;

  await socket.startTls('localhost');
  return socket;
}

describe('Socket TLS writes', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('invokes the callback after the TLS write completes', async () => {
    vi.stubGlobal('debug', false);
    const write = deferred<void>();
    const tlsWrite = vi.fn(() => write.promise);
    const socket = await createTlsSocket(tlsWrite);
    const callback = vi.fn();
    const data = new Uint8Array([1, 2, 3]);

    expect(socket.write(data, 'utf8', callback)).toBe(true);
    expect(tlsWrite).toHaveBeenCalledWith(data);
    expect(callback).not.toHaveBeenCalled();

    write.resolve();
    await write.promise;

    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledWith();
  });

  it('passes TLS write errors to the callback', async () => {
    vi.stubGlobal('debug', false);
    const write = deferred<void>();
    const socket = await createTlsSocket(() => write.promise);
    const error = new Error('TLS write failed');
    const callbackError = new Promise<unknown>((resolve) => {
      socket.write(new Uint8Array([1]), 'utf8', (err) => resolve(err));
    });

    write.reject(error);

    await expect(callbackError).resolves.toBe(error);
  });
});
