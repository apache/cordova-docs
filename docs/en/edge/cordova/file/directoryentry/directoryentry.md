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
- Windows Phone 7 and 8
- Windows 8

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

	    var onFSFail = function(evt) {
		  console.log(evt.target.error.code);
	    }

	    window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }

	setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);

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

BlackBerry Quirks
-----------------

May fail if access is attempted on an directory created by a previous installation of an application.
This can occur if an app creates a directory during normal operation, then the app is reinstalled 
without the directory being cleaned. An attempt to access the directory from the new app install will 
fail with a 'ControlledAccessException'.
