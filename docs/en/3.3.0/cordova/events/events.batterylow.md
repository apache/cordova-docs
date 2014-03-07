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

# batterylow

The event fires when the battery has reached the low level threshold.

    window.addEventListener("batterylow", yourCallbackFunction, false);

## Details

The event fires when the percentage of battery charge has reached the
low battery threshold, device-specific value.

The `batterylow` handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Tizen

## Quick Example

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }

        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
