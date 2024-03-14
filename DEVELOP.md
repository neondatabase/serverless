# Development and contributing

The code is at https://github.com/neondatabase/serverless. Most of the interesting stuff is in `shims/net/index.ts` and the `export/` folder.

- To update the npm & jsr package:

```bash
npm run export
cd dist/npm
npm version patch  # or minor or major
npm publish

# Copy npm version
jq --arg v "$(jq -r .version dist/npm/package.json)" '.version = $v' dist/jsr/jsr.json > dist/jsr/jsr.json.tmp && mv dist/jsr/jsr.json.tmp dist/jsr/jsr.json

# Publish jsr package
npx jsr publish
```

- To run or deploy the simple test app on Cloudflare, create a `.dev.vars` file containing `NEON_DB_URL=postgres://connection_string`, run `npx wrangler dev --local` or `npx wrangler publish`.

- To run the latencies test app in a browser, create a `.dev.vars` file as above, run `npm run browser` and visit `http://localhost:7070/dist/browser/`. To include debug output and avoid minification, use `npm run browserDebug` instead.

- To run the latencies test app in node, create a `.dev.vars` file as above and run `npm run node`. To include debug output and avoid minification, use `npm run nodeDebug` instead.
