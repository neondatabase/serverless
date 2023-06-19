# @neondatabase/serverless [BETA]

`@neondatabase/serverless` is [Neon](https://neon.tech)'s PostgreSQL driver for JavaScript and TypeScript. It's:

* **Low-latency**, thanks to [message pipelining](https://neon.tech/blog/quicker-serverless-postgres) and other optimizations
* **Ideal for serverless/edge** deployment, using https and WebSockets in place of of TCP
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

For direct, one-shot queries, use the `neon` function. For instance:

```javascript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
// `post` is now { id: 12, title: 'My post', ... } | undefined
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

# TODO: edit the rest


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
