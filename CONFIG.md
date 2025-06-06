# Options and configuration

## `neon(...)` function

The `neon(...)` function returns a tagged-template query function:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

const rows = await sql`SELECT * FROM posts WHERE id = ${postId}`;
// -> [{ id: 12, title: "My post", ... }]
```

These queries are composable. For example, this has the same effect:

```javascript
const whereClause = sql`WHERE id = ${postId}`;
const [post] = await sql`SELECT * FROM posts ${whereClause}`;
```

If you need to pass SQL in a variable, not as a template-string literal, use the `query()` property of the template function and numbered placeholders (`$1`, `$2`, etc.):

```javascript
const q = 'SELECT * FROM posts WHERE id = $1';
const [post] = await sql.query(q, [postId]);
```

If you need to interpolate _trusted_ arbitrary strings, such as the names of columns or tables, use the `unsafe()` property of the template function:

```javascript
const table = condition ? 'some_posts' : 'other_posts';
const [post] =
  await sql`SELECT * FROM ${sql.unsafe(table)} WHERE id = ${postId}`;
```

By default, only the rows resulting from the provided SQL query are returned, and they're returned as an array of objects where the keys are column names. However, you can customise the return format of the query function using the configuration options `fullResults` and `arrayMode`. These options are available both on the `neon(...)` function and on the `query()` function that's a property of the function it returns.

### `arrayMode: boolean`

When `arrayMode` is true, rows are returned as an array of arrays instead of an array of objects:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL, { arrayMode: true });
const rows = await sql`SELECT * FROM posts WHERE id = ${postId}`;
// -> [[12, "My post", ...]]
```

Or, with the same effect:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const rows = await sql.query('SELECT * FROM posts WHERE id = $1', [postId], {
  arrayMode: true,
});
// -> [[12, "My post", ...]]
```

### `fullResults: boolean`

When `fullResults` is true, additional metadata is returned alongside the result rows, which are then found in the `rows` property of the return value. The metadata matches what would be returned by node-postgres:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL, { fullResults: true });
const results = await sql`SELECT * FROM posts WHERE id = ${postId}`;
/* -> {
  rows: [{ id: 12, title: "My post", ... }],
  fields: [
    { name: "id", dataTypeID: 23, ... },
    { name: "title", dataTypeID: 25, ... },
    ...
  ],
  rowCount: 1,
  rowAsArray: false,
  command: "SELECT"
} 
*/
```

Or, with the same effect:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const results = await sql.query('SELECT * FROM posts WHERE id = $1', [postId], {
  fullResults: true,
});
// -> { ... same as above ... }
```

### `fetchOptions: Record<string, any>`

The `fetchOptions` option can be passed to `neon(...)`, the `transaction` function, or the query function (if not within a `transaction` function). This option takes an object that is merged with the options to the `fetch` call.

For example, to increase the priority of every database `fetch` request:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL, {
  fetchOptions: { priority: 'high' },
});
const rows = await sql`SELECT * FROM posts WHERE id = ${postId}`;
```

Or to implement a `fetch` timeout:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

const abortController = new AbortController();
const timeout = setTimeout(() => abortController.abort('timed out'), 10000);
const rows = await sql.query('SELECT * FROM posts WHERE id = $1', [postId], {
  fetchOptions: { signal: abortController.signal },
}); // throws an error if no result received within 10s
clearTimeout(timeout);
```

### `types: CustomTypesConfig`

The `types` option can be passed to `neon(...)` to override the default PostgreSQL type parsers provided by `PgTypes`. This is useful if you want to define custom parsing behavior for specific PostgreSQL data types, allowing you to control how data is converted when retrieved from the database. Learn more in the [PgTypes official documentation](https://github.com/brianc/node-pg-types).

Example of usage:

```typescript
import PgTypes from 'pg-types';
import { neon } from '@neondatabase/serverless';

// Configure the Neon client with the custom `types` parser
const sql = neon(process.env.DATABASE_URL, {
  types: {
    getTypeParser: ((oid, format?: any) => {
      // Define custom parsers for specific PostgreSQL types
      // Parse PostgreSQL `DATE` fields as JavaScript `Date` objects
      if (oid === PgTypes.builtins.DATE) {
        return (val: any) => new Date(val);
      }
      // Parse PostgreSQL `NUMERIC` fields as JavaScript `float` values
      if (oid === PgTypes.builtins.NUMERIC) {
        return parseFloat;
      }
      // For all other types, use the default parser
      return PgTypes.getTypeParser(oid, format);
    }) as typeof PgTypes.getTypeParser,
  },
});
```

### `authToken: string | (() => Promise<string> | string)`

The `authToken` option can be passed to `neon(...)` to set the `Authorization` header for the `fetch` request. This allows you to authenticate database requests against third-party authentication providers. This mechanism can thus be used to ensure that access control and authorization are managed effectively across different systems.

For example:

```typescript
import { neon } from '@neondatabase/serverless';

// retrieve the JWT token (implementation depends on your auth system)
const authToken = getAuthToken();

// initialize the Neon client with a connection string and auth token
const sql = neon(process.env.DATABASE_URL, { authToken });

// run a query
const posts = await sql`SELECT * FROM posts`;
```

## `transaction(...)` function

The `transaction(queriesOrFn, options)` function is exposed as a property on the query function. It allows multiple queries to be executed within a single, non-interactive transaction.

The first argument to `transaction()`, `queriesOrFn`, is either (1) an array of queries or (2) a non-`async` function that receives a query function as its argument and returns an array of queries.

The array-of-queries case looks like this:

```javascript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const showLatestN = 10;

const [posts, tags] = await sql.transaction(
  [
    sql`SELECT * FROM posts ORDER BY posted_at DESC LIMIT ${showLatestN}`,
    sql`SELECT * FROM tags`,
  ],
  {
    isolationLevel: 'RepeatableRead',
    readOnly: true,
  },
);
```

Or as an example of the function case:

```javascript
const [authors, tags] = await neon(process.env.DATABASE_URL).transaction(
  (txn) => [txn`SELECT * FROM authors`, txn`SELECT * FROM tags`],
);
```

The optional second argument to `transaction()`, `options`, has the same keys as the options to the ordinary query function -- `arrayMode`, `fullResults` and `fetchOptions` -- plus three additional keys that concern the transaction configuration. These transaction-related keys are: `isolationMode`, `readOnly` and `deferrable`. They are described below. Defaults for the transaction-related keys can also be set as options to the `neon` function.

The `fetchOptions` option cannot be supplied for individual queries inside `transaction()`, since only a single `fetch` is performed for the transaction as a whole. The TypeScript types also currently do not allow `arrayMode` or `fullResults` options to be supplied for individual queries within `transaction()` (although this does have the expected effect if the type errors are ignored).

### `isolationMode`

This option selects a Postgres [transaction isolation mode](https://www.postgresql.org/docs/current/transaction-iso.html). If present, it must be one of: `'ReadUncommitted'`, `'ReadCommitted'`, `'RepeatableRead'` or `'Serializable'`.

### `readOnly`

If `true`, this option ensures that a `READ ONLY` transaction is used to execute the queries passed.

### `deferrable`

If `true` (and if `readOnly` is also `true`, and `isolationMode` is `'Serializable'`), this option ensures that a `DEFERRABLE` transaction is used to execute the queries passed.

## `neonConfig` configuration

In most cases, there are two ways to set configuration options:

1. Import `neonConfig` from the package and set global default options on that.
2. Set options on individual `Client` instances using their `neonConfig` property.

For example:

```javascript
import { Client, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// set default option for all clients
neonConfig.webSocketConstructor = ws;

// override the default option on an individual client
const client = new Client(process.env.DATABASE_URL);
client.neonConfig.webSocketConstructor = ws;
```

A few configuration options can only be set globally, and these are noted as such below.

#### `webSocketConstructor: typeof WebSocket | undefined`

Set this parameter if you're using the driver in an environment where the `WebSocket` global is not defined, such as Node.js, and you need transaction or session support.

For example:

```javascript
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
neonConfig.webSocketConstructor = ws;
```

### Advanced configuration

If you're using `@neondatabase/serverless` to connect to a Neon database, you usually **won't** need to touch the following configuration options. These options are intended for testing, troubleshooting, and supporting access to non-Neon Postgres instances via self-hosted WebSocket proxies.

#### `poolQueryViaFetch: boolean`

**Experimentally**, when `poolQueryViaFetch` is `true` and no listeners for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP `fetch` request.

Default: currently `false` (but may be `true` in future).

Note: this option can only be set globally, **not** on an individual `Client` instance.

#### `fetchEndpoint: string | ((host: string, port: number | string) => string)`

Set `fetchEndpoint` to set the server endpoint to be sent queries via http fetch.

This may be useful for local development (e.g. to set a port that's not the default 443).

Provide either the full endpoint URL, or a function that takes the database host address and port and returns the full endpoint URL (including protocol).

Default: `host => 'https://' + host + '/sql'`

Note: this option can only be set globally, **not** on an individual `Client` instance.

#### `fetchFunction: any`

The `fetchFunction` option allows you to supply an alternative function for making http requests. The function must accept the same arguments as native `fetch`.

Default: `undefined`.

Note: this option can only be set globally, **not** on an individual `Client` instance.

#### `wsProxy: string | (host: string, port: number | string) => string`

If connecting to a non-Neon database, the `wsProxy` option should point to [your WebSocket proxy](DEPLOY.md). It can either be a string, which will have `?address=host:port` appended to it, or a function with the signature `(host: string, port: number | string) => string`. Either way, the protocol must _not_ be included, because this depends on other options. For example, when using the `wsproxy` proxy, the `wsProxy` option should look something like this:

```javascript
// either:
neonConfig.wsProxy = (host, port) =>
  `my-wsproxy.example.com/v1?address=${host}:${port}`;
// or (with identical effect):
neonConfig.wsProxy = 'my-wsproxy.example.com/v1';
```

Default: `host => host + '/v2'`.

#### `pipelineConnect: "password" | false`

To speed up connection times, the driver will pipeline the first three messages to the database (startup, authentication and first query) if `pipelineConnect` is set to `"password"`. Note that this will only work if you've configured cleartext password authentication for the relevant user and database.

If your connection doesn't support password authentication, set `pipelineConnect` to `false` instead.

Default: `"password"`.

#### `coalesceWrites: boolean`

When this option is `true`, multiple network writes generated in a single iteration of the JavaScript run-loop are coalesced into a single WebSocket message. Since node-postgres sends a lot of very short messages, this may reduce TCP/IP overhead.

Default: `true`.

#### `forceDisablePgSSL: boolean`

This option disables TLS encryption in the Postgres protocol (as set via e.g. `?sslmode=require` in the connection string). Security is not compromised if used in conjunction with `useSecureWebSocket = true`.

Default: `true`.

#### `useSecureWebSocket: boolean`

This option switches between secure (the default) and insecure WebSockets.

To use experimental pure-JS encryption, set `useSecureWebSocket = false` and `forceDisablePgSSL = false`, and append `?sslmode=verify-full` to your database connection string.

**Remember that pure-JS encryption is currently experimental and not suitable for use in production.**

Default: `true`.

#### `subtls: any`

**Only when using experimental pure-JS TLS encryption**, you must supply the [subtls](https://github.com/jawj/subtls) TLS library to the `subtls` option like so:

```typescript
import { neonConfig } from '@neondatabase/serverless';
import * as subtls from 'subtls';
neonConfig.subtls = subtls;
```

Default: `undefined`.

#### `rootCerts: string /* PEM format */`

**Only when using experimental pure-JS TLS encryption**, the `rootCerts` option determines what root (certificate authority) certificates are trusted.

Its value is a string containing zero or more certificates in PEM format.

Default: `""` (the empty string).

#### `pipelineTLS: boolean`

**Only when using experimental pure-JS encryption**, the driver will pipeline the SSL request message and TLS Client Hello if `pipelineTLS` is set to `true`. Currently, this is only supported by Neon database hosts, and will fail when communicating with an ordinary Postgres or pgbouncer back-end.

Default: `false`.
