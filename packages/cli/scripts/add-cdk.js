"use strict";

const chalk = require("chalk");
const spawn = require("cross-spawn");
const { logger } = require("@serverless-stack/core");
const {
  isCdkV1Dep,
  isCdkV2CoreDep,
  isCdkV2AlphaDep,
} = require("./util/cdkHelpers");

module.exports = async function (argv, config, cliInfo) {
  const npm = cliInfo.npm;
  const dryRun = argv.dryRun;
  const cdkVersion = cliInfo.cdkVersion;
  const packages = argv.packages.map((pkg) => {
    if (isCdkV1Dep(pkg)) {
      console.log(
        `\n${chalk.red(
          "❌"
        )} ${pkg} is an AWS CDK v1 package. Only v2 packages are supported.\n`
      );
      throw new Error(`Failed to add the ${pkg} package to the app`);
    } else if (isCdkV2AlphaDep(pkg)) {
      return `${pkg}@${cdkVersion}-alpha.0`;
    } else if (isCdkV2CoreDep(pkg)) {
      return `${pkg}@${cdkVersion}`;
    }
    return `${pkg}@${cdkVersion}`;
  });

  const command = npm ? "npm" : "yarn";
  const helperCopy = dryRun ? "Dry run" : "Running";

  let args = npm ? ["install", "--save-exact"] : ["add", "--exact"];

  if (argv.dev) {
    args = args.concat(npm ? "--save-dev" : "--dev");
  }

  args = args.concat(packages);

  logger.info(chalk.grey(`${helperCopy}: ${command} ${args.join(" ")}`));

  if (dryRun) {
    return;
  }

  spawn.sync(command, args, { stdio: "inherit" });
};
