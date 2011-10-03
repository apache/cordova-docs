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

Most PhoneGap implementations use a native dialog box for this feature.  However, some platforms simply use the browser's `alert` function, which is typically less customizable.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

Quick Example
-------------

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iPhone
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

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('You are the winner!');
        
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
    
        // alert dialog dismissed
	    function alertDismissed() {
	        // do something
	    }

        // Show a custom alert
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

Windows Phone 7 Quirks
-------------

- Ignores button names, always uses 'OK' 