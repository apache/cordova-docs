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

iOS 僅指定彈出的錨元素的位置和箭頭方向，從 iPad 的庫或專輯選擇圖像時的參數。

    {x: 0，y： 32，寬度： 320，高度： 480，arrowDir： Camera.PopoverArrowDirection.ARROW_ANY} ；
    

## CameraPopoverOptions

*   **x**： 圖元的 x 座標上的錨定彈出螢幕元素。*（人數）*

*   **y**： 到其錨定彈出螢幕元素的 y 圖元座標。*（人數）*

*   **寬度**： 寬度以圖元為單位），到其錨定彈出螢幕元素。*（人數）*

*   **高度**： 高度以圖元為單位），到其錨定彈出螢幕元素。*（人數）*

*   **arrowDir**： 上彈出的箭頭應指向的方向。定義在 `Camera.PopoverArrowDirection` *（人數）* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1，/ / 匹配 iOS UIPopoverArrowDirection 常量 ARROW_DOWN： 2，ARROW_LEFT： 4，ARROW_RIGHT： 8，ARROW_ANY： 15} ；
        

請注意彈出的大小可能會更改箭頭的方向和螢幕的方向調整。 請確保帳戶方向更改時指定的錨點的元素位置。

## 快速的示例

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