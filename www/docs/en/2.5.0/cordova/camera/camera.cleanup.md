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

camera.cleanup
=================

Cleans up the image files that were taken by the camera, that were stored in a temporary storage location.

    navigator.camera.cleanup( <a href="parameter/cameraSuccess.html">cameraSuccess</a>, <a href="parameter/cameraError.html">cameraError</a> );

Description
-----------

Cleans up the image files stored in the temporary storage location, when the function `<a href="camera.getPicture.html">camera.getPicture</a>` is used with  `<a href="camera.html">Camera</a>.sourceType = <a href="camera.html">Camera</a>.PictureSourceType.CAMERA` and `<a href="camera.html">Camera</a>.destinationType = <a href="camera.html">Camera</a>.DestinationType.FILE_URI`


Supported Platforms
-------------------

- iOS


<a href="../storage/storage.opendatabase.html">Example</a>
-------------

    navigator.camera.cleanup(onSuccess, onFail); 

    function onSuccess() {
        console.log("<a href="camera.html">Camera</a> cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
