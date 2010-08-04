notification.vibrate
====================

Vibrates the device for the specified amount of time.

    navigator.notification.vibrate(milliseconds)

- __time:__ Milliseconds to vibrate the device. 1000 milliseconds equals 1 second (`Number`)

Supported Platforms
-------------------

- iPhone

Quick Example
-------------

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);

Full Example
------------
    
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show an Alert Box
        //
        function showAlert() {
            navigator.notification.alert('Howdy!');
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
      <body onload="onLoad()">
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>

BlackBerry Quirks
-----------------

- __time:__ Seconds instead of milliseconds. (`Number`)

        // Vibrate for 2 seconds
        //
        navigator.notification.vibrate(2)

iPhone Quirks
-------------

- __time:__ Ignores the time and vibrates for a pre-set amount of time.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored