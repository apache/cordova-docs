---
license: Licensed to the Apache Software Foundation (ASF) under one
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

MediaFile.getFormatData
=======================

> Retrieves format information about the media capture file.

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );

Description
-----------

This function asynchronously attempts to retrieve the format
information for the media file.  If successful, it invokes the
`MediaFileDataSuccessCB` callback with a `MediaFileData` object.  If
the attempt fails, this function invokes the `MediaFileDataErrorCB`
callback.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

BlackBerry WebWorks Quirks
--------------------------

Does not provide an API for information about media files, so all
`MediaFileData` objects return with default values.

Android Quirks
--------------

The API to access media file format information is limited, so not all
`MediaFileData` properties are supported.

iOS Quirks
----------

The API to access media file format information is limited, so not all
`MediaFileData` properties are supported.
