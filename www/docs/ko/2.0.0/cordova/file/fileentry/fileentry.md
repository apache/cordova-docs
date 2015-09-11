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

<a href="../fileobj/fileobj.html">File</a>Entry
==========

This object represents a file on a file system.  It is defined in the [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) specification.

Properties
----------

- __is<a href="../fileobj/fileobj.html">File</a>:__ Always true. _(boolean)_
- __isDirectory:__ Always false. _(boolean)_
- __name:__ The name of the <a href="../fileobj/fileobj.html">File</a>Entry, excluding the path leading to it. _(DOMString)_
- __fullPath:__ The full absolute path from the root to the <a href="../fileobj/fileobj.html">File</a>Entry. _(DOMString)_

NOTE: The following attributes are defined by the W3C specification, but are __not supported__ by Cordova:

- __filesystem:__ The file system on which the <a href="../fileobj/fileobj.html">File</a>Entry resides. _(<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>)_


Methods
-------

- __get<a href="../metadata/metadata.html">Metadata</a>__: Look up metadata about a file.
- __set<a href="../metadata/metadata.html">Metadata</a>__: Set metadata on a file.
- __moveTo__: Move a file to a different location on the file system.
- __copyTo__: Copy a file to a different location on the file system.
- __toURL__: Return a URL that can be used to locate a file.
- __remove__: Delete a file.
- __getParent__: Look up the parent directory.
- __createWriter__: Creates a <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a> object that can be used to write to a file.
- __file__: Creates a <a href="../fileobj/fileobj.html">File</a> object containing file properties.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )


get<a href="../metadata/metadata.html">Metadata</a>
----------------

Look up metadata about a file.

__Parameters:__

- __successCallback__ - A callback that is called with a <a href="../metadata/metadata.html">Metadata</a> object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the <a href="../metadata/metadata.html">Metadata</a>. Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_


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

Set metadata on a file.
**Only works on iOS currently** - this will set the extended attributes of a file.

__Parameters:__

- __successCallback__ - A callback that is called when the metadata was successfully set. _(Function)_
- __errorCallback__ - A callback that is called when the metadata was not successfully set. _(Function)_
- __metadataObject__ - An object that contains the metadata keys and values. _(Object)_


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

- only the **"com.apple.MobileBackup"** extended attribute is supported. Set the value to **1** to NOT enable the file to be backed up by iCloud. Set the value to **0** to re-enable the file to be backed up by iCloud.


moveTo
------

Move a file to a different location on the file system. It is an error to attempt to:

- move a file into its parent if a name different from its current one isn't provided;
- move a file to a path occupied by a directory;

In addition, an attempt to move a file on top of an existing file must attempt to delete and replace that file.

__Parameters:__

- __parent__ - The parent directory to which to move the file. _(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)_
- __newName__ - The new name of the file. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the <a href="../fileobj/fileobj.html">File</a>Entry object of the new file. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to move the file.  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_


__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function move<a href="../fileobj/fileobj.html">File</a>(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);

        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "new<a href="../fileobj/fileobj.html">File</a>.txt", success, fail);
    }


copyTo
------

Copy a file to a new location on the file system.  It is an error to attempt to:

- copy a file into its parent if a name different from its current one is not provided.

__Parameters:__

- __parent__ - The parent directory to which to copy the file. _(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)_
- __newName__ - The new name of the file. Defaults to the current name if unspecified. _(DOMString)_
- __successCallback__ - A callback that is called with the <a href="../fileobj/fileobj.html">File</a>Entry object of the new file. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to copy the file.  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_


__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function win(entry) {
	    console.log("New Path: " + entry.fullPath);
    }

    function fail(error) {
	    alert(error.code);
    }

    function copy<a href="../fileobj/fileobj.html">File</a>(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);

        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }


toURL
-----

Returns a URL that can be used to locate the file.

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);


remove
------

Deletes a file.

__Parameters:__

- __successCallback__ - A callback that is called after the file has been deleted.  Invoked with no parameters. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to delete the file.  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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

Look up the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a> containing the file.

__Parameters:__

- __successCallback__ - A callback that is called with the file's parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when attempting to retrieve the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>.  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // Get the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>
    entry.getParent(success, fail);


createWriter
------------

Create a <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a> object associated with the file that the <a href="../fileobj/fileobj.html">File</a>Entry represents.

__Parameters:__

- __successCallback__ - A callback that is called with a <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a> object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs while attempting to create the <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a>.  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(writer) {
        writer.write("Some text to the file");
    }

    function fail(error) {
        alert(error.code);
    }

    // create a <a href="../filewriter/filewriter.html"><a href="../fileobj/fileobj.html">File</a>Writer</a> to write to the file
    entry.createWriter(success, fail);


file
----

Return a <a href="../fileobj/fileobj.html">File</a> object that represents the current state of the file that this <a href="../fileobj/fileobj.html">File</a>Entry represents.

__Parameters:__

- __successCallback__ - A callback that is called with a <a href="../fileobj/fileobj.html">File</a> object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs when creating the <a href="../fileobj/fileobj.html">File</a> object (e.g. the underlying file no longer exists).  Invoked with a <a href="../fileerror/fileerror.html"><a href="../fileobj/fileobj.html">File</a>Error</a> object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

    function success(file) {
        console.log("<a href="../fileobj/fileobj.html">File</a> size: " + file.size);
    }

    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }

    // obtain properties of a file
    entry.file(success, fail);
