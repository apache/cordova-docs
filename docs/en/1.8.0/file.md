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


File
==========

>  This API is based on the W3C [File API](http://www.w3.org/TR/FileAPI). An API to read, write and navigate file system hierarchies.

Objects
-------

- DirectoryEntry
- DirectoryReader
- File
- FileEntry
- FileError
- FileReader
- FileSystem
- FileTransfer
- FileTransferError
- FileUploadOptions
- FileUploadResult
- FileWriter
- Flags
- LocalFileSystem
- Metadata

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="File" value="org.apache.cordova.FileUtils" />
    <plugin name="FileTransfer" value="org.apache.cordova.FileTransfer" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

    No permissions are required.

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="File" value="org.apache.cordova.file.FileManager" />
    <plugin name="FileTransfer" value="org.apache.cordova.http.FileTransfer" />

#### www/config.xml

    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
    <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
    <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>access_shared</rim:permit>
    </rim:permissions>

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>File</key>
        <string>CDVFile</string>
    </dict>

    <key>Plugins</key>
    <dict>
        <key>FileTransfer</key>
        <string>CDVFileTransfer</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.



File
====

This object contains attributes of a single file.

Properties
----------

- __name:__ The name of the file. _(DOMString)_
- __fullPath:__ The full path of the file including the file name. _(DOMString)_
- __type:__ The mime type of the file. _(DOMString)_
- __lastModifiedDate:__ The last time the file was modified. _(Date)_
- __size:__ The size of the file in bytes. _(long)_

Details
-------

The `File` object contains attributes of a single file.  You can get an instance of a File object by calling the __file__ method of a `FileEntry` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )



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

The `FileReader` object is a way to read files from the devices file system.  Files can be read as text or as a base64 data encoded string.  Users register their own event listeners to receive the loadstart, progress, load, loadend, error and abort events.

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

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is ready
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

The `FileWriter` object is a way to write files to the device file system (UTF-8 encoded).  Users register their own event listeners to receive the writestart, progress, write, writeend, error and abort events.

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
    
        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
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



FileSystem
==========

This object represents a file system.

Properties
----------

- __name:__ The name of the file system. _(DOMString)_
- __root:__ The root directory of the file system. _(DirectoryEntry)_

Details
-------

The `FileSystem` object represents information about the file system. The name of the file system will be unique across the list of exposed file systems.  The root property contains a `DirectoryEntry` object which represents the root directory of the file system.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

File System Quick Example
-------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
		console.log(fileSystem.root.name);
	}
	
	// request the persistent file system
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

Full Example
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
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
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



FileEntry
==========

This object represents a file on a file system.  It is defined in the [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) specification.

Properties
----------

- __isFile:__ Always true. _(boolean)_
- __isDirectory:__ Always false. _(boolean)_
- __name:__ The name of the FileEntry, excluding the path leading to it. _(DOMString)_
- __fullPath:__ The full absolute path from the root to the FileEntry. _(DOMString)_

NOTE: The following attributes are defined by the W3C specification, but are __not supported__ by Cordova:

- __filesystem:__ The file system on which the FileEntry resides. _(FileSystem)_


Methods
-------

- __getMetadata__: Look up metadata about a file.
- __setMetadata__: Set metadata on a file.
- __moveTo__: Move a file to a different location on the file system.
- __copyTo__: Copy a file to a different location on the file system.
- __toURL__: Return a URL that can be used to locate a file.
- __remove__: Delete a file.
- __getParent__: Look up the parent directory.
- __createWriter__: Creates a FileWriter object that can be used to write to a file.
- __file__: Creates a File object containing file properties.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )


getMetadata
----------------

Look up metadata about a file.

__Parameters:__

- __successCallback__ - A callback that is called with a Metadata object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the Metadata. Invoked with a FileError object. _(Function)_


__Quick Example__

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Request the metadata object for this entry
    entry.getMetadata(success, fail);


setMetadata
----------------

Set metadata on a file.
**Only works on iOS currently** - this will set the extended attributes of a file.

__Parameters:__

