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