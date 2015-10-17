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

title: MediaFile
---

MediaFile
=========

> Encapsulates properties of a media capture file.

Properties
----------

- __name:__ The [name](../../storage/parameters/name.html) of the file, without path information. (DOMString)
- __fullPath:__ The full path of the file, including the [name](../../storage/parameters/name.html). (DOMString)
- __type:__ The mime type (DOMString)
- __lastModifiedDate:__ The date and time that the file was last modified. (Date)
- __size:__ The [size](../../storage/parameters/size.html) of the file, in bytes. (Number)

Methods
-------

- __MediaFile.getFormatData:__ Retrieves the format information of the media file.