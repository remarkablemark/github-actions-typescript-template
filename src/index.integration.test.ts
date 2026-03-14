import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, it } from 'vitest';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const nodePath = process.execPath;
const actionPath = resolve(__dirname, '../dist/index.js');

it('runs action', () => {
  const version = '1.2.3';
  process.env.INPUT_VERSION = version;
  const buffer = execFileSync(nodePath, [actionPath], {
    env: process.env,
  });
  expect(buffer.toString()).toContain(`::debug::version: ${version}`);
});
