FileEntry
==========

This object represents a file on a file system.  It is defined in the [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) specification.

Properties
----------

- __isFile:__ Always true. _(boolean)_
- __isDirectory:__ Always false. _(boolean)_
- __name:__ The name of the FileEntry, excluding the path leading to it. _(DOMString)_
- __fullPath:__ The full absolute path from the root to the FileEntry. _(DOMString)_

NOTE: The following attributes are defined by the W3C specification, but are __not supported__ by PhoneGap:

- __filesystem:__ The file system on which the FileEntry resides. _(FileSystem)_


Methods
-------

- __getMetadata__: Look up metadata about a file. 
- __moveTo__: Move a file to a different location on the file system.
- __copyTo__: Copy a file to a different location on the file system.
- __toURI__: Return a URI that can be used to locate a file.
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
            parentEntry = new DirectoryEntry({fullPath: parent});

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
            parentEntry = new DirectoryEntry({fullPath: parent});

        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }

	
toURI
-----

Returns a URI that can be used to locate the file. 

__Quick Example__
	
    // Request the URI for this entry
    var uri = entry.toURI();
    console.log(uri);


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
