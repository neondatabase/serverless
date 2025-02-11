import { neonConfig } from '@neondatabase/serverless';
import { beforeAll } from 'vitest';

async function setup() {
  if (typeof fetch !== 'function') {
    console.info('Importing node-fetch for neonConfig.fetchFunction');
    const fetch = await import('node-fetch');
    neonConfig.fetchFunction = fetch.default;
  }
  if (typeof WebSocket !== 'function') {
    console.info('Importing ws for neonConfig.webSocketConstructor');
    const { WebSocket } = await import('ws');
    neonConfig.webSocketConstructor = WebSocket;
  }
}

beforeAll(setup);
