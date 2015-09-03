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


Connection
==========

> The `connection` object gives access to the device's cellular and wifi connection information.

This object is exposed as `navigator.connection`.

Properties
----------

- connection.type

Constants
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.CELL
- Connection.NONE

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="NetworkStatus" value="org.apache.cordova.NetworkManager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />

### Bada

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Network Status" value="org.apache.cordova.network.Network" />

### iOS

#### config.xml

    <plugin name="NetworkStatus" value="CDVConnection" />

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_NETWORKING" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

#### config.xml

    <feature name="http://tizen.org/api/systeminfo" required="true"/>

Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)



connection.type
===================

Checks the active network connection that is being used.

Description
-----------

This property is a fast way to determine the device's network connection state, and type of connection.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 and 8
- Bada 2.x
- webOS
- Tizen
- Windows 8

Quick Example
-------------

    function checkConnection() {
        var networkState = navigator.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Unknown connection';
        states[Connection.ETHERNET]	= 'Ethernet connection';
        states[Connection.WIFI]   	= 'WiFi connection';
        states[Connection.CELL_2G]	= 'Cell 2G connection';
        states[Connection.CELL_3G]	= 'Cell 3G connection';
        states[Connection.CELL_4G]	= 'Cell 4G connection';
        states[Connection.CELL]   	= 'Cell generic connection';
        states[Connection.NONE]   	= 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type Example</title>
        
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Wait for Cordova to load
        // 
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.connection.type;

	        var states = {};
	        states[Connection.UNKNOWN]	= 'Unknown connection';
	        states[Connection.ETHERNET]	= 'Ethernet connection';
	        states[Connection.WIFI]   	= 'WiFi connection';
	        states[Connection.CELL_2G]	= 'Cell 2G connection';
	        states[Connection.CELL_3G]	= 'Cell 3G connection';
	        states[Connection.CELL_4G]	= 'Cell 4G connection';
	        states[Connection.CELL]	  	= 'Cell generic connection';
	        states[Connection.NONE]   	= 'No network connection';

	        alert('Connection type: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

API Change
----------
Before Cordova 2.3.0, the Connection object existed at: `navigator.network.connection`.

To match the spec, this was changed to `navigator.connection` in 2.3.0.

`navigator.network.connection` still exists, but is now deprecated and will be removed in a future release.

iOS Quirks
----------

- iOS cannot detect the type of cellular network connection.
    - `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.  This is deprecated as of 2.6.0 and will be changed to return `Connection.CELL` in a future release.

Bada Quirks
-----------

- Bada can only detect a WiFi or cellular connection.
    - `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.

webOS Quirks
------------

- Only shows that a connection is available, but not which type.

Windows Phone Quirks
--------------------

- When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.
- Windows Phone cannot detect the type of cellular network connection.
    - `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

Tizen Quirks
--------------------

- Tizen can only detect a WiFi or cellular connection.
    - `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.

