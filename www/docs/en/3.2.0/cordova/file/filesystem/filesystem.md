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

# <a href="../fileobj/fileobj.html">File</a>System

This object represents a file system.

## Properties

- __name__: The name of the file system. _(DOMString)_

- __root__: The root directory of the file system. _(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)_

## Details

The `<a href="../fileobj/fileobj.html">File</a>System` object represents information about the file system.
The name of the file system is unique across the list of exposed
file systems.  The root property contains a `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` object
that represents the file system's root directory.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## <a href="../fileobj/fileobj.html">File</a> System Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }

    // request the persistent file system
    window.<a href="../localfilesystem/localfilesystem.html">request<a href="../fileobj/fileobj.html">File</a>System</a>(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, null);

## Full <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../fileobj/fileobj.html">File</a> System <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.<a href="../localfilesystem/localfilesystem.html">request<a href="../fileobj/fileobj.html">File</a>System</a>(<a href="../localfilesystem/localfilesystem.html">Local<a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../fileobj/fileobj.html">File</a>SystemSuccess, fail);
        }

        function on<a href="../fileobj/fileobj.html">File</a>SystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1><a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></h1>
        <p><a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>
