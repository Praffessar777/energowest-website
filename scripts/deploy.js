import { execSync } from 'node:child_process';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run('npm run build');
  run('git add -f dist');
  run("git commit -m 'deploy: build'");
  try {
    run('git subtree push --prefix dist origin gh-pages');
  } finally {
    run('git reset --hard HEAD~1');
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
