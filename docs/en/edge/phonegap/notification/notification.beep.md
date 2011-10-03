notification.beep
=================

The device will play a beep sound.

    navigator.notification.beep(times);

- __times:__ The number of times to repeat the beep (`Number`)

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
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
  - PhoneGap implements beep by playing an audio file via the media API.
  - The user must provide a file with the desired beep tone.
  - This file must be less than 30 seconds long, located in the www/ root, and must be named `beep.wav`.

Windows Phone 7 Quirks
-------------

- WP7 PhoneGap lib includes a generic beep file that is used. 
