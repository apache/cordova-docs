device.platform
===============

Get the device's operating system name.

    var string = window.device.platform;

Supported Platforms
-------------------

- Android 2.1+
- iPhone

Quick Example
-------------

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = window.device.platform;

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Device Platform Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            var devicePlatform = device.platform;
			document.getElementById('dPlatform').innerHTML  = devicePlatform;
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your device platform is <span id="dPlatform">unknown</span></p>
      </body>
    </html>