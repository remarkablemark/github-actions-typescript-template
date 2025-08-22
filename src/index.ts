import * as core from '@actions/core';

export async function run() {
  try {
    const version = core.getInput('version');
    core.debug(`version: ${version}`);
    core.setOutput('version', version);
  } catch (error) {
    /* istanbul ignore else */
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
