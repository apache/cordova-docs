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

CaptureErrorCB
==============

> Invoked if an error occurs during a media capture operation.

    function captureError( CaptureError error ) { ... };

Description
-----------

This function executes if an error occurs when trying to launch a
media capture operation. Failure scenarios include when the capture
application is busy, a capture operation is already taking place, or
the user cancels the operation before any media files are captured.

This function executes with a `CaptureError` object containing an
appropriate error `code`.

Quick Example
-------------

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
