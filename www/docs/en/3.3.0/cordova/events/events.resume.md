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

# resume

The event fires when an application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

## Details

The `resume` event fires when the native platform pulls the
application out from the background.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // device APIs are available
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

## iOS Quirks

Any interactive functions called from a `pause` event handler execute
later when the app resumes, as signaled by the `resume` event. These
include alerts, `console.log()`, and any calls from plugins or the
Cordova API, which go through Objective-C.

- __active__ event

    The iOS-specific `active` event is available as an alternative to
`resume`, and detects when users disable the __Lock__ button to unlock
the device with the app running in the foreground.  If the app (and
device) is enabled for multi-tasking, this is paired with a subsequent
`resume` event, but only under iOS 5. In effect, all locked apps in
iOS 5 that have multi-tasking enabled are pushed to the background.
For apps to remain running when locked under iOS 5, disable the app's
multi-tasking by setting [UIApplicationExitsOnSuspend](http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html)
to `YES`. To run when locked on iOS 4, this setting does not matter.
    
- __resume__ event

    When called from a `resume` event handler, interactive functions such
as `alert()` need to be wrapped in a `setTimeout()` call with a
timeout value of zero, or else the app hangs. For example:

        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
