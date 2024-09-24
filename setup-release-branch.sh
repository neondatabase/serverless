#!/bin/bash
set -eux

# Generate a unique branch name using a timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
NEW_BRANCH="release-branch-$TIMESTAMP"

# Create an empty tree
git hash-object -t tree /dev/null

# Create a new commit with just the contents of dist/npm
new_commit=$(git commit-tree -m "Add npm distribution files" "$(git write-tree --prefix=dist/npm)")

# Create the new branch pointing to this commit
git update-ref "refs/heads/$NEW_BRANCH" "$new_commit"

# Push the new branch to the remote repository
git push origin "$NEW_BRANCH"

set +x
echo "New branch '$NEW_BRANCH' has been created and pushed with the contents of /dist/npm"
echo "----------------------------"
echo "Install this branch using:"
echo "npm install '@neondatabase/serverless'@'github:neondatabase/serverless#$NEW_BRANCH'"
set -x
