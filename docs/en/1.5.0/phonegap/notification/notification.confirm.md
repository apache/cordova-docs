notification.confirm
====================

Shows a customizable confirmation dialog box.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __confirmCallback:__ - Callback to invoke with index of button pressed (1, 2 or 3). (`Number`)
- __title:__ Dialog title (`String`) (Optional, Default: "Confirm")
- __buttonLabels:__ Comma separated string with button labels (`String`) (Optional, Default: "OK,Cancel")
    
Description
-----------

Function `notification.confirm` displays a native dialog box that is more customizable than the browser's `confirm` function.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

Quick Example
-------------

	// process the confirmation dialog result
	function onConfirm(button) {
		alert('You selected button ' + button);
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
    
		// process the confirmation dialog result
		function onConfirm(button) {
			alert('You selected button ' + button);
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

Windows Phone 7 Quirks
-------------

- Ignores button names, always 'OK|Cancel'