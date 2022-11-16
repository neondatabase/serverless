#!/usr/bin/env zsh

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

# delete old esbuild chunks with unique (hash-based) names
rm -r dist/npm/*.js

# rebuild
npx esbuild export/index.ts --bundle \
  --external:pg-native --external:./tls.wasm --inject:shims/shims.js --loader:.pem=text \
  --splitting --format=esm --outdir=dist/npm \
  --target=esnext --platform=neutral --main-fields=main \
  $DEBUG_ARG $MINIFY_ARG

# the next bit is a bit hacky: Vercel Edge functions seem to require our shims to be defined globally and up-front, so ...

# (1) identify the possibly-minified form of `init_shims()`, as what comes straight after the first `"use strict";`
INIT_SHIMS=$(cat dist/npm/index.js | tr '\n' ' ' | grep -Eo '"use strict";[^;]+;' | head -1 | cut -d ';' -f 2 | sed -e 's/^[[:space:]]*//')

# (2) insert a call to `init_shims()` (which defines shims on `globalThis`), then assign to top-level variables
sed -i '' "s|.js\";|.js\";\n\
\n\
/* for Vercel Edge functions: BEGIN */\n\
${INIT_SHIMS};\n\
var Buffer = globalThis['Buffer'];\n\
var global = globalThis;\n\
try { if (!process.nextTick) process.nextTick = fn => setTimeout(fn, 0); } catch (err) { }\n\
/* for Vercel Edge functions: END */\n\
\n|" dist/npm/index.js

# add pg types
curl --silent https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/pg/index.d.ts \
  > dist/npm/index.d.ts

# supplement pg types with Neon config
echo '
// additions for Neon/WebSocket driver
export const neonConfig: {
  /**
   * Set `wsProxy` to use your own WebSocket proxy server. 
   * Provide either the proxy server’s domain name, or a function that takes 
   * the database host address and returns proxy server’s domain name.
   * The default is Neon’s proxy, which will forward only to Neon databases.
  */
  wsProxy: string | ((host: string) => string);

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. 
   * These are the trusted root certificates for a TLS connection to Postgres.
   * The default is the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;
  
  /**
   * When `disableSNI` is `true` and the Neon project name is included in the 
   * password, we avoid CPU-intensive SCRAM authentication.
   * The default is `true`.
   */
  disableSNI: boolean;

  /**
   * When using from a browser or other environment where we can’t simply
   * import a WebAssembly (.wasm) file, set `wasmPath` to the path to fetch it
   * from. For example: `"./tls.wasm"`.
   */
  wasmPath: string | undefined;
}' >> dist/npm/index.d.ts

# copy static assets: WebAssembly code and README
cp shims/net/tls.wasm dist/npm/
cp README.md dist/npm/
