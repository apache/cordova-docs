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

title: iOS Plugins
---

# iOS Plugins

A plugin is an Objective-C class that extends the `CDVPlugin` class.

Each plugin class must be registered as a `<feature>` tag in the
`config.xml` file. It is through this mechanism that JavaScript's `exec`
method's `service` parameter maps to an Objective-C class.

## Plugin Class Mapping

The JavaScript portion of a plugin always uses the `cordova.exec` method as follows:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This marshals a request from the `UIWebView` to the iOS native side,
more or less boiling down to calling the `action` method on the
`service` class, with the arguments passed in the `args` array.

Specifiy the plugin as a `<feature>` tag in your Cordova-iOS
application's project's `config.xml` file.

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>

The feature `name` attribute should match what you use in the JavaScript
`exec` call's `service` parameter, and the `value` attribute should match the name of the plugin's
Objective-C class. `<param name>` should always be `"ios-package"`.
If you do not follow this setup, the plugin may compile but will not be
reachable by Cordova.

## Plugin Initialization and Lifetime

One instance of a plugin object is created for the life of each
`UIWebView`. Plugins are not instantiated until they are first
referenced by a call from JavaScript, unless `<param>` with an `onload`
`name` attribute is set to `"true"` in `config.xml`. E.g.:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>

There is _no_ designated initializer for plugins. Instead, plugins
should use the `pluginInitialize` method for their start-up logic.

Plugins with long-running requests, background activity (e.g., playing
media), listeners or internal state should implement the `onReset`
method and stop or clean up those activities. This method is run when
the `UIWebView` navigates to a new page or refreshes, which reloads
the JavaScript.

## Writing an iOS Cordova Plugin

We have JavaScript fire off a plugin request to the native side. We have the iOS Objective-C plugin mapped properly via the `config.xml` file. So what does the final iOS Objective-C Plugin class look like?

What gets dispatched to the plugin via JavaScript's `exec` function gets passed into the corresponding Plugin class's `action` method. A plugin method has this signature:

    - (void)myMethod:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* myarg = [command.arguments objectAtIndex:0];

        if (myarg != nil) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
        }
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }

1. [CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)

2. [CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)

3. [CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)

## iOS CDVPluginResult message types

Using CDVPluginResult you can return a variety of result types back to your JavaScript callbacks, using class methods that look like:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...

You can create `String`, `Int`, `Double`, `Bool`, `Array`,
`Dictionary`, `ArrayBuffer`, and `Multipart` types.  Or, don't attach
any arguments (just send a status).  Or, return an Error.  You can
even choose to not send any plugin result at all, in which case the
callback does not fire.

### Notes

 * `messageAsArrayBuffer` expects `NSData*` and converts to an `ArrayBuffer` for your JavaScript callback (and `ArrayBuffers` sent to a plugin from JavaScript are converted to `NSData*`).
 * `messageAsMultipart` expects an `NSArray*` containing any of the other supported types, and sends the whole array as the `arguments` to your JavaScript callback.
   *  Quirk: this is not just syntactic sugar (though it is sweet).  This way, all of the arguments are serialized or deserialized as necessary.  E.g., it is safe to return `NSData*` as multipart, but not as `Array`/`Dictionary`.

## Echo Plugin iOS Plugin

We would add the following to the project's `config.xml` file:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>

Then we would add the following files (`Echo.h` and `Echo.m`) to the Plugins folder inside our Cordova-iOS
application folder:

    /********* Echo.h Cordova Plugin Header *******/

    #import <Cordova/CDV.h>

    @interface Echo : CDVPlugin

    - (void)echo:(CDVInvokedUrlCommand*)command;

    @end

    /********* Echo.m Cordova Plugin Implementation *******/

    #import "Echo.h"
    #import <Cordova/CDV.h>

    @implementation Echo

    - (void)echo:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* echo = [command.arguments objectAtIndex:0];

        if (echo != nil && [echo length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }

    @end

Let's take a look at the code. At the top we have all of the necessary
Cordova imports. Our class extends from `CDVPlugin` (very important).

This plugin only supports one action, the `echo` action. First, we
grab the echo string using the `objectAtIndex` method on our `args`,
telling it we want to get the 0th parameter in the arguments array. We
do a bit of parameter checking: make sure it is not `nil`, and make
sure it is not a zero-length string.

If it is, we return a `PluginResult` with an `ERROR` status. If all of
those checks pass, then we return a `PluginResult` with an `OK`
status, and pass in the `echo` string we received in the first place
as a parameter.

Finally, we send the result to `self.commandDelegate`, which executes
the `exec` method's success or failure callbacks on the JavaScript
side. If the success callback is called, it passes in the `echo`
parameter.

## Threading

Plugin methods are executed in the same thread as the UI. If your
plugin requires a great deal of processing or requires a blocking
call, you should use a background thread. For example:

    - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
    {
        // Check command.arguments here.
        [self.commandDelegate runInBackground:^{
            NSString* payload = nil;
            // Some blocking logic...
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
            // The sendPluginResult method is thread-safe.
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }

## Advanced Plugin Functionality

See other methods that you can override in:

* [CDVPlugin.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h)

* [CDVPlugin.m](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m)

For example, you can hook into the [`pause`](../../../cordova/events/events.pause.html), [`resume`](../../../cordova/events/events.resume.html), app terminate and `handleOpenURL` events.

## Debugging Plugins

To debug the Objective-C side, you would use Xcode's built-in debugger.
For JavaScript, on iOS 5.0 you can use
[Weinre, an Apache Cordova Project](https://github.com/apache/cordova-weinre) or
[iWebInspector, a third-party utility](http://www.iwebinspector.com/)

For iOS 6, you would use Safari 6.0 to simply attach to your app
running in the iOS 6 Simulator.

## Common Pitfalls

* Don't forget to add your plugin's mapping to config.xml. If you forget, an error is logged in the Xcode console.

* Don't forget to add any hosts you connect to in the whitelist, as described in [Domain Whitelist Guide](../../appdev/whitelist/index.html). If you forget, an error is logged in the Xcode console.
