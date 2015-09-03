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


Notification
============

> Visual, audible, and tactile device notifications.

Methods
-------

- notification.alert
- notification.confirm
- notification.prompt
- notification.beep
- notification.vibrate

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Notification" value="org.apache.cordova.Notification"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.VIBRATE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Notification" value="org.apache.cordova.notification.Notification" />

#### www/config.xml

    <feature id="blackberry.ui.dialog" />

### iOS

#### config.xml

    <plugin name="Notification" value="CDVNotification" />

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.

### Tizen

    No permissions are required.



notification.alert
==================

Shows a custom alert or dialog box.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ Dialog message (`String`)
- __alertCallback:__ Callback to invoke when alert dialog is dismissed. (`Function`)
- __title:__ Dialog title (`String`) (Optional, Default: "Alert")
- __buttonName:__ Button name (`String`) (Optional, Default: "OK")
    
Description
-----------

Most Cordova implementations use a native dialog box for this feature.  However, some platforms simply use the browser's `alert` function, which is typically less customizable.

Supported Platforms
-------------------

- Android
- BlackBerry OS 5 - 7 and BlackBerry 10
- iPhone
- Windows Phone 7 and 8
- Bada 1.2 & 2.x
- webOS
- Tizen
- Windows 8

Quick Example
-------------

    // Android / BlackBerry OS 5 - 7 and BlackBerry 10 / iPhone / Tizen
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
        
Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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

Windows Phone 7 and 8 Quirks
-------------

- There is no built in browser alert, so if you want to just write alert('foo'); you can assign window.alert = navigator.notification.alert;
- alert + confirm calls are non-blocking, and result is only available asynchronously.

Bada 2.x Quirks
---------------
- alert uses javascript alert



notification.confirm
====================

Shows a customizable confirmation dialog box.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __confirmCallback:__ - Callback to invoke with index of button pressed (1, 2 or 3) or when the dialog is dismissed without a button press (0), (`Function`)
- __title:__ Dialog title (`String`) (Optional, Default: "Confirm")
- __buttonLabels:__ Comma separated string with button labels (`String`) (Optional, Default: "OK,Cancel")
    
Description
-----------

Function `notification.confirm` displays a native dialog box that is more customizable than the browser's `confirm` function.

confirmCallback
---------------

The `confirmCallback` is called when the user has pressed one of the buttons on the confirmation dialog box.

The callback takes the argument `buttonIndex` (`Number`), which is the index of the pressed button. It's important to note that the index uses one-based indexing, so the value will be `1`, `2`, `3`, etc.

Supported Platforms
-------------------

- Android
- BlackBerry OS 5 - 7 and BlackBerry 10
- iPhone
- Windows Phone 7 and 8
- Bada 1.2 & 2.x
- Tizen
- Windows 8

Quick Example
-------------

	// process the confirmation dialog result
	function onConfirm(buttonIndex) {
		alert('You selected button ' + buttonIndex);
	}

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
	        'You are the winner!',  // message
			onConfirm,				// callback to invoke with index of button pressed
	        'Game Over',            // title
	        'Restart,Exit'          // buttonLabels
        );
    }
        
Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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
		        'You are the winner!',  // message
				onConfirm,				// callback to invoke with index of button pressed
		        'Game Over',            // title
		        'Restart,Exit'          // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>

Windows Phone 7 and 8 Quirks
----------------------

- There is no built-in browser function for `window.confirm`
    - You can bind `window.confirm` by assigning `window.confirm = navigator.notification.confirm;`.
- Calls to `alert` and `confirm` are non-blocking and result is only available asynchronously.


Bada 2.x Quirks
---------------

- `confirm` uses the browser's built-in `alert` function.

Bada 1.2 Quirks
---------------

- Ignore button names, always `'OK|Cancel'`.



notification.prompt
====================

Shows a customizable prompt dialog box.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __promptCallback:__ - Callback to invoke when a button is pressed (`Function`)
- __title:__ Dialog title (`String`) (Optional, Default: "Prompt")
- __buttonLabels:__ Array of strings for the button labels (`Array`) (Optional, Default: ["OK","Cancel"])

Description
-----------

Function `notification.prompt` displays a native dialog box that is more customizable than the browser's `prompt` function.

promptCallback
---------------

The `promptCallback` is called when the user has pressed one of the buttons on the prompt dialog box.

The callback takes the argument `results` which contains the following properties:

- __buttonIndex:__ (`Number`), which is the index of the pressed button. It's important to note that the index uses one-based indexing, so the value will be `1`, `2`, `3`, etc.
- __input1:__ (`String`), which is the text entered in the prompt dialog box.

Supported Platforms
-------------------

- Android
- iPhone

Quick Example
-------------

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,	               // callback to invoke
            'Registration',            // title
            ['Ok','Exit']              // buttonLabels
        );
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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
                ['Ok','Exit']              // buttonLabels
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>

Android Quirks
----------------------

- Android supports up to a maximum of 3 buttons.  Additional button labels over 3 are ignored.
- On Android 3.0 and later, the buttons will be displayed in reverse order for devices using the Holo theme.



notification.beep
=================

The device will play a beep sound.

    navigator.notification.beep(times);

- __times:__ The number of times to repeat the beep (`Number`)

Supported Platforms
-------------------

- Android
- BlackBerry OS 5 - 7 (not supported for BlackBerry 10)
- iPhone
- Windows Phone 7 and 8
- Bada 1.2 & 2.x
- Tizen

Quick Example
-------------

    // Beep twice!
    navigator.notification.beep(2);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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

Android Quirks
--------------

- Android plays the default "Notification ringtone" specified under the "Settings/Sound & Display" panel.

iPhone Quirks
-------------

- Ignores the beep count argument.
- There is no native beep API for iPhone.
  - Cordova implements beep by playing an audio file via the media API.
  - The user must provide a file with the desired beep tone.
  - This file must be less than 30 seconds long, located in the www/ root, and must be named `beep.wav`.

Windows Phone 7 and 8 Quirks
-------------

- Cordova lib includes a generic beep file that is used. 

Tizen Quirks
-------------

  - Tizen implements beep by playing an audio file via the media API.
  - This beep file must be short, named `beep.wav` and has to be located in a 'sounds' sub-directory of the application root directory.



notification.vibrate
====================

Vibrates the device for the specified amount of time.

    navigator.notification.vibrate(milliseconds)

- __time:__ Milliseconds to vibrate the device. 1000 milliseconds equals 1 second (`Number`)

Supported Platforms
-------------------

- Android
- BlackBerry OS 5 - 7 (not supported for BlackBerry 10)
- iPhone
- Windows Phone 7 and 8
- Bada 1.2 & 2.x

Quick Example
-------------

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);

Full Example
------------
    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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

iPhone Quirks
-------------

- __time:__ Ignores the time and vibrates for a pre-set amount of time.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored

