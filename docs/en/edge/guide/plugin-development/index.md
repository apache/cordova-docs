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

A Cordova plugin bridges a bit of functionality between the WebView
powering a Cordova application and the native platform the Cordova
application is running on. Plugins are composed of a single JavaScript
interface used across all platforms, and native implementations
following platform-specific Plugin interfaces that the JavaScript will
call into. It should be noted that all of the core Cordova APIs are
implemented using this exact architecture.

This guide will go through each step necessary to write a simple Echo
Plugin. The Echo Plugin will pass a string from JavaScript and send it
into the native environment for the supported platforms. The native code
will then return the same string back into the callbacks inside the
plugin's JavaScript.

This guide should give anyone the necessary overview and level of
detail to write more complex plugins.

## JavaScript

The entry point for any plugin is JavaScript. The reason developers use
Cordova is so they can use and write JavaScript, not Objective-C,
not Java, not C#. The JavaScript interface for your plugin is the
front-facing and arguably most important part of your Cordova plugin.

You can structure your plugin's JavaScript however you like. The one
thing you _must_ use to communicate between the Cordova JavaScript
 and native environments is the `cordova.exec` function. Here is an example:

    cordova.exec(function(winParam) {}, function(error) {}, "service",
                 "action", ["firstArgument", "secondArgument", 42,
                 false]);

The parameters explained in more detail:

1. `function(winParam) {}` - Success function callback. Assuming your
   `exec` call completes successfully, this function will be invoked
    (optionally with any parameters you pass back to it)
2. `function(error) {}` - Error function callback. If the operation does
   not complete successfully, this function will be invoked (optionally
   with an error parameter)
3. `"service"` - The service name to call into on the native side. This
   will be mapped to a native class. More on this in the native guides
   below
4. `"action"` - The action name to call into. This is picked up by the
   native class receiving the `exec` call, and, depending on the
   platform, essentially maps to a class's method. For more detail
   please check out the native guides located at the end of this article.
5. `[/* arguments */]` - Arguments to get passed into the native
   environment

### Echo Plugin JavaScript Example

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };

Let's dive into this. The plugin attaches itself to `window`,
specifically to the `echo` function. Plugin users would then use it as
follows:

    window.echo("echome", function(echoValue) {
        alert(echoValue == "echome"); // should alert true.
    });

First, let's take a look at the last three arguments to the `exec`
function. We will be calling the `Echo` "service", requesting the `echo`
"action", and passing an array of arguments containing the echo string,
which is the first parameter into the `window.echo` function.

The success callback passed into `exec` is simply a reference to the
callback function that `window.echo` takes. We do a bit more for the
error callback: if the native side fires off the error callback, we
simply invoke the success callback and pass into it a "default" string.

## Native

Once you have defined a JavaScript for your plugin, you need to
complement it with at least one native implementation. Below are
specific guides for each platform Cordova supports. The below guides
will continue on building the simple Echo Plugin example we started in
this guide.

- Developing a Plugin on Android
- Developing a Plugin on Bada
- Developing a Plugin on BlackBerry
- Developing a Plugin on BlackBerry 10
- Developing a Plugin on iOS
- Developing a Plugin on webOS
- Developing a Plugin on Windows Phone
- Developing a Plugin on Tizen
