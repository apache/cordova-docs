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
- Windows Phone 7 ( Mango )

Seek Quick Example
------------------------------

	function win(writer) {
		// fast forwards file pointer to end of file
		writer.seek(writer.length);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Truncate Quick Example
--------------------------

	function win(writer) {
		writer.truncate(10);	
	};

	var fail = function(evt) {
    	console.log(error.code);
	};
	
    entry.createWriter(win, fail);

Write Quick Example
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

Append Quick Example
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
	
Abort Quick Example
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

Full Example
------------
    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // PhoneGap is ready
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
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
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>