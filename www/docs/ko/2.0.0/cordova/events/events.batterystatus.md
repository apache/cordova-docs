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

batterystatus
===========

This is an event that fires when a Cordova application detects a change in the battery status.

    window.addEventListener("batterystatus", yourCallbackFunction, false);

Details
-------

This event that fires when a Cordova application detects the percentage of battery has changed by at least 1 percent. It is also fired if the device has been plugged in or un-plugged.

The battery status handler will be called with an object that contains two properties:

- __level:__ The percentage of battery (0-100). _(Number)_
- __isPlugged:__ A boolean that represents whether or not the device is plugged in or not. _(Boolean)_

Typically, you will want to attach an event listener with `window.addEventListener` once you receive the Cordova '<a href="events.deviceready.html">deviceready</a>' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )


Windows Phone 7 Quirks
----------------------

The `level` property is unavailable as Windows Phone 7 does not provide
native APIs for determining battery level. The `isPlugged` parameter
_is_ supported.

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the <a href="events.online.html">online</a> event
       	console.log("Level: " + info.level + " isPlugged: " + info.isPlugged); 
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova <a href="../device/device.html">Device</a> Ready <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call on<a href="../device/device.html">Device</a>Ready when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `<a href="events.deviceready.html">deviceready</a>`.
        // 
	    function onLoad() {
    	    document.addEventListener("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
    	}

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function on<a href="../device/device.html">Device</a>Ready() {
		    window.addEventListener("batterystatus", onBatteryStatus, false);
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
