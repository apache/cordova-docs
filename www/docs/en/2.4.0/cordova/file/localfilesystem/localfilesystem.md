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

LocalFileSystem
===============

This object provides a way to obtain root file systems.

Methods
----------

- __requestFileSystem:__ Requests a filesystem. _(Function)_
- __resolveLocalFileSystemURI:__ Retrieve a [DirectoryEntry](../directoryentry/directoryentry.html) or [FileEntry](../fileentry/fileentry.html) using local URI. _(Function)_

Constants
---------

- `LocalFileSystem.PERSISTENT`: Used for storage that should not be removed by the user agent without application or user permission.
- `LocalFileSystem.TEMPORARY`: Used for storage with no guarantee of persistence.

Details
-------

The `LocalFileSystem` object methods are defined on the __window__ object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Request [File](../fileobj/fileobj.html) System Quick [Example](../../storage/storage.opendatabase.html)
---------------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
	}
	
	// request the persistent file system
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Resolve Local [File](../fileobj/fileobj.html) System URI Quick [Example](../../storage/storage.opendatabase.html)
-------------------------------------------

	function onSuccess(fileEntry) {
		console.log(fileEntry.name);
	}

	window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
	
Full [Example](../../storage/storage.opendatabase.html)
------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
