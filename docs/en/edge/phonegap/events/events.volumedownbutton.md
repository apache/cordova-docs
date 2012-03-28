volumedownbutton
===========

This is an event that fires when the user presses the volume down button.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume down behaviour you can register an event listener for the 'volumedownbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Down Button Example</title>

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

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }

        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
