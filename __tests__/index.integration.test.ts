import { execFileSync } from 'child_process';
import { resolve } from 'path';

it('runs action', () => {
  process.env['INPUT_VERSION'] = '1.2.3';
  expect(
    execFileSync(process.execPath, [resolve(__dirname, '../dist/index.js')], {
      env: process.env,
    }).toString()
  ).toMatchInlineSnapshot(`
    "::debug::version: 1.2.3

    ::set-output name=version::1.2.3
    "
  `);
});
