#!/usr/bin/env bash
# Tag origin/main for release after verifying versions, CHANGELOG, and GitHub CI.
set -euo pipefail

cd "$(dirname "$0")"

die() {
  echo "error: $*" >&2
  exit 1
}

need() {
  command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"
}

json_version() {
  node -p "require('./$1').version"
}

need git
need gh
need npm
need node

[[ "$(git rev-parse --show-toplevel)" == "$(pwd)" ]] || die "run from the repository root"

echo "Fetching origin ..."
git fetch origin --tags

[[ "$(git rev-parse --abbrev-ref HEAD)" == main ]] || die "check out main before tagging a release"

if [[ -n "$(git status --porcelain)" ]]; then
  die "working tree is not clean"
fi

if [[ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]]; then
  die "local main does not match origin/main; pull or reset before tagging"
fi

SHA="$(git rev-parse HEAD)"
VERSION="$(json_version package.json)"
LOCK_VERSION="$(json_version package-lock.json)"
TAG="v$VERSION"
REPO="$(gh repo view --json nameWithOwner --jq .nameWithOwner)"

[[ "$VERSION" == "$LOCK_VERSION" ]] || die "package-lock.json version $LOCK_VERSION does not match package.json $VERSION"
[[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || die "package.json version $VERSION is not major.minor.patch"

echo "Checking npm registry..."
PUBLISHED_VERSIONS="$(npm view @neondatabase/serverless versions --json)"
if VERSION="$VERSION" node -e 'process.exit(JSON.parse(require("fs").readFileSync(0, "utf8")).includes(process.env.VERSION) ? 0 : 1)' <<<"$PUBLISHED_VERSIONS"; then
  die "version $VERSION is already published on npm"
fi

grep -Eq "^## ${VERSION}( |$)" CHANGELOG.md || die "CHANGELOG.md has no heading for $VERSION"

if git show-ref --verify --quiet "refs/tags/$TAG"; then
  die "tag $TAG already exists locally"
fi
if [[ -n "$(git ls-remote --tags origin "refs/tags/$TAG")" ]]; then
  die "tag $TAG already exists on origin"
fi

echo "Rebuilding to check committed build output is current..."
# build.sh skips building unless something in src is newer than index.js
touch src
npm run build
if [[ -n "$(git status --porcelain)" ]]; then
  git status --short >&2
  die "build output differs from what is committed; run npm run build on a branch and merge the result"
fi

echo "Checking GitHub CI for $SHA on $REPO..."
gh api "repos/${REPO}/actions/runs?head_sha=${SHA}&event=push&branch=main&per_page=100" --jq '
  [.workflow_runs[] | select(.name == "Lint" or .name == "Test")]
  | group_by(.name) | map(max_by(.created_at)) as $runs
  | (["Lint", "Test"] - ($runs | map(.name))) as $missing
  | [$runs[] | select(.status != "completed" or .conclusion != "success")] as $bad
  | if ($missing | length) > 0 then
      error("no CI runs on main for this commit: \($missing | join(", "))")
    elif ($bad | length) > 0 then
      error(
        "CI on main is not green for this commit:\n"
        + ($bad | map("  - \(.name): \(.conclusion // .status) \(.html_url)") | join("\n"))
      )
    else
      "CI green:\n" + ($runs | map("  - \(.name): \(.html_url)") | join("\n"))
    end
'

echo "Creating $TAG on $SHA..."
git tag -a "$TAG" -m "Release $TAG"
git push origin "refs/tags/$TAG"

echo "Tagged $TAG. Trigger the publish workflow for this tag next."
