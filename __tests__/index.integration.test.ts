import { execFileSync } from 'child_process';
import { resolve } from 'path';

it('runs action', () => {
  process.env.INPUT_VERSION = '1.2.3';
  expect(
    execFileSync(process.execPath, [resolve(__dirname, '../dist/index.js')], {
      env: process.env,
    }).toString()
  ).toContain(`::debug::version: ${process.env.INPUT_VERSION}`);
});
