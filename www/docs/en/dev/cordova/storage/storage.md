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

title: Storage
---

# Storage

> An overview of storage options for Cordova.

Several storage APIs are available for Cordova applications.
See [html5rocks][Html5RocksStorage], for a more complete overview and examples.

## LocalStorage

Also known as _web storage_, _simple storage_, or by its alternate
_session storage_ interface, this API provides synchronous key/value
pair storage, and is available in underlying WebView implementations.
Refer to the [W3C spec][W3CSpecStorage] for details.

## WebSQL

This API is available in the underlying WebView.
The [Web SQL Database Specification][WebSQLDatabaseSpecification]
offers more full-featured database tables accessed via SQL queries.

The following platforms support WebSQL:

- Android
- BlackBerry 10
- iOS

## IndexedDB

This API is available in the underlying WebView.
[Indexed DB][IndexedDB] offers more features
than LocalStorage but fewer than WebSQL.

The following platforms support IndexedDB:

- BlackBerry 10
- Windows Phone 8
- Windows 8

## Plugin-Based Options

In addition to the storage APIs listed above, the
[File API][FileAPI] allows you to cache data on the local file system.  Other
[Cordova plugins][CordovaPlugins] provide similar storage options.

[Html5RocksStorage]: http://www.html5rocks.com/en/features/storage
[W3CSpecStorage]: http://www.w3.org/TR/webstorage/
[WebSQLDatabaseSpecification]: http://dev.w3.org/html5/webdatabase/
[IndexedDB]: http://www.w3.org/TR/IndexedDB/
[FileAPI]: https://github.com/apache/cordova-plugin-file/blob/master/README.md
[CordovaPlugins]: {{ site.baseurl }}/plugins
