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

title: iOS Plugin Development Guide
toc_title: iOS
---

# iOS Plugin Development Guide

- [iOS Plugin Development Guide](#ios-plugin-development-guide)
  - [Creating an Cordova Plugin for iOS](#creating-an-cordova-plugin-for-ios)
    - [Adding Native Source Code](#adding-native-source-code)
    - [Configuring the `plugin.xml`](#configuring-the-pluginxml)
      - [Adding Plugin Code to iOS Project](#adding-plugin-code-to-ios-project)
      - [Setting Class Mapping for WebView-to-Native Communication](#setting-class-mapping-for-webview-to-native-communication)
      - [Configuring Plugin Initialization Timing](#configuring-plugin-initialization-timing)
    - [Supporting Swift Package Manager (SPM)](#supporting-swift-package-manager-spm)
      - [Creating SPM's `Package.swift` File](#creating-spms-packageswift-file)
    - [Additional Native Side Implementation](#additional-native-side-implementation)
      - [Executing Plugin Initialization Logic](#executing-plugin-initialization-logic)
      - [Handeling Long-running \& Background Activities](#handeling-long-running--background-activities)
      - [Hooking into WKURLSchemeTask](#hooking-into-wkurlschemetask)
      - [Using Background Threads](#using-background-threads)
      - [Adding a Privacy Manifest File](#adding-a-privacy-manifest-file)
  - [CDVPluginResult Message Types](#cdvpluginresult-message-types)
  - [Other Supported `CDVPlugin` Features](#other-supported-cdvplugin-features)
  - [Debugging Plugins for iOS](#debugging-plugins-for-ios)
  - [Common Pitfalls](#common-pitfalls)

This guide provides details on implementing native plugin code for the iOS platform. The plugin's platform-native code can be written in either Objective-C or Swift.

Before proceeding, refer to the [Plugin Development Guide][plugin-dev] for an overview of plugin structure, plugin core files, and its common JavaScript interface. This guide will continue to use the _echo_ plugin, as an exmaple, which enables communication between the Cordova WebView and the native platform.

## Creating an Cordova Plugin for iOS

In this section we will cover:

1. Adding Native Source Code
2. Configuring `plugin.xml`
    - Adding Plugin Code to iOS Project
    - Setting Class Mapping for WebView-to-Native Communication
3. Adding Swift Package Manager Support
4. Additional Native Side Implementation

### Adding Native Source Code

In the following example, we will place all files in the `src/ios/` directory. This directory will be located inside the Cordova plugin's project root directory. The name and path of the directory are not strict and can be customized as you prefer. However, this is the typical pattern used by official Apache Cordova plugins to separate platform-specific source code and resources.

- **Swift**

    In Swift, the implementation source code is written inside a `.swift` file. This is where the business logic is performed.

    To expose methods written in Swift to Objective-C, the `@objc` annotation needs to be added. When the `@objc` annotation is used, those methods are automatically included in the `-Swift.h` header file. This is required so that Cordova can locate and invoke them.

    **Echo.swift (Source File):**

    In this example, when the `echo` method is invoked, an `.ok` response with the provided message is returned if the message exists; otherwise, an `.error` is returned.

    ```swift
    #if canImport(Cordova)
    import Cordova
    #endif

    @objc(Echo)
    class Echo : CDVPlugin {
        @objc func sample(_ command : CDVInvokedUrlCommand) {
            let myarg = command.arguments[0];
            let pluginResult;

            if (myarg != nil) {
                pluginResult = CDVPluginResult(status: .ok, messageAs: myarg)
            } else {
                pluginResult = CDVPluginResult(status: .error)
            }

            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
        }
    }
    ```

- **Objective-C**

    **Echo.h (Header File):**

    The header file defines the methods and properties that are exposed to other native classes. We also expose the methods that the front-end WebView requests so that Cordova can locate and invoke them.

    In this example, we are exposing the `echo` method:

    ```objc
    #import <Cordova/Cordova.h>

    @interface Echo : CDVPlugin

    - (void)echo:(CDVInvokedUrlCommand*)command;

    @end
    ```

    **Echo.m (Source File):**

    The implementation source code (.m files) is where the business logic is performed.

    In this example, when the `echo` method is invoked, it examines the contents of the first argument to determine if there is something to echo back to the front-end WebView. If there is content, a `OK` result is returned with the message; otherwise, an `ERROR` is returned.

    ```objc
    #import "Echo.h"
    #import <Cordova/Cordova.h>

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
    ```

**Additional Notes:**

- Plugin entry classes must extend `CDVPlugin`.
- Supporting classes does not extend `CDVPlugin`.
- The following `import` statements are required to be added to the top of the plugin entry classes.

    Swift based project will added the following to the source file:

    ```swift
    #if canImport(Cordova)
    import Cordova
    #endif
    ```

    Objective-C based projects will added the following to the header & source files:

    ```objc
    #import <Cordova/Cordova.h>
    ```

**Additional References:**

For more details, see the following class headers:

- [CDVInvokedUrlCommand][CDVInvokedUrlCommand]
- [CDVPluginResult][CDVPluginResult]
- [CDVCommandDelegate][CDVCommandDelegate]

### Configuring the `plugin.xml`

#### Adding Plugin Code to iOS Project

Now that we have our native source code written in our plugin project, we need to add these resource files to the application's directory. This ensures that the source code is available and used by the app. This can be achieved by defining the `<source-file>` and `<header-file>` elements in the `plugin.xml`.

Below is an example of what this should look like inside the `plugin.xml`:

```xml
<platform name="ios">
    <!-- If your plugin uses Swift -->
    <source-file src="src/ios/Echo.swift" />

    <!-- If your plugin uses Objective-C -->
    <!-- <header-file src="src/ios/Echo.h" /> -->
    <!-- <source-file src="src/ios/Echo.m" /> -->
</platform>
```

_Note:_ If you are following along with **Objective-C**, be sure to update the above accordingly. In the example above, we are using **Swift**.

What the above configuration does is for the iOS platform, it places the header file and source file in the appropriate location within the application. It also creates the necessary references in the Xcode project so that the application will recognize and use these files.

#### Setting Class Mapping for WebView-to-Native Communication

To be able to trigger native functionality in JavaScript, the native classes needs to be mapped within `plugin.xml` by using the `<feature>` element.

Below is an example of what this should look like once the feature is added to the `plugin.xml` from the previous steps, combined:

```xml
<platform name="ios">
    <config-file target="config.xml" parent="/*">
        <feature name="Echo">
            <param name="ios-package" value="Echo" />
        </feature>
    </config-file>

    <!-- If your plugin uses Swift -->
    <source-file src="src/ios/Echo.swift" />

    <!-- If your plugin uses Objective-C -->
    <!-- <header-file src="src/ios/Echo.h" /> -->
    <!-- <source-file src="src/ios/Echo.m" /> -->
</platform>
```

Specify the plugin's `<feature>` tag ensures that the necessary configuration is automatically injected into the Cordova-iOS project, as described in the [Plugin Development Guide][plugin-dev].

Lets break down what each element and attribute means.

- `<feature>`
    - The `name` attribute should match with the `service` parameter' value that is used in the JavaScript `cordova.exec` method call.
- `<param>`
    - The `value` attribute should match the name of the plugin'sObjective-C or Swift class name.
    - The `name` attribute should always have the value of `ios-package` for iOS plugins.

If the follow guidelines are not met, the plugin may compile but Cordova will not be able to access it.

**IMPORTANT NOTE:** During the platform preparation for building the app, an auto-generated merged `config.xml` file is created. This file contains all platform-specific application configurations and plugin data gathered from the application's `config.xml` and the plugin's `plugin.xml`. The `config-file` block, as shown in the example above, ensures that the plugin's feature is injected into the merged `config.xml`, allowing the plugin to function properly. This `config.xml` is separate from the application's root `config.xml`.

#### Configuring Plugin Initialization Timing

A single instance of a plugin object is typically created for the lifecycle of each `WKWebView`, though the instantiation timing depends on the plugin's implementation.

By default, plugins are instantiated when they are first referenced by a call from JavaScript. However, plugins can be configured to instantiate when the app loads by defining the `onload` attribute within a `<param>` element in the plugin's `plugin.xml` configuration file. This `<param>` should be added to the plugin's `<feature>` element.

For example:

```xml
<feature name="Echo">
    <param name="ios-package" value="Echo" />
    <param name="onload" value="true" /> <!-- Initialize plugin on app load -->
</feature>
```

### Supporting Swift Package Manager (SPM)

Starting from Cordova-iOS 8 and greater, support for the Swift Package Manager (SPM) has been implemented. To start using SPM with your plugin, a `Package.swift` file will need to be created in the plugin's root directory and add the `package="swift"` attribute to the iOS `<platform>` element in your `plugin.xml` file.

#### Creating SPM's `Package.swift` File

In the plugin's root directory, create a new file called `Package.swift` with the following content:

```swift
// swift-tools-version:5.9

import PackageDescription

let package = Package(
    name: "cordova-plugin-echo",
    platforms: [.iOS(.v13)],
    products: [
        .library(name: "cordova-plugin-echo", targets: ["cordova-plugin-echo"])
    ],
    dependencies: [
        // This must be included as a dependency, with this format for it to work.
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master")
    ],
    targets: [
        .target(
            name: "cordova-plugin-echo",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios")
            ],
            path: "src/ios",
            resources: [],
            publicHeadersPath: "."
        )
    ]
)
```

If the plugin is required to provide a privacy manifest file, the following line should be added to the `resources` element of the `cordova-plugin-echo` target: `.copy("Resources/PrivacyInfo.xcprivacy")`.
On top of the SPM declaration, be sure to also refer to the section titled [Adding a Privacy Manifest File](#adding-a-privacy-manifest-file) to ensure that the actual resource file is properly declared in the `plugin.xml` so it is correctly injected into the app.

If the plugin requires for any third-party dependencies, it should be added to the `dependencies` element, and the `target`'s `dependencies`.

For example:

```swift
dependencies: [
    ...
    .package(name: "SomePackageName", url: "...", from: "1.0.0"),
],
targets: [
    .target(
        ...
        dependencies: [
            .product(name: "Cordova", package: "cordova-ios"),
            .product(name: "SomePackageLibraryName", package: "SomePackageName")
        ],
    )
]
```

### Additional Native Side Implementation

#### Executing Plugin Initialization Logic

If the plugin has any logic that should execute on the during the plugin's initialization process, the `pluginInitialize` method should be defined in the plugin's class.

For example, if the plugin has defined `onload` as `true`, when the app loads, the `pluginInitialize` method will be executed. Because this is triggered during app load, there is no `callbackID` so the `pluginInitialize` method cannot return any results to the WebView. If results matter, they would need to be stored in some manner and later fetched with a JavaScript API call.

#### Handeling Long-running & Background Activities

Plugins with long-running requests or background activities, such as media playback, listeners, or those that maintain internal state, should implement the `onReset` method to cancel these requests or clean up after those activities.

The `onReset` method is called when the `WKWebView` navigates to a new page or refreshes, triggering a reload of the JavaScript.

#### Hooking into WKURLSchemeTask

The [WKURLSchemeTask](https://developer.apple.com/documentation/webkit/wkurlschemetask) is an interface Cordova's main WKWebView uses to load files from your app's bundle. You can create your own custom schemes or custom loading code for the WebView by implementing the `- (BOOL) overrideSchemeTask: (id <WKURLSchemeTask>)urlSchemeTask` method in a plugin.

#### Using Background Threads

Plugin methods ordinarily execute in the same thread as the main interface. If your plugin requires a great deal of processing or requires a blocking call, you should use a background thread. It is important to note that any operations involving the UI, such as displaying alerts, changing colors, or performing other visual updates, must be executed on the main thread.

For example:

```objc
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
```

#### Adding a Privacy Manifest File

As of May 1, 2024, Apple requires a privacy manifest file to be created for apps and third-party SDKs. The purpose of the privacy manifest file is to explain the data being collected and the reasons for the required APIs it uses.

Plugins can include a pre-bundled `PrivacyInfo.xcprivacy` file that lists any privacy-sensitive APIs they use, along with the reasons for their usage.

It is recommended to review the following Apple Developer document, "[Describing data use in privacy manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)", to understand the list of known `NSPrivacyCollectedDataTypes` and `NSPrivacyCollectedDataTypePurposes`.

Ensure all four keys—`NSPrivacyTracking`, `NSPrivacyTrackingDomains`, `NSPrivacyAccessedAPITypes`, and `NSPrivacyCollectedDataTypes`—are defined, even if you are not making an addition to the other items. Apple requires all to be defined.

Once you've identified what the contents of the `PrivacyInfo.xcprivacy` will look like, lets start creating the bundle and loading it as a resource.

1. Create a directory named `CDVEcho.bundle` inside the `src/ios` directory. Make sure the bundle name is unique enough to avoid conflicts with other plugins.

2. Inside the new `CDVEcho.bundle` directory, create a privacy manifest file named `PrivacyInfo.xcprivacy`.

3. Add the contents you've identified for this file. Here's an example:

   ```xml
   <!-- Example PrivacyInfo.xcprivacy Contents -->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>NSPrivacyTracking</key>
       <false/>
       <key>NSPrivacyTrackingDomains</key>
       <array/>
       <key>NSPrivacyAccessedAPITypes</key>
       <array/>
       <key>NSPrivacyCollectedDataTypes</key>
       <array/>
   </dict>
   </plist>
   ```

4. Update your `plugin.xml` to load the `CDVEcho.bundle` into the app's resources.

   Inside the iOS `<platform>` element, add a `<resource-file>` element pointing to the `CDVEcho.bundle` directory:

   ```xml
   <platform name="ios">
       <resource-file src="src/ios/CDVEcho.bundle" target="CDVEcho.bundle" />
   </platform>
   ```

5. **Optional:** If your plugin supports Swift Package Manager, refer to the section [Creating SPM's `Package.swift` File](#creating-spms-packageswift-file) to ensure the privacy manifest is also included as a resource file.

## CDVPluginResult Message Types

You can use [`CDVPluginResult`][CDVPluginResult] to return a variety of result types back to the JavaScript callbacks, using class methods that follow this pattern:

```objc
+ (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
```

The following types can be used:

- `String`
- `Int`
- `Double`
- `Bool`
- `Array`
- `Dictionary`
- `ArrayBuffer`
- `Multipart`

You can also leave out any arguments to send a status, or return an error, or even choose not to send any plugin result, in which case neither callback fires.

Note the following for complex return values:

- `messageAsArrayBuffer` expects `NSData*` and will convert it to an `ArrayBuffer` in the JavaScript callback. Likewise, any `ArrayBuffer` the JavaScript sends to a native side will be converted to `NSData*`.

- `messageAsMultipart` expects an `NSArray*` containing any of the other supported types, and sends the entire array as the `arguments` to your JavaScript callback.  This way, all of the arguments are serialized or deserialized as necessary, so it is safe to return `NSData*` as multipart, but not as `Array`/`Dictionary`.

## Other Supported `CDVPlugin` Features

The `CDVPlugin` class features other methods that a plugin can override.

For example, the plugin can capture:
- [`pause`][PauseEvent] Event
- [`resume`][ResumeEvent] Event
- App Terminate Event
- `handleOpenURL` events

For additional reference, see the following class documentation:

- [CDVPlugin][CDVPlugin]

## Debugging Plugins for iOS

To debug the native side, you will need to use Xcode's built-in debugger.

For JavaScript, you can launch the Safari Web Inspector and attach it to the running application process. The app can be running on either an iOS Simulator or device.

Generally, its recommended to use a debug build for testing as it should already allow the WebView to be inspectable. If for any reason you need to test on a release build, you can enable WebView Inspector by setting the `InspectableWebview` config preference to `true` in the application's `config.xml`.

E.g.

```xml
<preference name="InspectableWebview" value="true" />
```

For security purpose, its highly unrecommended to enable the `InspectableWebview` for release builds. If you do set it, remove the setting before deploy the app to the app store.

## Common Pitfalls

- Don't forget to add your plugin's mapping to `plugin.xml`. If you forget, an error is logged in the Xcode console.

- Don't forget to add any hosts you connect to in the allow list, as described in Domain [Allow List Guide](../../appdev/allowlist/index.html). If you forget, an error is logged in the Xcode console.

[plugin-dev]: ../../hybrid/plugins/index.html
[ResumeEvent]: ../../../cordova/events/events.html#resume
[PauseEvent]: ../../../cordova/events/events.html#pause
[CDVCommandDelegate]: https://apache.github.io/cordova-ios/documentation/cordova/cdvcommanddelegate
[CDVInvokedUrlCommand]: https://apache.github.io/cordova-ios/documentation/cordova/cdvinvokedurlcommand
[CDVPlugin]: https://apache.github.io/cordova-ios/documentation/cordova/cdvplugin
[CDVPluginResult]: https://apache.github.io/cordova-ios/documentation/cordova/cdvpluginresult
