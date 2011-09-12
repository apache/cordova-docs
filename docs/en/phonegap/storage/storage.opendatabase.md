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
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone

Quick Example
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>
