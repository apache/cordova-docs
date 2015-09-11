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

由創建的彈出對話方塊的控制碼`<a href="../camera.getPicture.html">camera.getPicture</a>`.

## 方法

*   **setPosition**: 設置彈出的<a href="../../geolocation/Position/position.html">位置</a>。

## 支援的平臺

*   iOS

## setPosition

設置彈出的<a href="../../geolocation/Position/position.html">位置</a>。

**參數：**

*   `cameraPopoverOptions`： `<a href="CameraPopoverOptions.html">CameraPopoverOptions</a>` ，指定新的<a href="../../geolocation/Position/position.html">位置</a>

## 快速的示例

     var cameraPopoverOptions = new <a href="CameraPopoverOptions.html">CameraPopoverOptions</a>(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## 完整的示例

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