resume
===========

This is an event that fires when a PhoneGap application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

Details
-------

PhoneGap consists of two code bases: native and JavaScript. While the native code pulls the application from the background the resume event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the PhoneGap 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the pause event
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
		    document.addEventListener("resume", onResume, false);
        }

        // Handle the resume event
        //
        function onResume() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>
