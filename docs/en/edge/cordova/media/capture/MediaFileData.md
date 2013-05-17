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

MediaFileData
=============

> Encapsulates format information about a media file.

Properties
----------

- __codecs__: The actual format of the audio and video content. (DOMString)
- __bitrate__: The average bitrate of the content.  The value is zero for images. (Number)
- __height__: The height of the image or video in pixels. The value is zero for audio clips. (Number)
- __width__: The width of the image or video in pixels. The value is zero for audio clips. (Number)
- __duration__: The length of the video or sound clip in seconds. The value is zero for images. (Number)

BlackBerry WebWorks Quirks
--------------------------

No API provides format information for media files, so the
`MediaFileData` object returned by `MediaFile.getFormatData` features
the following default values:

- __codecs__: Not supported, and returns `null`.
- __bitrate__: Not supported, and returns zero.
- __height__: Not supported, and returns zero.
- __width__: Not supported, and returns zero.
- __duration__: Not supported, and returns zero.

Android Quirks
--------------
Supports the following `MediaFileData` properties:

- __codecs__: Not supported, and returns `null`.
- __bitrate__: Not supported, and returns zero.
- __height__: Supported: image and video files only.
- __width__: Supported: image and video files only.
- __duration__: Supported: audio and video files only.

iOS Quirks
----------
Supports the following `MediaFileData` properties:

- __codecs__: Not supported, and returns null.
- __bitrate__: Supported on iOS4 devices for audio only. Returns zero for images and videos.
- __height__: Supported: image and video files only.
- __width__: Supported: image and video files only.
- __duration__: Supported: audio and video files only.
