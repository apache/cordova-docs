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

resume
===========

This is an event that fires when a PhoneGap application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

Details
-------

PhoneGap consists of two code bases: native and JavaScript. While the native code pulls the application from the background the resume event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap '<a href="events.deviceready.html">deviceready</a>' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>PhoneGap Resume <a href="../storage/storage.opendatabase.html">Example</a></title>

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
            document.addEventListener("resume", onResume, false);
        }

        // Handle the resume event
        //
        function onResume() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
