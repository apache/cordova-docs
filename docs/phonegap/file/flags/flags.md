Flags
==========

This interface is used to supply arguments to methods that look up or create files or directories.

Properties
----------

- __create:__ Used to indicate that the user wants to create a file or directory if it was not previously there. _(boolean)_
- __exclusive:__ By itself, exclusive must have no effect. Used with create, it causes getFile and getDirectory to fail if the target path already exists. _(boolean)_

Details
-------

The `Metadata` object represents information about the state of a file or directory.  You can get an instance of a Metadata object by calling the __getMetadata__ method of a `DirectoryEntry` or `FileEntry` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

	// Get the data directory, creating it if it doesn't exist.
	dataDir = fileSys.root.getDirectory("data", {create: true});

	// Create the lock file, if and only if it doesn't exist.
	lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
