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

title: FileUploadOptions
---

FileUploadOptions
========

A `FileUploadOptions` object can be passed to the [FileTransfer](../filetransfer/filetransfer.html) objects upload method in order to specify additional parameters to the upload script.

Properties
----------

- __fileKey:__ The name of the form element.  If not set defaults to "file". (DOMString)
- __fileName:__ The file name you want the file to be saved as on the server.  If not set defaults to "image.jpg". (DOMString)
- __mimeType:__ The mime type of the data you are uploading.  If not set defaults to "image/jpeg". (DOMString)
- __params:__ A set of optional key/value pairs to be passed along in the HTTP request. (Object)
- __chunkedMode:__ Should the data be uploaded in chunked streaming mode. If not set defaults to "true". (Boolean)


Description
-----------

A `FileUploadOptions` object can be passed to the [FileTransfer](../filetransfer/filetransfer.html) objects upload method in order to specify additional parameters to the upload script.

iOS Quirk
---------

- __chunkedMode:__
    This parameter is ignored on iOS.

WP7 Quirk
---------

- __chunkedMode:__
    This parameter is ignored on WP7.    
