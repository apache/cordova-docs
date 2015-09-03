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


# File

> An API to read, write and navigate file system hierarchies, based on the [w3c file api](http://www.w3.org/TR/FileAPI).

## Objects

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

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
        
You must add the `file-transfer` plugin separately. The CLI
automatically adds the `file` plugin as a dependency, so there is no
need to add it separately:

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (after adding just the file plugin)
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

        (after adding just the file-transfer plugin)
        (in app/res/xml/config.xml)
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.filetransfer.FileTransfer" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* Android

        (after adding just the file plugin)
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

        (after adding just the file-transfer plugin)
        (in app/res/xml/config.xml)
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.filetransfer.FileTransfer" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>

* iOS (in the named application directory's `config.xml`)

        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.



# File

This object contains attributes of a single file.

## Properties

- __name__: The name of the file. _(DOMString)_

- __fullPath__: The full path of the file including the file name. _(DOMString)_

- __type__: The mime type of the file. _(DOMString)_

- __lastModifiedDate__: The last time the file was modified. _(Date)_

- __size__: The size of the file in bytes. _(long)_

## Methods

- __slice__: Select only a portion of the file to be read.

## Details

The `File` object contains attributes of a single file.  You can get
an instance of a `File` object by calling a `FileEntry` object's
`file()` method.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## slice

Return a new `File` object, for which `FileReader` returns only the
specified portion of the file.  Negative values for `start` or `end`
are measured from the end of the file.  Indexes are positioned
relative to the current slice. (See the full example below.)

__Parameters__:

- __start__: The index of the first byte to read, inclusive.

- __end__: The index of the byte after the last one to read.

__Quick Example__

    var slicedFile = file.slice(10, 30);

__Full Example__

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);

    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.

__Supported Platforms__

- Android
- iOS



# FileReader

The `FileReader` allows basic access to a file.

## Properties

- __readyState__: One of the reader's three possible states, either `EMPTY`, `LOADING` or `DONE`.

- __result__: The contents of the file that have been read. _(DOMString)_

- __error__: An object containing errors. _(FileError)_

- __onloadstart__: Called when the read starts. _(Function)_

- __onload__: Called when the read has successfully completed. _(Function)_

- __onabort__: Called when the read has been aborted. For instance, by invoking the `abort()` method. _(Function)_

- __onerror__: Called when the read has failed. _(Function)_

- __onloadend__: Called when the request has completed (either in success or failure).  _(Function)_

__NOTE__: The following porperty is not supported:

- __onprogress__: Called while reading the file, reporting progress in terms of `progress.loaded`/`progress.total`. _(Function)_

## Methods

- __abort__: Aborts reading file.

- __readAsDataURL__: Read file and return data as a base64-encoded data URL.

- __readAsText__: Reads text file.

- __readAsBinaryString__: Reads file as binary and returns a binary string.

- __readAsArrayBuffer__: Reads file as an `ArrayBuffer`.

## Details

The `FileReader` object offers a way to read files from the device's
file system.  Files can be read as text or as a base64 data-encoded
string.  Event listeners receive the `loadstart`, `progress`, `load`,
`loadend`, `error`, and `abort` events.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## readAsDataURL

__Parameters__:

- __file__: the file object to read.

## Quick Example

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };

    var fail = function (error) {
        console.log(error.code);
    };

    entry.file(win, fail);

## readAsText

__Parameters__:

- __file__: the file object to read.

- __encoding__: the encoding to use to encode the file's content. Default is UTF8.

## Quick Example

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };

    var fail = function (error) {
        console.log(error.code);
    };

    entry.file(win, fail);

## abort 

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

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>

## iOS Quirks

- The __encoding__ parameter is not supported, and UTF8 encoding is always in effect.

## readAsBinaryString

Currently supported on iOS and Android only.

__Parameters__:

- __file__: the file object to read.

## Quick Example

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };

    var fail = function (error) {
        console.log(error.code);
    };

    entry.file(win, fail);

## readAsArrayBuffer

Currently supported on iOS and Android only.

__Parameters__:

- __file__:  the file object to read.

## Quick Example

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };

    var fail = function (error) {
        console.log(error.code);
    };

    entry.file(win, fail);



# FileWriter

As object that allows you to create and write data to a file.

## Properties

- __readyState__: One of the three possible states, either `INIT`, `WRITING`, or `DONE`.

- __fileName__: The name of the file to be written. _(DOMString)_

- __length__: The length of the file to be written. _(long)_

- __position__: The current position of the file pointer. _(long)_

- __error__: An object containing errors. _(FileError)_

- __onwritestart__: Called when the write starts. _(Function)_

- __onwrite__: Called when the request has completed successfully.  _(Function)_

- __onabort__: Called when the write has been aborted. For instance, by invoking the abort() method. _(Function)_

- __onerror__: Called when the write has failed. _(Function)_

- __onwriteend__: Called when the request has completed (either in success or failure).  _(Function)_

The following property is _not_ supported:

- __onprogress__: Called while writing the file, reporting progress in terms of `progress.loaded`/`progress.total`. _(Function)_
## Methods

- __abort__: Aborts writing the file.

- __seek__: Moves the file pointer to the specified byte.

- __truncate__: Shortens the file to the specified length.

- __write__: Writes data to the file.

## Details

The `FileWriter` object offers a way to write UTF-8 encoded files to
the device file system.  Applications respond to `writestart`,
`progress`, `write`, `writeend`, `error`, and `abort` events.

Each `FileWriter` corresponds to a single file, to which data can be
written many times.  The `FileWriter` maintains the file's `position`
and `length` attributes, which allow the app to `seek` and `write`
anywhere in the file. By default, the `FileWriter` writes to the
beginning of the file, overwriting existing data. Set the optional
`append` boolean to `true` in the `FileWriter`'s constructor to
write to the end of the file.

Text data is supported by all platforms listed below. Text is encoded as UTF-8 before being written to the filesystem. Some platforms also support binary data, which can be passed in as either an ArrayBuffer or a Blob.

## Supported Platforms

Text and Binary Support:

- Amazon Fire OS
- Android
- iOS

Text-only Support:

- BlackBerry WebWorks 5.0+
- Windows Phone 7 and 8
- Windows 8

## Seek Quick Example

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

## Truncate Quick Example

    function win(writer) {
        writer.truncate(10);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

## Write Quick Example

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

## Binary Write Quick Example

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

## Append Quick Example

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

## Abort Quick Example

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

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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



# FileSystem

This object represents a file system.

## Properties

- __name__: The name of the file system. _(DOMString)_

- __root__: The root directory of the file system. _(DirectoryEntry)_

## Details

The `FileSystem` object represents information about the file system.
The name of the file system is unique across the list of exposed
file systems.  The root property contains a `DirectoryEntry` object
that represents the file system's root directory.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## File System Quick Example

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }

    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }

        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>



# FileEntry

Represents a file on a file system, as defined in the
[W3C Directories and Systems](http://www.w3.org/TR/file-system-api/)
specification.

## Properties

- __isFile__: Always `true`. _(boolean)_

- __isDirectory__: Always `false`. _(boolean)_

- __name__: The name of the `FileEntry`, excluding the path leading to it. _(DOMString)_

- __fullPath__: The full absolute path from the root to the `FileEntry`. _(DOMString)_

__NOTE__: The following attribute is defined by the W3C specification,
but is _not_ supported:

- __filesystem__: The file system on which the `FileEntry` resides. _(FileSystem)_

## Methods

- __getMetadata__: Look up metadata about a file.

- __setMetadata__: Set metadata on a file.

- __moveTo__: Move a file to a different location on the file system.

- __copyTo__: Copy a file to a different location on the file system.

- __toURL__: Return a URL that can be used to locate a file.

- __remove__: Delete a file.

- __getParent__: Look up the parent directory.

- __createWriter__: Creates a `FileWriter` object that can be used to write to a file.

- __file__: Creates a `File` object containing file properties.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## getMetadata

Look up metadata about a file.

__Parameters__:

- __successCallback__: A callback that is passed a `Metadata` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when retrieving the `Metadata`. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Request the metadata object for this entry
    entry.getMetadata(success, fail);

## setMetadata

Set metadata on a file.

__Currently works only on iOS.__

- This sets the extended attributes of a file.

__Parameters__:

- __successCallback__: A callback that executes when the metadata is set. _(Function)_

- __errorCallback__: A callback that executes when the metadata is not successfully set. _(Function)_

- __metadataObject__: An object that contains the metadata's keys and values. _(Object)_

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

- Only the `com.apple.MobileBackup` extended attribute is supported. Set the value to `1` to prevent the file from being backed up to iCloud. Set the value to `0` to re-enable the file to be backed up to iCloud.

__Quick Example__

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }

        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }

        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }

        var onFSFail = function(error) {
            console.log(error.code);
        }

        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }

        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);

