#!/usr/bin/env node
'use strict';

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const clientPath = path.join(root, 'node_modules/pg/lib/client.js');
const patchPath = path.join(root, 'patches/pg-8.8.0-client-ended.patch');

if (!fs.existsSync(clientPath)) {
  process.exit(0);
}

const client = fs.readFileSync(clientPath, 'utf8');
if (client.includes('this._ended = false')) {
  process.exit(0);
}

const result = spawnSync(
  'patch',
  ['-p1', '-i', path.relative(path.join(root, 'node_modules/pg'), patchPath)],
  {
    cwd: path.join(root, 'node_modules/pg'),
    stdio: 'inherit',
    encoding: 'utf8',
  },
);

if (result.status !== 0) {
  console.error('Failed to apply patches/pg-8.8.0-client-ended.patch');
  process.exit(result.status ?? 1);
}
