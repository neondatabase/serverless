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
   * the database host address and returns the proxy server’s domain name.
   * Default: Neon’s proxy for Neon hosts, otherwise undefined.
  */
  wsProxy: string | ((host: string) => string);

  /**
   * Set `rootCerts` to a string comprising one or more PEM files. 
   * These are the trusted root certificates for a TLS connection to Postgres.
   * Default: the ISRG Root X1 certificate used by Let’s Encrypt.
   */
  rootCerts: string;

  /**
   * Use a secure wss: connection to the WebSocket proxy. Default: `true`. 
   */
  useSecureWebSocket: boolean;

  /**
   * Ignore requests to encrypt the pg session, for use with secure WebSockets.
   * Default: `true`. 
   */
  disableTLS: boolean;

  /**
   * Pipeline startup message, cleartext password message and first query.
   * Default: `true` for Neon hosts, `false` otherwise. 
   */
  pipelineConnect: boolean;

  /**
   * Pipeline pg SSL request and TLS handshake. Compatible only with Neon.
   * Default: `true` for Neon hosts, `false` otherwise.  
   */
  pipelineTLS: boolean;

  /**
   * Batch multiple network writes per run-loop into one WebSocket message.
   * Default: `true`. 
   */
  coalesceWrites: boolean;
  
  /**
   * When `disableSNI` is `true` we send no SNI data in the TLS handshake. 
   * On Neon, disabling SNI and including the Neon project name in the 
   * password avoids CPU-intensive SCRAM authentication.
   * Default: `true` for Neon hosts, `false` otherwise. 
   */
  disableSNI: boolean;
}

export interface ClientBase {
  neonConfig: NeonConfig;
}

export const neonConfig: NeonConfig;

' >> dist/npm/index.d.ts

# copy static asset: README
cp README.md dist/npm/