## moveTo

Move a file to a different location on the file system. An error
results if the app attempts to:

- move a file into its parent if a name different from its current one isn't provided;

- move a file to a path occupied by a directory;

In addition, moving a file on top of an existing file attempts to
delete and replace that file.

__Parameters__:

- __parent__: The parent directory to which to move the file. _(DirectoryEntry)_

- __newName__: The new name of the file. Defaults to the current name if unspecified. _(DOMString)_

- __successCallback__: A callback that is passed the new file's `FileEntry` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to move the file.  Invoked with a `FileError` object. _(Function)_

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

## copyTo

Copy a file to a new location on the file system.  An error results if
the app attempts to:

- copy a file into its parent if a name different from its current one is not provided.

__Parameters__:

- __parent__: The parent directory to which to copy the file. _(DirectoryEntry)_

- __newName__: The new name of the file. Defaults to the current name if unspecified. _(DOMString)_

- __successCallback__: A callback that is passed the new file's `FileEntry` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to copy the file.  Invoked with a `FileError` object. _(Function)_

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

## toURL

Returns a URL that can be used to locate the file.

__Quick Example__

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);

## remove

Deletes a file.

__Parameters__:

- __successCallback__: A callback that executes after the file has been deleted.  Invoked with no parameters. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to delete the file.  Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(entry) {
        console.log("Removal succeeded");
    }

    function fail(error) {
        alert('Error removing file: ' + error.code);
    }

    // remove the file
    entry.remove(success, fail);

## getParent

Look up the parent `DirectoryEntry` containing the file.

__Parameters__:

- __successCallback__: A callback that is passed the file's parent `DirectoryEntry`. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to retrieve the parent `DirectoryEntry`.  Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // Get the parent DirectoryEntry
    entry.getParent(success, fail);

## createWriter

Create a `FileWriter` object associated with the file represented by the `FileEntry`.

__Parameters__:

- __successCallback__: A callback that is passed a `FileWriter` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs while attempting to create the FileWriter.  Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(writer) {
        writer.write("Some text to the file");
    }

    function fail(error) {
        alert(error.code);
    }

    // create a FileWriter to write to the file
    entry.createWriter(success, fail);

## file

Return a `File` object that represents the current state of the file
that this `FileEntry` represents.

__Parameters__:

- __successCallback__: A callback that is passed a `File` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when creating the `File` object, such as when the file no longer exists.  Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(file) {
        console.log("File size: " + file.size);
    }

    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }

    // obtain properties of a file
    entry.file(success, fail);



# DirectoryEntry

This object represents a directory on a file system, as defined by the
[W3C Directories and Systems](http://www.w3.org/TR/file-system-api/)
specification.

## Properties

- __isFile__: Always `false`. _(boolean)_

- __isDirectory__: Always `true`. _(boolean)_

- __name__: The name of the `DirectoryEntry`, excluding the path leading to it. _(DOMString)_

- __fullPath__: The full absolute path from the root to the `DirectoryEntry`. _(DOMString)_

__NOTE__: The following attribute is defined by the W3C specification,
but is _not_ supported:

- __filesystem__: The file system on which the `DirectoryEntry` resides. _(FileSystem)_

## Methods

The following methods can be invoked on a `DirectoryEntry` object:

- __getMetadata__: Look up metadata about a directory.

- __setMetadata__: Set metadata on a directory.

- __moveTo__: Move a directory to a different location on the file system.

- __copyTo__: Copy a directory to a different location on the file system.

- __toURL__: Return a URL to help locate a directory.

- __remove__: Delete a directory. The directory must be empty.

- __getParent__: Look up the parent directory.

- __createReader__: Create a new `DirectoryReader` that can read entries from a directory.

- __getDirectory__: Create or look up a directory.

- __getFile__: Create or look up a file.

- __removeRecursively__: Delete a directory and all of its contents.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## getMetadata

Look up metadata about a directory.

__Parameters__:

- __successCallback__: A callback function to execute with a `Metadata` object. _(Function)_

- __errorCallback__: A callback function to execute if an error occurs when retrieving the `Metadata`. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Request the metadata object for this entry
    entry.getMetadata(success, fail);

## setMetadata

Sets a directory's extended attributes, or metadata. _Currently works
only on iOS._

__Parameters__:

- __successCallback__: A callback that executes when the metadata is successfully set. _(Function)_

- __errorCallback__: A callback that executes when the metadata fails to be set. _(Function)_

- __metadataObject__: An object that contains the metadata's keys and values. _(Object)_

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

- Only the `com.apple.MobileBackup` extended attribute is supported. Set the value to `1` to prevent the directory from being backed up to iCloud. Set the value to `0` to re-enable the directory to be backed up to iCloud.

__Quick Example__

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }

        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }

        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }

        var onFSFail = function(error) {
            console.log(error.code);
        }

        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }

        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);

