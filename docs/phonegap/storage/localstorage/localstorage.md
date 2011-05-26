localStorage
===============

Provides access to a W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var storage = window.localStorage;

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
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone

Key Quick Example
-------------

    var keyName = window.localStorage.key(0);

Set Item Quick Example
-------------

    window.localStorage.setItem("key", "value");

Get Item Quick Example
-------------

	var value = window.localStorage.getItem("key");
	// value is now equal to "value"

Remove Item Quick Example
-------------

	window.localStorage.removeItem("key");

Clear Quick Example
-------------

	window.localStorage.clear();

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
			window.localStorage.setItem("key", "value");
			var keyname = window.localStorage.key(i);
			// keyname is now equal to "key"
			var value = window.localStorage.getItem("key");
			// value is now equal to "value"
			window.localStorage.removeItem("key");
			window.localStorage.setItem("key2", "value2");
			window.localStorage.clear();
			// localStorage is now empty
        }
    

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
