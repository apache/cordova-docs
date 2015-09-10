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

# batterystatus

The event fires when there is a change in the battery status.

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterystatus", yourCallbackFunction, false);

## Details

This event fires when the percentage of battery charge changes by at
least 1 percent, or if the device is plugged in or unplugged.

The battery status handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` to
attach an event listener once the `<a href="events.deviceready.html">deviceready</a>` event fires.

## Supported Platforms

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 and 8
- Tizen

## Windows Phone 7 and 8 Quirks

Windows Phone 7 does not provide native APIs to determine battery
level, so the `level` property is unavailable.  The `isPlugged`
parameter _is_ supported.

## Quick <a href="../storage/storage.opendatabase.html">Example</a>

    window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the <a href="events.online.html">online</a> event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

## Full <a href="../storage/storage.opendatabase.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../device/device.html">Device</a> Ready <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        }

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            window.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("batterystatus", onBatteryStatus, false);
        }

        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
