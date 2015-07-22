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

# CameraPopoverHandle

Un identificador para el cuadro de diálogo popover creado por`camera.getPicture`.

## Métodos

*   **setPosition**: establecer la posición de la popover.

## Plataformas soportadas

*   iOS

## setPosition

Establecer la posición de la popover.

**Parámetros:**

*   `cameraPopoverOptions`: el `CameraPopoverOptions` que especifican la nueva posición

## Ejemplo rápido

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Ejemplo completo

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }