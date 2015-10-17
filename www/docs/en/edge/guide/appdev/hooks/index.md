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
---

# Hooks Guide

Cordova Hooks represent special scripts which could be added by application and
plugin developers or even by your own build system  to customize cordova commands.
Hook scripts could be defined by adding them to the special predefined folder 
(`/hooks`) or via configuration files (`config.xml` and `plugin.xml`) and run
serially in the following order:

* Application hooks from `/hooks`;
* Application hooks from `config.xml`;
* Plugin hooks from `plugins/.../plugin.xml`.

__Note__: `/hooks` directory is considered deprecated in favor of the hook elements
in config.xml and plugin.xml.

## Supported hook types
The following hook types are supported:

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only

## Ways to define hooks
### Via `/hooks` directory

__Note__: this method is considered deprecated in favor of the hook elements in config.xml and plugin.xml.

To execute custom action when corresponding hook type is fired, use hook type as a name for a subfolder inside 'hooks' directory and place you script file here, for example:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js

When using these hooks, they will always be run as executable files, not as loadable JavaScript modules.
__Remember__: Make your scripts executable in this case.

### Config.xml

Hooks can be defined in project's `config.xml` using `<hook>` elements, for example:

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />

    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>

    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>

### Plugin hooks (plugin.xml)

As a plugin developer you can define hook scripts using `<hook>` elements in a `plugin.xml` like that:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />

    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin hooks will be fired exclusively for the plugin being installed/uninstalled.

## Script Interface

### Javascript

If you are writing hooks using Node.js you should use the following module definition:
```javascript
module.exports = function(context) {
    ...
}
```

You can make your scipts async using Q:
```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

`context` object contains hook type, executed script full path, hook options, command-line arguments passed to Cordova and top-level "cordova" object:
```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```
`context.opts.plugin` object will only be passed to plugin hooks scripts.

You can also require additional Cordova modules in your script using `context.requireCordovaModule` in the following way:
```javascript
var Q = context.requireCordovaModule('q');
```

__Note__:  new module loader script interface is used for the `.js` files defined via `config.xml` or `plugin.xml` only.
For compatibility reasons hook files specified via `/hooks` folders are run via Node child_process spawn, see 'Non-javascript' section below.

### Non-javascript

__Note__: we highly recommend writing your hooks using Node.js so that they are cross-platform, see 'Javascript' section above.

Non-javascript scripts are run via Node child_process spawn from the project's root directory and have the root directory passes as the first argument. All other options are passed to the script using environment variables:

* CORDOVA_VERSION - The version of the Cordova-CLI.
* CORDOVA_PLATFORMS - Comma separated list of platforms that the command applies to (e.g.: android, ios).
* CORDOVA_PLUGINS - Comma separated list of plugin IDs that the command applies to (e.g.: org.apache.cordova.file, org.apache.cordova.file-transfer)
* CORDOVA_HOOK - Path to the hook that is being executed.
* CORDOVA_CMDLINE - The exact command-line arguments passed to cordova (e.g.: cordova run ios --emulate)

If a script returns a non-zero exit code, then the parent cordova command will be aborted.

Also, note that even if you are working on Windows, and in case your hook scripts aren't bat files (which is recommended, if you want your scripts to work in non-Windows operating systems) Cordova CLI will expect a shebang line as the first line for it to know the interpreter it needs to use to launch the script. The shebang line should match the following example:

    #!/usr/bin/env [name_of_interpreter_executable]

## Sample Usage

This sample demonstrates Cordova hooks usage to trace to the console output the
size of generated .apk file for Android platform.

Create blank Cordova app and add the following definition to `config.xml` to
tell Cordova to run `afterBuild.js` script after each platform build.

    <hook type="after_build" src="scripts/afterBuild.js" />

Create `scripts/afterBuild.js` file and add the following implementation. 
We use async version of `fs.stat` method to demonstrate how async functionality
could be done via hooks.

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();

        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');

        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });

        return deferral.promise;
    };

Parameter `ctx` in example above is passed by Cordova and represents execution
context such as script full path, target platform, command-line arguments, etc and
also exposes additional helper functionality. See `Script Interface` section above
for more details.

You can now add android platform and execute build.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes

More good usage examples could be found here:

[http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/](http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/)
