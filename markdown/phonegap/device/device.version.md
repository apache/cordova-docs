device.version
==============

Get the operating system version.

    var string = window.device.version;

Supported Platforms
-------------------

- Android 2.1+
- iPhone

Quick Example
-------------

    // Android:    Froyo OS would return "2.2"
    //             Eclair OS would return "2.1", "2.0.1", or "2.0"
    //
    // BlackBerry: Bold 9000 using OS 4.6 would return "4.6.0.282"
    //
    // iPhone:     iOS 3.2 returns "3.2"
    //
    var deviceVersion = window.device.version;

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Device Version Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            var deviceVersion = device.version;
			document.getElementById('dVersion').innerHTML  = deviceVersion;
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your device version is <span id="dVersion">unknown</span></p>
      </body>
    </html>
