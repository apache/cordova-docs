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

제거 임시 저장소에서 카메라로 찍은 사진을 중간.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## 설명

제거 중간 전화 후 임시 저장소에 보관 된 이미지 파일 `camera.getPicture` . 경우에만 적용의 값 `Camera.sourceType` 와 `Camera.PictureSourceType.CAMERA` 와 `Camera.destinationType` 같음`Camera.DestinationType.FILE_URI`.

## 지원 되는 플랫폼

*   iOS

## 예를 들어

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }