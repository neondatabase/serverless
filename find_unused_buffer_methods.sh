#!/usr/bin/env bash

# find all read/write/swap methods in Buffer
METHODS=$(sed -E -n 's/Buffer\.prototype\.([^ ]+).*/\1/p' node_modules/buffer/index.js | xargs | tr ' ' '|')

# bundle library, minified
npx esbuild export/index.ts \
  --bundle \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=esm \
  --target=es2020 \
  --platform=neutral \
  --main-fields=main \
  --define:debug=false \
  --minify \
  --outfile=/tmp/serverless.mjs \

# find all read/write/swap methods that only appear once in bundled library (i.e. when they're defined)
grep -oE "${METHODS}" /tmp/serverless.mjs | sort | uniq -c | sort
