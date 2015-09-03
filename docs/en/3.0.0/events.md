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


Events
======

> Cordova lifecycle events.

Event Types
-----------

- deviceready
- pause
- resume
- online
- offline
- backbutton
- batterycritical
- batterylow
- batterystatus
- menubutton
- searchbutton
- startcallbutton
- endcallbutton
- volumedownbutton
- volumeupbutton

## Accessing the Feature

As of version 3.0, Cordova implements battery status and other
device-level APIs as _plugins_. Access to all other events not related
to battery status are enabled by default.  Use the CLI's `plugin`
command, described in The Command-line Interface, to enable or disable
battery events:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

* iOS (in `config.xml`)

        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>

* Tizen (in `config.xml`)

        <feature name="http://tizen.org/api/systeminfo" required="true"/>

  Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.



deviceready
===========

The event fires when Cordova is fully loaded.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Details
-------

This event is essential to any application. It signals that Cordova's
device APIs have loaded and are ready to access.

Cordova consists of two code bases: native and JavaScript. While the
native code loads, a custom loading image displays. However,
JavaScript only loads once the DOM loads. This means your web
application may potentially call a Cordova JavaScript function before
the corresponding native code is available.

The `deviceready` event fires once Cordova has fully loaded. Once the
event fires, you can safely make calls to Cordova APIs.  Applications
typically attach an event listener with `document.addEventListener`
once the HTML document's DOM has loaded.

The `deviceready` event behaves somewhat differently from others.  Any
event handler registered after the `deviceready` event fires has its
callback function called immediately.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use device APIs
    }

Full Example
------------

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



pause
===========

The event fires when an application is put into the background.

    document.addEventListener("pause", yourCallbackFunction, false);

Details
-------

The `pause` event fires when the native platform puts the application
into the background, typically when the user switches to a different
application.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

Full Example
------------

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

iOS Quirks
--------------------------

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



resume
===========

The event fires when an application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

Details
-------

The `resume` event fires when the native platform pulls the
application out from the background.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

Full Example
------------

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

iOS Quirks
--------------------------

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



online
===========

This event fires when an application goes online, and the device
becomes connected to the Internet.

    document.addEventListener("online", yourCallbackFunction, false);

Details
-------

The `online` event fires when a previously unconnected device receives
a network connection to allow an application access to the Internet.
It relies on the same information as the Connection API, and fires
when the value of `connection.type` becomes `NONE`.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

Quick Example
-------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // device APIs are available
        //
        function onDeviceReady() {
        }

        // Handle the online event
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------

During initial startup, the first `online` event (if applicable) takes
at least a second to fire, prior to which `connection.type` is
`UNKNOWN`.

Windows Phone 7 Quirks
--------------------------
When running in the Emulator, the `connection.status` is always unknown, so this event will _not_ fire.

Windows Phone 8 Quirks
--------------------------
The Emulator reports the connection type as `Cellular`, which does not change, so events will _not_ fire.



offline
===========

The event fires when an application goes offline, and the device is
not connected to the Internet.

    document.addEventListener("offline", yourCallbackFunction, false);

Details
-------

The `offline` event fires when a previously connected device loses a
network connection so that an application can no longer access the
Internet.  It relies on the same information as the Connection API,
and fires when the `connection.type` changes from `NONE` to any other
value.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

Quick Example
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>

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
During initial startup, the first offline event (if applicable) takes at least a second to fire.

Windows Phone 7 Quirks
--------------------------
When running in the Emulator, the `connection.status` is always unknown, so this event does _not_ fire.

Windows Phone 8 Quirks
--------------------------
The Emulator reports the connection type as `Cellular`, which does not change, so the event does _not_ fire.



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



batterycritical
===========

The event fires when the battery has reached the critical level
threshold.

    window.addEventListener("batterycritical", yourCallbackFunction, false);

Details
-------

The event fires when the percentage of battery charge has reached the
critical battery threshold. The value is device-specific.

The `batterycritical` handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `window.addEventListener` to attach
an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Tizen

Quick Example
-------------

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>

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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }

        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterylow
===========

The event fires when the battery has reached the low level threshold.

    window.addEventListener("batterylow", yourCallbackFunction, false);

Details
-------

The event fires when the percentage of battery charge has reached the
low battery threshold, device-specific value.

The `batterylow` handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Tizen

Quick Example
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }

Full Example
------------

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



batterystatus
===========

The event fires when there is a change in the battery status.

    window.addEventListener("batterystatus", yourCallbackFunction, false);

Details
-------

This event fires when the percentage of battery charge changes by at
least 1 percent, or if the device is plugged in or unplugged.

The battery status handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `window.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 and 8
- Tizen

Windows Phone 7 and 8 Quirks
----------------------

Windows Phone 7 does not provide native APIs to determine battery
level, so the `level` property is unavailable.  The `isPlugged`
parameter _is_ supported.

Quick Example
-------------

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

Full Example
------------

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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }

        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



menubutton
===========

The event fires when the user presses the menu button.

    document.addEventListener("menubutton", yourCallbackFunction, false);

Details
-------

Applying an event handler overrides the default menu button behavior.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("menubutton", onMenuKeyDown, false);

    function onMenuKeyDown() {
        // Handle the back button
    }

Full Example
------------

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



searchbutton
===========

The event fires when the user presses the search button on Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default search button behavior on Android
you can register an event listener for the 'searchbutton' event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- Android

Quick Example
-------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Handle the search button
    }

Full Example
------------

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



startcallbutton
===========

The event fires when the user presses the start call button.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default start call behavior you can
register an event listener for the `startcallbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // Handle the start call button
    }

Full Example
------------

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



endcallbutton
===========

This event fires when the user presses the end call button.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);

Details
-------

The event overrides the default end call behavior.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // Handle the end call button
    }

Full Example
------------

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



volumedownbutton
===========

The event fires when the user presses the volume down button.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume down behavior you can
register an event listener for the `volumedownbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }

Full Example
------------

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



volumeupbutton
===========

The event fires when the user presses the volume up button.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume up behavior you can
register an event listener for the `volumeupbutton` event.

Applications typically should use `document.addEventListener` to
attach an event listener once the `deviceready` event fires.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }

Full Example
------------

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