- __successCallback__ - A callback that is called when the metadata was successfully set. _(Function)_
- __errorCallback__ - A callback that is called when the metadata was not successfully set. _(Function)_
- __metadataObject__ - An object that contains the metadata keys and values. _(Object)_


__Quick Example__

    function success() {
        console.log("The metadata was successfully set.");
    }

    function fail() {
        alert("There was an error in setting the metadata");
    }

    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
__iOS Quirk__

- only the **"com.apple.MobileBackup"** extended attribute is supported. Set the value to **1** to NOT enable the file to be backed up by iCloud. Set the value to **0** to re-enable the file to be backed up by iCloud.


moveTo
------

Move a file to a different location on the file system. It is an error to attempt to:

- move a file into its parent if a name different from its current one isn't provided;
- move a file to a path occupied by a directory;

In addition, an attempt to move a file on top of an existing file must attempt to delete and replace that file.

__Parameters:__

- __parent__ - The parent directory to which to move the file. _(DirectoryEntry)_
- __newName__ - The new name of the file. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the FileEntry object of the new file. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to move the file.  Invoked with a FileError object. _(Function)_


__Quick Example__

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);

        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }


copyTo
------

Copy a file to a new location on the file system.  It is an error to attempt to:

- copy a file into its parent if a name different from its current one is not provided.

__Parameters:__

- __parent__ - The parent directory to which to copy the file. _(DirectoryEntry)_
- __newName__ - The new name of the file. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the FileEntry object of the new file. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to copy the file.  Invoked with a FileError object. _(Function)_


__Quick Example__

    function win(entry) {
	    console.log("New Path: " + entry.fullPath);
    }

    function fail(error) {
	    alert(error.code);
    }

    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);

        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }


toURL
-----

Returns a URL that can be used to locate the file.

__Quick Example__

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);


remove
------

Deletes a file.

__Parameters:__

- __successCallback__ - A callback that is called after the file has been deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to delete the file.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(entry) {
        console.log("Removal succeeded");
    }

    function fail(error) {
        alert('Error removing file: ' + error.code);
    }

    // remove the file
    entry.remove(success, fail);


getParent
---------

Look up the parent DirectoryEntry containing the file.

__Parameters:__

- __successCallback__ - A callback that is called with the file's parent DirectoryEntry. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to retrieve the parent DirectoryEntry.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // Get the parent DirectoryEntry
    entry.getParent(success, fail);


createWriter
------------

Create a FileWriter object associated with the file that the FileEntry represents.

__Parameters:__

- __successCallback__ - A callback that is called with a FileWriter object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs while attempting to create the FileWriter.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(writer) {
        writer.write("Some text to the file");
    }

    function fail(error) {
        alert(error.code);
    }

    // create a FileWriter to write to the file
    entry.createWriter(success, fail);


file
----

Return a File object that represents the current state of the file that this FileEntry represents.

__Parameters:__

- __successCallback__ - A callback that is called with a File object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when creating the File object (e.g. the underlying file no longer exists).  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(file) {
        console.log("File size: " + file.size);
    }

    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }

    // obtain properties of a file
    entry.file(success, fail);



DirectoryEntry
==============

This object represents a directory on a file system.  It is defined in the [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) specification.

Properties
----------

- __isFile:__ Always false. _(boolean)_
- __isDirectory:__ Always true. _(boolean)_
- __name:__ The name of the DirectoryEntry, excluding the path leading to it. _(DOMString)_
- __fullPath:__ The full absolute path from the root to the DirectoryEntry. _(DOMString)_

NOTE: The following attributes are defined by the W3C specification, but are __not supported__ by Cordova:

- __filesystem:__ The file system on which the DirectoryEntry resides. _(FileSystem)_

Methods
-------

The following methods can be invoked on a DirectoryEntry object:

- __getMetadata__: Look up metadata about a directory.
- __setMetadata__: Set metadata on a directory.
- __moveTo__: Move a directory to a different location on the file system.
- __copyTo__: Copy a directory to a different location on the file system.
- __toURL__: Return a URL that can be used to locate a directory.
- __remove__: Delete a directory.  The directory must be empty.
- __getParent__: Look up the parent directory.
- __createReader__: Create a new DirectoryReader that can read entries from a directory.
- __getDirectory__: Create or look up a directory.
- __getFile__: Create or look up a file.
- __removeRecursively__: Delete a directory and all of its contents.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

getMetadata
-----------

Look up metadata about a directory.

__Parameters:__

- __successCallback__ - A callback that is called with a Metadata object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the Metadata. Invoked with a FileError object. _(Function)_


__Quick Example__

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Request the metadata object for this entry
    entry.getMetadata(success, fail);

setMetadata
----------------

Set metadata on a directory.
**Only works on iOS currently** - this will set the extended attributes of a directory.

__Parameters:__

- __successCallback__ - A callback that is called when the metadata was successfully set. _(Function)_
- __errorCallback__ - A callback that is called when the metadata was not successfully set. _(Function)_
- __metadataObject__ - An object that contains the metadata keys and values. _(Object)_


__Quick Example__

    function success() {
        console.log("The metadata was successfully set.");
    }

    function fail() {
        alert("There was an error in setting the metadata");
    }

    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
__iOS Quirk__

- only the **"com.apple.MobileBackup"** extended attribute is supported. Set the value to **1** to NOT enable the directory to be backed up by iCloud. Set the value to **0** to re-enable the directory to be backed up by iCloud.


moveTo
------

Move a directory to a different location on the file system. It is an error to attempt to:

- move a directory inside itself or to any child at any depth;
- move a directory into its parent if a name different from its current one is not provided;
- move a directory to a path occupied by a file;
- move a directory to a path occupied by a directory which is not empty.

In addition, an attempt to move a directory on top of an existing empty directory must attempt to delete and replace that directory.

__Parameters:__

- __parent__ - The parent directory to which to move the directory. _(DirectoryEntry)_
- __newName__ - The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the DirectoryEntry object of the new directory. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to move the directory.  Invoked with a FileError object. _(Function)_


__Quick Example__

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

	function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);

        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }

copyTo
------

Copy a directory to a different location on the file system. It is an error to attempt to:

- copy a directory inside itself at any depth;
- copy a directory into its parent if a name different from its current one is not provided.

Directory copies are always recursive - that is, they copy all contents of the directory.

__Parameters:__

- __parent__ - The parent directory to which to copy the directory. _(DirectoryEntry)_
- __newName__ - The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the DirectoryEntry object of the new directory. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to copy the underlying directory.  Invoked with a FileError object. _(Function)_


__Quick Example__

	function win(entry) {
		console.log("New Path: " + entry.fullPath);
	}

	function fail(error) {
		alert(error.code);
	}

	function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);

        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }


toURL
-----

Returns a URL that can be used to locate the directory.

__Quick Example__

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);


remove
------

Deletes a directory. It is an error to attempt to:

- delete a directory that is not empty;
- delete the root directory of a filesystem.

__Parameters:__

- __successCallback__ - A callback that is called after the directory has been deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to delete the directory.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(entry) {
        console.log("Removal succeeded");
    }

    function fail(error) {
        alert('Error removing directory: ' + error.code);
    }

    // remove this directory
    entry.remove(success, fail);


getParent
---------

Look up the parent DirectoryEntry containing the directory.

__Parameters:__

- __successCallback__ - A callback that is called with the directory's parent DirectoryEntry. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to retrieve the parent DirectoryEntry.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }

	// Get the parent DirectoryEntry
	entry.getParent(success, fail);


createReader
------------

Creates a new DirectoryReader to read entries in a directory.

__Quick Example__

    // create a directory reader
    var directoryReader = entry.createReader();


getDirectory
------------

Creates or looks up an existing directory.  It is an error to attempt to:

- create a directory whose immediate parent does not yet exist.

__Parameters:__

- __path__ - The path to the directory to be looked up or created.  Either an absolute path, or a relative path from this DirectoryEntry. _(DOMString)_
- __options__ - Options to specify whether the directory is created if it doesn't exist.  _(Flags)_
- __successCallback__ - A callback that is invoked with a DirectoryEntry object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs creating or looking up the directory.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert("Unable to create new directory: " + error.code);
    }

    // Retrieve an existing directory, or create it if it does not already exist
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);


getFile
-------

Creates or looks up a file.  It is an error to attempt to:

- create a file whose immediate parent does not yet exist.

__Parameters:__

- __path__ - The path to the file to be looked up or created.  Either an absolute path, or a relative path from this DirectoryEntry. _(DOMString)_
- __options__ - Options to specify whether the file is created if it doesn't exist.  _(Flags)_
- __successCallback__ - A callback that is invoked with a FileEntry object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs creating or looking up the file.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert("Failed to retrieve file: " + error.code);
    }

    // Retrieve an existing file, or create it if it does not exist
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail);


removeRecursively
-----------------

Deletes a directory and all of its contents.  In the event of an error (e.g. trying to delete
a directory that contains a file that cannot be removed), some of the contents of the directory may
be deleted.   It is an error to attempt to:

- delete the root directory of a filesystem.

__Parameters:__

- __successCallback__ - A callback that is called after the DirectoryEntry has been deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to delete the DirectoryEntry.  Invoked with a FileError object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }

    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }

    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);



DirectoryReader
===============

An object that lists files and directories in a directory.  Defined in the [Directories and Systems](http://www.w3.org/TR/file-system-api/) specification.

Methods
-------

- __readEntries__: Read the entries in a directory. 


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

readEntries
-----------

Read the entries in this directory.

__Parameters:__

- __successCallback__ - A callback that is passed an array of FileEntry and DirectoryEntry objects. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the directory listing. Invoked with a FileError object. _(Function)_

__Quick Example__
	
    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }

    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }

    // Get a directory reader
    var directoryReader = dirEntry.createReader();

    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);



FileTransfer
==========

FileTransfer is an object that allows you to upload files to a server or download files from a server.

Properties
----------

N/A

Methods
-------

- __upload__: sends a file to a server. 
- __download__: downloads a file from server.

Details
-------

The `FileTransfer` object provides a way to upload files to a remote server using an HTTP multi-part POST request.  Both HTTP and HTTPS protocols are supported.  Optional parameters can be specified by passing a FileUploadOptions object to the upload method.  On successful upload, the success callback will be called with a FileUploadResult object.  If an error occurs, the error callback will be invoked with a FileTransferError object.
It is also possible to download a file from remote and save it on the device (only iOS and Android).

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

upload
--------------

__Parameters:__

- __filePath__ - Full path of the file on the device
- __server__ - URL of the server to receive the file
- __successCallback__ - A callback that is called with a Metadata object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the Metadata. Invoked with a FileTransferError object. _(Function)_
- __options__ - Optional parameters such as file name and mimetype

__Quick Example__
	
    // !! Assumes variable fileURI contains a valid URI to a  text file on the device
	
  	var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
	
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var ft = new FileTransfer();
    ft.upload(fileURI, "http://some.server.com/upload.php", win, fail, options);
    
__Full Example__

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
            // Wait for Cordova to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
            
            // Cordova is ready
            //
            function onDeviceReady() {
                
                // Retrieve image file location from specified source
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('get picture failed'); },
                                            { quality: 50, 
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );
                
            }
            
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
                
                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";
                
                options.params = params;
                
                var ft = new FileTransfer();
                ft.upload(imageURI, "http://some.server.com/upload.php", win, fail, options);
            }
            
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
            
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
            
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>

download
--------------

__Parameters:__

- __source__ - URL of the server to receive the file
- __target__ - Full path of the file on the device
- __successCallback__ - A callback that is called with a FileEntry object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the Metadata. Invoked with a FileTransferError object. _(Function)_

__Quick Example__

     // !! Assumes variable url contains a valid URI to a file on a server and filePath is a valid path on the device

    var fileTransfer = new FileTransfer();
    
    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
    );



FileUploadOptions
========

A `FileUploadOptions` object can be passed to the FileTransfer objects upload method in order to specify additional parameters to the upload script.

Properties
----------

