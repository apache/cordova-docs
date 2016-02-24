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

title: Plugin Development Guide
---

# Plugin Development Guide

A _plugin_ is a package of injected code that allows the Cordova webview within
which the app renders to communicate with the native platform on
which it runs.  Plugins provide access to device and platform
functionality that is ordinarily unavailable to web-based apps.  All
the main Cordova API features are implemented as plugins, and many
others are available that enable features such as bar code scanners,
NFC communication, or to tailor calendar interfaces. There is a
[registry](http://plugins.cordova.io) of available plugins.

Plugins comprise a single JavaScript interface along with
corresponding native code libraries for each supported platform.  In essence
this hides the various native code implementations behind a common
JavaScript interface.

This section steps through a simple _echo_ plugin that passes a string from
JavaScript to the native platform and back, one that you can use as a
model to build far more complex features.  This section discusses the
basic plugin structure and the outward-facing JavaScript interface.
For each corresponding native interface, see the list at the end of
this section.

In addition to these instructions, when preparing to write a plugin it
is best to look over
[existing plugins](http://cordova.apache.org/#contribute)
for guidance.

## Building a Plugin

Application developers use the CLI's `plugin add` command (discussed
in The Command-Line Interface) to apply a plugin to a project. The
argument to that command is the URL for a _git_ repository containing
the plugin code.  This example implements Cordova's Device API:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

The plugin repository must feature a top-level `plugin.xml` manifest
file. There are many ways to configure this file, details for which
are available in the [Plugin Specification](../../../plugin_ref/spec.html). This abbreviated version of
the `Device` plugin provides a simple example to use as a model:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="cordova-plugin-device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>

The top-level `plugin` tag's `id` attribute uses the same
reverse-domain format to identify the plugin package as the apps to
they're added.  The `js-module` tag specifies the path to the common
JavaScript interface.  The `platform` tag specifies a corresponding
set of native code, for the `ios` platform in this case.  The
`config-file` tag encapsulates a `feature` tag that is injected into
the platform-specific `config.xml` file to make the platform aware of
the additional code library.  The `header-file` and `source-file` tags
specify the path to the library's component files.

## Validating a Plugin

You can use the `plugman` utility to check whether the plugin installs
correctly for each platform.  Install `plugman` with the following
[node](http://nodejs.org/) command:

        $ npm install -g plugman

You need an valid app source directory, such as the top-level `www`
directory included in a default CLI-generated project as described in
[The Command-Line Interface](../../cli/index.html).  Make sure the app's `index.html` home
page reference the name of the plugin's JavaScript interface, as if it
were in the same source directory:

        <script src="myplugin.js"></script>

Then run a command such as the following to test whether iOS
dependencies load properly:

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin

For details on `plugman` options, see [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html).
For information on how to actually _debug_ plugins, see each
platform's native interface listed at the bottom of this page.

## The JavaScript Interface

The JavaScript provides the front-facing interface, making it perhaps
the most important part of the plugin.  You can structure your
plugin's JavaScript however you like, but you need to call
`cordova.exec` to communicate with the native platform, using the
following syntax:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);

Here is how each parameter works:

- `function(winParam) {}`: A success callback function. Assuming your
  `exec` call completes successfully, this function executes along
  with any parameters you pass to it.

- `function(error) {}`: An error callback function. If the operation
  does not complete successfully, this function executes with an
  optional error parameter.

- `"service"`: The service name to call on the native side. This
  corresponds to a native class, for which more information is
  available in the native guides listed below.

- `"action"`: The action name to call on the native side. This
  generally corresponds to the native class method. See the native
  guides listed below.

- `[/* arguments */]`: An array of arguments to pass into the native
  environment.

## Sample JavaScript

This example shows one way to implement the plugin's JavaScript
interface:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

In this example, the plugin attaches itself to the `window` object as
the `echo` function, which plugin users would call as follows:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });

Look at the last three arguments to the `cordova.exec` function. The
first calls the `Echo` _service_, a class name. The second requests
the `echo` _action_, a method within that class. The third is an array
of arguments containing the echo string, which is the `window.echo`
function's the first parameter.

The success callback passed into `exec` is simply a reference to the
callback function `window.echo` takes. If the native platform fires
the error callback, it simply calls the success callback and passes it
a default string.

## Native Interfaces

Once you define JavaScript for your plugin, you need to complement it
with at least one native implementation. Details for each platform are
listed below, and each builds on the simple Echo Plugin example above:

- [Android Plugins](../../platforms/android/plugin.html)
- [iOS Plugins](../../platforms/ios/plugin.html)
- [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
- [Windows Phone 8 Plugins](../../platforms/wp8/plugin.html)
- [Windows Plugins](../../platforms/win8/plugin.html)

## Publishing Plugins

Once you develop your plugin, you may want to publish and share it
with the community. You can publish your plugin to any `npmjs`-based
registry, but the recommended one is the [NPM registry](https://www.npmjs.com).
Please read our [publishing plugins to npm guide](http://plugins.cordova.io/npm/developers.html).


__NOTE__: [Cordova plugin registry](https://plugins.cordova.io) is
moving to a read-only state. `publish`/
`unpublish` commands have been removed from `plugman`, so you'll need to
use corresponding `npm` commands.

Other developers can install your plugin automatically using either `plugman`
 or the Cordova CLI.  (For details on each development path, see
 [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html) and [The Command-Line Interface](../../cli/index.html).)

To publish a plugin to NPM registry you need to follow steps below:

  * create `package.json` file for your plugin:

        $ plugman createpackagejson /path/to/your/plugin

  * publish it:

        $ npm adduser # that is if you don't have an account yet
        $ npm publish /path/to/your/plugin

That is it!

Running `plugman --help` lists other available registry-based
commands.

### Specifying Project requirements

Cordova recently added support for specifying the project requirements of a plugin
as part of the plugin's `package.json` file. These requirements provide
guidance to the Cordova CLI when it is choosing which version of a plugin to
fetch from npm for a given project. The CLI will attempt to fetch the highest
version of your plugin that the current Cordova project supports. If no versions
of the plugin are compatible, the CLI will give a warning and fetch the latest
release.

To add project requirements for a plugin, alter the `engines` element in
`package.json` to include a `cordovaDependencies` sub-element adhering to the
following structure

```javascript
engines: {
    cordovaDependencies: {
        PLUGIN_VERSION: {
            DEPENDENCY: SEMVER_RANGE,
            DEPENDENCY: SEMVER_RANGE,
            ...
        },
        ...
    }
}
```

* `PLUGIN_VERSION` specifies a version of your plugin. It should adhere the syntax for a single version as used by [npm's semver package][npm-semver] or an upper bound (see [below](#upper-bounds))
* `DEPENDENCY` may be one of the following:
    * The Cordova CLI, `"cordova"`
    * A Cordova platform (e.g. `"cordova-android"`, `"cordova-ios"`, `"cordova-windows"`, etc.)
    * Another Cordova plugin (e.g. `"cordova-plugin-camera"`, etc.)
* `SEMVER_RANGE` should adhere to the syntax used by [npm's semver package][npm-semver]

**NOTE:** A Cordova platform `DEPENDENCY` refers to the Cordova platform and not
the OS (i.e. `cordova-android` rather than the Android OS)

Your `cordovaDependencies` may list any number of `PLUGIN_VERSION` requirements
and any number of `DEPENDENCY` constraints within them. Versions of your plugin
that do not have their dependencies listed will be assumed to have the same
dependency information as the highest `PLUGIN_VERSION` listed below them. For
example, consider the following entry:

```javascript
engines: {
    cordovaDependencies: {
        "1.0.0": { "cordova-android": "<3.0.0"},
        "2.0.0": { "cordova-android": ">4.0.0"}
    }
}
```

Any version of the plugin between 1.0.0 and 2.0.0 is assumed to have the same
dependencies as version 1.0.0 (a cordova-android version less than 3.0.0). This
lets you only update your `cordovaDependencies` information when there are
breaking changes.

#### Upper Bounds

In addition to a single versions for `PLUGIN_VERSION`, you may also specify upper
bounds as part of your `cordovaDependencies` to amend entries for older versions
of your plugin. This is useful when a breaking change occurs in a `DEPENDENCY`
and a new constraint must be added for all older versions of a plugin that do
not support it. These bounds should be written as, a `<` followed by a single
[semver][npm-semver] version (**Not an arbitrary range!**). This will apply
whatever `DEPENDENCY` values are given to all versions of the plugin below the
specified version. For example, consider the following entry:

```javascript
engines: {
    cordovaDependencies: {
        "0.0.1":  { "cordova-ios": ">1.0.0" },
        "<1.0.0": { "cordova-ios": "<2.0.0" },
        "<2.0.0": { "cordova-ios": "<5.0.0" }
    }
}
```

Here we specify one plugin version (0.0.1) and two upper bounds (<1.0.0 and <2.0.0)
that constrain cordova-ios. The two upper bounds do not override the constraint
of 0.0.1, they are combined via AND at evaluation time. When we go to check the
cordova-ios version of the project, the constraint that will be evaluated for
plugin version 0.0.1 will be the combination of these three:

```
    cordova-ios >1.0.0 AND cordova-ios <2.0.0 AND cordova-ios <5.0.0
```

Please note that the only `PLUGIN_VERSION` values allowed are single versions or
upper bounds; no other semver ranges are supported.

[npm-semver]: https://www.npmjs.com/package/semver
