DirectoryReader
==========

This interface lets a user list files and directories in a directory.

Methods
-------

- __readEntries__: Read the entries from this directory. 

Details
-------

This interface lets a user list files and directories in a directory.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

readEntries
----------------

Read the entries from this directory.

__Parameters:__

- successCallback - A callback that is called with array of File/DirectoryEntry objects on success. _(Function)_
- errorCallback - A callback that is called when errors happen with an FileError object. _(Function)_

__Quick Example__
	
	function win(entries) {
		for (i=0; i<entries.length; i++) {
			console.log(entries[i].name);
		}
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	// Get a directory reader
	var directoryReader = entry.createReader();
	
	// Get a list of all the entries in the directory
	directoryReader.readEntries(win,fail);


