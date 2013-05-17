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

CaptureAudioOptions
===================

> Encapsulates audio capture configuration options.

Properties
----------

- __limit__: The maximum number of audio clips the device user can record in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __duration__: The maximum duration of an audio sound clip, in seconds.

Quick Example
-------------

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Android Quirks
--------------

- The `duration` parameter is not supported.  Recording lengths cannot be limited programmatically.

BlackBerry WebWorks Quirks
--------------------------

- The `duration` parameter is not supported.  Recording lengths cannot be limited programmatically.

iOS Quirks
----------

- The `limit` parameter is not supported, so only one recording can be created for each invocation.
