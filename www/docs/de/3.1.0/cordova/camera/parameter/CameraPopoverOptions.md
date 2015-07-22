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

nur iOS-Parametern, die Anker-Element Lage und Pfeil Richtung der Popover angeben, bei der Auswahl von Bildern aus einem iPad Bibliothek oder Album.

    {X: 0, y: 32, Breite: 320, Höhe: 480, ArrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **X**: x Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **y**: y Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Breite**: Breite in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Höhe**: Höhe in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **ArrowDir**: Richtung der Pfeil auf der Popover zeigen sollte. Im Sinne `Camera.PopoverArrowDirection` *(Anzahl)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / entspricht iOS UIPopoverArrowDirection Konstanten ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Beachten Sie, dass die Größe der Popover ändern kann, um die Richtung des Pfeils und Ausrichtung des Bildschirms anzupassen. Achten Sie darauf, um Orientierung zu berücksichtigen, wenn Sie den Anker-Element-Speicherort angeben.

## Kleines Beispiel

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