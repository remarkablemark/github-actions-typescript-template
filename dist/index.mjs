import * as e from "@actions/core";
//#region src/index.ts
async function t() {
	try {
		let t = e.getInput("version");
		e.debug(`version: ${t}`), e.setOutput("version", t);
	} catch (t) {
		/* istanbul ignore else */
		t instanceof Error && e.setFailed(t.message);
	}
}
t();
//#endregion
export { t as run };
