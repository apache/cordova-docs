offline
===========

This is an event that fires when a PhoneGap application is offline (not connected to the Internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being offline, the offline event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap 'deviceready' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)

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
        <title>PhoneGap Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when PhoneGap is loaded.
        //
        // At this point, the document has loaded but phonegap.js has not.
        // When PhoneGap is loaded and talking with the native device,
        // it will call the event `deviceready`.
        // 
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
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
      <body>
      </body>
    </html>

iOS Quirks
--------------------------
During initial startup, the first offline event (if applicable) will take at least a second to fire.