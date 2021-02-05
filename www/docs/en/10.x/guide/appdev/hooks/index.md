---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Hooks Guide
toc_title: Hooks
description: List of hooks supported by the Cordova CLI.
---

# Hooks

## Introduction

Cordova Hooks represent special scripts which could be added by application and
plugin developers or even by your own build system  to customize cordova commands.

Cordova hooks allow you to perform special activities around cordova commands. For example,
you may have a custom tool that checks for code formatting in your javascript file. And, you
would like to run this tool before every build. In such a case, you could use a
'before_build' hook and instruct the cordova run time to run the custom tool to be invoked
before every build.

Hooks might be related to your application activities such as `before_build`,
`after_build`, etc. Or, they might be related to the plugins of your application. For example,
hooks such as `before_plugin_add`, `after_plugin_add`, etc applies to plugin related
activities. These hooks can be associated with all plugins within your application or
be specific to only one plugin.

Cordova supports the following hook types:

<!-- START HTML -->

<table class="hooks" width="100%">
    <col width="20%">
    <col width="30%">
    <col width="50%">
    <thead>
        <tr>
            <th>Hook Type</th>
            <th>Associated Cordova Commands</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-col="beforeplatformadd">before_platform_add</th>
            <td data-col="code" rowspan="2" ><code>cordova platform add</code></td>
            <td rowspan="2" class="description" data-col="description">To be executed before and after adding a platform.</td>
        </tr>
        <tr>
            <th data-col="afterplatformadd">after_platform_add</th>
        </tr>
        <tr>
            <th data-col="beforeplatformrm">before_platform_rm</th>
            <td data-col="code" rowspan="2"><code>cordova platform rm</code></td>
            <td rowspan="2" class="description" data-col="description">To be executed before and after removing a platform.</td>
        </tr>
        <tr>
            <th data-col="afterplatformrm">after_platform_rm</th>
        </tr>
        <tr>
            <th data-col="beforeplatformls">before_platform_ls</th>
            <td data-col="code" rowspan="2"><code>cordova platform ls</code></td>
            <td rowspan="2" class="description" data-col="description">To be executed before and after listing the installed and available platforms.</td>
        </tr>
        <tr>
            <th data-col="afterplatformls">after_platform_ls</th>
        </tr>
        <tr>
            <th data-col="beforeprepare">before_prepare</th>
            <td data-col="code" rowspan="2"><code>cordova prepare</code><br/><code>cordova platform add</code><br/><code>cordova build</code><br/><code>cordova run</code></td>
            <td rowspan="2" data-col="description">To be executed before and after preparing your application.</td>
        </tr>
        <tr>
            <th data-col="afterprepare">after_prepare</th>
        </tr>
        <tr>
            <th data-col="beforecompile">before_compile</th>
            <td data-col="code" rowspan="2"><code>cordova compile</code><br/><code>cordova build</code></td>
            <td rowspan="2" data-col="description">To be executed before and after compiling your application.</td>
        </tr>
        <tr>
            <th data-col="aftercompile">after_compile</th>
        </tr>
        <tr>
            <th data-col="beforedeploy">before_deploy</th>
            <td data-col="code"><code>cordova emulate</code><br/><code>cordova run</code></td>
            <td data-col="description">To be executed before deploying your application.</td>
        </tr>
        <tr>
            <th data-col="beforebuild">before_build</th>
            <td data-col="code" rowspan="2"><code>cordova build</code></td>
            <td rowspan="2" data-col="description">To be executed before and after building your application.</td>
        </tr>
        <tr>
            <th data-col="afterbuild">after_build</th>
        </tr>
        <tr>
            <th data-col="beforeemulate">before_emulate</th>
            <td data-col="code" rowspan="2"><code>cordova emulate</code></td>
            <td rowspan="2" data-col="description">To be executed before and after emulating your application.</td>
        </tr>
        <tr>
            <th data-col="afteremulate">after_emulate</th>
        </tr>
        <tr>
            <th data-col="beforerun">before_run</th>
            <td data-col="code" rowspan="2"><code>cordova run</code></td>
            <td rowspan="2" data-col="description">To be executed before and after running your application.</td>
        </tr>
        <tr>
            <th data-col="afterrun">after_run</th>
        </tr>
        <tr>
            <th data-col="beforeserve">before_serve</th>
            <td data-col="code" rowspan="2"><code>cordova serve</code></td>
            <td rowspan="2" data-col="description">To be executed before and after serving your application.</td>
        </tr>
        <tr>
            <th data-col="afterserve">after_serve</th>
        </tr>
        <tr>
            <th data-col="beforeclean">before_clean</th>
            <td data-col="code" rowspan="2"><code>cordova clean</code></td>
            <td rowspan="2" data-col="description">To be executed before and after cleaning your application.</td>
        </tr>
        <tr>
            <th data-col="afterclean">after_clean</th>
        </tr>
        <tr>
            <th data-col="beforepluginadd">before_plugin_add</th>
            <td data-col="code" rowspan="2"><code>cordova plugin add</code></td>
            <td rowspan="2" data-col="description">To be executed before and after adding a plugin.</td>
        </tr>
        <tr>
            <th data-col="afterpluginadd">after_plugin_add</th>
        </tr>
        <tr>
            <th data-col="beforepluginrm">before_plugin_rm</th>
            <td data-col="code" rowspan="2"><code>cordova plugin rm</code></td>
            <td rowspan="2" data-col="description">To be executed before and after removing a plugin.</td>
        </tr>
        <tr>
            <th data-col="afterpluginrm">after_plugin_rm</th>
        </tr>
        <tr>
            <th data-col="beforepluginls">before_plugin_ls</th>
            <td data-col="code" rowspan="2"><code>cordova plugin ls</code></td>
            <td rowspan="2" data-col="description">To be executed before and after listing the plugins in your application.</td>
        </tr>
        <tr>
            <th data-col="afterpluginls">after_plugin_ls</th>
        </tr>
        <tr>
            <th data-col="beforeplugininstall">before_plugin_install</th>
            <td data-col="code" rowspan="2"><code>cordova plugin add</code></td>
            <td rowspan="2" data-col="description">To be executed before and after installing a plugin (to the platforms). Plugin hooks in plugin.xml are executed for a plugin being installed only</td>
        </tr>
        <tr>
            <th data-col="afterplugininstall">after_plugin_install</th>
        </tr>
        <tr>
            <th data-col="beforepluginuninstall">before_plugin_uninstall</th>
            <td data-col="code" rowspan="2"><code>cordova plugin rm</code></td>
            <td data-col="description">To be executed before uninstalling a plugin (from the platforms).Plugin hooks in plugin.xml are executed for a plugin being installed only</td>
        </tr>
    </tbody>
