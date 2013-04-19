---
license: Licensed to the Apache Software Foundation (ASF) under one
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
- BlackBerry WebWorks (OS 5.0 and higher)
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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
