volumeupbutton
===========

This is an event that fires when the user presses the volume up button.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume up behaviour you can register an event listener for the 'volumeupbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>PhoneGap Volume Up Button Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when PhoneGap is loaded.
        //
        // At this point, the document has loaded but phonegap.js has not.
        // When PhoneGap is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
