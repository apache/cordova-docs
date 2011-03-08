FileEntry
==========

This interface represents a file on a file system.

Properties
----------

- __isFile:__ Entry is a file, always true. _(boolean)_
- __isDirectory:__ Entry is a directory, always false. _(boolean)_
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
- __createWriter__: Creates a new FileWriter associated with the file that this FileEntry represents.
- __file__: Creates a new FileWriter associated with the file that this FileEntry represents.

Details
-------

An interface representing a file entry in a file system.

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

Move a file to a different location on the file system. It is an error to try to:

- move a file into its parent if a name different from its current one isn't provided;
- move a file to a path occupied by a directory;

A move of a file on top of an existing file must attempt to delete and replace that file. 

__Parameters:__

- parent - The directory to which to move the entry. _(DirectoryEntry)_
- newName - The new name of the entry. Defaults to the Entry's current name if unspecified. _(DOMString)_
- successCallback - A callback that is called with a FileEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_


__Quick Example__

	function win(entry) {
		console.log("New Path: " + entry.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// move the file to a new directory and rename it
	entry.moveTo(newDir, "newname.txt", win, fail);	
	
	
copyTo
----------------

Copy a file to a different location on the file system. It is an error to try to copy it into its parent 
if a name different from its current one isn't provided. 

__Parameters:__

- parent - The directory to which to move the entry. _(DirectoryEntry)_
- newName - The new name of the entry. Defaults to the Entry's current name if unspecified. _(DOMString)_
- successCallback - A callback that is called with a FileEntry object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_


__Quick Example__

	function win(entry) {
		console.log("New Path: " + entry.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// copy the file to a new directory and rename it
	entry.copyTo(newDir, "newname.txt", win, fail);	
	
toURI
----------------

Returns a URI that can be used to identify this entry. 

__Quick Example__
	
	// Request the metadata object for this entry
	var uri = entry.toURI();
	console.log(uri);

remove
----------------

Deletes the file. 

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
	
	// copy the file to a new directory and rename it
	entry.remove(win, fail);	

getParent
----------------

Look up the parent DirectoryEntry containing this file. 

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
	
	// copy the file to a new directory and rename it
	entry.getParent(win, fail);	

createWriter
----------------

Creates a new FileWriter associated with the file that this FileEntry represents.

__Parameters:__

- successCallback - A callback that is called with a FileWriter object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(writer) {
		writer.write("Some text to the file");
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// copy the file to a new directory and rename it
	entry.createWriter(win, fail);	

file
----------------

Returns a File that represents the current state of the file that this FileEntry represents.

__Parameters:__

- successCallback - A callback that is called with a File object. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(file) {
		console.log("File size: " + file.size);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// copy the file to a new directory and rename it
	entry.file(win, fail);	

