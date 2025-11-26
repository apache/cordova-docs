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

- [Create a Plugin](#create-a-plugin)
  - [Creating an npm Package](#creating-an-npm-package)
    - [Updating the npm Package for Cordova](#updating-the-npm-package-for-cordova)
      - [Adding the plugin's `id`](#adding-the-plugins-id)
      - [Specifying supported platforms](#specifying-supported-platforms)
      - [Adding keywords for discoverability](#adding-keywords-for-discoverability)
      - [Adding engine requirements](#adding-engine-requirements)
        - [Upper Bounds](#upper-bounds)
  - [Creating the `plugin.xml` file](#creating-the-pluginxml-file)
  - [Adding a Front-End JavaScript API](#adding-a-front-end-javascript-api)
    - [`cordova.exec` Command Syntax](#cordovaexec-command-syntax)
    - [Creating the `www/api.js` File](#creating-the-wwwapijs-file)
    - [Injecting the JavaScript API to the `window` Object](#injecting-the-javascript-api-to-the-window-object)
  - [Implementing Native Interfaces](#implementing-native-interfaces)
  - [Testing a Plugin during development](#testing-a-plugin-during-development)
  - [Publishing Plugins](#publishing-plugins)

A Cordova _plugin_ is a package that enables the Cordova apps to access native device features and functionality that is ordinarily unavailable to web-based apps. All of the core Cordova API features are implemented as plugins. Many third-party plugins are also available to provide additional capabilities such as barcode scanning, near-field communication (NFC), push notification, or even customizing interfaces.

Check out these locations for Cordova plugins:

- Official Apache Cordova plugins on the [Cordova Plugin page](/plugins/).
- Third-party plugins on the [npmjs registry](https://www.npmjs.com/search?q=keywords:ecosystem:cordova).

Plugins usually consist of a JavaScript interface paired with corresponding platform-native code. In essence, this hides the platform-specific native implementations behind a common JavaScript interface.

This page will walk through the steps to create a basic _echo_ plugin that passes a string from the front-end JavaScript to the native platform and back. The purpose of this guide is to provide a model for how to build and publish a Cordova plugin. It focuses on the fundamentals of plugin structure and the outward-facing JavaScript interface.

For the corresponding native implementations, see the list at the end of this section.

In addition to following these instructions, it is recommended to review [existing plugins](https://cordova.apache.org/contribute) for further guidance.

## Creating an npm Package

In essence, a Cordova plugin is an extension of an npm package. By leveraging the npm ecosystem, plugin developers can easily publish their plugins to the npm registry, allowing app developers to install them into their Cordova apps using the Cordova CLI.

Even if you don't plan to publish your plugin publicly, you still need to structure it as an npm package for installation purposes. The [`cordova plugin add`][cdv_plugin] command relies on npm under the hood to fetch and install plugins.

First, we'll create the directory for our `echo` plugin and change to this newly created directory:

```zsh
mkdir cordova-plugin-echo
cd cordova-plugin-echo
```

Next, we'll initialize it as an npm package using the `npm init` command. In this example, we'll accept all default values for the initialization process by appending the `-y` flag. If you want to customize the values, you can omit the flag or change the values later by editing the `package.json` file.

```zsh
npm init -y
```

**One important note:** the directory name `cordova-plugin-echo` will be used as the default package name and will be published as such to the npm registry. If the name is already taken, you'll need to choose a different name or use [scoped packages](https://docs.npmjs.com/cli/v10/using-npm/scope).

### Updating the npm Package for Cordova

In addition to the standard properties that the `package.json` file includes for npm, Cordova-specific properties will also be added. These are necessary to define the plugin's ID, supported platforms, relevant keywords for discoverability, and engine requirements.

#### Adding the plugin's `id`

This uniquely identifies your plugin within the Cordova ecosystem. It's generally recommended to match the plugin ID with the npm package name so that when a Cordova project is restored using the `cordova prepare` command, the package can be easily located in the npm registry.

```zsh
npm pkg set cordova.id=cordova-plugin-echo
```

#### Specifying supported platforms

The following example shows how to add support for both Android and iOS. You can modify this to include only the platforms your plugin supports.

```zsh
npm pkg set "cordova.platforms[]=android"
npm pkg set "cordova.platforms[]=ios"
```

#### Adding keywords for discoverability

Keywords help others find your plugin via search.

```zsh
npm pkg set "keywords[]=cordova"
npm pkg set "keywords[]=echosystem:cordova"
npm pkg set "keywords[]=cordova-android"
npm pkg set "keywords[]=cordova-ios"
```

#### Adding engine requirements

**Cordova 6.1.0** added support for specifying the Cordova-related dependencies of a plugin as part of the plugin's `package.json` file. Plugins may list the dependencies for multiple releases to provide guidance to the Cordova CLI when it is selecting the version of a plugin to fetch from npm. The CLI will choose the latest release of a plugin that is compatible with the local project's installed platforms and plugins as well as the the local Cordova CLI version. If no releases of the plugin are compatible, the CLI will warn the user about the failed requirements and fall back to the old behavior of fetching the latest release.

This feature is intended to eventually replace the [engines element](../../../plugin_ref/spec.html#engines-and-engine) in `plugin.xml`.

Listing dependencies is a good way to ensure that your plugin will not appear broken or cause build errors when fetched from npm. If the latest release of the plugin is not compatible with a project, the CLI will give the app developer a list of unmet project requirements so that they are aware of incompatibilites and can update their project to support your plugin. This allows your plugin to respond to breaking changes without fear of confusing devlopers who are building against old platforms and plugins.

To specify Cordova-related dependencies for a plugin, alter the `engines` element in `package.json` to include a `cordovaDependencies` object with the following structure:

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

**NOTE:** A Cordova platform `DEPENDENCY` refers to the Cordova platform and not the OS, i.e. `cordova-android` rather than the Android OS.

Your `cordovaDependencies` may list any number of `PLUGIN_VERSION` requirements and any number of `DEPENDENCY` constraints. Versions of your plugin that do not have their dependencies listed will be assumed to have the same dependency information as the highest `PLUGIN_VERSION` listed below them. For example, consider the following entry:

```javascript
"engines": {
    "cordovaDependencies": {
        "1.0.0": { "cordova-android": "<3.0.0"},
        "2.1.0": { "cordova-android": ">4.0.0"}
    }
}
```
All plugin versions below the lowest entry (1.0.0 in this example) are assumed to have no dependencies. Any version of the plugin between 1.0.0 and 2.1.0 is assumed to have the same dependencies as version 1.0.0 (a cordova-android version less than 3.0.0). This lets you only update your `cordovaDependencies`
information when there are breaking changes.

##### Upper Bounds

In addition to a single version, a `PLUGIN_VERSION` in `cordovaDependencies` may also specify an upper bound to amend entries for older releases of your plugin. This is useful when a breaking change occurs in a `DEPENDENCY` and a new constraint must be added for all older versions of a plugin that do not support it. These bounds should be written as a `<` followed by a single [semver][npm-semver] version (**Not an arbitrary range!**). This will apply whatever `DEPENDENCY` values are given to all versions of the plugin below the specified version. For example, consider the following entry:

```javascript
"engines": {
    "cordovaDependencies": {
        "0.0.1":  { "cordova-ios": ">1.0.0" },
        "<1.0.0": { "cordova-ios": "<2.0.0" },
        "<2.0.0": { "cordova-ios": "<5.0.0" }
    }
}
```

Here we specify one plugin version (0.0.1) and two upper bounds (<1.0.0 and <2.0.0) that constrain cordova-ios. The two upper bounds do not override the constraint of 0.0.1, they are combined via AND at evaluation time. When the CLI checks the cordova-ios version of the project, the constraint that will be evaluated for plugin version 0.0.1 will be the combination of these three:

> cordova-ios >1.0.0 AND cordova-ios <2.0.0 AND cordova-ios <5.0.0

Please note that the only `PLUGIN_VERSION` values allowed are single versions or upper bounds; no other semver ranges are supported.

## Creating the `plugin.xml` file

Plugins must also be paired with a top-level `plugin.xml` manifest file. This file is used for configuring the plugin. See the [Plugin.xml Specification](../../../plugin_ref/spec.html) for more information of the elements that can be defined.

Below is a simple example of the `plugin.xml` file that will be used for the `Echo` plugin and a model to follow for creating your own plugins.

```xml
<?xml version="1.0" encoding="utf-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
    id="cordova-plugin-echo"
    version="1.0.0">
    <name>Echo</name>
    <description>Cordova Echo Plugin</description>
    <license>Apache 2.0</license>
    <keywords>cordova,plugin,echo</keywords>
</plugin>
```

> Note: The top-level `plugin` tag's `id` attribute usually follows the `cordova-plugin-{plugin name}` schema and matches the plugin's npm package name.

## Adding a Front-End JavaScript API

Plugin developers typically include a front-end JavaScript API. The primary purpose is to abstract away Cordova's internal APIs, eliminate the need for app developers to understand the specific naming of your plugin's service or methods, and simplify the overall usage of the plugin.

### `cordova.exec` Command Syntax

```javascript
exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
```

The `cordova.exec` method is what triggeres the request from the front-end WebView to the native side of the platform, invoking an action method on the specified service class with the provided arguments. Depending on the outcome, either the success or failure callback will be triggered.

- **`successCallback`**: The first argument is the success callback. If the native operation completes successfully, this function is invoked with any returned data.
- **`failCallback`**: The second argument is the error callback. If the operation fails, this function is called with an error object or message.
- **`service`**: A string representing the service name on the native side. This typically matches a native class defined in your plugin.
- **`action`**: A string representing the method name to invoke on the native service.
- **`[arguments]`**: An array of arguments to be passed to the native method.

### Creating the `www/api.js` File

In this example, we'll create a folder named `www` in the plugin's root directory and add a file named `api.js`.

> Note: The directory and file names are customizable and do not need to follow this exact structure. However, if you choose to rename the directory or file, be sure to update the corresponding `js-module` path in the `plugin.xml` file accordingly.

The `www/api.js` file will contain the front-end JavaScript API. For this example, the contents of the Echo plugin will be as follows:

```javascript
const exec = require('cordova/exec');
const serviceName = 'Echo';

const Echo = function () { };

Echo.prototype.echo = function (message) {
    return new Promise((resolve, reject) => {
        const _successCb = function (result) {
            resolve(result);
        };

        const _errorCb = function (err) {
            reject(new Error(err));
        };

        exec(_successCb, _errorCb, serviceName, 'echo', [message]);
    });
};

module.exports = new Echo();
```

This example demonstrates how to build a front-end plugin API that returns a Promise, offering a modern and user-friendly interface for app developers.

### Injecting the JavaScript API to the `window` Object

To make the Echo JavaScript API available on the WebView's `window` object, we need to update the `plugin.xml` to add the injection our API using the `<js-module>` element.

```xml
<js-module src="www/api.js" name="Echo">
    <clobbers target="Echo" />
</js-module>
```

The above wil take the `www/api.js` and clobber it onto the `window` object as `window.Echo`.

Usually, when supporting multiple platforms, all platforms has the same JavaScript API. In this case, the above XML does not need to be posted inside the `<platform>` element. If there was a case where each platform has their own own JavaScript file, then the `<js-module>` should be added to the `<platform>` element.

## Implementing Native Interfaces

Once you created the core structure of the plugin with the above section, we can how complement it with at least one native implementation.

Details for each platform are listed below, and each section is a continuation of the simple Echo Plugin:

- [Android Plugin Development Guide](../../platforms/android/plugin.html)
- [iOS Plugin Development Guide](../../platforms/ios/plugin.html)

## Testing a Plugin during development

Usually, the simplest way to manually test a plugin during development is to create a Cordova app and add the plugin with the `--link` option:

```zsh
cordova plugin add ../path/to/my/plugin/relative/to/project --link
```

This will creates a symbolic link instead of copying the plugin files, which enables you to work on your plugin and then simply rebuild the app to use your changes. The plugin should be added after the platform, or the link will not work. The link will also be lost if you re-add the platform or [restore the project](../../../platform_plugin_versioning_ref/index.md) with `cordova prepare`. In that case, you'll need to re-add the plugin to restore the link.

## Publishing Plugins

You can publish your plugin to any `npmjs`-based registry, but the recommended one is the [npm registry](https://www.npmjs.com). This allows other developers to easily install your plugin using the Cordova CLI.

To publish,

```zsh
$ npm adduser # that is if you don't have an account yet
$ npm publish /path/to/your/plugin
```

If you do not plan to publish your plugin publicly, it is recommended to set the `private` flag in the `package.json` to `true` to prevent accidental publication.

```zsh
npm pkg set private=true --json
```

For more details on npm usage, refer to [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) on the npm documentation site.

[cdv_plugin]: ../../../reference/cordova-cli/index.html#cordova-plugin-command
[npm-semver]: https://www.npmjs.com/package/semver
