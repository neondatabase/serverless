#!/usr/bin/env zsh

npx esbuild export/index.ts --bundle \
  --external:pg-native --external:./tls.wasm --inject:shims/shims.js --loader:.pem=text \
  --splitting --format=esm \
  --outdir=dist/npm \
  --target=esnext --platform=neutral --main-fields=main \
  --define:debug=false --minify

curl --silent https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/pg/index.d.ts \
  > dist/npm/index.d.ts

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

cp shims/net/tls.wasm dist/npm/
