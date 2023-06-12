# @neondatabase/serverless [BETA]

This package from [Neon](https://neon.tech) shims the [node-postgres](https://node-postgres.com/) `pg` library to work on serverless runtimes such as Cloudflare Workers and Vercel Edge Functions — places where TCP sockets may not be not available — via WebSockets or https fetch.

The package also works in web browsers, but in most cases it's not appropriate to publicly deploy that way because it would reveal your Postgres credentials.


## How to use it

Where you'd otherwise install `pg` and `@types/pg`, instead run `npm install @neondatabase/serverless`.

Then use it the same way you'd use `pg`. For example, with your Neon database connection string available as `DATABASE_URL`:

```javascript
import { Pool } from '@neondatabase/serverless';

export default {
  async fetch(req, env, ctx) {
    const pool = new Pool({ connectionString: env.DATABASE_URL });
    const { rows: [{ now }] } = await pool.query('SELECT now()');
    ctx.waitUntil(pool.end());
    return new Response(now);
  }
}
```

For a complete usage example on Cloudflare Workers, see https://github.com/neondatabase/serverless-cfworker-demo.


## Notes

* **Pooling**: in general, serverless platforms don't keep WebSocket connections alive between requests. So it won't generally work to connect a database client (or establish a connection pool) outside of the function that's run on each request. You can of course use a `Pool` within your request handler as a slightly terser way to acquire and connect one or more `Client` objects, as shown above.

* **Cloudflare**: brief queries such as the one shown above can generally be run on Cloudflare’s free plan. Queries with larger result sets may exceed the 10ms CPU time available to Workers on the free plan: in that case you’ll see a Cloudflare error page and will need to upgrade your Cloudflare service.


## Run on Node

If you're running on Node, or anywhere else where a TCP connection can be made via `net.Socket`, you could just use [node-postgres](https://node-postgres.com/).

Alternatively, you can use this library by providing a WebSocket constructor, like so:

```javascript
import ws from 'ws';  // undici also works
import { neonConfig, Pool } from '@neondatabase/serverless';
neonConfig.webSocketConstructor = ws; 

const pool = new Pool({ connectionString: 'postgres://...' });
```


## Run your own WebSocket proxy

The package comes configured to connect to a Neon database over a secure (`wss:`) WebSocket.

But you can also [run your own WebSocket proxy](DEPLOY.md), and configure it to allow onward connections to your own Postgres instances.


## Configuration

There are two ways to set configuration options:

1. You can import `neonConfig` from the package and set global default options on it. 
2. You can set options on individual `Client` instances using their `neonConfig` property.

For example:

```javascript
import { Client, neonConfig } from '@neondatabase/serverless';

// set default options for all clients
neonConfig.wsProxy = (host, port) => `my-wsproxy.example.com/v1?address=${host}:${port}`;
neonConfig.rootCerts = `
-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw ...
-----END CERTIFICATE-----
`;

// override default options on an individual client
const client = new Client(env.DATABASE_URL);
client.neonConfig.wsProxy = (host, port) => `my-other-wsproxy.example.com/v1?address=${host}:${port}`;
```

### `webSocketContructor: typeof WebSocket | undefined`

Set this parameter if you're using the driver in an environment where `globalThis.WebSocket` is not defined, such as Node.js.

For example:

```javascript
import ws from 'ws';
import { neonConfig } from '@neondatabase/serverless';
neonConfig.webSocketConstructor = ws; 
```

### `wsProxy: string | (host: string, port: number | string) => string`

The `wsProxy` option should point to the WebSocket proxy you just set up. It can either be a string, which will have `?address=host:port` appended to it, or a function with the signature `(host: string, port: number | string) => string`. Either way, the protocol must _not_ be included, because this depends on other options. For example, when using the `wsproxy` proxy, the `wsProxy` option should look something like this:

```javascript
// either:
neonConfig.wsProxy = (host, port) => `my-wsproxy.example.com/v1?address=${host}:${port}`
// or (with identical effect):
neonConfig.wsProxy = 'my-wsproxy.example.com/v1';
```

### `useSecureWebSocket: boolean`

This option switches between secure (the default) and insecure WebSockets. 

To use experimental pure-JS encryption, set this to `false` and append `?sslmode=verify-full` to your database connection string. **Remember that pure-JS encryption is currently experimental and not suitable for use in production.**

### `pipelineConnect: "password" | false`

To speed up connection times, the driver will pipeline the first three messages to the database (startup, authentication and first query) if `pipelineConnect` is set to `"password"`. Note that this will only work if you've configured cleartext password authentication for the relevant user and database. 

The default is `"password"`. If your connection doesn't support password authentication, set it to `false` instead.

### `coalesceWrites: boolean`

When this option is `true`, multiple network writes generated in a single iteration of the JavaScript run-loop are coalesced into a single WebSocket message. Since node-postgres sends a lot of very short messages, this may reduce TCP/IP overhead. It defaults to `true`.

### `rootCerts: string /* PEM format */`

Only when using the experimental pure-JS TLS implementation, this option determines what root (certificate authority) certificates are trusted. The default value of `rootCerts` is the [ISRG Root X1](https://letsencrypt.org/certificates/) certificate, which is appropriate for servers secured with [Let’s Encrypt](https://letsencrypt.org/).

If you're using any other certificate authority to secure Postgres connections, provide the root certificate(s) in PEM format to the `rootCerts` option.

### `pipelineTLS: boolean`

Only when using experimental pure-JS encryption, the driver will pipeline the SSL request message and TLS Client Hello if `pipelineTLS` is set to `true`. Currently, this is only supported by Neon database hosts, and will fail when communicating with an ordinary Postgres or pgbouncer back-end.

The default is `false`.

## Development

The code is at https://github.com/neondatabase/serverless. Most of the interesting parts are in `shims/net/index.ts` and `export/index.ts`.

* To update the npm package, run `npm run export`, then `cd dist/npm` and `npm publish`.

* To run or deploy the simple test app on Cloudflare, create a `.dev.vars` file containing `DATABASE_URL=postgres://connection_string`, run `npx wrangler dev --local` or `npx wrangler publish`.

* To run the latencies test app in a browser, create a `.dev.vars` file as above, run `npm run browser` and visit `http://localhost:7070/dist/browser/`. To include debug output and avoid minification, use `npm run browserDebug` instead.

* To run the latencies test app in node, create a `.dev.vars` file as above and run `npm run node`. To include debug output and avoid minification, use `npm run nodeDebug` instead.
