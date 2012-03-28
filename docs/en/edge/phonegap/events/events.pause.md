pause
===========

This is an event that fires when a Cordova application is put into the background.

    document.addEventListener("pause", yourCallbackFunction, false);

Details
-------

Cordova consists of two code bases: native and JavaScript. While the native code puts the application into the background the pause event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Pause Example</title>

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
		    document.addEventListener("pause", onPause, false);
        }

        // Handle the pause event
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
In the pause handler, any calls that go through Objective-C will not work, nor will any calls that are interactive, like alerts. This means that you cannot call console.log (and its variants), or any calls from Plugins or the Cordova API. These will only be processed when the app resumes (processed on the next run-loop).
