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


# Events

> Cordova lifecycle events.

## Event Types

- deviceready
- pause
- resume
- backbutton
- menubutton
- searchbutton
- startcallbutton
- endcallbutton
- volumedownbutton
- volumeupbutton

## Events added by [org.apache.cordova.battery-status](https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md)

- batterycritical
- batterylow
- batterystatus

## Events added by [org.apache.cordova.network-information](https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md)

- online
- offline




# deviceready

The event fires when Cordova is fully loaded.

    document.addEventListener("deviceready", yourCallbackFunction, false);

## Details

This event is essential to any application. It signals that Cordova's
device APIs have loaded and are ready to access.

Cordova consists of two code bases: native and JavaScript. While the
native code loads, a custom loading image displays. However,
JavaScript only loads once the DOM loads. This means the web app may
potentially call a Cordova JavaScript function before the
corresponding native code becomes available.

The `deviceready` event fires once Cordova has fully loaded. Once the
event fires, you can safely make calls to Cordova APIs.  Applications
typically attach an event listener with `document.addEventListener`
once the HTML document's DOM has loaded.

The `deviceready` event behaves somewhat differently from others.  Any
event handler registered after the `deviceready` event fires has its
callback function called immediately.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use device APIs
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>

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
            // Now safe to use device APIs
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# pause

The event fires when an application is put into the background.

    document.addEventListener("pause", yourCallbackFunction, false);

## Details

The `pause` event fires when the native platform puts the application
into the background, typically when the user switches to a different
application.

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

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>

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

## iOS Quirks

In the `pause` handler, any calls to the Cordova API or to native
plugins that go through Objective-C do not work, along with any
interactive calls, such as alerts or `console.log()`. They are only
processed when the app resumes, on the next run loop.

The iOS-specific `resign` event is available as an alternative to
`pause`, and detects when users enable the __Lock__ button to lock the
device with the app running in the foreground.  If the app (and
device) is enabled for multi-tasking, this is paired with a subsequent
`pause` event, but only under iOS 5. In effect, all locked apps in iOS
5 that have multi-tasking enabled are pushed to the background.  For
apps to remain running when locked under iOS 5, disable the app's
multi-tasking by setting
[UIApplicationExitsOnSuspend](http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html)
to `YES`. To run when locked on iOS 4, this setting does not matter.



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



# backbutton

The event fires when the user presses the back button.

    document.addEventListener("backbutton", yourCallbackFunction, false);

## Details

To override the default back-button behavior, register an event
listener for the `backbutton` event, typically by calling
`document.addEventListener` once you receive the `deviceready` event.
It is no longer necessary to call any other method to override the
back-button behavior.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- Windows Phone 7 and 8

## Quick Example

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>

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



# menubutton

The event fires when the user presses the menu button.

    document.addEventListener("menubutton", yourCallbackFunction, false);

## Details

Applying an event handler overrides the default menu button behavior.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10

## Quick Example

    document.addEventListener("menubutton", onMenuKeyDown, false);

    function onMenuKeyDown() {
        // Handle the back button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>

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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }

        // Handle the menu button
        //
        function onMenuKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# searchbutton

The event fires when the user presses the search button on Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);

## Details

If you need to override the default search button behavior on Android
you can register an event listener for the 'searchbutton' event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- Android

## Quick Example

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Handle the search button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>

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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }

        // Handle the search button
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# startcallbutton

The event fires when the user presses the start call button.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

## Details

If you need to override the default start call behavior you can
register an event listener for the `startcallbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- BlackBerry 10

## Quick Example

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // Handle the start call button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>

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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }

        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# endcallbutton

This event fires when the user presses the end call button.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);

## Details

The event overrides the default end call behavior.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- BlackBerry 10

## Quick Example

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // Handle the end call button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>

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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }

        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# volumedownbutton

The event fires when the user presses the volume down button.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);

## Details

If you need to override the default volume down behavior you can
register an event listener for the `volumedownbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- BlackBerry 10

## Quick Example

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>

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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }

        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



# volumeupbutton

The event fires when the user presses the volume up button.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

## Details

If you need to override the default volume up behavior you can
register an event listener for the `volumeupbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

## Supported Platforms

- BlackBerry 10

## Quick Example

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>

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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

