offline
===========

This is an event that fires when a Cordova application is offline (not connected to the Internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being offline, the offline event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Offline Example</title>

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
		    document.addEventListener("offline", onOffline, false);
        }

        // Handle the offline event
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
During initial startup, the first offline event (if applicable) will take at least a second to fire.
