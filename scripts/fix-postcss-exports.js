const fs = require('fs');
const path = require('path');

const targetPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'postcss-safe-parser',
  'node_modules',
  'postcss',
  'package.json',
);

if (!fs.existsSync(targetPath)) {
  console.log('postcss package not found, skipping export patch.');
  process.exit(0);
}

const packageJson = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
const exportsField = packageJson.exports || {};

if (!exportsField['./lib/*']) {
  exportsField['./lib/*'] = './lib/*.js';
  packageJson.exports = exportsField;
  fs.writeFileSync(targetPath, `${JSON.stringify(packageJson, null, 2)}\n`);
  console.log('Added wildcard export to postcss for Node 20+/22+ compatibility.');
} else {
  console.log('Wildcard export already present; no changes needed.');
}
