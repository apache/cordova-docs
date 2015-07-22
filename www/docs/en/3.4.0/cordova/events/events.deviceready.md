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

# deviceready

The event fires when Cordova is fully loaded.

    document.addEventListener("deviceready", yourCallbackFunction, false);

## Details

This event is essential to any application. It signals that Cordova's
device APIs have loaded and are ready to access.

Cordova consists of two code bases: native and JavaScript. While the
native code loads, a custom loading image displays. However,
JavaScript only loads once the DOM loads. This means the web app may
potentially call a Cordova JavaScript function before the
corresponding native code becomes available.

The `deviceready` event fires once Cordova has fully loaded. Once the
event fires, you can safely make calls to Cordova APIs.  Applications
typically attach an event listener with `document.addEventListener`
once the HTML document's DOM has loaded.

The `deviceready` event behaves somewhat differently from others.  Any
event handler registered after the `deviceready` event fires has its
callback function called immediately.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use device APIs
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
