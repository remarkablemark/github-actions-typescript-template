import { execFileSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const nodePath = process.execPath;
const actionPath = resolve(__dirname, '../dist/index.mjs');

it('runs action', () => {
  const version = '1.2.3';
  process.env.INPUT_VERSION = version;
  const buffer = execFileSync(nodePath, [actionPath], {
    env: process.env,
  });
  expect(buffer.toString()).toContain(`::debug::version: ${version}`);
});
