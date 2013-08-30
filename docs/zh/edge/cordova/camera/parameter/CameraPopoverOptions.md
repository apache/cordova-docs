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

iOS 仅指定弹出的锚元素的位置和箭头方向，从 iPad 的库或专辑选择图像时的参数。

    {x: 0，y： 32，宽度： 320，高度： 480，arrowDir： Camera.PopoverArrowDirection.ARROW_ANY} ；
    

## CameraPopoverOptions

*   **x**： 像素的 x 坐标上的锚定弹出屏幕元素。*（人数）*

*   **y**： 到其锚定弹出屏幕元素的 y 像素坐标。*（人数）*

*   **宽度**： 宽度以像素为单位），到其锚定弹出屏幕元素。*（人数）*

*   **高度**： 高度以像素为单位），到其锚定弹出屏幕元素。*（人数）*

*   **arrowDir**： 上弹出的箭头应指向的方向。定义在 `Camera.PopoverArrowDirection` *（人数）* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1，/ / 匹配 iOS UIPopoverArrowDirection 常量 ARROW_DOWN： 2，ARROW_LEFT： 4，ARROW_RIGHT： 8，ARROW_ANY： 15} ；
        

请注意弹出的大小可能会更改箭头的方向和屏幕的方向调整。 请确保帐户方向更改时指定的锚点的元素位置。

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