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

title: Data Storage
toc_title: Data Storage
description: Storing data on the device.
---

# Data Storage

Several storage APIs are available for Cordova applications.
See html5rocks [storage overview][Html5RocksStorageOverview] and
[tutorial][Html5RocksStorageTutorial], for a more complete overview and
examples.

Each API offers advantages and disadvantages, which are summarized here. You
should choose whichever best suits your needs. You can also use several
different approaches within a single application for different purposes.

## LocalStorage

Local storage provides simple, synchronous key/value pair storage, and is
supported by the underlying WebView implementations on all Cordova
platforms.

### Usage Summary

Local storage can be accessed via `window.localStorage`. The following code
snippet shows the most important methods exposed by the returned `Storage` object:

```javascript
var storage = window.localStorage;
var value = storage.getItem(key); // Pass a key name to get its value.
storage.setItem(key, value) // Pass a key name and its value to add or update that key.
storage.removeItem(key) // Pass a key name to remove that key from storage.
```

For more information, see:

- [W3C: Spec][W3CSpecStorage]
- [MDN: Storage API][MDNStorage]
- [MDN: Storage Guide][MDNStorageGuide]

### Advantages

- Supported by all Cordova platforms.
- Its simple, synchronous API means it is easy to use.

### Disadvantages

- Only stores strings, so complex data structures have to be serialized, and only data that can be serialized can be stored.
- Performs poorly with large amounts of data. In particular:
    - The lack of indexing means searches require manually iterating all data.
    - Storing large or complex items is slow due to the need to serialize/de-serialize.
    - Synchronous API means calls will lock up the user interface.
- Limited total amount of storage (typically around 5MB).
- On iOS systems, WebKit may delete web-related data storage when the device is under storage pressure or exceeds defined storage quotas. This eviction is triggered by WebKit itself, based on its internal quota management policies. For more information, see [WebKit – Updates to Storage Policy][WebKitUpdatesToStoragePolicy].

## IndexedDB

The goal of the IndexedDB API is to combine the strengths of the LocalStorage
and WebSQL APIs, while avoiding their weaknesses. IndexedDB lets you store
arbitrary JavaScript objects (provided they are supported by the [structured clone algorithm][StructuredCloneAlgorithm]),
indexed with a key. It provides some of the benefits of SQL tables, without
constraining the structure or needing to define it up front.

IndexedDB provides a simple and easy to understand data model, much like LocalStorage.
But unlike LocalStorage, you can create multiple databases, with multiple stores per
database, and its asynchronous API and search indexes provide performance benefits.

IndexedDB is supported by the underlying WebView on all platforms, with known limitations on the `browser` platform.

## Cache Storage

### Overview

The Cache Storage API is a web-standard storage mechanism primarily used for
storing network request and response pairs. It is commonly used to support
resource caching and offline-read scenarios, and is often associated with
Service Worker–based caching strategies.

### Availability in Cordova

Cache Storage is exposed via the standard `window.caches` interface when supported
by the underlying WebView implementation. Availability and behavior depend entirely
on the platform WebView, and the API may not be available on all Cordova platforms
or in all execution contexts.

### Platform behavior and caveats

Behavior of Cache Storage in Cordova applications can differ from typical desktop
browser environments:

- **Android (Chromium WebView):** Behavior is generally similar to Chrome, but may
  vary depending on the WebView version shipped with the device.
- **iOS (WKWebView):** Cache Storage persistence is more restrictive, and cached
  data may be evicted more aggressively by the system.
- **Origin and scheme sensitivity:** Access to cached data is origin-dependent.
  Changes to the application origin, scheme, or WebView implementation may prevent
  access to previously stored cache entries.

### Persistence and eviction

Cache Storage should not be considered durable storage. Cached data may be removed
by the operating system or WebView implementation under storage pressure, during
application updates, or when the application is reinstalled.

As with other web storage mechanisms, applications should assume that cached data
can be evicted at any time and should be able to recover gracefully.

### When to use (and when not to)

Cache Storage is appropriate for:

- Caching network resources such as API responses or static assets
- Reducing network usage
- Supporting offline-read or offline-first scenarios

Cache Storage is **not** appropriate for:

- Storing user-generated or business-critical data
- Data that requires guaranteed persistence across app restarts or updates

For structured or durable data storage, consider using IndexedDB instead.


### References

- [MDN: Cache Storage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)
- [MDN: Using the Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)


### Web browser limitations

The actual behavior may depend on which browser is used.
There could be differences between the behavior on the Safari and Firefox browsers,
for example.

### Usage Summary

- IndexedDB works asynchronously - you request a particular database
  operation, then get notified of the result via a DOM event.
- When you make a request, you get a request object, which provides `onerror`
  and `onsuccess` events, as well as properties such as `result`, `error`
  and `readyState`.

The following code snippet demonstrates some simple usage of IndexedDB:

