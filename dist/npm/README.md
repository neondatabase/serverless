# @neondatabase/serverless [BETA]

This package from [Neon](https://neon.tech) shims the [node-postgres](https://node-postgres.com/) `pg` library to work on edge runtimes such as Cloudflare Workers — places where TCP sockets are not available — via a WebSocket proxy.

**Please note: this package also works in web browsers, but in most cases it's not appropriate to publicly deploy that way because it would reveal your Postgres credentials.**


## How to use it

Where you'd otherwise install `pg` and `@types/pg`, instead run `npm install @neondatabase/serverless`.

Then use it the same way you'd use `pg`. For example, make your Neon database connection string available in `env.DATABASE_URL`, then:

```javascript
import { Client } from '@neondatabase/serverless';

async function whatsTheTimeMrPostgres() {
  const client = new Client(env.DATABASE_URL);
  await client.connect();
  const { rows: [{ now }] } = await client.query('select now();');
  await client.end();
  return now;
}
```

For a complete usage example on Cloudflare Workers, see https://github.com/neondatabase/serverless-cfworker-demo.

*Please note: brief queries such as this one can generally be run on Cloudflare’s free plan. Queries with larger result sets will typically exceed the 10ms CPU time available to Workers on the free plan: in that case you’ll see a Cloudflare error page and will need to upgrade your Cloudflare service.*

## Run your own WebSocket proxy

The package comes configured to connect to Neon's WebSocket proxy, which will then allow onward connections only to Neon databases.

But you can run your own copy of the WebSocket proxy, and configure it to allow onward connections to your own Postgres instances.

First, you'll need to set up the proxy itself somewhere public-facing (or on `localhost` for development). See https://github.com/neondatabase/wsproxy for the Go code and instructions.

Then you'll need to set two options on this package — `wsProxy` and `rootCerts` — by importing the `neonConfig` object. For example:

```javascript
import { Client, neonConfig } from '@neondatabase/serverless';

neonConfig.wsProxy = 'my-wsproxy.example.com';

neonConfig.rootCerts = `
-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
...
-----END CERTIFICATE-----
`;

async function whatsTheTimeMrPostgres() {
  const client = new Client(env.DATABASE_URL);
  await client.connect();
  const { rows: [{ now }] } = await client.query('select now();');
  await client.end();
  return now;
}
```


### `wsProxy`

The `wsProxy` setting should point to the WebSocket proxy you just set up. Usually that will just be a URL host string, but if you want to run different proxies depending on the database host (e.g. to match regions) you can also pass a function with the signature `(dbHost: string) => string`. For example:

```javascript
neonConfig.wsProxy = (dbHost) => 
  /[.]eu[.]db[.]example[.]com$/.test(dbHost) ? 
    'my-wsproxy.eu.example.com' : 
      'my-wsproxy.us.example.com';
```


### `rootCerts`

We bundle our own TLS implementation, which needs to know what root (certificate authority) certificates to trust. The default value of `rootCerts` is the [ISRG Root X1](https://letsencrypt.org/certificates/) certificate, which is appropriate for servers secured with [Let’s Encrypt](https://letsencrypt.org/).

If you're using any other certificate authority to secure Postgres connections, provide the root certificate(s) in PEM format to the `rootCerts` option.


### TLS version

Please note that the library requires your Postgres installation to support TLS 1.3.


## Orientation

The code is at https://github.com/neondatabase/serverless. Most of it is in `shims/net/index.ts`. Alongside that file, `tls.js` and `tls.wasm` come from `https://github.com/jawj/cloudflare-pg-client` (where we patch `deno-postgres` for a similar purpose, and compile [WolfSSL](https://www.wolfssl.com/) with [emscripten](https://emscripten.org/) along the way).

* To update the npm package, run `./export.sh`, then `cd dist/npm` and `npm publish`.

* To run or deploy the test app on Cloudflare, create a `.dev.vars` file containing `DATABASE_URL=postgres://connection_string`, run `npx wrangler dev --local` or `npx wrangler publish`.

* To run the test app in a browser, create a `.dev.vars` file as above, run `./build.sh`, start a local server at the repo root, and visit `http://localhost:8080/dist/deploy/` (replacing the port number as appropriate).
