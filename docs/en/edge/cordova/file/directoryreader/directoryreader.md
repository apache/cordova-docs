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
