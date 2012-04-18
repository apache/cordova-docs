backbutton
===========

This is an event that fires when the user presses the back button.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default back button behaviour you can register an event listener for the 'backbutton' event.  It is no longer necessary to call any other method to over ride the back button behaviour.  Now, you only need to register an event listener for 'backbutton'.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )

Quick Example
-------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Back Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-1.6.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to call Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Handle the back button
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
