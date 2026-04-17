# Development and contributing

The code is at https://github.com/neondatabase/serverless.

To ensure code passes format checks and build output is up to date before commit, please copy `pre-commit` to `.git/hooks`.

## Test

To run tests:

- Install Node LTS + npm, Bun and Deno

- Copy `.env.template` to `.env.test` and fill in the blanks.

- `npm install`

- `npm test`

## `npm install` a specific branch or commit

```bash
npm install @neondatabase/serverless@github:neondatabase/serverless#BRANCH_OR_COMMIT
```

## Publish on npm and JSR

Tests must be passing locally, the repo must be clean, and `CHANGELOG.md` must include notes for the new version. Then run `npm version $BUMP --ignore-scripts=false` where `$BUMP` is `patch`, `minor` or `major`.
