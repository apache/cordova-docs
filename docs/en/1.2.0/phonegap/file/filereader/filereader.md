FileReader
==========

FileReader is an object that allows one to read a file.

Properties
----------

- __readyState:__ One of the three states the reader can be in EMPTY, LOADING or DONE.
- __result:__ The contents of the file that has been read. _(DOMString)_
- __error:__ An object containing errors. _(FileError)_
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

The `FileReader` object is a way to read files from the devices file system.  Files can be read as text or as a base64 data encoded string.  Users register their own event listners to receive the loadstart, progress, load, loadend, error and abort events.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Read As Data URL 
----------------

__Parameters:__
- file - the file object to read


Quick Example
-------------

	function win(file) {
		var reader = new FileReader();
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

Quick Example
-------------

	function win(file) {
		var reader = new FileReader();
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

Abort Quick Example
-------------------

	function win(file) {
		var reader = new FileReader();
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

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
		
		function gotFS(fileSystem) {
			fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
		}
		
		function gotFileEntry(fileEntry) {
			fileEntry.file(gotFile, fail);
		}
		
        function gotFile(file){
			readDataUrl(file);
			readAsText(file);
		}
        
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
        
        function readAsText(file) {
            var reader = new FileReader();
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
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>

iOS Quirks
----------
- __encoding__ parameter is not supported, UTF8 encoding is always used.