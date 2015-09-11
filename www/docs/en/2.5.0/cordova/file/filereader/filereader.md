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

<a href="../fileobj/fileobj.html">File</a>Reader
==========

<a href="../fileobj/fileobj.html">File</a>Reader is an object that allows one to read a file.

Properties
----------

- __readyState:__ One of the three states the reader can be in EMPTY, LOADING or DONE.
- __result:__ The contents of the file that has been read. _(DOMString)_
- __error:__ An object containing errors. _(<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>)_
- __onloadstart:__ Called when the read starts. . _(Function)_
- __onprogress:__ Called while reading the file, reports progress (progess.loaded/progress.total). _(Function)_ -NOT SUPPORTED
- __onload:__ Called when the read has successfully completed. _(Function)_
- __onabort:__ Called when the read has been aborted. For instance, by invoking the abort() method. _(Function)_
- __onerror:__ Called when the read has failed. _(Function)_
- __onloadend:__ Called when the request has completed (either in success or failure).  _(Function)_

Methods
-------

- __abort__: Aborts reading file. 
- __readAsDataURL__: Read file and return data as a base64 encoded data url.
- __readAsText__: Reads text file.

Details
-------

The `<a href="../fileobj/fileobj.html">File</a>Reader` object is a way to read files from the devices file system.  <a href="../fileobj/fileobj.html">File</a>s can be read as text or as a base64 data encoded string.  Users register their own event listeners to receive the loadstart, progress, load, loadend, error and abort events.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Read As Data URL 
----------------

__Parameters:__
- file - the file object to read


Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

	function win(file) {
		var reader = new <a href="../fileobj/fileobj.html">File</a>Reader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsDataURL(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Read As Text
------------

__Parameters:__

- file - the file object to read
- encoding - the encoding to use to encode the file's content. Default is UTF8.

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

	function win(file) {
		var reader = new <a href="../fileobj/fileobj.html">File</a>Reader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.file(win, fail);

Abort Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------------

	function win(file) {
		var reader = new <a href="../fileobj/fileobj.html">File</a>Reader();
		reader.onloadend = function(evt) {
        	console.log("read success");
            console.log(evt.target.result);
        };
		reader.readAsText(file);
		reader.abort();
	};

    function fail(error) {
    	console.log(error.code);
    }
	
    entry.file(win, fail);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../fileobj/fileobj.html">File</a>Reader <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        function onLoad() {
            document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);
        }

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
			window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.get<a href="../fileobj/fileobj.html">File</a>("readme.txt", null, got<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>, fail);
		}
		
		function got<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>(fileEntry) {
			fileEntry.file(got<a href="../fileobj/fileobj.html">File</a>, fail);
		}
		
        function got<a href="../fileobj/fileobj.html">File</a>(file){
			readDataUrl(file);
			readAsText(file);
		}
        
        function readDataUrl(file) {
            var reader = new <a href="../fileobj/fileobj.html">File</a>Reader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
        
        function readAsText(file) {
            var reader = new <a href="../fileobj/fileobj.html">File</a>Reader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
        
        function fail(evt) {
            console.log(evt.target.error.code);
        }
        
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Read <a href="../fileobj/fileobj.html">File</a></p>
      </body>
    </html>

iOS Quirks
----------
- __encoding__ parameter is not supported, UTF8 encoding is always used.