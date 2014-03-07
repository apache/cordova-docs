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
- Windows Phone 7 ( Mango )
- Bada 2.x
- webOS

Quick Example
-------------

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Unknown connection';
        states[Connection.ETHERNET]	= 'Ethernet connection';
        states[Connection.WIFI]   	= 'WiFi connection';
        states[Connection.CELL_2G]	= 'Cell 2G connection';
        states[Connection.CELL_3G]	= 'Cell 3G connection';
        states[Connection.CELL_4G]	= 'Cell 4G connection';
        states[Connection.NONE]   	= 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.network.connection.type Example</title>
        
        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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
	        var networkState = navigator.network.connection.type;

	        var states = {};
	        states[Connection.UNKNOWN]	= 'Unknown connection';
	        states[Connection.ETHERNET]	= 'Ethernet connection';
	        states[Connection.WIFI]   	= 'WiFi connection';
	        states[Connection.CELL_2G]	= 'Cell 2G connection';
	        states[Connection.CELL_3G]	= 'Cell 3G connection';
	        states[Connection.CELL_4G]	= 'Cell 4G connection';
	        states[Connection.NONE]   	= 'No network connection';

	        alert('Connection type: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

iOS Quirks
----------

- iOS cannot detect the type of cellular network connection.
    - `navigator.network.connection.type` is set to `Connection.CELL_2G` for all cellular data.

Bada Quirks
-----------

- Bada can only detect a WiFi or cellular connection.
    - `navigator.network.connection.type` is set to `Connection.CELL_2G` for all cellular data.

webOS Quirks
------------

- Only shows that a connection is available, but not which type.

Windows Phone Quirks
--------------------

- Windows Phone Emulator always detects `navigator.network.connection.type` as `Connection.UNKNOWN`.
