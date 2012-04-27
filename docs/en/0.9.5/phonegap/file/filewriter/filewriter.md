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

FileWriter
==========

FileWriter is an object that allows one to write a file.

Properties
----------

- __readyState:__ One of the three states the reader can be in INIT, WRITING or DONE.
- __fileName:__ The name of the file to be written. _(DOMString)_
- __length:__ The length of the file to be written. _(long)_
- __position:__ The current position of the file pointer. _(long)_
- __error:__ An object containing errors. _(FileError)_
- __onwritestart:__ Called when the write starts. . _(Function)_
- __onprogress:__ Called while writing the file, reports progress (progess.loaded/progress.total). _(Function)_ -NOT SUPPORTED
- __onwrite:__ Called when the request has completed successfully.  _(Function)_
- __onabort:__ Called when the write has been aborted. For instance, by invoking the abort() method. _(Function)_
- __onerror:__ Called when the write has failed. _(Function)_
- __onwriteend:__ Called when the request has completed (either in success or failure).  _(Function)_

Methods
-------

- __abort__: Aborts writing file. 
- __seek__: Moves the file pointer to the byte specified.
- __truncate__: Shortens the file to the length specified.
- __write__: Writes data to the file.

Details
-------

The `FileWriter` object is a way to write files from the devices file system.  Users register their own event listeners to receive the writestart, progress, write, writeend, error and abort events.

A FileWriter is created for a single file. You can use it to write to a file multiple times. The FileWriter maintains the file's position and length attributes, so you can seek and write anywhere in the file. By default, the FileWriter writes to the beginning of the file (will overwrite existing data). Set the optional append boolean to true in the FileWriter's constructor to begin writing to the end of the file.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Seek Quick Example
------------------------------
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	// fast forwards file pointer to end of file
	writer.seek(writer.length);	

Truncate Quick Example
--------------------------

    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.truncate(10);	

Write Quick Example
-------------------	

	var writeSuccess = function(evt) {
		console.log("Write has succeeded");
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.onwrite = writeSuccess;
	writer.write("some sample text");

Append Quick Example
--------------------	

	var writeSuccess = function(evt) {
		console.log("Write has succeeded");
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt", true);
	writer.onwrite = writeSuccess;
	writer.write("some more text");
	
Abort Quick Example
-------------------

	var aborted = function(evt) {
		console.log(evt.target.error);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.onabort = aborted;
	writer.write("some sample text");
	writer.abort();

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var paths = navigator.fileMgr.getRootPaths();
			var writer = new FileWriter(paths[0] + "write.txt");
			writer.onwrite = writeSuccess;
			writer.write("some sample text");
			// The file is now 'some sample text'
        }

		function writeSuccess() {
			console.log("Write has succeeded");
			var paths = navigator.fileMgr.getRootPaths();
			var writer = new FileWriter(paths[0] + "write.txt");
			writer.seek(4);
			writer.truncate(writer.position);
			// The file is now 'some'
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>
    
