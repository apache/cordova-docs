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


# Notification

> Visual, audible, and tactile device notifications.

## Methods

- `notification.alert`
- `notification.confirm`
- `notification.prompt`
- `notification.beep`
- `notification.vibrate`

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.dialogs.Notification" />
        </feature>
        <feature name="Vibration">
            <param name="android-package" value="org.apache.cordova.vibration.Vibration" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />

* Android

        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.dialogs.Notification" />
        </feature>
        <feature name="Vibration">
            <param name="android-package" value="org.apache.cordova.vibration.Vibration" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />

* iOS (in the named application directory's `config.xml`)

        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.



# notification.alert

Shows a custom alert or dialog box.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message__: Dialog message. _(String)_

- __alertCallback__: Callback to invoke when alert dialog is dismissed. _(Function)_

- __title__: Dialog title. _(String)_ (Optional, defaults to `Alert`)

- __buttonName__: Button name. _(String)_ (Optional, defaults to `OK`)

## Description

Most Cordova implementations use a native dialog box for this feature,
but some platforms use the browser's `alert` function, which is
typically less customizable.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    // Amazon Fire OS / Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }

    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }

        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>

## Windows Phone 7 and 8 Quirks

- There is no built-in browser alert, but you can bind one as follows to call `alert()` in the global scope:

        window.alert = navigator.notification.alert;

- Both `alert` and `confirm` are non-blocking calls, results of which are only available asynchronously.




# notification.confirm

Displays a customizable confirmation dialog box.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message__: Dialog message. _(String)_

- __confirmCallback__: Callback to invoke with index of button pressed (1, 2, or 3) or when the dialog is dismissed without a button press (0). _(Function)_

- __title__: Dialog title. _(String)_ (Optional, defaults to `Confirm`)

- __buttonLabels__: Array of strings specifying button labels. _(Array)_  (Optional, defaults to [`OK,Cancel`])

## Description

The `notification.confirm` method displays a native dialog box that is
more customizable than the browser's `confirm` function.

## confirmCallback

The `confirmCallback` executes when the user presses one of the
buttons in the confirmation dialog box.

The callback takes the argument `buttonIndex` _(Number)_, which is the
index of the pressed button. Note that the index uses one-based
indexing, so the value is `1`, `2`, `3`, etc.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }

        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>

## Windows Phone 7 and 8 Quirks

- There is no built-in browser function for `window.confirm`, but you can bind it by assigning:

        window.confirm = navigator.notification.confirm;

- Calls to `alert` and `confirm` are non-blocking, so the result is only available asynchronously.




# notification.prompt

Shows a customizable prompt dialog box.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

- __message__: Dialog message. _(String)_

- __promptCallback__: Callback to invoke when a button is pressed. _(Function)_

- __title__: Dialog title _(String)_ (Optional, defaults to `Prompt`)

- __buttonLabels__: Array of strings specifying button labels _(Array)_ (Optional, defaults to `["OK","Cancel"]`)

- __defaultText__: Default textbox input value (`String`) (Optional, Default: empty string)

## Description

The `notification.prompt` method displays a native dialog box that is
more customizable than the browser's `prompt` function.

## promptCallback

The `promptCallback` executes when the user presses one of the buttons
in the prompt dialog box. The `results` object passed to the callback
contains the following properties:

- __buttonIndex__: The index of the pressed button. _(Number)_ Note that the index uses one-based indexing, so the value is `1`, `2`, `3`, etc.

- __input1__: The text entered in the prompt dialog box. _(String)_

## Supported Platforms

- Amazon Fire OS
- Android
- iOS

## Quick Example

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>

## Android Quirks

- Android supports a maximum of three buttons, and ignores any more than that.

- On Android 3.0 and later, buttons are displayed in reverse order for devices that use the Holo theme.



# notification.beep

The device plays a beep sound.

    navigator.notification.beep(times);

- __times__: The number of times to repeat the beep. _(Number)_

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    // Beep twice!
    navigator.notification.beep(2);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }

        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }

        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>

## Amazon Fire OS Quirks

- Amazon Fire OS plays the default __Notification Sound__ specified under the __Settings/Display & Sound__ panel.

## Android Quirks

- Android plays the default __Notification ringtone__ specified under the __Settings/Sound & Display__ panel.

## Windows Phone 7 and 8 Quirks

- Relies on a generic beep file from the Cordova distribution.

## Tizen Quirks

- Tizen implements beeps by playing an audio file via the media API.

- The beep file must be short, must be located in a `sounds` subdirectory of the application's root directory, and must be named `beep.wav`.




# notification.vibrate

Vibrates the device for the specified amount of time.

    navigator.notification.vibrate(milliseconds)

- __time__: Milliseconds to vibrate the device, where 1000 milliseconds equals 1 second. _(Number)_

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8

## Quick Example

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }

        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }

        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>

## iOS Quirks

- __time__: Ignores the specified time and vibrates for a pre-set amount of time.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored

## BlackBerry 10 Quirks

vibrate function owned by navigator object

        navigator.vibrate(1000);  // vibrate for 1 second

