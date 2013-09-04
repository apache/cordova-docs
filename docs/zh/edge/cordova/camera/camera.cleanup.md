---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# camera.cleanup

刪除中間由從臨時存儲相機所拍攝的照片。

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## 說明

刪除中間打完電話後保留在臨時存儲的影像檔 `camera.getPicture` 。 適用時，才的價值 `Camera.sourceType` 等於 `Camera.PictureSourceType.CAMERA` 和 `Camera.destinationType` 等於`Camera.DestinationType.FILE_URI`.

## 支援的平臺

*   iOS

## 示例

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }