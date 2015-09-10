---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

local<a href="../storage.html">Storage</a>
===============

Provides access to a W3C <a href="../storage.html">Storage</a> interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var storage = window.local<a href="../storage.html">Storage</a>;

Methods
-------

- __key__: Returns the name of the key at the position specified. 
- __getItem__: Returns the item identified by it's key.
- __setItem__: Saves and item at the key provided.
- __removeItem__: Removes the item identified by it's key.
- __clear__: Removes all of the key value pairs.

Details
-----------

local<a href="../storage.html">Storage</a> provides an interface to a W3C <a href="../storage.html">Storage</a> interface.  It allows one to save data as key-value pairs.

Note: window.session<a href="../storage.html">Storage</a> provides the same interface, but is cleared between app launches.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- Windows Phone 7 and 8
- webOS
- Tizen

Key Quick <a href="../storage.opendatabase.html">Example</a>
-------------

    var keyName = window.local<a href="../storage.html">Storage</a>.key(0);

Set Item Quick <a href="../storage.opendatabase.html">Example</a>
-------------

    window.local<a href="../storage.html">Storage</a>.setItem("key", "value");

Get Item Quick <a href="../storage.opendatabase.html">Example</a>
-------------

	var value = window.local<a href="../storage.html">Storage</a>.getItem("key");
	// value is now equal to "value"

Remove Item Quick <a href="../storage.opendatabase.html">Example</a>
-------------

	window.local<a href="../storage.html">Storage</a>.removeItem("key");

Clear Quick <a href="../storage.opendatabase.html">Example</a>
-------------

	window.local<a href="../storage.html">Storage</a>.clear();

Full <a href="../storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../storage.html">Storage</a> <a href="../storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
			window.local<a href="../storage.html">Storage</a>.setItem("key", "value");
			var keyname = window.local<a href="../storage.html">Storage</a>.key(i);
			// keyname is now equal to "key"
			var value = window.local<a href="../storage.html">Storage</a>.getItem("key");
			// value is now equal to "value"
			window.local<a href="../storage.html">Storage</a>.removeItem("key");
			window.local<a href="../storage.html">Storage</a>.setItem("key2", "value2");
			window.local<a href="../storage.html">Storage</a>.clear();
			// local<a href="../storage.html">Storage</a> is now empty
        }
    

        </script>
      </head>
      <body>
        <h1><a href="../storage.opendatabase.html">Example</a></h1>
        <p>local<a href="../storage.html">Storage</a></p>
      </body>
    </html>


Windows Phone 7 Quirks
-------------

- dot notation is NOT available on Windows Phone 7. Be sure to use : window.local<a href="../storage.html">Storage</a>.setItem/getItem, and not the w3 spec defined calls to window.local<a href="../storage.html">Storage</a>.someKey = 'someValue';
