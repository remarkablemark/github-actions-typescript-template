import * as core from '@actions/core';
import { vi } from 'vitest';

import { run } from '.';

vi.mock('@actions/core');

const mockedCore = vi.mocked(core);

beforeEach(() => {
  vi.resetAllMocks();
});

it('runs action successfully', async () => {
  const version = '1.2.3';
  mockedCore.getInput.mockReturnValueOnce(version);
  await run();
  expect(mockedCore.debug).toHaveBeenCalledWith(`version: ${version}`);
  expect(mockedCore.setOutput).toHaveBeenCalledWith('version', version);
});

it('runs action with error', async () => {
  const message = 'error';
  mockedCore.getInput.mockImplementationOnce(() => {
    throw new Error(message);
  });
  await run();
  expect(mockedCore.setFailed).toHaveBeenCalledWith(message);
});