## moveTo

Move a directory to a different location on the file system. An error results if the app attempts to:

- move a directory inside itself or to any child at any depth.

- move a directory into its parent if a name different from its current directory is not provided.

- move a directory to a path occupied by a file.

- move a directory to a path occupied by a directory that is not empty.

Moving a directory on top of an existing empty directory attempts to
delete and replace that directory.

__Parameters__:

- __parent__: The parent directory to which to move the directory. _(DirectoryEntry)_

- __newName__: The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_

- __successCallback__: A callback that executes with the `DirectoryEntry` object for the new directory. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to move the directory. Invoked with a `FileError` object. _(Function)_

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

## copyTo

Copy a directory to a different location on the file system.  An error results if the app attempts to:

- copy a directory inside itself at any depth.

- copy a directory into its parent if a name different from its current directory is not provided.

Directory copies are always recursive, and copy all contents of the directory.

__Parameters__:

- __parent__: The parent directory to which to copy the directory. _(DirectoryEntry)_

- __newName__: The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_

- __successCallback__: A callback that executes with the `DirectoryEntry` object for the new directory. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to copy the underlying directory. Invoked with a `FileError` object. _(Function)_

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

## toURL

Returns a URL that can be used to locate the directory.

__Quick Example__

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);

## remove

Deletes a directory. An error results if the app attempts to:

- delete a directory that is not empty.

- delete the root directory of a filesystem.

__Parameters__:

- __successCallback__: A callback that executes after the directory is deleted.  Invoked with no parameters. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to delete the directory. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(entry) {
        console.log("Removal succeeded");
    }

    function fail(error) {
        alert('Error removing directory: ' + error.code);
    }

    // remove this directory
    entry.remove(success, fail);

## getParent

Look up the parent `DirectoryEntry` containing the directory.

__Parameters__:

- __successCallback__: A callback that is passed the directory's parent `DirectoryEntry`. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to retrieve the parent `DirectoryEntry`. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }

    // Get the parent DirectoryEntry
    entry.getParent(success, fail);

## createReader

Creates a new DirectoryReader to read entries in a directory.

__Quick Example__

    // create a directory reader
    var directoryReader = entry.createReader();

## getDirectory

Creates or looks up an existing directory.  An error results if the app attempts to:

- create a directory whose immediate parent does not yet exist.

__Parameters__:

- __path__: The path to the directory to be looked up or created.  Either an absolute path, or a relative path from this `DirectoryEntry`. _(DOMString)_

- __options__: Options to specify whether the directory is to be created if it doesn't exist.  _(Flags)_

- __successCallback__: A callback that executes with a `DirectoryEntry` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when creating or looking up the directory. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(dirEntry) {
        console.log("Directory Name: " + dirEntry.name);
    }

    function fail(error) {
        alert("Unable to create new directory: " + error.code);
    }

    // Retrieve an existing directory, or create it if it does not already exist
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);

## getFile

Creates or looks up a file.  An error results if the app attempts to:

- create a file whose immediate parent does not yet exist.

__Parameters__:

- __path__: The path to the file to be looked up or created.  Either an absolute path, or a relative path from this `DirectoryEntry`. _(DOMString)_

- __options__: Options to specify whether the file is created if it doesn't exist.  _(Flags)_

- __successCallback__: A callback that is passed a `FileEntry` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when creating or looking up the file. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(fileEntry) {
        console.log("File Name: " + fileEntry.name);
    }

    function fail(error) {
        alert("Failed to retrieve file: " + error.code);
    }

    // Retrieve an existing file, or create it if it does not exist
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail);

## removeRecursively

Deletes a directory and all of its contents.  In the event of an error (such as trying to delete
a directory containing a file that can't be removed), some of the contents of the directory may
be deleted.   An error results if the app attempts to:

- delete the root directory of a filesystem.

__Parameters__:

- __successCallback__: A callback that executes after the `DirectoryEntry` has been deleted.  Invoked with no parameters. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when attempting to delete the `DirectoryEntry`. Invoked with a `FileError` object. _(Function)_

__Quick Example__

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }

    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }

    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);

## BlackBerry Quirks

May fail with a `ControlledAccessException` in the following cases:

- An app attempts to access a directory created by a previous installation of the app.

> Solution: ensure temporary directories are cleaned manually, or by the application prior to reinstallation.

- If the device is connected by USB.

> Solution: disconnect the USB cable from the device and run again.



# DirectoryReader

An object that lists files and directories within a directory, as
defined in the
[W3C Directories and Systems](http://www.w3.org/TR/file-system-api/)
specification.

## Methods

- __readEntries__: Read the entries in a directory.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## readEntries

Read the entries in this directory.

__Parameters__:

- __successCallback__: A callback that is passed an array of `FileEntry` and `DirectoryEntry` objects. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when retrieving the directory listing. Invoked with a `FileError` object. _(Function)_

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



# FileTransfer

The `FileTransfer` object allows you to upload or download files to
and from a server.

## Properties

- __onprogress__: Called with a `ProgressEvent` whenever a new chunk of data is transferred. _(Function)_

## Methods

- __upload__: sends a file to a server.

- __download__: downloads a file from server.

- __abort__: Aborts an in-progress transfer.

## Details

The `FileTransfer` object provides a way to upload files to a remote
server using an HTTP multi-part POST request.  Both HTTP and HTTPS
protocols are supported.  Optional parameters can be specified by
passing a `FileUploadOptions` object to the `upload()` method.  On
successful upload, a `FileUploadResult` object is passed to the
success callback.  If an error occurs, a `FileTransferError` object is
passed to the error callback.  It is also possible (only on iOS and
Android) to download a file from a remote server and save it on the
device.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## upload

__Parameters__:

- __filePath__: Full path of the file on the device.

- __server__: URL of the server to receive the file, as encoded by `encodeURI()`.

- __successCallback__: A callback that is passed a `Metadata` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs retrieving the `Metadata`. Invoked with a `FileTransferError` object. _(Function)_

- __options__: Optional parameters such as file name and mimetype.

- __trustAllHosts__: Optional parameter, defaults to `false`. If set to `true`, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS. _(boolean)_

__Quick Example__

    // !! Assumes variable fileURI contains a valid URI to a text file on the device

    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);

__Full Example__

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }

            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";

                var params = {};
                params.value1 = "test";
                params.value2 = "param";

                options.params = params;

                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
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

__Setting Upload Headers__

Supported on Android and iOS

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

    var uri = encodeURI("http://some.server.com/upload.php");

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var headers={'headerParam':'headerValue'};

    options.headers = headers;

    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);

__Android Quirks__

Set the `chunkedMode` option to `false` to prevent problems uploading
to a Nginx server.

## download

__Parameters__:

- __source__: URL of the server to download the file, as encoded by `encodeURI()`.

- __target__: Full path of the file on the device.

- __successCallback__: A callback that is passed  a `FileEntry` object. _(Function)_

- __errorCallback__: A callback that executes if an error occurs when retrieving the `Metadata`. Invoked with a `FileTransferError` object. _(Function)_

- __trustAllHosts__: Optional parameter, defaults to `false`. If set to `true`, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS. _(boolean)_

- __options__: Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).

__Quick Example__

    // !! Assumes filePath is a valid path on the device

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");

    fileTransfer.download(
        uri,
        filePath,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );

## abort

Aborts an in-progress transfer. The onerror callback is passed a FileTransferError object which has an error code of FileTransferError.ABORT_ERR.

