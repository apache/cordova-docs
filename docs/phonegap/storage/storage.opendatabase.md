openDatabase
===============

Returns a new Database object.

    var dbShell = window.openDatabase(name, version, display_name, size);

Description
-----------

window.openDatabase returns a new Database object.

This method will create a new SQL Lite Database and return a Database object.  Use the Database Object to manipulate the data.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 6.0 and higher)
- iPhone

Quick Example
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

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
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>
