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

title: camera.cleanup
---

camera.cleanup
=================

Removes intermediate photos taken by the camera from temporary
storage.

    navigator.camera.cleanup( cameraSuccess, cameraError );

Description
-----------

Removes intermediate image files that are kept in temporary storage
after calling `[camera.getPicture](camera.getPicture.html)`. Applies only when the value of
`[Camera](camera.html).sourceType` equals `[Camera](camera.html).PictureSourceType.CAMERA` and the
`[Camera](camera.html).destinationType` equals `[Camera](camera.html).DestinationType.FILE_URI`.

Supported Platforms
-------------------

- iOS

[Example](../storage/storage.opendatabase.html)
-------------

    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("Camera cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
