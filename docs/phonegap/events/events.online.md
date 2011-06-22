online
===========

This is an event that fires when a PhoneGap application is online (connected to the Internet).

    document.addEventListener("online", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being online, the online event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap 'deviceready' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
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
		    document.addEventListener("online", onOnline, false);
        }

        // Handle the online event
        //
        function onOnline() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>

iOS Quirks
--------------------------
During initial startup, the first online event (if applicable) will take at least a second to fire.