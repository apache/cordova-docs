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

Supprime les photos intermédiaires prises par la caméra sur le support de stockage temporaire.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## Description

Supprime les fichiers d'image intermédiaire qui sont conservés dans le support de stockage temporaire après l'appel à `camera.getPicture`. S'applique uniquement lorsque la valeur de `Camera.sourceType` est égale à `Camera.PictureSourceType.CAMERA` et `Camera.destinationType` est égale à `Camera.DestinationType.FILE_URI`.

## Plates-formes prises en charge

*   iOS

## Exemple

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }