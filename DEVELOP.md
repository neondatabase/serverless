# Development and contributing

The code is at https://github.com/neondatabase/serverless.

## Test

To run the tests:

- Install Node + npm, Bun and Deno

- Copy `.env.template` to `.env.test` and fill in the blanks.

- `npm install`

- `npm test`

## `npm install` a specific branch or commit

`npm install @neondatabase/serverless@github:neondatabase/serverless#${BRANCH_OR_COMMIT}`

## Publish

Tests must be passing. To update and publish the npm & JSR packages:

- `npm version [patch|minor|major]`
