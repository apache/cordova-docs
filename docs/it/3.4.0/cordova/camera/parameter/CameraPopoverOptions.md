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

iOS solo parametri che specificano l'ancoraggio elemento posizione e freccia direzione il Muffin quando si selezionano le immagini dalla libreria un iPad o un album.

    {x: 0, y: 32, larghezza: 320, altezza: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: pixel coordinata x dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **y**: coordinata y di pixel dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **larghezza**: larghezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **altezza**: altezza, in pixel, dell'elemento dello schermo su cui ancorare il muffin. *(Numero)*

*   **arrowDir**: direzione dovrebbe puntare la freccia il muffin. Definito in `Camera.PopoverArrowDirection` *(numero)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / corrisponde a iOS UIPopoverArrowDirection costanti ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Si noti che la dimensione del muffin possa cambiare per regolare la direzione della freccia e l'orientamento dello schermo. Assicurarsi che tenere conto di modifiche di orientamento quando si specifica la posizione di elemento di ancoraggio.

## Esempio rapido

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