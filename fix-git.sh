#!/bin/bash
# Fix stuck git rebase and push to GitHub

cd /Users/admin/Desktop/netflix-clone1/netflix-clone1

# Kill any stuck git processes
pkill -9 git || true

# Clean up rebase state
rm -rf .git/rebase-merge
rm -rf .git/rebase-apply
rm -f .git/REBASE_HEAD
rm -f .git/AUTO_MERGE
rm -f .git/MERGE_HEAD

# Reset to last known good state
git reset --hard origin/main || git reset --hard HEAD

# Pull latest
git pull origin main || true

# Add all changes
git add .

# Commit
git commit -m "checkpoint 2: Interactive React features" || echo "Nothing to commit"

# Push
git push origin main

echo "Done! Check GitHub for updates."
