#!/usr/bin/env node
const { execSync } = require('child_process');

// Build the project before publishing
execSync('npm run build', { stdio: 'inherit' });

// Check that a git remote called "origin" exists
let remotes = '';
try {
  remotes = execSync('git remote', { stdio: 'pipe' }).toString().trim();
} catch {
  console.log('Git is not available; skipping publish.');
  process.exit(0);
}

if (!remotes.split('\n').includes('origin')) {
  console.log('No git remote "origin" configured; skipping publish.');
  process.exit(0);
}

// Publish the dist folder to the gh-pages branch
try {
  execSync('git subtree push --prefix dist origin gh-pages', { stdio: 'inherit' });
} catch (err) {
  console.error('Failed to push to gh-pages:', err.message);
  process.exit(1);
}