```javascript
var db;
var databaseName = 'myDB';
var databaseVersion = 1;
var openRequest = window.indexedDB.open(databaseName, databaseVersion);
openRequest.onerror = function (event) {
    console.log(openRequest.errorCode);
};
openRequest.onsuccess = function (event) {
    // Database is open and initialized - we're good to proceed.
    db = openRequest.result;
    displayData();
};
openRequest.onupgradeneeded = function (event) {
    // This is either a newly created database, or a new version number
    // has been submitted to the open() call.
    var db = event.target.result;
    db.onerror = function () {
        console.log(db.errorCode);
    };

    // Create an object store and indexes. A key is a data value used to organize
    // and retrieve values in the object store. The keyPath option identifies where
    // the key is stored. If a key path is specified, the store can only contain
    // JavaScript objects, and each object stored must have a property with the
    // same name as the key path (unless the autoIncrement option is true).
    var store = db.createObjectStore('customers', { keyPath: 'customerId' });

    // Define the indexes we want to use. Objects we add to the store don't need
    // to contain these properties, but they will only appear in the specified
    // index of they do.
    //
    // syntax: store.createIndex(indexName, keyPath[, parameters]);
    //
    // All these values could have duplicates, so set unique to false
    store.createIndex('firstName', 'firstName', { unique: false });
    store.createIndex('lastName', 'lastName', { unique: false });
    store.createIndex('street', 'street', { unique: false });
    store.createIndex('city', 'city', { unique: false });
    store.createIndex('zipCode', 'zipCode', { unique: false });
    store.createIndex('country', 'country', { unique: false });

    // Once the store is created, populate it
    store.transaction.oncomplete = function (event) {
        // The transaction method takes an array of the names of object stores
        // and indexes that will be in the scope of the transaction (or a single
        // string to access a single object store). The transaction will be
        // read-only unless the optional 'readwrite' parameter is specified.
        // It returns a transaction object, which provides an objectStore method
        // to access one of the object stores that are in the scope of this
        //transaction.
        var customerStore = db.transaction('customers', 'readwrite').objectStore('customers');
        customers.forEach(function (customer) {
            customerStore.add(customer);
        });
    };
};

function displayData() {
}
```

For more information, see:

- [W3C: Spec][W3CIndexedDB]
- [MDN: IndexedDB API Reference][MDNIndexedDBAPI]
- [MDN: IndexedDB Basic Concepts][MDNIndexedDBBasicConcepts]
- [MDN: Using IndexedDB Guide][MDNUsingIndexedDB]

### Advantages

- Good performance - asynchronous API won't block the UI, and indexing provides
  good search performance.
- Simple data model easier to learn than SQL.
- More flexible structure than WebSQL.
- Multiple databases and object stores provides more structure than LocalStorage.
- Robustness from using a transactional database model.
- Support for versioning.

### Disadvantages

- Complex API with nested callbacks.
- Limited total amount of storage and possible eviction [as described on MDN][MDNIndexedDBLimitsAndEviction].
- On iOS systems, WebKit may delete web-related data storage when the device is under storage pressure or exceeds defined storage quotas. This eviction is triggered by WebKit itself, based on its internal quota management policies. For more information, see [WebKit – Updates to Storage Policy][WebKitUpdatesToStoragePolicy].

## Plugin-Based Options

### FileSystem API

The FileSystem API was a W3C spec that was implemented by Chrome, but not other
browsers. It provides APIs to store and retrieve data on the local file system,
and is described in some detail in an excellent [html5rocks article][Html5RocksFileSystemTutorial].
While the API is not supported natively by any Cordova platform, the [File plugin][FileAPI]
provides an extensive implementation that is available across all Cordova platforms.

### SQLite Plugin

The SQLite plugin provides an API virtually identical to WebSQL described above.
The main differences are:

- It is available with support for the Windows platform.
- It effectively has no size limitations.

It is available in the following variations:

* **[cordova-sqlite-storage][SQLiteStorage]** - core version that includes its own sqlite3 implementation. It supports iOS, Android & Windows platforms.
* **[cordova-sqlite-ext][SQLiteExt]** - extended version with additional
  features including REGEXP support on Android and iOS.
* **[cordova-sqlite-evfree][SQLiteEVFree]** - similar to *cordova-sqlite-ext*
  but with improved memory handling. Available under GPL v3 or commercial license.

### Other Plugins

Search [Cordova plugins][CordovaPlugins] for other plugins that provide
alternative storage options.

[WebKitUpdatesToStoragePolicy]: https://webkit.org/blog/14403/updates-to-storage-policy/
[Html5RocksStorageOverview]: http://www.html5rocks.com/en/features/storage
[Html5RocksStorageTutorial]: http://www.html5rocks.com/en/tutorials/offline/storage/
[W3CSpecStorage]: https://html.spec.whatwg.org/multipage/webstorage.html
[MDNStorage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[MDNStorageGuide]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
[w3schoolsSQL]: https://www.w3schools.com/sql/sql_intro.asp
[SQLite]: https://www.sqlite.org/
[W3CIndexedDB]: https://www.w3.org/TR/IndexedDB/
[MDNIndexedDBAPI]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[MDNIndexedDBBasicConcepts]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB
[MDNUsingIndexedDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
[MDNIndexedDBLimitsAndEviction]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
[StructuredCloneAlgorithm]: https://w3c.github.io/html/infrastructure.html#safe-passing-of-structured-data
[Html5RocksFileSystemTutorial]: http://www.html5rocks.com/en/tutorials/file/filesystem/
[FileAPI]: https://github.com/apache/cordova-plugin-file/blob/master/README.md
[SQLiteStorage]: https://github.com/litehelpers/Cordova-sqlite-storage#readme
[SQLiteExt]: https://github.com/litehelpers/cordova-sqlite-ext#readme
[SQLiteEVFree]: https://github.com/litehelpers/Cordova-sqlite-enterprise-free#readme
[CordovaPlugins]: {{ site.baseurl }}/plugins
