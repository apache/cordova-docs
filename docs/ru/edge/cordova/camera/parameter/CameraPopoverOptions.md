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

только для iOS параметры, указывающие якорь элемент расположение и стрелкой направление инструмента при выборе изображений из библиотеки или альбома iPad.

    {x: 0, y: 32, ширина: 320, высота: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: x координата пикселя элемента экрана, на котором для закрепления инструмента. *(Число)*

*   **y**: y координата пикселя элемента экрана, на котором для закрепления инструмента. *(Число)*

*   **Ширина**: ширина в пикселях экрана элемента, на который для закрепления инструмента. *(Число)*

*   **Высота**: высота в пикселях экрана элемента, на который для закрепления инструмента. *(Число)*

*   **arrowDir**: стрелка на инструмента следует указывать направление. Определено в `Camera.PopoverArrowDirection` *(число)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / матчи iOS UIPopoverArrowDirection константы ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Обратите внимание, что размер инструмента может измениться для регулировки в направлении стрелки и ориентации экрана. Убедитесь, что для учета изменения ориентации при указании расположения элемента привязки.

## Быстрый пример

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