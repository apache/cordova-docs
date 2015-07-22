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

Paramètres, uniquement supportés par iOS, spécifiant l'emplacement d'accroche et la direction de la flèche de la boite de dialogue liée à la sélection d'images dans la bibliothèque et les albums sur iPad.

    { x : 0, y :  32, width : 320, height : 480, arrowDir : Camera.PopoverArrowDirection.ARROW_ANY };
    

## CameraPopoverOptions

*   **x**: coordonnée en x (pixels) de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **y**: coordonnée en y (pixels) de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **width**: largeur en pixels de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **height**: hauteur en pixels de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **arrowDir**: Direction vers laquelle la flèche de la boîte de dialogue doit pointer. Définie dans `Camera.PopoverArrowDirection` *(Number)*
    
            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // correspondent aux constantes iOS UIPopoverArrowDirection
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };
        

Notez que la taille de la boite de dialogue peut varier afin de permettre l'ajustement de la direction de la flèche et de l'orientation de l'écran. Assurez-vous de tenir compte des changements d'orientation lors de la spécification de l'emplacement d'élément d'accroche.

## Exemple court

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