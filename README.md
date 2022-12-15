# @fbmc/sfdx-plugin-org-url-open

[![Version](https://img.shields.io/npm/v/@fbmc/sfdx-plugin-org-url-open.svg)](https://npmjs.org/package/@fbmc/sfdx-plugin-org-url-open)
[![CircleCI](https://circleci.com/gh/khill-fbmc/sfdx-plugin-org-url-open/tree/master.svg?style=shield)](https://circleci.com/gh/khill-fbmc/sfdx-plugin-org-url-open/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/khill-fbmc/sfdx-plugin-org-url-open?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-plugin-org-url-open/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/khill-fbmc/sfdx-plugin-org-url-open.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/khill-fbmc/sfdx-plugin-org-url-open/badge.svg)](https://snyk.io/test/github/khill-fbmc/sfdx-plugin-org-url-open)
[![Downloads/week](https://img.shields.io/npm/dw/@fbmc/sfdx-plugin-org-url-open.svg)](https://npmjs.org/package/@fbmc/sfdx-plugin-org-url-open)
[![License](https://img.shields.io/npm/l/@fbmc/sfdx-plugin-org-url-open.svg)](https://github.com/khill-fbmc/sfdx-plugin-org-url-open/blob/master/package.json)

<!-- toc -->
* [@fbmc/sfdx-plugin-org-url-open](#fbmcsfdx-plugin-org-url-open)
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
    <!-- install -->
    <!-- usage -->
```sh-session
$ npm install -g @fbmc/sfdx-plugin-org-url-open
$ sfdx COMMAND
running command...
$ sfdx (--version)
@fbmc/sfdx-plugin-org-url-open/0.1.0 linux-x64 node-v19.2.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx force:org:url:open [-r] [-p <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgurlopen--r--p-string--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:org:url:open [-r] [-p <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Open or fetch a URL from your Organization

```
USAGE
  $ sfdx force:org:url:open [-r] [-p <string>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --path=<value>                                                                path to append to the instanceUrl
  -r, --return                                                                      boolean flag to prevent opening and
                                                                                    return the URL
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --targetdevhubusername=<value>                                                username or alias for the dev hub
                                                                                    org; overrides default dev hub org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Open or fetch a URL from your Organization

EXAMPLES
  $ sfdx url:open --targetusername myOrg@example.com --targetdevhubusername devhub@org.com

  $ sfdx url:open -u myOrg@example.com -p lightning/setup/ObjectManager
```

_See code: [src/commands/force/org/url/open.ts](https://github.com/fortunabmc/sfdx-plugin-org-url-open/blob/v0.1.0/src/commands/force/org/url/open.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->

# Debugging your plugin

We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command:

1. Start the inspector

If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch:

```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```

Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:

```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program.
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
   <br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
   Congrats, you are debugging!
