We MUST test using the esbuild exported/bundled driver, because various shims are inserted only via this process. Importing the driver from `../export` thus does not test much of the code that it is intended to.

## Platforms

Node LTS (has WebSocket from 22 onwards)
Node 18 (first with fetch) + ws
Bun
Deno?

Cloudflare Workers
Vercel Functions: Edge -- bare bones
Vercel Functions: Edge -- Next.js
Vercel Functions: Node -- bare bones
Vercel Functions: Node -- Next.js
AWS Lambda

Chrome
Safari?
Firefox?

Prisma
Drizzle
...
