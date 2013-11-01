---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# Storage

> An overview of storage options for Cordova.

There are several storage APIs that are available to Cordova applications. 
See
[html5rocks](http://www.html5rocks.com/en/features/storage).
for a more complete overview and examples.

## LocalStorage

This API is provided by the underlying WebView implementations. It provides
synchronous key/value pair storage. Refer to [the spec](http://www.w3.org/TR/webstorage/) for more details.

### Platform Support

- All of them :)

### Windows Phone 7 Quirks

Dot notation is _not_ available on Windows Phone 7. Be sure to use
`setItem` or `getItem`, rather than accessing keys directly from the
storage object, such as `window.localStorage.someKey`.

## WebSQL

This API is provided by the underlying WebView.
The [Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/)
offers more full-featured database tables accessed via SQL queries.

### Platform Support

- Android
- BlackBerry 10
- iOS
- Tizen

## IndexedDB

This API is provided by the underlying WebView.
[Indexed DB](http://www.w3.org/TR/IndexedDB/) offers more features than LocalStorage but fewer than WebSQL.

### Platform Support

- Windows Phone 8
- BlackBerry 10

## Plugin-Based Options

* Most notably - The File API.
* More storage options exist through [Cordova plugins](http://plugins.cordova.io/).
