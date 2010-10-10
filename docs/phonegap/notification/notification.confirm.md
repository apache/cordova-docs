notification.confirm
====================

Shows a confirmation dialog box.

    navigator.notification.confirm(message, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __title:__ Dialog title (`String`) (Optional, Default: "Confirm")
- __buttonLabels:__ Comma separated string with button labels (`String`) (Optional, Default: "OK,Cancel")
- __returns:__ Index of the button clicked (1, 2 or 3). (`Number`)
    
Description
-----------

Function `notification.confirm` displays a native dialog box that is more customizable than the browser's `confirm` function.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    navigator.notification.confirm(
        'You are the winner!',  // message
        'Game Over',            // title
        'Restart,Exit'          // buttonLabels
    );
        
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
    
        // Show a custom confirm
        //
        function showConfirm() {
            var r = navigator.notification.confirm(
                'You are the winner!',  // message
                'Game Over',            // title
                'Restart,Exit'          // buttonLabels
            );
            navigator.notification.alert('You selected button ' + r);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>