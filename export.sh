#!/usr/bin/env zsh

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

npx esbuild export/index.ts --bundle \
  --inject:shims/shims.js --loader:.pem=text \
  --format=esm --target=es2022 --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG

# add pg types
curl --silent https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/pg/index.d.ts \
  > dist/npm/index.d.ts

# supplement pg types with Neon config
echo '
// additions for Neon/WebSocket driver

interface NeonConfig {
  /**
   * Set `wsProxy` to use your own WebSocket proxy server. 
   * Provide either the proxy server’s domain name, or a function that takes
   * the database host address and port and returns the proxy server URL
   * (without protocol).
   * Example: (host, port) => `myproxy.example.net?address=${host}:${port}`
   * Default: Neon’s proxy for Neon hosts, `undefined` otherwise.
  */
  wsProxy: string | ((host: string, port: number | string) => string);

  /**
   * Use a secure wss: connection to the WebSocket proxy. 
   * Default: `true`.
   */
  useSecureWebSocket: boolean;

  /**
   * Pipeline startup message, cleartext password message and first query.
   * Default: `"password"` for Neon hosts, `false` otherwise.
   */
  pipelineConnect: "password" | false;

  /**
   * Pipeline pg SSL request and TLS handshake when `useSecureWebSocket` is
   * `false`. Currently compatible only with Neon hosts.
   * Default: `true` for Neon hosts, `false` otherwise.
   */
  pipelineTLS: boolean;

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. These are
   * the trusted root certificates for a TLS connection to Postgres when
   * `useSecureWebSocket` is `false`.
   * Default: the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;

  /**
   * Batch multiple network writes per run-loop into one WebSocket message.
   * Default: `true`.
   */
  coalesceWrites: boolean;
  
  /**
   * When `disableSNI` is `true` and `useSecureWebSocket` is `false` we send no
   * SNI data in the TLS handshake. On Neon, disabling SNI and including the
   * Neon project name in the password avoids CPU-intensive SCRAM
   * authentication, but this is only relevant for earlier iterations of Neon 
   * WebSocket support.
   * Default: `true` for Neon hosts, `false` otherwise.
   */
  disableSNI: boolean;
}

export interface ClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig & { 
  /**
   * On Neon, disabling SNI and including the Neon project name in the password
   * (per this option) avoids CPU-intensive SCRAM authentication, but this is
   * only relevant for earlier iterations of Neon WebSocket support.
   * Default: `false`.
   */
  addNeonProjectToPassword: boolean;
};

' >> dist/npm/index.d.ts

# copy static asset: README
cp README.md dist/npm/
