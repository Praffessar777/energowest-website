const { execSync } = require('node:child_process');

try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Deployment placeholder: build completed. Add hosting logic here.');
} catch (err) {
  console.error('Deployment failed:', err);
  process.exit(1);
}
