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

backbutton
===========

This is an event that fires when the user presses the back button.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default back button behaviour you can register an event listener for the 'backbutton' event.  It is no longer necessary to call any other method to over ride the back button behaviour.  Now, you only need to register an event listener for 'backbutton'.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova '<a href="events.deviceready.html">deviceready</a>' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Back Button <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call on<a href="../device/device.html">Device</a>Ready when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-1.9.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `<a href="events.deviceready.html">deviceready</a>`.
        //
        function onLoad() {
            document.addEventListener("<a href="events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        }

        // Cordova is loaded and it is now safe to call Cordova methods
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Handle the back button
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
