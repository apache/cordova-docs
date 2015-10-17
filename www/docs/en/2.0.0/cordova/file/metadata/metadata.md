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

title: Metadata
---

Metadata
==========

This interface supplies information about the state of a file or directory.

Properties
----------

- __modificationTime:__ This is the time at which the file or directory was last modified. _(Date)_

Details
-------

The `Metadata` object represents information about the state of a file or directory.  You can get an instance of a Metadata object by calling the __getMetadata__ method of a `[DirectoryEntry](../directoryentry/directoryentry.html)` or `[FileEntry](../fileentry/fileentry.html)` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick [Example](../../storage/storage.opendatabase.html)
-------------

	function win(metadata) {
		console.log("Last Modified: " + metadata.modificationTime);
	}
	
	// Request the metadata object for this entry
	entry.getMetadata(win, null);