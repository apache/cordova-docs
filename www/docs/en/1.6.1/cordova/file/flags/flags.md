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

title: Flags
---

Flags
=====

This object is used to supply arguments to the `[DirectoryEntry](../directoryentry/directoryentry.html)` __getFile__ and __getDirectory__ methods, which look up or create files and directories, respectively.

Properties
----------

- __create:__ Used to indicate that the file or directory should be created, if it does not exist. _(boolean)_
- __exclusive:__ By itself, exclusive has no effect. Used with create, it causes the file or directory creation to fail if the target path already exists. _(boolean)_

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick [Example](../../storage/storage.opendatabase.html)
-------------

    // Get the data directory, creating it if it doesn't exist.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Create the lock file, if and only if it doesn't exist.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
