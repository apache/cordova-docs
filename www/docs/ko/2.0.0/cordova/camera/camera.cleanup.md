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

카메라로 찍혀 임시 저장소에 저장된 이미지들을 제거한다.

    navigator.camera.cleanup( cameraSuccess, cameraError );

Description
-----------

임시 저장소에 있는 이미지 파일들을 삭제한다. `[camera.getPicture](camera.getPicture.html)`함수는 `[Camera](camera.html).sourceType = [Camera](camera.html).PictureSourceType.CAMERA` 과 `[Camera](camera.html).destinationType = [Camera](camera.html).DestinationType.FILE_URI` 일때 이용된다.


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
