import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, it } from 'vitest';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const nodePath = process.execPath;
const actionPath = resolve(__dirname, '../dist/index.js');

it('runs action', () => {
  const result = spawnSync(nodePath, [actionPath], {
    env: {
      ...process.env,
      INPUT_VERSION: '1.2.3',
    },
    stdio: 'pipe',
  });

  if (result.status !== 0) {
    /* eslint-disable no-console */
    console.error('stdout:', String(result.stdout));
    console.error('stderr:', String(result.stderr));
    /* eslint-enable no-console */
  }

  expect(result.status).toBe(0);
});
