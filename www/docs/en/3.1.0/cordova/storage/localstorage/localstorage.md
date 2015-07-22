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

# localStorage

Provides access to the W3C's
[Web [Storage](../storage.html) interface](http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;

## Methods

- __key__: Returns the name of the key at the specified position.

- __getItem__: Returns the item identified by the specified key.

- __setItem__: Assigns a keyed item's value.

- __removeItem__: Removes the item identified by the specified key.

- __clear__: Removes all of the key/value pairs.

## Details

The `window.localStorage` interface implements the W3C's [Web [Storage](../storage.html)
interface](http://dev.w3.org/html5/webstorage/).  An app can use it to
save persistent data using key-value pairs.  The
`window.sessionStorage` interface works the same way in every respect,
except that all data is cleared each time the app closes. Each
database provides a separate namespace.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8

## Key Quick Example

    var keyName = window.localStorage.key(0);

## Set Item Quick Example

    window.localStorage.setItem("key", "value");

## Get Item Quick Example

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"

## Remove Item Quick Example

        window.localStorage.removeItem("key");

## Clear Quick Example

        window.localStorage.clear();

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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

## Windows Phone 7 Quirks

Dot notation is _not_ available on Windows Phone 7. Be sure to use
`setItem` or `getItem`, rather than accessing keys directly from the
storage object, such as `window.localStorage.someKey`.

