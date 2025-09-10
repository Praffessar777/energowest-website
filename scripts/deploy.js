const { execSync } = require("node:child_process");
const fs = require("fs");

const OUT_DIR = "docs";

try {
  // Remove previous output before building to avoid stale files
  fs.rmSync(OUT_DIR, { recursive: true, force: true });

  // Build the production assets
  execSync("npm run build", { stdio: "inherit" });

  // Copy built files from dist/ to docs/
  fs.cpSync("dist", OUT_DIR, { recursive: true });

  console.log(`Copied production build to ${OUT_DIR}/. Commit this folder and push to deploy.`);
} catch (err) {
  console.error("Deployment failed:", err);
  process.exit(1);
}
