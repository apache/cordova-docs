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

network.isReachable
===================

Checks if a connection can be established with a specific domain.

    network.isReachable(reachableHostname, reachableCallback, [reachableOptions])

Description
-----------

This is a fast way to determine the device's network connection state, type of connection, and whether a specific domain is online.

Since `network.isReachable` is an asynchronous function, the network state is returned using a callback function.

Supported Platforms
-------------------

- Android
- BlackBerry
- BlackBerry Widgets (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    function reachableCallback(reachability) {
        // There is no consistency on the format of reachability
        var networkState = reachability.code || reachability;
        
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    navigator.network.isReachable('phonegap.com', reachableCallback);


Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>isReachable Example</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.3.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Wait for PhoneGap to load
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        
        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            navigator.network.isReachable("phonegap.com", reachableCallback, {});
        }
        
        // Check network status
        //
        function reachableCallback(reachability) {
            // There is no consistency on the format of reachability
            var networkState = reachability.code || reachability;
            
            var states = {};
            states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
            states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
            states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';
            
            alert('Connection type: ' + states[networkState]);
        }
        
        </script>
      </head>
      <body onload="onLoad()">
        <p>A dialog box will report the network state.</p>
      </body>
    </html>