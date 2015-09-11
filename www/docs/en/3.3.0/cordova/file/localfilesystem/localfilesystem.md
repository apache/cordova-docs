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

# Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

This object provides a way to obtain root file systems.

## Methods

- __request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>__: Requests a filesystem. _(Function)_

- __resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI__: Retrieve a `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` or `<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>` using local URI. _(Function)_

## Constants

- `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT`: Used for storage that should not be removed by the user agent without application or user permission.

- `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.TEMPORARY`: Used for storage with no guarantee of persistence.

## Details

The `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>` object methods are defined on the `window` object.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8

## Request <a href="../fileobj/fileobj.html">File</a> System Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);

## Resolve Local <a href="../fileobj/fileobj.html">File</a> System URI Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }

    window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onSuccess, onError);

## Full <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local <a href="../fileobj/fileobj.html">File</a> System <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success, fail);
            window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onResolveSuccess, fail);
        }

        function on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success(fileSystem) {
            console.log(fileSystem.name);
        }

        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1><a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></h1>
        <p>Local <a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>

# request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

> Request a file system in which to store application data.

     window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(type, size, successCallback, errorCallback)

- __window__: reference to the global window object
- __type__: local file system type, see Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a> Constants
- __size__: indicates how much storage space, in bytes, the application expects to need
- __successCallback__: invoked with a <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a> object
- __errorCallback__:  invoked if error occurs retrieving file system

## Request <a href="../fileobj/fileobj.html">File</a> System Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);
