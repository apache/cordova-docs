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
---


# Splashscreen

> Displays and hides the application's splash screen.

## Methods

- splashscreen.show
- splashscreen.hide

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS (in `res/xml/config.xml`)

        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>

* Android (in `res/xml/config.xml`)

        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>

* BlackBerry 10 (in `www/config.xml`)

        <feature name="SplashScreen" value="SplashScreen" />

* iOS (in the named application directory's `config.xml`)

        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.

See Icons and Splash Screens for information on how to configures these images.



# splashscreen.show

Displays the splash screen.

    navigator.splashscreen.show();

## Description

This method displays the application's splash screen.

## Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    navigator.splashscreen.show();

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.show();
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>

Your application can not call `navigator.splashscreen.show()` until
the app has started and the `deviceready` event has fired. But since
typically the
splash screen is meant to be visible before your app has started, that would
seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `show` the
splash screen immediately after your app launch and before it has fully
started and received the `deviceready` event. See Icons and Splash Screens
for more information on doing this configuration. For this reason, it is
unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.



# splashscreen.hide

Dismiss the splash screen.

    navigator.splashscreen.hide();

## Description

This method dismisses the application's splash screen.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    navigator.splashscreen.hide();

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>

## BlackBerry 10 Quirk

The `config.xml` file's `AutoHideSplashScreen` setting must be
`false`. 

## iOS Quirk

The `config.xml` file's `AutoHideSplashScreen` setting must be
`false`. To delay hiding the splash screen for two seconds, add a
timer such as the following in the `deviceready` event handler:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);

