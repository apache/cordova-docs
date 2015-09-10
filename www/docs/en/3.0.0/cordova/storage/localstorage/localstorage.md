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

Provides access to the W3C's
[Web <a href="../storage.html">Storage</a> interface](http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var permanent<a href="../storage.html">Storage</a> = window.local<a href="../storage.html">Storage</a>;
    var temp<a href="../storage.html">Storage</a> = window.session<a href="../storage.html">Storage</a>;

Methods
-------

- __key__: Returns the name of the key at the specified position.

- __getItem__: Returns the item identified by the specified key.

- __setItem__: Assigns a keyed item's value.

- __removeItem__: Removes the item identified by the specified key.

- __clear__: Removes all of the key/value pairs.

Details
-----------

The `window.local<a href="../storage.html">Storage</a>` interface implements the W3C's [Web <a href="../storage.html">Storage</a>
interface](http://dev.w3.org/html5/webstorage/).  An app can use it to
save persistent data using key-value pairs.  The
`window.session<a href="../storage.html">Storage</a>` interface works the same way in every respect,
except that all data is cleared each time the app <a href="../../inappbrowser/inappbrowser.html">close</a>s. Each
database provides a separate namespace.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8

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

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // device APIs are available
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

Dot notation is _not_ available on Windows Phone 7. Be sure to use
`setItem` or `getItem`, rather than accessing keys directly from the
storage object, such as `window.local<a href="../storage.html">Storage</a>.someKey`.

