---
license: Licensed to the Apache Software Foundation (ASF) under one
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
corresponding native code libraries for each supported platform.  This
section steps through a simple _echo_ plugin that passes a string from
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
are available in the Plugin Specification. This abbreviated version of
the `Device` plugin provides a simple example to use as a model:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
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
The Command-Line Interface.  Make sure the app's `index.html` home
page reference the name of the plugin's JavaScript interface, as if it
were in the same source directory:

        <script src="myplugin.js"></script>

Then run a command such as the following to test whether iOS
dependencies load properly:

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin

For details on `plugman` options, see Using Plugman to Manage Plugins.
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

- Amazon Fire OS Plugins
- Android Plugins
- iOS Plugins
- BlackBerry 10 Plugins
- Windows Phone Plugins

The Tizen platform does not support plugins.

## Publishing Plugins

Once you develop your plugin, you may want to publish and share it
with the community. You can publish your plugin to the Cordova
[registry](http://plugins.cordova.io) (based on [`npmjs`](https://github.com/isaacs/npmjs.org)) or
to any other `npmjs`-based registry. Other developers can install it
automatically using either `plugman` or the Cordova CLI.  (For details
on each development path, see Using Plugman to Manage Plugins and The
Command-Line Interface.)

To publish a plugin you need to use the `plugman` tool and go through
the following steps:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    
That is it!

Running `plugman --help` lists other available registry-based
commands.
