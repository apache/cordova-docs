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

FileReader
==========

FileReader is an object that allows one to read a file.

Properties
----------

- __readyState:__ One of the three states the reader can be in EMPTY, LOADING or DONE.
- __result:__ The contents of the file that has been read. _(DOMString)_
- __error:__ An object containing errors. _(FileError)_
- __onloadstart:__ Called when the read starts. . _(Function)_
- __onprogress:__ Called while reading the file, reports progress (progess.loaded/progress.total). _(Function)_
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

The `FileReader` object is a way to read files from the devices file system.  Files can be read as text or as a base64 data encoded string.  Users register their own event listners to receive the loadstart, progress, load, loadend, error and abort events.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)

Read As Data URL Quick Example
------------------------------

	var win = function(evt) {
		console.log(evt.target.result);
	};
	var fail = function(evt) {
		console.log(evt.target.error);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onload = win;
	reader.onerror= fail;
	reader.readAsDataURL(paths[0] + "readme.txt");

Read As Text Quick Example
--------------------------

	var win = function(evt) {
		console.log(evt.target.result);
	};
	var fail = function(evt) {
		console.log(evt.target.error);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onload = win;
	reader.onerror= fail;
	reader.readAsText(paths[0] + "readme.txt");

Abort Quick Example
-------------------

	var aborted = function(evt) {
		console.log(evt.target.error);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onabort = aborted;
	reader.readAsText(paths[0] + "readme.txt");
	reader.abort();

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.3.js"></script>
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
			var reader = new FileReader();
			reader.onload = win;
			reader.onerror= fail;
			reader.readAsText(paths[0] + "readme.txt");
        }

		function win(evt) {
			console.log(evt.target.result);
		}
		
		function fail(evt) {
			console.log(evt.target.error);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
