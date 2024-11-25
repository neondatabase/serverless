## 0.10.4 (2024-11-25)

Fixes insert `Buffer`/`ArrayBuffer` values into `BYTEA` fields when using HTTP fetch queries
Fixes only passing `authToken` in the `sql` HTTP request and not in the `neon` connection setup.

## 0.10.3 (2024-11-06)

Fixes `authToken` overriding in `sql` HTTP request.

## 0.10.2 (2024-11-05)

Expose `types` property on public HTTPQueryOptions type

## 0.10.1 (2024-10-07)

Fix `CONFIG.MD` documentation.

## 0.10.0 (2024-10-07)

Capture stack traces in `NeonDbError`, if `Error.captureStackTrace` is available.

Allow authentication through `JWT` by adding a `authToken` property to the `neon` HTTP connection options.

## 0.9.3 (2024-05-09)

Expose all error information fields on `NeonDbError` objects thrown when using the http fetch transport.

## 0.9.2 (2024-05-09)

JSR README updates only.

## 0.9.1 (2024-04-15)

Pass username (and database name) through URL decoder, so all usernames can successfully authorize.

## 0.9.0 (2024-02-27)

Deprecate `fetchConnectionCache` option, which is now always enabled. For `neon` http fetch queries, enable setting options on individual queries within a batch `transaction` (but note that the types still do not allow this).

## 0.8.1 (2024-02-07)

Revert single per-region domain for WebSockets. Fix treatment of -pooler connection hosts.

## 0.8.0 (2024-02-06)

Use a single (per-region) domain name for all connections to Neon databases. Intended to help with connection caching in V8. Passes the endpoint ID inside connection options for WebSocket connections.

## 0.7.2 (2024-01-10)

Export a full ESM build to index.mjs -- don't just wrap the CJS code -- since no wrapping method seems reliable across bundlers and platforms. It's now important to only `require` or only `import` the package: if you mix, you'll get two copies of the code that don't share configuration changes.

## 0.7.1 (2024-01-09)

Fixed index.d.mts.

## 0.7.0 (2024-01-08)

Altered ESM re-export technique (in index.mjs) to work around WebPack issues. Added a re-export of TypeScript types (as index.d.mts) to fix the 'Masquerading as CJS' warning from https://arethetypeswrong.github.io/.

## 0.6.1 (2023-12-19)

WebSocket connection errors are now reported properly via `client.on('error', err => { /* ... */ })`.
