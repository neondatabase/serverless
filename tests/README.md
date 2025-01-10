# Testing notes

- We _must_ test using the esbuild-bundled driver -- the code that's packaged up for npm -- because various shims are inserted only via this process. Importing the driver from `../export` would not test most of the code that it is intended to test.

- The reason the serverless driver exists is to enable connecting (and connecting speedily) from a variety of platforms. We therefore test on a variety of platforms. The `cli`, `browser`, `cloudflare` and `vercel` subfolders contains these tests.

## Platforms

### `cli`

For convenience, the most extensive tests are run via CLI.

In CI we run these tests:

1. On current Node LTS (Node has native fetch from 18 onwards and native WebSocket from 22 onwards)
2. On Node 16 (using node-fetch and ws)
3. On current Node LTS using vitest's `edge-runtime` environment

Currently we do not test on Bun, as it is [not supported by vitest](https://github.com/oven-sh/bun/issues/4145), nor on Deno, [for the same reason](https://github.com/denoland/deno/issues/23882).

We include simple tests using drizzle-orm.

### `cloudflare`

We run basic local tests on Cloudflare Workers using the `wrangler` tool's `unstable_dev` feature.

These tests ensure that the package can be run and a query can be executed via (a) a `Client` created and connected manually, which uses WebSockets, (b) a `Pool`, which also uses WebSockets, and (c) the `neon` function, which uses https fetch.

Note that it will usually be better to use ordinary [node-postgres](https://node-postgres.com/) with Cloudflare's [Hyperdrive](https://developers.cloudflare.com/hyperdrive/).

### `vercel`

We run the same range of tests in Vercel Functions, and these are actually deployed to and run on Vercel.

Both the `nodejs` and `edge` runtimes are tested.

### `browser`

We run similar tests in a headless browser, using vitest's support for [playwright](https://playwright.dev/).

We use Firefox as the browser, on the basis that this is a wholly independent JS engine to the test platforms above (which are all V8-based).

## Extensions

Possible future extensions to testing:

- Run the CLI tests on Bun and Deno

- Run the browser tests on Chrome/Chromium and/or Safari/WebKit

- Run tests on AWS Lambda

- Run Vercel/Cloudflare tests with libraries such as Next.js

- Test with Prisma and/or other ORMs and libraries
