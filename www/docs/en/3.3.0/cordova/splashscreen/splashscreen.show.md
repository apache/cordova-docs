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

title: splashscreen.show
---

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
the app has started and the `[deviceready](../events/events.deviceready.html)` event has fired. But since
typically the
splash screen is meant to be visible before your app has started, that would
seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `[show](../inappbrowser/inappbrowser.html)` the
splash screen immediately after your app launch and before it has fully
started and received the `[deviceready](../events/events.deviceready.html)` event. See [Icons and Splash Screens](../../config_ref/images.html)
for more information on doing this configuration. For this reason, it is
unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.
