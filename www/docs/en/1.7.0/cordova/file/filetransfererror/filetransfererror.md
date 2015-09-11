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
---

<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error
========

A `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error` object is returned via the error callback when an error occurs.

Properties
----------

- __code__ One of the predefined error codes listed below. (int)
- __source__ URI to the source (string)
- __target__ URI to the target (string)

Constants
---------

- `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error.FILE_NOT_FOUND_ERR`
- `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error.INVALID_URL_ERR`
- `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error.CONNECTION_ERR`

Description
-----------

The `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>Error` object is returned via the error callback  when an error occurs when uploading a file.