__Supported Platforms__

- Amazon Fire OS
- Android
- iOS

__Quick Example__

    // !! Assumes variable fileURI contains a valid URI to a text file on the device

    var win = function(r) {
        console.log("Should not be called.");
    }

    var fail = function(error) {
        // error.code == FileTransferError.ABORT_ERR
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";

    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    ft.abort();

## onprogress

Called with a ProgressEvent whenever a new chunk of data is transferred.

__Supported Platforms__

- Amazon Fire OS
- Android
- iOS

__Example__

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);

__Quirks__
- On both Android an iOS, lengthComputable is `false` for downloads that use gzip encoding.



# FileUploadOptions

A `FileUploadOptions` object can be passed to the `FileTransfer`
object's `upload()` method to specify additional parameters to the
upload script.

## Properties

- __fileKey__: The name of the form element.  Defaults to `file`. (DOMString)

- __fileName__: The file name to use when saving the file on the server.  Defaults to `image.jpg`. (DOMString)

- __mimeType__: The mime type of the data to upload.  Defaults to `image/jpeg`. (DOMString)

- __params__: A set of optional key/value pairs to pass in the HTTP request. (Object)

- __chunkedMode__: Whether to upload the data in chunked streaming mode. Defaults to `true`. (Boolean)

- __headers__: A map of header name/header values. Use an array to specify more than one value. (Object)

## Description

A `FileUploadOptions` object can be passed to the `FileTransfer`
object's `upload()` method to specify additional parameters to the
upload script.

## WP7 Quirk

- __chunkedMode__: Ignored on WP7.



# FileUploadResult

A `FileUploadResult` object is passed to the success callback of the
`FileTransfer` object's `upload()` method.

## Properties

- __bytesSent__: The number of bytes sent to the server as part of the upload. (long)

- __responseCode__: The HTTP response code returned by the server. (long)

- __response__: The HTTP response returned by the server. (DOMString)

## Description

The `FileUploadResult` object is returned via the success callback of
the `FileTransfer` object's `upload()` method.

## iOS Quirks

- Does not support `responseCode` or `bytesSent`.



# Flags

Supplies arguments to the `DirectoryEntry` object's `getFile()` and
`getDirectory()` methods, which look up or create files and
directories, respectively.

## Properties

- __create__: Indicates that the file or directory should be created if it does not already exist. _(boolean)_

- __exclusive__: Has has no effect by itself, but when used with `create` causes the file or directory creation to fail if the target path already exists. _(boolean)_

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    // Get the data directory, creating it if it doesn't exist.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Create the lock file, if and only if it doesn't exist.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});



# LocalFileSystem

This object provides a way to obtain root file systems.

## Methods

- __requestFileSystem__: Requests a filesystem. _(Function)_

- __resolveLocalFileSystemURI__: Retrieve a `DirectoryEntry` or `FileEntry` using local URI. _(Function)_

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
- __successCallback__: invoked with a FileSystem object
- __errorCallback__:  invoked if error occurs retrieving file system

## Request File System Quick Example

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);



# Metadata

An interface that supplies information about the state of a file or directory.

## Properties

- __modificationTime__: The time when the file or directory was last modified. _(Date)_

## Details

The `Metadata` object represents information about the state of a file
or directory.  Calling a `DirectoryEntry` or `FileEntry` object's
`getMetadata()` method results in a `Metadata` instance.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    // Request the metadata object for this entry
    entry.getMetadata(win, null);



# FileError

A `FileError` object is set when an error occurs in any of the File API methods.

## Properties

- __code__: One of the predefined error codes listed below.

## Constants

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

## Description

The `FileError` object is the only parameter provided to any of the
File API's error callbacks.  To determine the type of error, compare
its `code` property to any of the listings above.



# FileTransferError

A `FileTransferError` object is passed to an error callback when an error occurs.

## Properties

- __code__: One of the predefined error codes listed below. (Number)

- __source__: URI to the source. (String)

- __target__: URI to the target. (String)

- __http_status__: HTTP status code.  This attribute is only available when a response code is received from the HTTP connection. (Number)

## Constants

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`
- `FileTransferError.ABORT_ERR`

## Description

The `FileTransferError` object is passed to the error callback when an
error occurs when uploading or downloading a file.

