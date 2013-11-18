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

samo za iOS parametre, ki določajo sidro element lokacijo in puščico smeri na popover pri izbiri slik iz knjižnice ali album iPad's.

    {x: 0, y: 32, širina: 320, višina: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: x pixel koordinatni zaslon element, na katerega se zasidrati na popover. *(Število)*

*   **y**: pixel koordinato y zaslon element, na katerega se zasidrati na popover. *(Število)*

*   **Širina**: širina v slikovnih pik, zaslon elementa na katero sidro je popover. *(Število)*

*   **višina**: višina v slikovnih pik, zaslon elementa na katero sidro je popover. *(Število)*

*   **arrowDir**: smeri, puščica na na popover opozoriti. Opredeljeno v `Camera.PopoverArrowDirection` *(število)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / tekme iOS UIPopoverArrowDirection konstante ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Upoštevajte, da lahko velikost je popover spremembo preizkusiti mero v smeri puščice in usmerjenost zaslona. Poskrbite, da predstavljajo usmerjenost spremembe pri navajanju sidro element mesto.

## Quick primer

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