device.name
===========

Get the device's model name.

    var string = window.device.name;
    
Description
-----------

`device.name` is a property that returns a `String`. 

The name of the device is defined as the model or product name. This value is set by the device manufacturer and may be different across model versions.

Supported Platforms
-------------------

- Android 2.1+
- BlackBerry
- iPhone

Quick Example
-------------

    // Android:    Nexus One  => "Passion" (Nexus One code name)
    // BlackBerry: Bold       => "8900" or "9000"
    // iPhone:     Any device => Custom name set in iTunes e.g. "Joe's iPhone"
    //
    var deviceName = window.device.name;

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Device Name Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            alert(window.device.name);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p>Device name will be shown in an alert box.</p>
      </body>
    </html>
    
iPhone Quirks
-------------

- __Does not__ get the device model name.
- Gets the name assigned by owner.
    - The value is set in iTunes.
    - e.g. "Joe's iPhone"