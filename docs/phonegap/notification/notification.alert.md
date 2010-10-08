notification.alert
==================

Shows an alert or dialog box.

    navigator.notification.alert(message, [title], [buttonName])

- __message:__ Dialog message (`String`)
- __title:__ Dialog title (`String`) (Optional, Default: "Alert")
- __buttonName:__ Button name (`String`) (Optional, Default: "OK")
    
Description
-----------

Most PhoneGap implementations use a native dialog box for this feature.  However, some platforms simply use the browser's `alert` function, which is typically less customizable.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry Widgets (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    // Android / BlackBerry Widgets (OS 5.0 and higher) / iPhone
    //
    navigator.notification.alert(
        'You are the winner!',  // message
        'Game Over',            // title
        'Done'                  // buttonName
    );

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('You are the winner!');
        
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
      <body onload="onLoad()">
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>