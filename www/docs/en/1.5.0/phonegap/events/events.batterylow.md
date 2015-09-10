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

batterylow
===========

This is an event that fires when a PhoneGap application detects the battery has reached the low level threshold.

    window.addEventListener("batterylow", yourCallbackFunction, false);

Details
-------

This event that fires when a PhoneGap application detects the percentage of battery has reached the low battery threshold. This value is device specific.

The batterylow handler will be called with an object that contains two properties:

- __level:__ The percentage of battery (0-100). _(Number)_
- __isPlugged:__ A boolean that represents whether or not the device is plugged in or not. _(Boolean)_

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap '<a href="events.deviceready.html">deviceready</a>' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
       	alert("Battery Level Low " + info.level + "%"); 
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>PhoneGap <a href="../device/device.html">Device</a> Ready <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call on<a href="../device/device.html">Device</a>Ready when PhoneGap is loaded.
        //
        // At this point, the document has loaded but cordova-1.5.0.js has not.
        // When PhoneGap is loaded and talking with the native device,
        // it will call the event `<a href="events.deviceready.html">deviceready</a>`.
        // 
	    function onLoad() {
    	    document.addEventListener("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
    	}

        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function on<a href="../device/device.html">Device</a>Ready() {
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
