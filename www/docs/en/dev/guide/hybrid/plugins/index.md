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

title: Create a Plugin
toc_title: Create a Plugin
description: Develop your own Cordova plugin.
---

# Create a Plugin

A _plugin_ is a package of injected code that allows the Cordova webview within
which the app renders to communicate with the native platform on
which it runs.  Plugins provide access to device and platform
functionality that is ordinarily unavailable to web-based apps. All
the main Cordova API features are implemented as plugins, and many
others are available that enable features such as bar code scanners,
NFC communication, or to tailor calendar interfaces. You can search for available plugins
on [Cordova Plugin Search page](/plugins/).

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
is best to look over [existing plugins](https://cordova.apache.org/contribute)
for guidance.

## Building a Plugin

Application developers use the CLI's [plugin add command][cdv_plugin] to add a plugin to a project. The
command takes the URL for a _git_ repository containing
the plugin code as an argument.  This example implements Cordova's Device API:

```bash
cordova plugin add https://github.com/apache/cordova-plugin-device
```

If the plugin is published to _npm_, the command can also receive the package name as the argument:

```bash
cordova plugin add cordova-plugin-device
```

The plugin repository must feature a top-level `plugin.xml` manifest
file. There are many ways to configure this file, details for which
are available in the [Plugin Specification](../../../plugin_ref/spec.html). 

This abbreviated version of the `Device` plugin provides a simple example to use as a model:

```xml
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
```

- The top-level `plugin` tag's `id` attribute usually follows the `cordova-plugin-{plugin name}` schema and matches the plugin's npm package name.
- The `js-module` tag specifies the path to the [common
JavaScript interface](#the-javascript-interface).
- The `platform` tag specifies a corresponding
set of native code, for the `ios` platform in this case.
- The `config-file` tag encapsulates a `feature` tag that is injected into
the platform-specific `config.xml` file to make the platform aware of
the additional code library. 
- The `header-file` and `source-file` tags
specify the path to the library's component files.

## The JavaScript Interface

The JavaScript interface provides the front-facing interface, making it perhaps
the most important part of the plugin.  You can structure your
plugin's JavaScript however you like, but you need to call
`cordova.exec` to communicate with the native platform, using the
following syntax:

```javascript
cordova.exec(function(winParam) {},
             function(error) {},
             "service",
             "action",
             ["firstArgument", "secondArgument", 42, false]);
```

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

```javascript
window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
```

In this example, the plugin attaches itself to the `window` object as
the `echo` function, which plugin users would call as follows:

```javascript
window.echo("echome", function(echoValue) {
    alert(echoValue == "echome"); // should alert true.
});
```

Look at the last three arguments passed to the `cordova.exec` function. The
first calls the `Echo` _service_, a class name. The second requests
the `echo` _action_, a method within that class. The third is an array
of arguments containing the echo string, which is the `window.echo`
function's first parameter.

The success callback passed into `exec` is simply a reference to the
callback function of `window.echo`. If the native platform fires
the error callback, it simply calls the success callback and passes it
a default string.

## Native Interfaces

Once you define JavaScript for your plugin, you need to complement it
with at least one native implementation. Details for each platform are
listed below, and each builds on the simple Echo Plugin example above:

- [Android Plugins](../../platforms/android/plugin.html)
- [iOS Plugins](../../platforms/ios/plugin.html)

## Testing a Plugin during development

The simplest way to manually test a plugin during development is to create a 
Cordova app as usual and add the plugin with the `--link` option:

```bash
cordova plugin add ../path/to/my/plugin/relative/to/project --link
```

This creates a symbolic link instead of copying the plugin files, which enables you 
to work on your plugin and then simply rebuild the app to use your changes.

## Validating a Plugin using Plugman

You can use the `plugman` utility to check whether the plugin installs
correctly for each platform.  Install `plugman` with the following
[node](https://nodejs.org/) command:

```bash
npm install -g plugman
```

You need a valid app source directory, such as the top-level `www`
directory included in a default CLI-generated project, as described in the
[Create your first app](../../cli/index.html) guide.

Then run a command such as the following to test whether iOS
dependencies load properly:

```bash
plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
```

For details on `plugman` options, see [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html). For information on how to actually _debug_ plugins, see [each platform's native interface listed above](#native-interfaces).

## Publishing Plugins

You can publish your plugin to any `npmjs`-based registry, but the recommended one is the [npm registry](https://www.npmjs.com). Other developers can install your plugin automatically using either `plugman` or the Cordova CLI.

To publish a plugin to npm you need to follow these steps:

  * install the `plugman` CLI:

    ```bash
    $ npm install -g plugman
    ```

  * create a `package.json` file for your plugin:

    ```bash
    $ plugman createpackagejson /path/to/your/plugin
    ```

  * publish it:

    ```bash
    $ npm adduser # that is if you don't have an account yet
    $ npm publish /path/to/your/plugin
    ```

For more details on npm usage, refer to [Publishing npm Packages](https://docs.npmjs.com/getting-started/publishing-npm-packages) on the npm documentation site.

## Integrating with Plugin Search

To surface the plugin in [Cordova Plugin Search](/plugins/), add the `ecosystem:cordova` keyword to the `package.json` file of your plugin before publishing.

To indicate support for a particular platform, add a keyword in the format `cordova-<platformName>` to the list of keywords in `package.json`.
Plugman's `createpackagejson` command does this for you, but if you did not use it to generate your `package.json`, you should manually edit it as shown below.

For example, for a plugin that supports Android & iOS the keywords in `package.json` should include:

```json
"keywords": [
    "ecosystem:cordova",
    "cordova-android",
    "cordova-ios"
]
```

For a more detailed example of a package.json, review the [package.json file of cordova-plugin-device](https://github.com/apache/cordova-plugin-device/blob/master/package.json).

## Specifying Cordova Dependencies

**Cordova 6.1.0** added support for specifying the Cordova-related dependencies of a plugin
as part of the plugin's `package.json` file. Plugins may list the dependencies for multiple
releases to provide guidance to the Cordova CLI when it is selecting the version of a
plugin to fetch from npm. The CLI will choose the latest release of a plugin that is
compatible with the local project's installed platforms and plugins as well as the
the local Cordova CLI version. If no releases of the plugin are compatible, the CLI will warn
the user about the failed requirements and fall back to the old behavior of fetching the
latest release.

This feature is intended to eventually replace the [engines element](../../../plugin_ref/spec.html#engines-and-engine) in plugin.xml.
Listing dependencies is a good way to ensure that your plugin will not appear broken or cause
build errors when fetched from npm. If the latest release of the plugin is not compatible with
a project, the CLI will give the app developer a list of unmet project requirements so that
they are aware of incompatibilites and can update their project to support your plugin. This
allows your plugin to respond to breaking changes without fear of confusing devlopers who
are building against old platforms and plugins.

To specify Cordova-related dependencies for a plugin, alter the `engines` element in
`package.json` to include a `cordovaDependencies` object with the following
structure:

```javascript
"engines": {
    "cordovaDependencies": {
        PLUGIN_VERSION: {
            DEPENDENCY: SEMVER_RANGE,
            DEPENDENCY: SEMVER_RANGE,
            ...
        },
        ...
    }
}
```

* `PLUGIN_VERSION` specifies the version of your plugin. It should adhere to the syntax for a single version as defined by [npm's semver package][npm-semver] or an upper bound (see [below](#upper-bounds))
* `DEPENDENCY` may be one of the following:
    * The Cordova CLI: `"cordova"`
    * A Cordova platform: `"cordova-android"`, `"cordova-ios"`, etc.
    * Another Cordova plugin: `"cordova-plugin-camera"`, etc.
* `SEMVER_RANGE` should adhere to the syntax for a range as defined by [npm's semver package][npm-semver]

**NOTE:** A Cordova platform `DEPENDENCY` refers to the Cordova platform and not
the OS, i.e. `cordova-android` rather than the Android OS.

Your `cordovaDependencies` may list any number of `PLUGIN_VERSION` requirements
and any number of `DEPENDENCY` constraints. Versions of your plugin
that do not have their dependencies listed will be assumed to have the same
dependency information as the highest `PLUGIN_VERSION` listed below them. For
example, consider the following entry:

```javascript
"engines": {
    "cordovaDependencies": {
        "1.0.0": { "cordova-android": "<3.0.0"},
        "2.1.0": { "cordova-android": ">4.0.0"}
    }
}
```
All plugin versions below the lowest entry (1.0.0 in this example) are assumed
to have no dependencies. Any version of the plugin between 1.0.0 and 2.1.0 is
assumed to have the same dependencies as version 1.0.0 (a cordova-android
version less than 3.0.0). This lets you only update your `cordovaDependencies`
information when there are breaking changes.

### Upper Bounds

In addition to a single version, a `PLUGIN_VERSION` in `cordovaDependencies`
may also specify an upper bound to amend entries for older releases
of your plugin. This is useful when a breaking change occurs in a `DEPENDENCY`
and a new constraint must be added for all older versions of a plugin that do
not support it. These bounds should be written as a `<` followed by a single
[semver][npm-semver] version (**Not an arbitrary range!**). This will apply
whatever `DEPENDENCY` values are given to all versions of the plugin below the
specified version. For example, consider the following entry:

```javascript
"engines": {
    "cordovaDependencies": {
        "0.0.1":  { "cordova-ios": ">1.0.0" },
        "<1.0.0": { "cordova-ios": "<2.0.0" },
        "<2.0.0": { "cordova-ios": "<5.0.0" }
    }
}
```

Here we specify one plugin version (0.0.1) and two upper bounds (<1.0.0 and <2.0.0)
that constrain cordova-ios. The two upper bounds do not override the constraint
of 0.0.1, they are combined via AND at evaluation time. When the CLI checks the
cordova-ios version of the project, the constraint that will be evaluated for
plugin version 0.0.1 will be the combination of these three:

```
    cordova-ios >1.0.0 AND cordova-ios <2.0.0 AND cordova-ios <5.0.0
```

Please note that the only `PLUGIN_VERSION` values allowed are single versions or
upper bounds; no other semver ranges are supported.

[cdv_plugin]: ../../../reference/cordova-cli/index.html#cordova-plugin-command
[npm-semver]: https://www.npmjs.com/package/semver
