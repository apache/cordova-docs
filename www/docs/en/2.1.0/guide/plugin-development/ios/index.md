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

title: Developing a Plugin on iOS
---

# Developing a Plugin on iOS

Writing a plugin requires an understanding of the architecture of Cordova-iOS. Cordova-iOS consists of a UIWebView where intercept commands passed in as url changes. These plugins are represented as class mappings in the Cordova.plist file, under the Plugins key.

A plugin is an Objective-C class that extends the `CDVPlugin` class.

## Plugin Class Mapping 

The JavaScript portion of a plugin always uses the `cordova.exec` method as follows:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This will marshall a request from the UIWebView to the iOS native side, more or less boiling down to calling the `action` method on the `service` class, with the arguments passed in the `args` Array. 

The plugin must be added to `Plugins` key (a Dictionary) of the `Cordova.plist` file in your Cordova-iOS application's project folder.

    <key>service_name</key>
    <string>PluginClassName</string>

The key `service_name` should match what you use in the JavaScript `exec` call, and the value will be the name of the Objective-C class of the plugin. Without this added, the plugin may compile but will not be reachable by Cordova.

## Writing an iOS Cordova Plugin

We have JavaScript fire off a plugin request to the native side. We have the iOS Objective-C plugin mapped properly via the `Cordova.plist` file. So what does the final iOS Objective-C Plugin class look like?

What gets dispatched to the plugin via JavaScript's `exec` function gets passed into the corresponding Plugin class's `action` method. A plugin method has this signature:

    - (void) myMethod:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* javaScript = nil;

        @try {
            NSString* myarg = [command.arguments objectAtIndex:0];

            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
                javaScript = [pluginResult toSuccessCallbackString:command.callbackId];
            } 
        } @catch (id exception) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:[exception reason]];
            javaScript = [pluginResult toErrorCallbackString:command.callbackId];
        }

        [self writeJavascript:javaScript];
    }
    
1. [CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)
2. [CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)

  
## Plugin Signatures

The **new signature** supported beginning in **Cordova 2.1.0** is:

        - (void) myMethod:(CDVInvokedUrlCommand*)command;

The **old (deprecated)** signature is:

        - (void) myMethod:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

Basically, the options dictionary has been removed for the new signature, and the callbackId is not the 0th index item for the arguments array, but it is now in a separate property. 

## Echo Plugin iOS Plugin

We would add the following to the `Plugins` key (a Dictionary) of the project's `Cordova.plist` file:

    <key>Echo</key>
    <string>Echo</string>

Then we would add the following files (`Echo.h` and `Echo.m`) to the Plugins folder inside our Cordova-iOS
application folder:

    /********* Echo.h Cordova Plugin Header *******/

    #import <Cordova/CDV.h>

    @interface Echo : CDVPlugin

    - (void) echo:(CDVInvokedUrlCommand*)command;

    @end
    
    /********* Echo.m Cordova Plugin Implementation *******/
    
    #import "Echo.h"
    #import <Cordova/CDV.h>

    @implementation Echo

    - (void) echo:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* javaScript = nil;

        @try {
            NSString* echo = [command.arguments objectAtIndex:0];

            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
                javaScript = [pluginResult toSuccessCallbackString:command.callbackId];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
                javaScript = [pluginResult toErrorCallbackString:command.callbackId];
            }
        } @catch (NSException* exception) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:[exception reason]];
            javaScript = [pluginResult toErrorCallbackString:command.callbackId];
        }

        [self writeJavascript:javaScript];
    }

    @end


Let's take a look at the code. At the top we have all of the necessary Cordova imports. Our class extends from `CDVPlugin` - very important. 

This plugin only supports one action, the `echo` action. First, we grab the echo string using the `objectAtIndex` method on our `args`, telling it we want to get the 0th parameter in the arguments array. We do a bit of parameter checking: make sure it is not `nil`, and make sure it is not a zero-length string.

If it is, we return a `PluginResult` with an `ERROR` status. If all of those checks pass, then we return a `PluginResult` with an `OK` status, and pass in the `echo` string we received in the first place as a parameter. Then, we convert the `PluginResult` to JavaScript by calling either the `toSuccessCallbackString` (if it was OK) or `toErrorCallbackString` (if it was an error) methods.

Finally we write the JavaScript back to the UIWebView, which will execute the JavaScript that will callback to success or failure callbacks of the exec method on the JavaScript side. If the success callback was called, it will pass the `echo` parameter as a parameter.

## Advanced Plugin Functionality

See other methods that you can override in:

1. [CDVPlugin.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h)
2. [CDVPlugin.m](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m)

For example, you can hook into the [pause](../../../cordova/events/events.pause.html), [resume](../../../cordova/events/events.resume.html), app terminate and handleOpenURL events.

## Debugging Plugins

To debug the Objective-C side, you would use Xcode's built in debugger. For JavaScript, you can use [Weinre, an Apache Cordova Project](https://github.com/apache/cordova-weinre) or [iWebInspector, a third-party utility](http://www.iwebinspector.com/)

For iOS 6, you would use Safari 6.0 to simply attach to your app running in the iOS 6 Simulator.

## Common Pitfalls

* Don't forget to add your plugin's mapping to Cordova.plist - if you forgot, an error will be printed to the Xcode console log
* Don't forget to add any hosts you connect to in the [whitelist](guide_whitelist_index.md.html#Domain%20Whitelist%20Guide) - if you forgot, an error will be printed to the Xcode console log
* If you handle the [resume](../../../cordova/events/events.resume.html) event, and the app resumes, you can hang the app if you send out a JavaScript call that executes a native function, like alerts. To be safe, wrap your JavaScript call in a setTimeout call, with a timeout value of zero:

        setTimeout(function() {
            // do your thing here!
        }, 0);

## Deprecated Plugin Signature Note

The **old (deprecated)** signature is:

        - (void) myMethod:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

The options parameter for the Objective-C plugin method is being deprecated, and it should not be used. For legacy reasons - the last JavaScript object passed in the args Array will be passed in as the options dictionary of the method in Objective-C. You must make sure that any JavaScript object that is passed in as an element in the args array occurs as the last item in the Array, if not it will throw off the array index of all subsequent parameters of the Array in Objective-C. Only one JavaScript object is supported for the options dictionary, and only the last one encountered will be passed to the native method. It is because of these error-prone reasons that they are being deprecated.