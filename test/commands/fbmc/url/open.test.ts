import { execCmd } from "@salesforce/cli-plugins-testkit";
import { expect, test } from "@salesforce/command/lib/test";

// import { ensureJsonMap, ensureString } from '@salesforce/ts-types';
import { FbmcUrlOpenJsonOutput } from "../../../../src/commands/force/org/url/open";

const COMMAND = "fbmc:url:open";

describe(`Testing "sfdx ${COMMAND}"`, () => {
  test
    .withOrg({ username: "test@org.com" }, true)
    .command([COMMAND, "--targetusername", "test@org.com"])
    .it("runs fbmc:url:open --targetusername test@org.com", (ctx) => {
      expect(ctx.stdout).to.contain(
        "Hello world! This is org: Super Awesome Org and I will be around until Tue Mar 20 2018!"
      );
    });

  test.it("should provide typed and parsed JSON output", () => {
    const { result } = execCmd<FbmcUrlOpenJsonOutput>(`${COMMAND} -r --json`).jsonOutput;

    expect(result.orgId).to.be.a("string");
    expect(result.destinationUrl).to.be.a("string");
  });
});
