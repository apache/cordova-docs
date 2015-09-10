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

# CameraPopoverHandle

에 의해 만들어진 popover 대화에 대 한 핸들`<a href="../camera.getPicture.html">camera.getPicture</a>`.

## 메서드

*   **setPosition**:는 popover의 <a href="../../geolocation/Position/position.html">위치</a>를 설정 합니다.

## 지원 되는 플랫폼

*   iOS

## setPosition

popover의 <a href="../../geolocation/Position/position.html">위치</a>를 설정 합니다.

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   `cameraPopoverOptions`:는 `<a href="CameraPopoverOptions.html">CameraPopoverOptions</a>` 새 <a href="../../geolocation/Position/position.html">위치</a>를 지정 하는

## 빠른 예제

     var cameraPopoverOptions = new <a href="CameraPopoverOptions.html">CameraPopoverOptions</a>(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## 전체 예제

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.<a href="../camera.getPicture.html">camera.getPicture</a>(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new <a href="CameraPopoverOptions.html">CameraPopoverOptions</a>(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }