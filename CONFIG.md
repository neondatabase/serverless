# Options and configuration

## `neon(...)` function

The `neon(...)` function returns a query function that can be used both as a tagged-template function and as an ordinary function:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// as a tagged-template function
const rowsA = await sql`SELECT * FROM posts WHERE id = ${postId}`;

// as an ordinary function (exactly equivalent)
const rowsB = await sql('SELECT * FROM posts WHERE id = $1', [postId]);
```

By default, the query function returned by `neon(...)` returns only the rows resulting from the provided SQL query, and it returns them as an array of objects where the keys are column names. For example:

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const rows = await sql`SELECT * FROM posts WHERE id = ${postId}`;
// -> [{ id: 12, title: "My post", ... }]
```

However, the `neon(...)` function exposes two configuration options to customise the return format of the query function. These are `fullResults` and `arrayMode`.


### `arrayMode: boolean`

When `arrayMode` is true, rows are returned as an array of arrays instead of an array of objects: 

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL, { arrayMode: true });
const rows = await sql`SELECT * FROM posts WHERE id = ${postId}`;
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


## `neonConfig` configuration

There are two ways to set configuration options:

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

#### `webSocketConstructor: typeof WebSocket | undefined`

Set this parameter if you're using the driver in an environment where the `WebSocket` global is not defined, such as Node.js, and you need transaction or session support.

For example:

```javascript
import ws from 'ws';
import { neonConfig } from '@neondatabase/serverless';
neonConfig.webSocketConstructor = ws; 
```


### Advanced configuration

If you're using `@neondatabase/serverless` to connect to a Neon database, you usually **won't** need to touch the following configuration options. These options are intended for testing, troubleshooting, and supporting access to non-Neon Postgres instances via self-hosted WebSocket proxies.


#### `poolQueryViaFetch: boolean`

When `poolQueryViaFetch` is `true`, and no listeners for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP fetch request.

We are investigating compatibility of this option.

Default: currently `false` (but may be `true` in future).


#### `wsProxy: string | (host: string, port: number | string) => string`

The `wsProxy` option should point to [your WebSocket proxy](DEPLOY.md). It can either be a string, which will have `?address=host:port` appended to it, or a function with the signature `(host: string, port: number | string) => string`. Either way, the protocol must _not_ be included, because this depends on other options. For example, when using the `wsproxy` proxy, the `wsProxy` option should look something like this:

```javascript
// either:
neonConfig.wsProxy = (host, port) => `my-wsproxy.example.com/v1?address=${host}:${port}`
// or (with identical effect):
neonConfig.wsProxy = 'my-wsproxy.example.com/v1';
```

Default: `host => host + '/v2'`.


#### `useSecureWebSocket: boolean`

This option switches between secure (the default) and insecure WebSockets. 

To use experimental pure-JS encryption, set `useSecureWebSocket = false` and `forceDisablePgSSL = false`, and append `?sslmode=verify-full` to your database connection string.

**Remember that pure-JS encryption is currently experimental and not suitable for use in production.**

Default: `true`.


#### `forceDisablePgSSL: boolean`

This option disables TLS encryption in the Postgres protocol (as set via e.g. `?sslmode=require` in the connection string). Security is not compromised if used in conjunction with `useSecureWebSocket = true`.

Default: `true`.


#### `pipelineConnect: "password" | false`

To speed up connection times, the driver will pipeline the first three messages to the database (startup, authentication and first query) if `pipelineConnect` is set to `"password"`. Note that this will only work if you've configured cleartext password authentication for the relevant user and database. 

If your connection doesn't support password authentication, set `pipelineConnect` to `false` instead.

Default: `"password"`.


#### `coalesceWrites: boolean`

When this option is `true`, multiple network writes generated in a single iteration of the JavaScript run-loop are coalesced into a single WebSocket message. Since node-postgres sends a lot of very short messages, this may reduce TCP/IP overhead.

Default: `true`.


#### `rootCerts: string /* PEM format */`

**Only when using experimental pure-JS TLS encryption**, this option determines what root (certificate authority) certificates are trusted.

Its value is a string containing one or more certificates in PEM format.

Default: the [ISRG Root X1](https://letsencrypt.org/certificates/) certificate, which is appropriate for servers secured with [Let’s Encrypt](https://letsencrypt.org/).


#### `pipelineTLS: boolean`

**Only when using experimental pure-JS encryption**, the driver will pipeline the SSL request message and TLS Client Hello if `pipelineTLS` is set to `true`. Currently, this is only supported by Neon database hosts, and will fail when communicating with an ordinary Postgres or pgbouncer back-end.

The default is `false`.
