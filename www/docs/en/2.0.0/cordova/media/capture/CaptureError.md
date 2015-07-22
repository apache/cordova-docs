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

title: CaptureError
---

CaptureError
============

> Encapsulates the error code resulting from a failed media capture operation.

Properties
----------

- __code:__ One of the pre-defined error codes listed below.

Constants
---------

- CaptureError.`CAPTURE_INTERNAL_ERR`: [Camera](../../camera/camera.html) or microphone failed to capture image or sound. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: [Camera](../../camera/camera.html) application or audio capture application is currently serving other capture request.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Invalid use of the API (e.g. limit parameter has value less than one).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: User exited camera application or audio capture application before capturing anything.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: The requested capture operation is not supported.