- __fileKey:__ The name of the form element.  If not set defaults to "file". (DOMString)
- __fileName:__ The file name you want the file to be saved as on the server.  If not set defaults to "image.jpg". (DOMString)
- __mimeType:__ The mime type of the data you are uploading.  If not set defaults to "image/jpeg". (DOMString)
- __params:__ A set of optional key/value pairs to be passed along in the HTTP request. (Object)
- __chunkedMode:__ Should the data be uploaded in chunked streaming mode. If not set defaults to "true". (Boolean)


Description
-----------

A `FileUploadOptions` object can be passed to the FileTransfer objects upload method in order to specify additional parameters to the upload script.

iOS Quirk
---------

- __chunkedMode:__
    This parameter is ignored on iOS.

WP7 Quirk
---------

- __chunkedMode:__
    This parameter is ignored on WP7.    



FileUploadResult
========

A `FileUploadResult` object is returned via the success callback of the FileTransfer upload method.

Properties
----------

- __bytesSent:__ The number of bytes sent to the server as part of the upload. (long)
- __responseCode:__ The HTTP response code returned by the server. (long)
- __response:__ The HTTP response returned by the server. (DOMString)

Description
-----------

The `FileUploadResult` object is returned via the success callback of the FileTransfer upload method.

iOS Quirks
----------
- iOS does not include values for responseCode nor bytesSent in the success callback FileUploadResult object. 




Flags
=====

This object is used to supply arguments to the `DirectoryEntry` __getFile__ and __getDirectory__ methods, which look up or create files and directories, respectively.

Properties
----------

- __create:__ Used to indicate that the file or directory should be created, if it does not exist. _(boolean)_
- __exclusive:__ By itself, exclusive has no effect. Used with create, it causes the file or directory creation to fail if the target path already exists. _(boolean)_

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick Example
-------------

    // Get the data directory, creating it if it doesn't exist.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Create the lock file, if and only if it doesn't exist.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});



LocalFileSystem
===============

This object provides a way to obtain root file systems.

Methods
----------

- __requestFileSystem:__ Requests a filesystem. _(Function)_
- __resolveLocalFileSystemURI:__ Retrieve a DirectoryEntry or FileEntry using local URI. _(Function)_

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
- Windows Phone 7 ( Mango )

Request File System Quick Example
---------------------------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
	}
	
	// request the persistent file system
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Resolve Local File System URI Quick Example
-------------------------------------------

	function onSuccess(fileEntry) {
		console.log(fileEntry.name);
	}

	window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
	
Full Example
------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
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



Metadata
==========

This interface supplies information about the state of a file or directory.

Properties
----------

- __modificationTime:__ This is the time at which the file or directory was last modified. _(Date)_

Details
-------

The `Metadata` object represents information about the state of a file or directory.  You can get an instance of a Metadata object by calling the __getMetadata__ method of a `DirectoryEntry` or `FileEntry` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick Example
-------------

	function win(metadata) {
		console.log("Last Modified: " + metadata.modificationTime);
	}
	
	// Request the metadata object for this entry
	entry.getMetadata(win, null);


FileError
========

A 'FileError' object is set when an error occurs in any of the File API methods. 

Properties
----------

- __code:__ One of the predefined error codes listed below.

Constants
---------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`
- `FileError.INVALID_MODIFICATION_ERR`
- `FileError.QUOTA_EXCEEDED_ERR`
- `FileError.TYPE_MISMATCH_ERR`
- `FileError.PATH_EXISTS_ERR`

Description
-----------

The `FileError` object is the only parameter of any of the File API's error callbacks.  Developers must read the code property to determine the type of error.


FileTransferError
========

A `FileTransferError` object is returned via the error callback when an error occurs.

Properties
----------

- __code__ One of the predefined error codes listed below. (int)
- __source__ URI to the source (string)
- __target__ URI to the target (string)
- __http_status__ HTTP status code.  This attribute is only available when a response code is received from the HTTP connection. (int)

Constants
---------

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`

Description
-----------

The `FileTransferError` object is returned via the error callback  when an error occurs when uploading a file.

