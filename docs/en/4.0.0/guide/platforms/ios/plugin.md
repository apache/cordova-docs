---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# iOS Plugins

This section provides details for how to implement native plugin code
on the iOS platform. Before reading this, see Application Plugins for
an overview of the plugin's structure and its common JavaScript
interface. This section continues to demonstrate the sample _echo_
plugin that communicates from the Cordova webview to the native
platform and back.

An iOS plugin is implemented as an Objective-C class that extends the
`CDVPlugin` class.  For JavaScript's `exec` method's `service`
parameter to map to an Objective-C class, each plugin class must be
registered as a `<feature>` tag in the named application directory's
`config.xml` file.

## Plugin Class Mapping

The JavaScript portion of a plugin uses the `cordova.exec` method as
follows:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This marshals a request from the `UIWebView` to the iOS native side,
effectively calling the `action` method on the `service` class, with
the arguments passed in the `args` array.

Specify the plugin as a `<feature>` tag in your Cordova-iOS
application's project's `config.xml` file, using the `plugin.xml` file
to inject this markup automatically, as described in Application
Plugins:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>

The feature's `name` attribute should match what you specify as the
JavaScript `exec` call's `service` parameter. The `value` attribute
should match the name of the plugin's Objective-C class. The `<param>`
element's `name` should always be `ios-package`.  If you do not follow
these guidelines, the plugin may compile, but Cordova may still not be
able to access it.

## Plugin Initialization and Lifetime

One instance of a plugin object is created for the life of each
`UIWebView`. Plugins are ordinarily instantiated when first referenced
by a call from JavaScript. Otherwise they can be instantiated by
setting a `param` named `onload` to `true` in the `config.xml` file:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>

There is _no_ designated initializer for plugins. Instead, plugins
should use the `pluginInitialize` method for their startup logic.

Plugins with long-running requests, background activity such as media
playback, listeners, or that maintain internal state should implement
the `onReset` method to clean up those activities. The method runs
when the `UIWebView` navigates to a new page or refreshes, which
reloads the JavaScript.

## Writing an iOS Cordova Plugin

A JavaScript call fires off a plugin request to the native side, and
the corresponding iOS Objective-C plugin is mapped properly in the
`config.xml` file, but what does the final iOS Objective-C plugin
class look like?  Whatever is dispatched to the plugin with
JavaScript's `exec` function is passed into the corresponding plugin
class's `action` method. A plugin method has this signature:

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

For more details, see
 `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)`,
 `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)`,
and
 `[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult Message Types

You can use `CDVPluginResult` to return a variety of result types back to
the JavaScript callbacks, using class methods that follow this pattern:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...

You can create `String`, `Int`, `Double`, `Bool`, `Array`,
`Dictionary`, `ArrayBuffer`, and `Multipart` types. You can also leave
out any arguments to send a status, or return an error, or even choose
not to send any plugin result, in which case neither callback fires.

Note the following for complex return values:

- `messageAsArrayBuffer` expects `NSData*` and converts to an
  `ArrayBuffer` in the JavaScript callback. Likewise, any
  `ArrayBuffer` the JavaScript sends to a plugin are converted to
  `NSData*`.

- `messageAsMultipart` expects an `NSArray*` containing any of the
  other supported types, and sends the entire array as the `arguments`
  to your JavaScript callback.  This way, all of the arguments are
  serialized or deserialized as necessary, so it is safe to return
  `NSData*` as multipart, but not as `Array`/`Dictionary`.

## Echo iOS Plugin Example

To match the JavaScript interface's _echo_ feature described in
Application Plugins, use the `plugin.xml` to inject a `feature`
specification to the local platform's `config.xml` file:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>


Then we would add the following `Echo.h` and `Echo.m` files to the
`Plugins` folder within the Cordova-iOS application directory:

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

The necessary imports at the top of the file extends the class from
`CDVPlugin`.  In this case, the plugin only supports a single `echo`
action. It obtains the echo string by calling the `objectAtIndex`
method get the first parameter of the `arguments` array, which
corresponds to the arguments passed in by the JavaScript `exec()`
function.

It checks the parameter to make sure it is not `nil` or an empty
string, returning a `PluginResult` with an `ERROR` status if so.  If
the parameter passes the check, it returns a `PluginResult` with an
`OK` status, passing in the original `echo` string.  Finally, it sends
the result to `self.commandDelegate`, which executes the `exec`
method's success or failure callbacks on the JavaScript side. If the
success callback is called, it passes in the `echo` parameter.

## iOS Integration

The `CDVPlugin` class features other methods that your plugin can
override.  For example, you can capture the `pause`, `resume`, app
terminate and `handleOpenURL` events. See the
[CDVPlugin.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h)
and
[CDVPlugin.m](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m)
class for guidance.

## Threading

Plugin methods ordinarily execute in the same thread as the main
interface. If your plugin requires a great deal of processing or
requires a blocking call, you should use a background thread. For
example:

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

## Debugging iOS Plugins

To debug on the Objective-C side, you need Xcode's built-in debugger.
For JavaScript, on iOS 5.0 you can use [Weinre, an Apache Cordova
Project](https://github.com/apache/cordova-weinre) or [iWebInspector,
a third-party utility](http://www.iwebinspector.com/).  For iOS 6, you
can attach Safari 6.0 to the app running within the iOS 6 Simulator.

## Common Pitfalls

- Don't forget to add your plugin's mapping to `config.xml`. If you
  forget, an error is logged in the Xcode console.

- Don't forget to add any hosts you connect to in the whitelist, as
  described in Domain Whitelist Guide. If you forget, an error is
  logged in the Xcode console.
