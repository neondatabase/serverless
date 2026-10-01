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

## Publish on npm

On a development branch:

1. Bump the version in `package.json`
2. `npm install` so that the `package-lock.json` version agrees
3. Ensure `CHANGELOG.md` has a heading for the new version
4. `npm run build` so the new version is baked into `index.js` / `index.mjs`
5. (Optional) `npm run format` and `npm run test` to catch early any issues that will surface in CI
6. Merge into `main` following review and approval, and wait for CI to complete

Then from a clean `main` matching `origin/main`, run `npm run tag-release`. This checks that the version is not yet published on npm, that the CHANGELOG heading exists, that a fresh `npm run build` leaves the working tree unchanged, and that the Lint and Test workflows triggered by the push to `main` succeeded for the current commit. Then it creates and pushes an annotated `vX.Y.Z` tag.

After the tag exists, trigger the publish workflow for that tag in the separate release repo.
