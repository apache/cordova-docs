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

title: LocalFileSystem
---

# LocalFileSystem

This object provides a way to obtain root file systems.

## Methods

- __requestFileSystem__: Requests a filesystem. _(Function)_

- __resolveLocalFileSystemURI__: Retrieve a `[DirectoryEntry](../directoryentry/directoryentry.html)` or `[FileEntry](../fileentry/fileentry.html)` using local URI. _(Function)_

## Constants

- `LocalFileSystem.PERSISTENT`: Used for storage that should not be removed by the user agent without application or user permission.

- `LocalFileSystem.TEMPORARY`: Used for storage with no guarantee of persistence.

## Details

The `LocalFileSystem` object methods are defined on the `window` object.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Request File System Quick Example

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

## Resolve Local File System URI Quick Example

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }

    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }

        function onFileSystemSuccess(fileSystem) {
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
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>

# requestFileSystem

> Request a file system in which to store application data.

     window.requestFileSystem(type, size, successCallback, errorCallback)

- __window__: reference to the global window object
- __type__: local file system type, see LocalFileSystem Constants
- __size__: indicates how much storage space, in bytes, the application expects to need
- __successCallback__: invoked with a [FileSystem](../filesystem/filesystem.html) object
- __errorCallback__:  invoked if error occurs retrieving file system

## Request File System Quick Example

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
