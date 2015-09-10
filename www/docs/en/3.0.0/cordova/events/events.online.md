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

online
===========

This event fires when an application goes online, and the device
becomes connected to the Internet.

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", yourCallbackFunction, false);

Details
-------

The `online` event fires when a previously unconnected device receives
a network connection to allow an application access to the Internet.
It relies on the same information as the <a href="../connection/connection.html">Connection</a> API, and fires
when the value of `<a href="../connection/connection.type.html">connection.type</a>` becomes `NONE`.

Applications typically should use `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` to
attach an event listener once the `<a href="events.deviceready.html">deviceready</a>` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("online", onOnline, false);
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        }

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
        }

        // Handle the online event
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------

During initial startup, the first `online` event (if applicable) takes
at least a second to fire, prior to which `<a href="../connection/connection.type.html">connection.type</a>` is
`UNKNOWN`.

Windows Phone 7 Quirks
--------------------------
When running in the Emulator, the `connection.status` is always unknown, so this event will _not_ fire.

Windows Phone 8 Quirks
--------------------------
The Emulator reports the connection type as `Cellular`, which does not change, so events will _not_ fire.
