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

backbutton
===========

The event fires when the user presses the back button.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Details
-------

To override the default back-button behavior, register an event
listener for the `backbutton` event, typically by calling
`document.addEventListener` once you receive the `deviceready` event.
It is no longer necessary to call any other method to override the
back-button behavior.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 and 8

Quick Example
-------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-3.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">


        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // device APIs are available
        //
        function onDeviceReady() {
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
