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

A _plugin_ is a bit of injected code that allows the webview within
which your app renders to communicate with the native platform on
which it runs.  Plugins thus provide access to device and platform
functionality that is ordinarily unavailable to web-based apps.  All
the main Cordova API features are implemented as plugins, and many
others are available that enable features such as bar code scanners,
NFC communication, or to tailor calendar interfaces.

This section steps through how to write a simple _echo_ plugin that
passes a string from JavaScript to the native platform and back.  You
can build far more complex plugins based on this simple model.  This
section discusses the outward-facing JavaScript interface. For each
corresponding native interface, see the list at the end of this
section.  For detailed information on the plugin format, see the
Plugin Specification.  For information on how to add existing plugins
to an app, see The Command-line Interface.

<!-- ## File and Directory Structure -->

## The JavaScript Interface

Plugins comprise a single JavaScript interface along with
corresponding native code libraries for each supported platform.  The
JavaScript provides the provides the front-facing interface, making it
perhaps the most important part of the plugin.

You can structure your plugin's JavaScript however you like, but you
need to call `cordova.exec` to communicate with the native platform,
as in the following example:

        cordova.exec(function(winParam) {}, 
                     function(error) {}, 
                     "service",
                     "action", 
                     ["firstArgument", "secondArgument", 42, false]);

The parameters work as follows:

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

This example shows how to specify the plugin's JavaScript interface:

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
first calls the `Echo` _service_. The second requests the `echo`
_action_. The third is an array of arguments containing the echo
string, which is the `window.echo` function's the first parameter.

The success callback passed into `exec` is simply a reference to the
callback function `window.echo` takes. If the native platform fires
the error callback, it simply calls the success callback and passes it
a default string.

## Native Interfaces

Once you define JavaScript for your plugin, you need to complement it
with at least one native implementation. Details for each platform are
listed below, and each builds on the simple Echo Plugin example above:

- Android Plugins
- iOS Plugins
- BlackBerry Plugins
- BlackBerry 10 Plugins
- Windows Phone Plugins

The Tizen platform does not support plugins.

## Plugin Specification

Cordova's plugin specification allows plugins to be installed
automatically for Android, iOS, BlackBerry 10 and Windows Phone
platforms. If you specify a `plugin.xml` manifest file and follow the
specification's conventions for filename and directory structure,
users can install your plugin using platform-specific command-line
tooling.  See Plugin Specification for details.
