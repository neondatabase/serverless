import { Client } from '@neondatabase/serverless';
import { expect, test } from 'vitest';

type WebSocketEventName = 'open' | 'message' | 'close' | 'error';
type WebSocketListener = (this: ClosingWebSocket, event: any) => void;

class ClosingWebSocket {
  readonly listeners: Record<WebSocketEventName, WebSocketListener[]> = {
    open: [],
    message: [],
    close: [],
    error: [],
  };

  readyState = 0;
  binaryType = 'arraybuffer';
  closed = false;
  startupPacketSent = false;

  constructor(_url: string) {
    setTimeout(() => {
      if (this.closed) return;
      this.readyState = 1;
      this.emit('open', { type: 'open' });
    }, 0);
  }

  addEventListener(type: WebSocketEventName, listener: WebSocketListener) {
    this.listeners[type].push(listener);
  }

  send(_data: ArrayBufferLike | ArrayBufferView) {
    if (this.closed || this.startupPacketSent) return;

    this.startupPacketSent = true;
    setTimeout(() => {
      this.close(1011, 'branch does not exist');
    }, 0);
  }

  close(code?: number, reason?: string) {
    if (this.closed) return;

    this.closed = true;
    this.readyState = 3;
    this.emit('close', { code, reason, type: 'close' });
  }

  private emit(type: WebSocketEventName, event: any) {
    for (const listener of this.listeners[type]) {
      listener.call(this, event);
    }
  }
}

test('client.end() resolves after connect() fails during startup', async () => {
  const client = new Client('postgresql://alice:secret@example.com/testdb');
  client.neonConfig.webSocketConstructor = ClosingWebSocket as any;
  client.neonConfig.pipelineConnect = false;
  client.neonConfig.coalesceWrites = false;

  await expect(client.connect()).rejects.toThrow(/Connection terminated/);

  const endResolved = await Promise.race([
    client.end().then(() => true),
    new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), 100);
    }),
  ]);

  expect(endResolved).toBe(true);
});
