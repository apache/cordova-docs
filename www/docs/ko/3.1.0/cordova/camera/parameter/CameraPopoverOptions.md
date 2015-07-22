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

# CameraPopoverOptions

iOS 전용 매개 iPad의 보관 함 또는 앨범에서 이미지를 선택할 때는 popover의 앵커 요소 위치와 화살표 방향을 지정 합니다.

    {x: 0, y: 32, 폭: 320, 높이: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: x는 popover 앵커는 화면 요소의 픽셀 좌표. *(수)*

*   **y**: y 픽셀 좌표는 popover 앵커는 화면 요소입니다. *(수)*

*   **폭**: 폭 (픽셀)는 popover 앵커는 화면 요소. *(수)*

*   **높이**: 높이 (픽셀)는 popover 앵커는 화면 요소. *(수)*

*   **arrowDir**: 방향 화살표는 popover 가리켜야 합니다. 에 정의 된 `Camera.PopoverArrowDirection` *(수)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / iOS UIPopoverArrowDirection 상수 ARROW_DOWN 일치: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

참고는 popover의 크기 조정 화살표 방향 및 화면 방향 변경 될 수 있습니다. 앵커 요소 위치를 지정 하는 경우 방향 변경에 대 한 계정에 있는지 확인 합니다.

## 빠른 예제

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }