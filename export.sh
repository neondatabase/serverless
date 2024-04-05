#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify --line-limit=80"
fi


# CJS code: index.js

npx esbuild export/index.ts \
  --format=cjs \
  --bundle \
  --keep-names \
  --inject:shims/shims.js \
  --target=es2020 \
  --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG


# ESM code: index.mjs

npx esbuild export/index.ts \
  --format=esm \
  --bundle \
  --keep-names \
  --inject:shims/shims.js \
  --target=es2020 \
  --outfile=dist/npm/index.mjs \
  $DEBUG_ARG $MINIFY_ARG

# CJS TS types: index.d.ts

# updated manually


# ESM TS types: index.d.mts

echo "
// DON'T EDIT THIS FILE
// It's a simple automatic copy of index.d.ts
" > dist/npm/index.d.mts
cat dist/npm/index.d.ts >> dist/npm/index.d.mts


# static assets

cp LICENSE README.md CHANGELOG.md CONFIG.md DEPLOY.md DEVELOP.md dist/npm/

# Prepare jsr package

cp dist/npm/index.d.ts dist/jsr/
echo "/// <reference types=\"./index.d.ts\" />
" > dist/jsr/index.js
cat dist/npm/index.mjs >> dist/jsr/index.js
cp LICENSE README.md dist/jsr/


# Note: --keep-names adds about 10KB to the bundle size, but it gives us error
# messages and stack traces with no short, cryptic variable names

# WITHOUT (see `xe`, `pe`):

# Uncaught:
# xe [NeonDbError]: db error: ERROR: function xnow() does not exist
# HINT: No function matches the given name and argument types. You might need to add explicit type casts.

# Caused by:
#     ERROR: function xnow() does not exist
#     HINT: No function matches the given name and argument types. You might need to add explicit type casts.
#     at processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at pe (/Users/george/Development/neon/pgshims/dist/npm/index.js:1459:56) {
#   code: '42883',
#   sourceError: undefined
# }

# WITH:

# Uncaught NeonDbError: db error: ERROR: function xnow() does not exist
# HINT: No function matches the given name and argument types. You might need to add explicit type casts.

# Caused by:
#     ERROR: function xnow() does not exist
#     HINT: No function matches the given name and argument types. You might need to add explicit type casts.
#     at processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at execute (/Users/george/Development/neon/pgshims/dist/npm/index.js:1539:48) {
#   code: '42883',
#   sourceError: undefined
# }
