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

title: pause
---

pause
===========

This is an event that fires when a Cordova application is put into the background.

    document.addEventListener("pause", yourCallbackFunction, false);

Details
-------

Cordova consists of two code bases: native and JavaScript. While the native code puts the application into the background the pause event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova '[deviceready](events.deviceready.html)' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7

Quick [Example](../storage/storage.opendatabase.html)
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Pause Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-1.7.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
		    document.addEventListener("pause", onPause, false);
        }

        // Handle the pause event
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
In the pause handler, any calls that go through Objective-C will not work, nor will any calls that are interactive, like alerts. This means that you cannot call console.log (and its variants), or any calls from Plugins or the Cordova API. These will only be processed when the app resumes (processed on the next run-loop).

- __resign__ event 

    This iOS specific event is available as a variant of the **pause** event, and is often used to detect when the "Lock" button has been pressed to lock the device when your app is the foreground app. If your app (and device) is enabled for multi-tasking, this will be paired with a subsequent **pause** event, but only under iOS 5 (effectively all "locked" apps in iOS 5 that have multi-tasking enabled are put to the background). 
    
    Under iOS 5, if you want your app to still run when the device is locked, you will have to disable multi-tasking (UIApplicationExitsOnSuspend - YES) for your app. This is different when you are on iOS 4 - to have your app run when the device is locked, the multi-tasking setting for your app does not matter.
