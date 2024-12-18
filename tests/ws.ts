import { neonConfig } from '../dist/npm';

export async function shimWebSocket() {
  if (typeof WebSocket !== 'function') {
    console.info('Native WebSocket not found: importing ws for neonConfig.webSocketConstructor');
    const { WebSocket } = await import('ws');
    neonConfig.webSocketConstructor = WebSocket;
  } else {
    console.info('Using native WebSocket');
  }
}
