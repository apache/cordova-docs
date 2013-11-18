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

Odstrani vmesne fotografije, posnete s kamero iz začasnega skladišča.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## Opis

Odstrani vmesnih slikovne datoteke, ki se gojijo v začasno hrambo po kliče `camera.getPicture` . Velja samo, če vrednost `Camera.sourceType` je enak `Camera.PictureSourceType.CAMERA` in `Camera.destinationType` je enako`Camera.DestinationType.FILE_URI`.

## Podprte platforme

*   iOS

## Primer

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }