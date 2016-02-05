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

title: Events
---

# Events

There are various events provided by cordova to be used by the application.
The application code could add listeners for these events. For example:

**HTML File**

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="example.js"></script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

**JS File**

    // example.js file
    // Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
        document.addEventListener("menubutton", onMenuKeyDown, false);
        // Add similar listeners for other events
    }

    function onPause() {
        // Handle the pause event
    }

    function onResume() {
        // Handle the resume event
    }

    function onMenuKeyDown() {
        // Handle the menubutton event
    }

    // Add similar event handlers for other events

**Note**: Applications typically should use `document.addEventListener` to attach an event listener once the [deviceready](#deviceready)

The following table lists the cordova events and the supported platforms:

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th>Supported Platforms/<br/>Events</td>
        <th>android</th>
        <th>blackberry10</th>
        <th>ios</th>
        <th>Windows Phone 8</th>
        <th>Windows</th>
    </tr>
</thead>

<tbody>
    <tr>
        <th><a href="#deviceready">deviceready</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win"       class="y"></td>
    </tr>

    <tr>
        <th><a href="#pause">pause</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win"       class="y"></td>
    </tr>

    <tr>
        <th><a href="#resume">resume</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win"       class="y"></td>
    </tr>

    <tr>
        <th><a href="#backbutton">backbutton</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="y"></td>
    </tr>

    <tr>
        <th><a href="#menubutton">menubutton</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>

    <tr>
        <th><a href="#searchbutton">searchbutton</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>

    <tr>
        <th><a href="#startcallbutton">startcallbutton</a></th>
        <td data-col="android"    class="n"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>

    <tr>
        <th><a href="#endcallbutton">endcallbutton</a></th>
        <td data-col="android"    class="n"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>

    <tr>
        <th><a href="#volumedownbutton">volumedownbutton</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>

    <tr>
        <th><a href="#volumeupbutton">volumeupbutton</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win"       class="n"></td>
    </tr>
</tbody>
</table>

<!-- END HTML -->


## deviceready

The deviceready event fires when Cordova is fully loaded. This event is
essential to any application. It signals that Cordova's device APIs have
loaded and are ready to access.

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

### Quick Example

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use device APIs
    }

## pause

The pause event fires when the native platform puts the application into the background,
typically when the user switches to a different application.

### Quick Example

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

### iOS Quirks

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
multi-tasking by setting [UIApplicationExitsOnSuspend][UIApplicationExitsOnSuspend]
to `YES`. To run when locked on iOS 4, this setting does not matter.

## resume

The `resume` event fires when the native platform pulls the application out from the background.

### Quick Example

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

### iOS Quirks

Any interactive functions called from a [pause](#pause) event handler execute
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
multi-tasking by setting [UIApplicationExitsOnSuspend][UIApplicationExitsOnSuspend]
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

### Android Quirks

Refer [Android Life Cycle Guide][AndroidLifeCycleGuide] for details on android quirks with
the `resume` event.

## backbutton

The event fires when the user presses the back button. To override the default
back-button behavior, register an event listener for the `backbutton` event.
It is no longer necessary to call any other method to override the
back-button behavior.

### Quick Example

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

## menubutton

The event fires when the user presses the menu button. Applying an event handler
overrides the default menu button behavior.

### Quick Example

    document.addEventListener("menubutton", onMenuKeyDown, false);

    function onMenuKeyDown() {
        // Handle the back button
    }

## searchbutton

The event fires when the user presses the search button on Android. If you need to
override the default search button behavior on Android you can register an event
listener for the 'searchbutton' event.

### Quick Example

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Handle the search button
    }

## startcallbutton

The event fires when the user presses the start call button. If you need to override
the default start call behavior you can register an event listener for the `startcallbutton` event.

### Quick Example

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // Handle the start call button
    }

## endcallbutton

This event fires when the user presses the end call button. The event overrides the
default end call behavior.

### Quick Example

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // Handle the end call button
    }

## volumedownbutton

The event fires when the user presses the volume down button. If you need to override
the default volume down behavior you can register an event listener for the `volumedownbutton` event.

### Quick Example

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }

## volumeupbutton

The event fires when the user presses the volume up button. If you need to override
the default volume up behavior you can register an event listener for the `volumeupbutton` event.

### Quick Example

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }

[UIApplicationExitsOnSuspend]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html
[AndroidLifeCycleGuide]: ../../guide/platforms/android/lifecycle.html
