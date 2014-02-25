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

# camera.cleanup

Rimuove intermedio foto scattate con la fotocamera da deposito temporaneo.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## Descrizione

Rimuove intermedio i file di immagine che vengono tenuti in custodia temporanea dopo la chiamata `camera.getPicture` . Si applica solo quando il valore di `Camera.sourceType` è uguale a `Camera.PictureSourceType.CAMERA` e il `Camera.destinationType` è uguale a`Camera.DestinationType.FILE_URI`.

## Piattaforme supportate

*   iOS

## Esempio

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }