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

title: resume
---

resume
===========

This is an event that fires when a Cordova application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

Details
-------

Cordova consists of two code bases: native and JavaScript. While the native code pulls the application from the background the resume event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova '[deviceready](events.deviceready.html)' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Quick [Example](../storage/storage.opendatabase.html)
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Resume Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.5.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
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

iOS Quirks
--------------------------
Any calls to console.log during your **pause** event handler will be run now when the app resumes, see the iOS Quirks section for the **pause** event for an explanation. 

- __active__ event 

    This iOS specific event is available as a variant of the **resume** event, and is often used to detect when the "Lock" button has been pressed to unlock the device when your app is the foreground app. If your app (and device) is enabled for multi-tasking, this will be paired with a subsequent **resume** event, but only under iOS 5 (effectively all "locked" apps in iOS 5 that have multi-tasking enabled are put to the background). 
    
    Under iOS 5,  if you want your app to still run when the device is locked, you will have to disable multi-tasking (UIApplicationExitsOnSuspend - YES) for your app. This is different when you are on iOS 4 - to have your app run when the device is locked, the multi-tasking setting for your app does not matter.

- __resume__ event 

    Interactive functions like alert() when the resume event fires will need to be wrapped in a setTimeout call with a timeout value of zero, or else the app will hang. e.g.

        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }