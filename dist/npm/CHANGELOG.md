## 0.7.1 (2024-01-09)

Fixed index.d.mts.

## 0.7.0 (2024-01-08)

Altered ESM re-export technique (in index.mjs) to work around WebPack issues. Added a re-export of TypeScript types (as index.d.mts) to fix the 'Masquerading as CJS' warning from https://arethetypeswrong.github.io/.

## 0.6.1 (2023-12-19)

WebSocket connection errors are now reported properly via `client.on('error', err => { /* ... */ })`.
