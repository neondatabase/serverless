## 1.0.1 (2025-06-06)

The package now prints a security warning to the console when a connection is made in a web browser. This behaviour can be suppressed with a new configuration option: `disableWarningInBrowsers`. There are a few other very minor fixes.

## 1.0.0 (2025-03-25)

Breaking change: the HTTP query template function can now **only** be called as a template function, not as a conventional function. This improves safety from accidental SQL-injection vulnerabilities. For example:

```js
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const id = 1;

// this is safe and convenient, as before
const result = await sql`SELECT * FROM table WHERE id = ${id}`;

// this looks very similar and was previously allowed, but was open to SQL
// injection attacks because it uses ordinary string interpolation -- it's now
// both a TypeScript type error and a runtime error
const throws = await sql(`SELECT * FROM table WHERE id = ${id}`);
```

To fill the gap left by this change, the template function has two new properties: a `query()` function that allows manually parameterized queries, and an `unsafe()` function that lets you interpolate trusted arbitrary string values. For example:

```js
// this was previously allowed, and was safe, but is now also an error so as to
// prevent the vulnerability seen above
const throws = await sql('SELECT * FROM table WHERE id = $1', [id]);

// the `query()` function is the new way to manually specify placeholders and
// values (the same way it's done by `client.query()` and `pool.query()`)
const result = await sql.query('SELECT * FROM table WHERE id = $1', [id]);

// to interpolate strings like column or table names, **only** if you know
// they're safe, use the `unsafe()` function
const table = condition ? 'table1' : 'table2'; // known-safe string values
const result = await sql`SELECT * FROM ${sql.unsafe(table)} WHERE id = ${id}`;

// but in the above case, you might prefer to do this instead
const table = condition ? sql`table1` : sql`table2`;
const result = await sql`SELECT * FROM ${table} WHERE id = ${id}`;
```

In addition, HTTP template queries are now fully composable, including those with parameters. For example:

```js
const name = 'Olivia';
const limit = 1;
const whereClause = sql`WHERE name = ${name}`;
const limitClause = sql`LIMIT ${limit}`;

// compilation to raw SQL now happens lazily, at query time, so that parameter
// placeholders can be numbered appropriately
const result = await sql`SELECT * FROM table ${whereClause} ${limitClause}`;
```

The minimum supported version of Node is now v19 (this avoids having to do dynamic `crypto` imports, which can cause trouble with bundlers).

Lastly: the repository has been rearranged and refactored, `.d.ts` files are now generated automatically, packages are published via `npm version`, and comprehensive tests have been put in place. This should ease the way for future enhancements and contributions.

## 0.10.4 (2024-11-25)

Fixes insert `Buffer`/`ArrayBuffer` values into `BYTEA` fields when using HTTP fetch queries.

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
