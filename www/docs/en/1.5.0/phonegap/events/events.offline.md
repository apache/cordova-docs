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

offline
===========

This is an event that fires when a PhoneGap application is offline (not connected to the Internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being offline, the offline event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap '<a href="events.deviceready.html">deviceready</a>' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>PhoneGap Offline <a href="../storage/storage.opendatabase.html">Example</a></title>

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

iOS Quirks
--------------------------
During initial startup, the first offline event (if applicable) will take at least a second to fire.
