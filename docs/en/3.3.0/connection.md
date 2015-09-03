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


# Connection

> The `connection` object, exposed via `navigator.connection`,  provides information about the device's cellular and wifi connection.

## Properties

- connection.type

## Constants

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.CELL
- Connection.NONE

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin ls
        [ 'org.apache.cordova.network-information' ]
        $ cordova plugin rm org.apache.cordova.network-information

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in app/res/xml/config.xml)
        <feature name="NetworkStatus">
            <param name="android-package" value="org.apache.cordova.networkinformation.NetworkManager" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

* Android

        (in app/res/xml/config.xml)
        <feature name="NetworkStatus">
            <param name="android-package" value="org.apache.cordova.networkinformation.NetworkManager" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

* BlackBerry 10

        (in www/config.xml)
        <feature name="NetworkStatus" value="NetworkStatus"/>

* iOS (in the named application directory's `config.xml`)

        <feature name="NetworkStatus">
            <param name="ios-package" value="CDVConnection" />
        </feature>

* Windows Phone (in `Properties/WPAppManifest.xml`)

        <Capabilities>
            <Capability Name="ID_CAP_NETWORKING" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

* Tizen (in `config.xml`)

        <feature name="http://tizen.org/api/systeminfo" required="true"/>

  Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.



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

## Quick Example

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    checkConnection();

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            checkConnection();
        }

            function checkConnection() {
                var networkState = navigator.connection.type;

                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';

                alert('Connection type: ' + states[networkState]);
            }

        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

## API Change

Until Cordova 2.3.0, the `Connection` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification.  It's still
available at its original location, but is deprecated and will
eventually be removed.

## iOS Quirks

- iOS can't detect the type of cellular network connection.
    - `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone Quirks

- When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

- Windows Phone can't detect the type of cellular network connection.
    - `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen Quirks

- Tizen can only detect a WiFi or cellular connection.
    - `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.

