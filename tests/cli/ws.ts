import { neonConfig } from '../../dist/npm';

export async function shimWebSocketIfRequired() {
  if (typeof WebSocket !== 'function') {
    console.info('Importing ws for neonConfig.webSocketConstructor');
    const { WebSocket } = await import('ws');
    neonConfig.webSocketConstructor = WebSocket;
  } else {
    console.info('Using native WebSocket');
  }
}