</table>

<!-- END HTML -->

## Ways to define hooks

### Config.xml

Hooks could be defined in project's `config.xml` using `<hook>` elements, for example:

```xml
<hook type="before_build" src="scripts/appBeforeBuild.bat" />
<hook type="before_build" src="scripts/appBeforeBuild.js" />
<hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />

<platform name="android">
    <hook type="before_build" src="scripts/android/appAndroidBeforeBuild.bat" />
    <hook type="before_build" src="scripts/android/appAndroidBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/android/appAndroidBeforePluginInstall.js" />
    ...
</platform>

<platform name="windows">
    <hook type="before_build" src="scripts/windows/appWinBeforeBuild.bat" />
    <hook type="before_build" src="scripts/windows/appWinBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/windows/appWinBeforePluginInstall.js" />
    ...
</platform>
```

### Plugin hooks (plugin.xml)

As a plugin developer you can define hook scripts using `<hook>` elements in a `plugin.xml` like that:

```xml
<hook type="before_plugin_install" src="scripts/beforeInstall.js" />
<hook type="after_build" src="scripts/afterBuild.js" />

<platform name="android">
    <hook type="before_plugin_install" src="scripts/androidBeforeInstall.js" />
    <hook type="before_build" src="scripts/androidBeforeBuild.js" />
    ...
</platform>
```

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin hooks will be fired
exclusively for the plugin being installed/uninstalled.

### Order of Hooks execution

#### Based on Hooks Definition

Hook scripts for one given hook run serially in the order of appearance in their file with application hooks from `config.xml` running before plugin hooks from `plugins/.../plugin.xml`.

#### Based on the Internal order of execution

The internal order of execution of hooks is fixed.

##### Example 1 (cordova platform add)
If there are hooks associated with `before_platform_add`, `after_platform_add`, `before_prepare`, `after_prepare`,
`before_plugin_install` and `after_plugin_install` (and assuming you have one plugin installed on your project),
adding a new platform will execute the hooks in the following order:

```
before_platform_add
    before_prepare
    after_prepare
    before_plugin_install
    after_plugin_install
after_platform_add
```

##### Example 2 (cordova build)
If there are hooks associated with `before_prepare`, `after_prepare`, `before_compile`, `after_compile`, `before_build`
and `after_build` - running a build command will execute the hooks in the following order:

