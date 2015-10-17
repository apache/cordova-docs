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

title: localStorage
---

localStorage
===============

Provides access to a W3C [Storage](../storage.html) interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

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

localStorage provides an interface to a W3C [Storage](../storage.html) interface.  It allows one to save data as key-value pairs.

Note: window.sessionStorage provides the same interface, but is cleared between app launches.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- Windows Phone 7

Key Quick [Example](../storage.opendatabase.html)
-------------

    var keyName = window.localStorage.key(0);

Set Item Quick [Example](../storage.opendatabase.html)
-------------

    window.localStorage.setItem("key", "value");

Get Item Quick [Example](../storage.opendatabase.html)
-------------

	var value = window.localStorage.getItem("key");
	// value is now equal to "value"

Remove Item Quick [Example](../storage.opendatabase.html)
-------------

	window.localStorage.removeItem("key");

Clear Quick [Example](../storage.opendatabase.html)
-------------

	window.localStorage.clear();

Full [Example](../storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.6.1.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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


Windows Phone 7 Quirks
-------------

- dot notation is NOT available on Windows Phone. Be sure to use : window.localStorage.setItem/getItem, and not the w3 spec defined calls to window.localStorage.someKey = 'someValue';