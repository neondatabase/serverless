## 0.7.2 (2024-01-10)

Export a full ESM build to index.mjs -- don't just wrap the CJS code -- since no wrapping method seems reliable across bundlers and platforms. It's now important to only `require` or only `import` the package: if you mix, you'll get two copies of the code that don't share configuration changes.

## 0.7.1 (2024-01-09)

Fixed index.d.mts.

## 0.7.0 (2024-01-08)

Altered ESM re-export technique (in index.mjs) to work around WebPack issues. Added a re-export of TypeScript types (as index.d.mts) to fix the 'Masquerading as CJS' warning from https://arethetypeswrong.github.io/.

## 0.6.1 (2023-12-19)

WebSocket connection errors are now reported properly via `client.on('error', err => { /* ... */ })`.
