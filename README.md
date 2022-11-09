node-postgres pg library shimmed to work on browsers and Cloudflare workers via a WebSocket proxy.

Most of the code is in `shims/net/index.ts`. Alongside that file, `tls.js` and `tls.wasm` come from another repo, `https://github.com/jawj/cloudflare-pg-client`, where we patch `deno-postgres` for a similar purpose and compile WolfSSL along the way.

To run or deploy on Cloudflare: `npx wrangler dev --local` or `npx wrangler publish`.

To run in a browser, start a local server at the repo root and visit http://localhost:$PORT/dist/deploy/.
