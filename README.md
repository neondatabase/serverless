# neondatabase/serverless

This repo shims the [node-postgres](https://node-postgres.com/) pg library to work on browsers and Cloudflare workers via a WebSocket proxy.

Most of the code is in `shims/net/index.ts`. Alongside that file, `tls.js` and `tls.wasm` come from another repo, `https://github.com/jawj/cloudflare-pg-client`, where we patch `deno-postgres` for a similar purpose and compile WolfSSL along the way.

To run or deploy the test app on Cloudflare: `npx wrangler dev --local` or `npx wrangler publish`.

To run the test app in a browser, run `./build.sh`, start a local server at the repo root, and visit http://localhost:$PORT/dist/deploy/.

To deploy the npm package, run `./export.sh`, `cd dist/npm` and `npm publish`.
