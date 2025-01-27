#!/usr/bin/env bash 
set -ex

# this is used so that we can build only once for all the different testing modes
if [ -n "$NEON_NO_BUILD" ]; then exit; fi


if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify --line-limit=100"
fi


# == CJS code: index.js ==

npx esbuild src/index.ts \
  --format=cjs \
  --bundle \
  --keep-names \
  --inject:src/shims/shims.js \
  --define:BUNDLE_EXT=\"js\" \
  --target=es2020 \
  --outfile=index.js \
  $DEBUG_ARG $MINIFY_ARG


# == ESM code: index.mjs ==

npx esbuild src/index.ts \
  --format=esm \
  --bundle \
  --keep-names \
  --inject:src/shims/shims.js \
  --define:BUNDLE_EXT=\"mjs\" \
  --target=es2020 \
  --outfile=index.mjs \
  $DEBUG_ARG $MINIFY_ARG


# == types ==

npx tsc

# remove global declarations from types
sed -i.orig -r \
  -e "/^declare global [{]$/,/^[}]$/d" \
  build/types/shims/net/index.d.ts

# bundle types into one file
npx @microsoft/api-extractor run --local

# remove private/protected fields and empty exports
sed -r \
  -e '/^ *private [^;]+;$/d' \
  -e '/^ *protected [^;]+;$/d' \
  -e '/^export [{] *[}]$/d' \
  build/generated.d.ts > index.d.ts

# copy to .d.mts (for ESM)
cp index.d.ts index.d.mts


# Note: --keep-names for esbuild adds about 10KB to the bundle size, but it
# gives us error messages + stack traces with no short, cryptic variable names

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
