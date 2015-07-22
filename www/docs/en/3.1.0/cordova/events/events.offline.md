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

title: offline
---

# offline

The event fires when an application goes offline, and the device is
not connected to the Internet.

    document.addEventListener("offline", yourCallbackFunction, false);

## Details

The `offline` event fires when a previously connected device loses a
network connection so that an application can no longer access the
Internet.  It relies on the same information as the [Connection](../connection/connection.html) API,
and fires when the value of `[connection.type](../connection/connection.type.html)` becomes `NONE`.

Applications typically should use `document.addEventListener` to
attach an event listener once the `[deviceready](events.deviceready.html)` event fires.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

## Quick Example

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>

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
            document.addEventListener("offline", onOffline, false);
        }

        // Handle the offline event
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

## iOS Quirks

During initial startup, the first offline event (if applicable) takes at least a second to fire.

## Windows Phone 7 Quirks

When running in the Emulator, the `connection.status` is always unknown, so this event does _not_ fire.

## Windows Phone 8 Quirks

The Emulator reports the [connection.type](../connection/connection.type.html) as `Cellular`, which does not change, so the event does _not_ fire.
