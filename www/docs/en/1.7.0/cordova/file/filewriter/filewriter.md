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

<a href="../fileobj/fileobj.html">File</a>Writer
==========

<a href="../fileobj/fileobj.html">File</a>Writer is an object that allows one to write a file.

Properties
----------

- __readyState:__ One of the three states the reader can be in INIT, WRITING or DONE.
- __fileName:__ The name of the file to be written. _(DOMString)_
- __length:__ The length of the file to be written. _(long)_
- __position:__ The current position of the file pointer. _(long)_
- __error:__ An object containing errors. _(<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>)_
- __onwritestart:__ Called when the write starts. . _(Function)_
- __onprogress:__ Called while writing the file, reports progress (progress.loaded/progress.total). _(Function)_ -NOT SUPPORTED
- __onwrite:__ Called when the request has completed successfully.  _(Function)_
- __onabort:__ Called when the write has been aborted. For instance, by invoking the abort() method. _(Function)_
- __onerror:__ Called when the write has failed. _(Function)_
- __onwriteend:__ Called when the request has completed (either in success or failure).  _(Function)_

Methods
-------

- __abort__: Aborts writing file. 
- __seek__: Moves the file pointer to the byte specified.
- __truncate__: Shortens the file to the length specified.
- __write__: Writes data to the file with a UTF-8 encoding.

Details
-------

The `<a href="../fileobj/fileobj.html">File</a>Writer` object is a way to write files to the device file system (UTF-8 encoded).  Users register their own event listeners to receive the writestart, progress, write, writeend, error and abort events.

A <a href="../fileobj/fileobj.html">File</a>Writer is created for a single file. You can use it to write to a file multiple times. The <a href="../fileobj/fileobj.html">File</a>Writer maintains the file's position and length attributes, so you can seek and write anywhere in the file. By default, the <a href="../fileobj/fileobj.html">File</a>Writer writes to the beginning of the file (will overwrite existing data). Set the optional append boolean to true in the <a href="../fileobj/fileobj.html">File</a>Writer's constructor to begin writing to the end of the file.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Seek Quick <a href="../../storage/storage.opendatabase.html">Example</a>
------------------------------

	function win(writer) {
		// fast forwards file pointer to end of file
		writer.seek(writer.length);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Truncate Quick <a href="../../storage/storage.opendatabase.html">Example</a>
--------------------------

	function win(writer) {
		writer.truncate(10);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Write Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------------	

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("write success");
        };
		writer.write("some sample text");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Append Quick <a href="../../storage/storage.opendatabase.html">Example</a>
--------------------	

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("write success");
        };
        writer.seek(writer.length);
		writer.write("appended text");
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);
	
Abort Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------------

	function win(writer) {
		writer.onwrite = function(evt) {
        	console.log("write success");
        };
		writer.write("some sample text");
		writer.abort();
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------
    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../fileobj/fileobj.html">File</a>Writer <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);
    
        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.get<a href="../fileobj/fileobj.html">File</a>("readme.txt", {create: true, exclusive: false}, got<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>, fail);
        }
    
        function got<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>(fileEntry) {
            fileEntry.createWriter(got<a href="../fileobj/fileobj.html">File</a>Writer, fail);
        }
    
        function got<a href="../fileobj/fileobj.html">File</a>Writer(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);  
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Write <a href="../fileobj/fileobj.html">File</a></p>
      </body>
    </html>
