# @fbmc/sfdx-plugin-url

[![Version](https://img.shields.io/npm/v/@fbmc/sfdx-plugin-url.svg)](https://npmjs.org/package/@fbmc/sfdx-plugin-url)
[![CircleCI](https://circleci.com/gh/khill-fbmc/sfdx-plugin-url/tree/master.svg?style=shield)](https://circleci.com/gh/khill-fbmc/sfdx-plugin-url/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/khill-fbmc/sfdx-plugin-url?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-plugin-url/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/khill-fbmc/sfdx-plugin-url.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/khill-fbmc/sfdx-plugin-url/badge.svg)](https://snyk.io/test/github/khill-fbmc/sfdx-plugin-url)
[![Downloads/week](https://img.shields.io/npm/dw/@fbmc/sfdx-plugin-url.svg)](https://npmjs.org/package/@fbmc/sfdx-plugin-url)
[![License](https://img.shields.io/npm/l/@fbmc/sfdx-plugin-url.svg)](https://github.com/khill-fbmc/sfdx-plugin-url/blob/master/package.json)

<!-- toc -->
* [@fbmc/sfdx-plugin-url](#fbmcsfdx-plugin-url)
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
  <!-- install -->
  <!-- usage -->
```sh-session
$ npm install -g @fbmc/sfdx-plugin-url
$ sfdx COMMAND
running command...
$ sfdx (--version)
@fbmc/sfdx-plugin-url/0.0.2 linux-x64 node-v19.2.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->

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