```
before_build
    before_prepare
    after_prepare
    before_compile
    after_compile
after_build
```

## Script Interface

### Javascript

If you are writing hooks using Node.js you should use the following module definition:

```javascript
module.exports = function(context) {
    ...
}
```

Here is an example that showcases the contents of the `context` object:

```javascript
{
  // The type of hook being run
  hook: 'before_plugin_install',

  // Absolute path to the hook script that is currently executing
  scriptLocation: '/foo/scripts/appBeforePluginInstall.js',

  // The CLI command that lead to this hook being executed
  cmdLine: 'cordova plugin add plugin-withhooks',

  // The options associated with the current operation.
  // WARNING: The contents of this object vary among the different
  // operations and are currently not documented anywhere.
  opts: {
    projectRoot: '/foo',

    cordova: {
      platforms: ['android'],
      plugins: ['plugin-withhooks'],
      version: '0.21.7-dev'
    },

    // Information about the plugin currently operated on.
    // This object will only be passed to plugin hooks scripts.
    plugin: {
      id: 'plugin-withhooks',
      pluginInfo: { /* ... */ },
      platform: 'android',
      dir: '/foo/plugins/plugin-withhooks'
    }
  },

  // A reference to Cordova's API
  cordova: { /* ... */ }
}

```

You can also require additional Cordova modules in your script using `context.requireCordovaModule` in the following way:

```javascript
const cordovaCommon = context.requireCordovaModule('cordova-common');
```

You can make your scripts asynchronous using Promises.
Here is an example that just waits for a second and then prints the amount of milliseconds spent waiting:

```javascript
module.exports = context => {
    return new Promise(resolve => {
        const start = Date.now();
        setTimeout(() => resolve(Date.now() - start), 1000);
    }).then(msWaited => {
        console.log(`${context.scriptLocation} waited ${msWaited} ms`);
    });
};
```

### Non-javascript

Non-javascript scripts are run via Node child_process spawn from the project's root directory and have the root directory passed as the first argument. All other options are passed to the script using environment variables:

Environment Variable Name     | Description
------------------------------|--------------------------------------------
CORDOVA_VERSION               | The version of the Cordova-CLI.
CORDOVA_PLATFORMS             | Comma separated list of platforms that the command applies to (e.g: android, ios).
CORDOVA_PLUGINS               | Comma separated list of plugin IDs that the command applies to (e.g: cordova-plugin-file-transfer, cordova-plugin-file).
CORDOVA_HOOK                  | Path to the hook that is being executed.
CORDOVA_CMDLINE               | The exact command-line arguments passed to cordova (e.g: cordova run ios --emulate).

If a script returns a non-zero exit code, then the parent cordova command will be aborted.

> __Note__: we highly recommend writing your hooks using Node.js so that they are cross-platform, see [Javascript](#link-javascript) section above.

#### Windows Quirks

If you are working on Windows, and your hook scripts aren't `*.bat` files, Cordova CLI will expect a shebang line as the first line of the script. This way it knows the interpreter it needs to use to launch the script. A shebang line for a Python script could look like this:

```
#!/usr/bin/env python
```


## Sample Usage

This sample demonstrates Cordova hooks usage to trace to the console output the
size of generated .apk file for Android platform.

Create blank Cordova app and add the following definition to `config.xml` to
tell Cordova to run `afterBuild.js` script after each platform build.

```xml
<hook type="after_build" src="scripts/afterBuild.js" />
```

Create `scripts/afterBuild.js` file and add the following implementation.
We use async version of `fs.stat` method to demonstrate how async functions
can be used in hooks.

```javascript
const fs = require('fs');
const util = require('util');
const stat = util.promisify(fs.stat);

module.exports = function(ctx) {
    // Make sure android platform is part of build
    if (!ctx.opts.platforms.includes('android')) return;

    const platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
    const apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');

    return stat(apkFileLocation).then(stats => {
      console.log(`Size of ${apkFileLocation} is ${stats.size} bytes`);
    });
};
```

Parameter `ctx` in example above is passed by Cordova and represents execution
context such as script full path, target platform, command-line arguments, etc and
also exposes additional helper functionality. See `Script Interface` section above
for more details.

You can now add android platform and execute build.

```
cordova platform add android
..
cordova build
..
Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
```

More good usage examples could be found in [Three Hooks Your Cordova Phone Gap Project needs][Devgirl_Hooks_Link]

[Devgirl_Hooks_Link]: http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/
