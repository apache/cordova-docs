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

title: deviceready
---

deviceready
===========

This is an event that fires when PhoneGap is fully loaded.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Details
-------

This is a very important event that every PhoneGap application should use.

PhoneGap consists of two code bases: native and JavaScript. While the native code is loading, a custom loading image is displayed. However, JavaScript is only loaded once the DOM loads. This means your web application could, potentially, call a PhoneGap JavaScript function before it is loaded.

The PhoneGap `deviceready` event fires once PhoneGap has fully loaded. After the device has fired, you can safely make calls to PhoneGap function.

Typically, you will want to attach an event listener with `document.addEventListener` once the HTML document's DOM has loaded.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>PhoneGap Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when PhoneGap is loaded.
        //
        // At this point, the document has loaded but cordova-1.5.0.js has not.
        // When PhoneGap is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            // Now safe to use the PhoneGap API
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    
BlackBerry (OS 4.6) Quirks
--------------------------

Custom events are not supported in the RIM BrowserField (web browser view), so the `deviceready` event will never fire.

A workaround is to manually query `PhoneGap.available` until PhoneGap has fully loaded.

    function onLoad() {
        // BlackBerry OS 4 browser does not support events.
        // So, manually wait until PhoneGap is available.
        //
        var intervalID = window.setInterval(
          function() {
              if (PhoneGap.available) {
                  window.clearInterval(intervalID);
                  onDeviceReady();
              }
          },
          500
        );
    }

    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    }
