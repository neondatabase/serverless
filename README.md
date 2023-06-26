# @neondatabase/serverless [BETA]

`@neondatabase/serverless` is [Neon](https://neon.tech)'s PostgreSQL driver for JavaScript and TypeScript. It's:

* **Low-latency**, thanks to [message pipelining](https://neon.tech/blog/quicker-serverless-postgres) and other optimizations
* **Ideal for serverless/edge** deployment, using https and WebSockets in place of TCP
* **A drop-in replacement** for [node-postgres](https://node-postgres.com/), aka [`pg`](https://www.npmjs.com/package/pg) (on which it's based)


## Get started


### Install

Install it with your JS package manager. For example:

```bash
npm install @neondatabase/serverless
```

Using TypeScript? Types are included.


### Configure

Get your connection string from the [Neon console](https://console.neon.tech/) and set it as an environment variable. Something like:

```
DATABASE_URL=postgres://username:password@host.neon.tech/neondb
```


### Use

For one-shot queries, use the `neon` function. For instance:

```javascript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
// `post` is now { id: 12, title: 'My post', ... } (or undefined)
```

Note: interpolating `${postId}` here is [safe from SQL injection](https://neon.tech/blog/sql-template-tags).


### Deploy

To turn this example into a complete API endpoint deployed on [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions) at `https://myapp.vercel.dev/api/post?postId=123`, follow these two steps:

1. Create a new file `api/post.ts`:

```javascript
export const config = {
  runtime: 'edge',
  regions: ['iad1'],  // specify the region nearest your Neon DB
};

import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

export default async (req: Request, ctx: any) => {
  // get and validate the `postId` query parameter
  const postId = parseInt(new URL(req.url).searchParams.get('postId'), 10);
  if (isNaN(postId)) return new Response('Bad request', { status: 400 });

  // query and validate the post
  const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
  if (!post) return new Response('Not found', { status: 404 });

  // return the post as JSON
  return new Response(JSON.stringify(post), { 
    headers: { 'content-type': 'application/json' }
  });
}
```

2. Test and deploy

```bash
npm install -g vercel  # install vercel CLI
npx vercel env add DATABASE_URL  # paste Neon connection string, select all environments
npx vercel dev  # check working locally, then ...
npx vercel deploy
```

The `neon` query function has a few [additional options](CONFIG.md).


## Sessions, transactions, and node-postgres compatibility

A query using the `neon` function, as above, is carried by an https [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) request. This should work — and work fast — from any modern JS environment. But you can only send one query at a time this way: sessions and transactions are not supported.

When you need session or transaction support, use the `Pool` or `Client` constructors instead. Use `Pool` or `Client` also when you need  node-postgres compatibility, supporting query libraries like Kysely or Zapatos.

The [node-postgres docs](https://node-postgres.com/) have the full API reference for `Pool` and `Client`.

The `Pool` and `Client` objects carry queries over WebSockets. There are two key things you need to know:

1. In Node.js and some other environments, there's no built-in WebSocket support. In those cases, supply a WebSocket constructor function.
2. In serverless environments such as Vercel Edge Functions or Cloudflare Workers, WebSocket connections cannot outlive a single request. That means `Pool` or `Client` objects must be connected, used and closed within a single request handler. Don't create them outside a request handler; don't create them in one handler and try to reuse them in another; and to avoid exhausting available connections, don't forget to close them.

These points are demonstrated in the examples below.


### Node.js/`webSocketConstructor` example

In Node.js, the only difference to node-postgres is the need to configure WebSocket support. For example:

```javascript
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;  // <-- this is the key bit

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.on('error', err => console.error(err));
// ...

const client = await pool.connect();

try {
  await client.query('BEGIN');
  const { rows: [{ id: postId }] } = await client.query('INSERT INTO posts (title) VALUES ($1) RETURNING id', ['Welcome']);
  await client.query('INSERT INTO photos (post_id, url) VALUES ($1, $2)', [postId, 's3.bucket.foo']);
  await client.query('COMMIT');

} catch (err) {
  await client.query('ROLLBACK');
  throw err;

} finally {
  client.release();
}

// ...
await pool.end();
```


### Serverless environment example

We can rewrite the Vercel Edge Function we saw above to use `Pool`, as follows:

```javascript
export const config = {
  runtime: 'edge',
  regions: ['iad1'],  // specify the region nearest your Neon DB
};

import { Pool } from '@neondatabase/serverless';

// don't create a `Pool` or `Client` here, outside the request handler

export default async (req: Request, ctx: any) => {
  // create a `Pool` inside the request handler
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // get and validate the `postId` query parameter
  const postId = parseInt(new URL(req.url).searchParams.get('postId'), 10);
  if (isNaN(postId)) return new Response('Bad request', { status: 400 });

  // query and validate the post
  const [post] = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
  if (!post) return new Response('Not found', { status: 404 });

  // end the `Pool` inside the same request handler 
  // (unlike `await`, `ctx.waitUntil` won't hold up the response)
  ctx.waitUntil(pool.end());

  // return the post as JSON
  return new Response(JSON.stringify(post), { 
    headers: { 'content-type': 'application/json' }
  });
}
```

Note: we don't use the pooling capabilities of `Pool` in this example, but it's slightly briefer than using `Client`, and because `Pool.query` is designed for one-shot queries we may in future automatically route these queries over https for lower latency.

Using `Client` instead would look like this:

```javascript
export const config = {
  runtime: 'edge',
  regions: ['iad1'],  // specify the region nearest your Neon DB
};

import { Client } from '@neondatabase/serverless';

// don't create a `Pool` or `Client` here, outside the request handler

export default async (req: Request, ctx: any) => {
  // create a `Client` inside the request handler
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();

  // get and validate the `postId` query parameter
  const postId = parseInt(new URL(req.url).searchParams.get('postId'), 10);
  if (isNaN(postId)) return new Response('Bad request', { status: 400 });

  // query and validate the post
  const [post] = await client.query('SELECT * FROM posts WHERE id = $1', [postId]);
  if (!post) return new Response('Not found', { status: 404 });

  // end the `Client` inside the same request handler 
  // (unlike `await`, `ctx.waitUntil` won't hold up the response)
  ctx.waitUntil(client.end());

  // return the post as JSON
  return new Response(JSON.stringify(post), { 
    headers: { 'content-type': 'application/json' }
  });
}
```

There are a few additional [configuration options](CONFIG.md) that apply to `Pool` and `Client`.


TODO: links to example repos


## Run your own WebSocket proxy

The package comes configured to connect to a Neon database over a secure (`wss:`) WebSocket. But you can also [run your own WebSocket proxy](DEPLOY.md), and configure it to allow onward connections to your own Postgres instances.
