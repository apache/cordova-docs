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

# connection.type

Checks the currently active network connection.

## Description

This property offers a fast way to determine the device's network
connection state, and type of connection.

## Supported Platforms

- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function check<a href="connection.html">Connection</a>() {
        var networkState = navigator.connection.type;

        var states = {};
        states[<a href="connection.html">Connection</a>.UNKNOWN]  = 'Unknown connection';
        states[<a href="connection.html">Connection</a>.ETHERNET] = 'Ethernet connection';
        states[<a href="connection.html">Connection</a>.WIFI]     = 'WiFi connection';
        states[<a href="connection.html">Connection</a>.CELL_2G]  = 'Cell 2G connection';
        states[<a href="connection.html">Connection</a>.CELL_3G]  = 'Cell 3G connection';
        states[<a href="connection.html">Connection</a>.CELL_4G]  = 'Cell 4G connection';
        states[<a href="connection.html">Connection</a>.CELL]     = 'Cell generic connection';
        states[<a href="connection.html">Connection</a>.NONE]     = 'No network connection';

        alert('<a href="connection.html">Connection</a> type: ' + states[networkState]);
    }

    check<a href="connection.html">Connection</a>();

## Full <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type <a href="../splashscreen/<a href="../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            check<a href="connection.html">Connection</a>();
        }

            function check<a href="connection.html">Connection</a>() {
                var networkState = navigator.connection.type;

                var states = {};
                states[<a href="connection.html">Connection</a>.UNKNOWN]  = 'Unknown connection';
                states[<a href="connection.html">Connection</a>.ETHERNET] = 'Ethernet connection';
                states[<a href="connection.html">Connection</a>.WIFI]     = 'WiFi connection';
                states[<a href="connection.html">Connection</a>.CELL_2G]  = 'Cell 2G connection';
                states[<a href="connection.html">Connection</a>.CELL_3G]  = 'Cell 3G connection';
                states[<a href="connection.html">Connection</a>.CELL_4G]  = 'Cell 4G connection';
                states[<a href="connection.html">Connection</a>.CELL]     = 'Cell generic connection';
                states[<a href="connection.html">Connection</a>.NONE]     = 'No network connection';

                alert('<a href="connection.html">Connection</a> type: ' + states[networkState]);
            }

        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

## API Change

Until Cordova 2.3.0, the `<a href="connection.html">Connection</a>` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification.  It's still
available at its original location, but is deprecated and will
eventually be removed.

## iOS Quirks

- iOS can't detect the type of cellular network connection.
    - `navigator.connection.type` is set to `<a href="connection.html">Connection</a>.CELL` for all cellular data.

## Windows Phone Quirks

- When running in the emulator, always detects `navigator.connection.type` as `<a href="connection.html">Connection</a>.UNKNOWN`.

- Windows Phone can't detect the type of cellular network connection.
    - `navigator.connection.type` is set to `<a href="connection.html">Connection</a>.CELL` for all cellular data.

## Tizen Quirks

- Tizen can only detect a WiFi or cellular connection.
    - `navigator.connection.type` is set to `<a href="connection.html">Connection</a>.CELL_2G` for all cellular data.
