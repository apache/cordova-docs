deviceready
===========

Event that fires when PhoneGap has loaded the native and JavaScript code.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Details
-------

This is a very important event that every PhoneGap application must use.

You can only use the PhoneGap API once the `deviceready` event has fired.

Typically, you will want to attach an event listener with `document.addEventListener` once the HTML document's DOM has loaded.

Supported Platforms
-------------------

- iPhone

Quick Example
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>PhoneGap Template</title>

        <!-- PhoneGap.js passes commands to the device's native PhoneGap implementation -->
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
            // Now safe to use the PhoneGap API
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>