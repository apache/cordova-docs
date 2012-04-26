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
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

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
        
Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.6.0.js"></script>
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
- There is no built in browser alert, so if you want to just write alert('foo'); you can assign window.alert = navigator.notification.alert;
- alert + confirm calls are non-blocking, and result is only available asyncronously.

Bada 2.x Quirks
---------------
- alert uses javascript alert
