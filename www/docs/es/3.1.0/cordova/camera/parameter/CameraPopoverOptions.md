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

Sólo iOS parámetros que especifican la dirección ancla elemento ubicación y la flecha de la popover al seleccionar imágenes de biblioteca o álbum de un iPad.

    {x: 0, y: 32, ancho: 320, altura: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: coordenadas de píxeles del elemento de la pantalla en la que anclar el popover x. *(Número)*

*   **y**: coordenada píxeles del elemento de la pantalla en la que anclar el popover. *(Número)*

*   **anchura**: anchura, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **altura**: alto, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **arrowDir**: dirección de la flecha en el popover debe apuntar. Definido en `Camera.PopoverArrowDirection` *(número)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1 / / coincide con iOS UIPopoverArrowDirection constantes ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Tenga en cuenta que puede cambiar el tamaño de la popover para ajustar la dirección de la flecha y orientación de la pantalla. Asegúrese de que para tener en cuenta los cambios de orientación cuando se especifica la ubicación del elemento de anclaje.

## Ejemplo rápido

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