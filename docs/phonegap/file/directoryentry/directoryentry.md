DirectoryEntry
==========

This interface represents a file on a file system.

Properties
----------

- __isFile:__ Entry is a file, always false. _(boolean)_
- __isDirectory:__ Entry is a directory, always true. _(boolean)_
- __name:__ The name of the entry, excluding the path leading to it. _(DOMString)_
- __fullPath:__ The full absolute path from the root to the entry. _(DOMString)_
- __filesystem:__ The file system on which the entry resides. _(FileSystem)_ -NOT SUPPORTED

Methods
-------

- __getMetadata__: Look up metadata about this entry. 
- __moveTo__: Move an entry to a different location on the file system.
- __copyTo__: Copy an entry to a different location on the file system.
- __toURI__: Returns a URI that can be used to identify this entry.
- __remove__: Deletes a file or directory.
- __getParent__: Look up the parent DirectoryEntry containing this Entry.
- __createReader__: Creates a new DirectoryReader to read Entries from this Directory.
- __getDirectory__: Creates or looks up a directory.
- __getFile__: Creates or looks up a file.
- __removeRecursively__: Deletes a directory and all of its contents.

Details
-------

An interface representing a directory entry in a file system.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

getMetadata
----------------

Look up metadata about this entry.

__Parameters:__

- successCallback - A callback that is called with a Metadata object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_


__Quick Example__

	function win(metadata) {
		console.log("Last Modified: " + metadata.modificationTime);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// Request the metadata object for this entry
	entry.getMetadata(win, fail);	
	
moveTo
----------------

Move an entry to a different location on the file system. It is an error to try to:

- move a directory inside itself or to any child at any depth;
- move an entry into its parent if a name different from its current one isn't provided;
- move a directory to a path occupied by a file;
- move any element to a path occupied by a directory which is not empty.

A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.

__Parameters:__

- parent - The directory to which to move the entry. _(DirectoryEntry)_
- newName - The new name of the entry. Defaults to the Entry's current name if unspecified. _(DOMString)_
- successCallback - A callback that is called with a DirectoryEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_


__Quick Example__

	function win(entry) {
		console.log("New Path: " + entry.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// move the directory to a new directory and rename it
	entry.moveTo(newDir, "newname", win, fail);	
	
	
copyTo
----------------

Copy an entry to a different location on the file system. It is an error to try to copy an entry 
inside itself at any depth if it is a directory, or to copy it into its parent if a name different 
from its current one isn't provided. Directory copies are always recursive--that is, they copy all 
contents of the directory.

__Parameters:__

- parent - The directory to which to move the entry. _(DirectoryEntry)_
- newName - The new name of the entry. Defaults to the Entry's current name if unspecified. _(DOMString)_
- successCallback - A callback that is called with a DirectoryEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_


__Quick Example__

	function win(entry) {
		console.log("New Path: " + entry.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// copy the directory to a new directory and rename it
	entry.copyTo(newDir, "newname", win, fail);	
	
toURI
----------------

Returns a URI that can be used to identify this entry. 

__Quick Example__
	
	// Get an uri for this directory
	var uri = entry.toURI();
	console.log(uri);

remove
----------------

Deletes a directory. It is an error to attempt to delete a directory that is not empty. 
It is an error to attempt to delete the root directory of a filesystem.

__Parameters:__

- successCallback - A callback that is called with no parameters on success. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(entry) {
		console.log("Removal succeeded");
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// remove this directory
	entry.remove(win, fail);	

getParent
----------------

Look up the parent DirectoryEntry containing this directory. 

__Parameters:__

- successCallback - A callback that is called with a DirectoryEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(parent) {
		console.log("Parent Name: " + parent.name);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// Get the parent DirectoryEntry
	entry.getParent(win, fail);	

createReader
----------------

Creates a new DirectoryReader to read Entries from this Directory.

__Quick Example__
	
	// create a directory reader
	var directoryReader = entry.createReader();	

getDirectory
----------------

Creates or looks up a directory.

__Parameters:__

- path - Either an absolute path or a relative path from this DirectoryEntry to the directory to be 
looked up or created. It is an error to attempt to create a directory whose immediate parent does 
not yet exist. _(DOMString)_
- options - Options to control where the Directory is created if it doesn't exist.  _(Flags)_
- successCallback - A callback that is called with a DirectoryEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(parent) {
		console.log("Parent Name: " + parent.name);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// Create a new directory
	entry.getDirectory("newDir", {create: true, exclusive: false}, win, fail);	

getFile
----------------

Creates or looks up a file.

__Parameters:__

- path - Either an absolute path or a relative path from this DirectoryEntry to the directory to be 
looked up or created. It is an error to attempt to create a directory whose immediate parent does 
not yet exist. _(DOMString)_
- options - Options to control where the File is created if it doesn't exist.  _(Flags)_
- successCallback - A callback that is called with a DirectoryEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(parent) {
		console.log("Parent Name: " + parent.name);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// Create a new file
	entry.getFile("newFile.txt", {create: true, exclusive: false}, win, fail);	
	
removeRecursively
----------------

Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete 
a directory that contains a file that cannot be removed], some of the contents of the directory may 
be deleted. It is an error to attempt to delete the root directory of a filesystem.

__Parameters:__

- successCallback - A callback that is called with no parameters on success. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(parent) {
		console.log("Remove Recursively Succeeded");
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// remove the directory and all it's contents
	entry.removeRecursively(win, fail);	


