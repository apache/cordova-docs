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

title: FileSystem
---

FileSystem
==========

This object represents a file system.

Properties
----------

- __name:__ The name of the file system. _(DOMString)_
- __root:__ The root directory of the file system. _(DirectoryEntry)_

Details
-------

The `FileSystem` object represents information about the file system. The name of the file system will be unique across the list of exposed file systems.  The root property contains a `[DirectoryEntry](../directoryentry/directoryentry.html)` object which represents the root directory of the file system.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

[File](../fileobj/fileobj.html) System Quick [Example](../../storage/storage.opendatabase.html)
-------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
		console.log(fileSystem.root.name);
	}
	
	// request the persistent file system
	window.requestFileSystem([LocalFileSystem](../localfilesystem/localfilesystem.html).PERSISTENT, 0, onSuccess, null);

Full [Example](../../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			window.requestFileSystem([LocalFileSystem](../localfilesystem/localfilesystem.html).PERSISTENT, 0, onFileSystemSuccess, fail);
        }

		function onFileSystemSuccess(fileSystem) {
			console.log(fileSystem.name);
			console.log(fileSystem.root.name);
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>
