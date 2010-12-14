localStorage
===============

Provides access to a W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var storage = navigator.localStorage;

Methods
-------

- __key__: Returns the name of the key at the position specified. 
- __getItem__: Returns the item identified by it's key.
- __setItem__: Saves and item at the key provided.
- __removeItem__: Removes the item identified by it's key.
- __clear__: Removes all of the key value pairs.

Details
-----------

localStorage provides an interface to a W3C Storage interface.  It allows one to save data as key-value pairs.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 6.0 and higher)
- iPhone

Key Quick Example
-------------

    var keyName = navigator.localStorage.key(0);

Set Item Quick Example
-------------

    navigator.localStorage.setItem("key", "value");

Get Item Quick Example
-------------

	var value = navigator.localStorage.getItem("key");
	// value is now equal to "value"

Remove Item Quick Example
-------------

	navigator.localStorage.removeItem("key");

Clear Quick Example
-------------

	navigator.localStorage.clear();

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
			navigator.localStorage.setItem("key", "value");
			var keyname = navigator.localStorage.key(i);
			// keyname is now equal to "key"
			var value = navigator.localStorage.getItem("key");
			// value is now equal to "value"
			navigator.localStorage.removeItem("key");
			navigator.localStorage.setItem("key2", "value2");
			navigator.localStorage.clear();
			// localStorage is now empty
        }
    

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>

Android 1.X Quirks
------------------

- __key:__ This method is not support by Android 1.X devices.
- __clear:__ This method is not support by Android 1.X devices.
