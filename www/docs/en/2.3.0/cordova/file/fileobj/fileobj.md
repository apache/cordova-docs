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

title: File
---

File
====

This object contains attributes of a single file.

Properties
----------

- __name:__ The name of the file. _(DOMString)_
- __fullPath:__ The full path of the file including the file name. _(DOMString)_
- __type:__ The mime type of the file. _(DOMString)_
- __lastModifiedDate:__ The last time the file was modified. _(Date)_
- __size:__ The size of the file in bytes. _(long)_

Details
-------

The `File` object contains attributes of a single file.  You can get an instance of a File object by calling the __file__ method of a `[FileEntry](../fileentry/fileentry.html)` object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8
