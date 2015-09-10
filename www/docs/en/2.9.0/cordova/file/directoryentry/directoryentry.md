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

DirectoryEntry
==============

This object represents a directory on a file system, as defined by the
[W3C Directories and Systems](http://www.w3.org/TR/file-system-api/)
specification.

Properties
----------

- __is<a href="../fileobj/fileobj.html">File</a>__: Always false. _(boolean)_
- __isDirectory__: Always true. _(boolean)_
- __name__: The name of the `DirectoryEntry`, excluding the path leading to it. _(DOMString)_
- __fullPath__: The full absolute path from the root to the `DirectoryEntry`. _(DOMString)_

__NOTE:__ The following attribute is defined by the W3C specification,
but is _not_ supported:

- __filesystem__: The file system on which the `DirectoryEntry` resides. _(<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>)_

Methods
-------

The following methods can be invoked on a `DirectoryEntry` object:

- __get<a href="../metadata/metadata.html">Metadata</a>__: Look up metadata about a directory.
- __set<a href="../metadata/metadata.html">Metadata</a>__: Set metadata on a directory.
- __moveTo__: Move a directory to a different location on the file system.
- __copyTo__: Copy a directory to a different location on the file system.
- __toURL__: Return a URL to help locate a directory.
- __remove__: Delete a directory. The directory must be empty.
- __getParent__: Look up the parent directory.
- __createReader__: Create a new `<a href="../directoryreader/directoryreader.html">DirectoryReader</a>` that can read entries from a directory.
- __getDirectory__: Create or look up a directory.
- __get<a href="../fileobj/fileobj.html">File</a>__: Create or look up a file.
- __removeRecursively__: Delete a directory and all of its contents.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

get<a href="../metadata/metadata.html">Metadata</a>
-----------

Look up metadata about a directory.

__Parameters:__

- __successCallback__: A callback function to execute with a `<a href="../metadata/metadata.html">Metadata</a>` object. _(Function)_
- __errorCallback__: A callback function to execute if an error occurs when retrieving the `<a href="../metadata/metadata.html">Metadata</a>`. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Request the metadata object for this entry
    entry.get<a href="../metadata/metadata.html">Metadata</a>(success, fail);

set<a href="../metadata/metadata.html">Metadata</a>
----------------

Set metadata on a directory.
__Currently works only on iOS.__ - this will set the extended attributes of a directory.

__Parameters:__

- __successCallback__: A callback that executes when the metadata is successfully set. _(Function)_
- __errorCallback__: A callback that executes when the metadata fails to be set. _(Function)_
- __metadataObject__: An object that contains the metadata's keys and values. _(Object)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success() {
        console.log("The metadata was successfully set.");
    }

    function fail() {
        alert("There was an error in setting the metadata");
    }

    // Set the metadata
    entry.set<a href="../metadata/metadata.html">Metadata</a>(success, fail, { "com.apple.MobileBackup": 1});

__iOS Quirk__

- Only the `com.apple.MobileBackup` extended attribute is supported. Set the value to `1` to prevent the directory from being backed up to iCloud. Set the value to `0` to re-enable the directory to be backed up to iCloud.

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function setFolder<a href="../metadata/metadata.html">Metadata</a>(local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>, subFolder, metadataKey, metadataValue)
    {
            var onSet<a href="../metadata/metadata.html">Metadata</a>Win = function() {
              console.log("success setting metadata")
            }
        var onSet<a href="../metadata/metadata.html">Metadata</a>Fail = function() {
              console.log("error setting metadata")
        }

            var onGetDirectoryWin = function(parent) {
              var data = {};
              data[metadataKey] = metadataValue;
              parent.set<a href="../metadata/metadata.html">Metadata</a>(onSet<a href="../metadata/metadata.html">Metadata</a>Win, onSet<a href="../metadata/metadata.html">Metadata</a>Fail, data);
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

            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>, 0, onFSWin, onFSFail);
    }

        setFolder<a href="../metadata/metadata.html">Metadata</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);

moveTo
------

Move a directory to a different location on the file system. An error results if the app attempts to:

- move a directory inside itself or to any child at any depth.
- move a directory into its parent if a name different from its current directory is not provided.
- move a directory to a path occupied by a file.
- move a directory to a path occupied by a directory that is not empty.

Moving a directory on top of an existing empty directory attempts to
delete and replace that directory.

__Parameters:__

- __parent__: The parent directory to which to move the directory. _(DirectoryEntry)_
- __newName__: The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__: A callback that executes with the `DirectoryEntry` object for the new directory. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when attempting to move the directory. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

Copy a directory to a different location on the file system.  An error results if the app attempts to:

- copy a directory inside itself at any depth.
- copy a directory into its parent if a name different from its current directory is not provided.

Directory copies are always recursive, and copy all contents of the directory.

__Parameters:__

- __parent__: The parent directory to which to copy the directory. _(DirectoryEntry)_
- __newName__: The new name of the directory. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__: A callback that executes with the `DirectoryEntry` object for the new directory. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when attempting to copy the underlying directory. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);

remove
------

Deletes a directory. An error results if the app attempts to:

- delete a directory that is not empty.
- delete the root directory of a filesystem.

__Parameters:__

- __successCallback__: A callback that executes after the directory is deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when attempting to delete the directory. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

Look up the parent `DirectoryEntry` containing the directory.

__Parameters:__

- __successCallback__: A callback that is passed the directory's parent `DirectoryEntry`. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when attempting to retrieve the parent `DirectoryEntry`. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

Creates a new <a href="../directoryreader/directoryreader.html">DirectoryReader</a> to read entries in a directory.

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    // create a directory reader
    var directoryReader = entry.createReader();

getDirectory
------------

Creates or looks up an existing directory.  An error results if the app attempts to:

- create a directory whose immediate parent does not yet exist.

__Parameters:__

- __path__: The path to the directory to be looked up or created.  Either an absolute path, or a relative path from this `DirectoryEntry`. _(DOMString)_
- __options__: Options to specify whether the directory is to be created if it doesn't exist.  _(<a href="../flags/flags.html">Flags</a>)_
- __successCallback__: A callback that executes with a `DirectoryEntry` object. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when creating or looking up the directory. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert("Unable to create new directory: " + error.code);
    }

    // Retrieve an existing directory, or create it if it does not already exist
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);

get<a href="../fileobj/fileobj.html">File</a>
-------

Creates or looks up a file.  An error results if the app attempts to:

- create a file whose immediate parent does not yet exist.

__Parameters:__

- __path__: The path to the file to be looked up or created.  Either an absolute path, or a relative path from this `DirectoryEntry`. _(DOMString)_
- __options__: Options to specify whether the file is created if it doesn't exist.  _(<a href="../flags/flags.html">Flags</a>)_
- __successCallback__: A callback that is passed a `<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>` object. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when creating or looking up the file. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert("Failed to retrieve file: " + error.code);
    }

    // Retrieve an existing file, or create it if it does not exist
    entry.get<a href="../fileobj/fileobj.html">File</a>("new<a href="../fileobj/fileobj.html">File</a>.txt", {create: true, exclusive: false}, success, fail);

removeRecursively
-----------------

Deletes a directory and all of its contents.  In the event of an error (such as trying to delete
a directory containing a file that cannot be removed), some of the contents of the directory may
be deleted.   An error results if the app attempts to:

- delete the root directory of a filesystem.

__Parameters:__

- __successCallback__: A callback that executes after the `DirectoryEntry` has been deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__: A callback that executes if an error occurs when attempting to delete the `DirectoryEntry`. Invoked with a `<a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a>` object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

May fail with a `ControlledAccessException` in the following cases:

- An app attempts to access a directory created by a previous installation of the app.

> Solution: ensure temporary directories are cleaned manually, or by the application prior to reinstallation.

- If the device is connected by USB.

> Solution: disconnect the USB cable from the device and run again.