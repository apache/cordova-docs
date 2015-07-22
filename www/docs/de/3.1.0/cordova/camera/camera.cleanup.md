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

Entfernt Mittelstufe Fotos von der Kamera aus der vorübergehenden Verwahrung genommen.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## Beschreibung

Entfernt Mittelstufe Image-Dateien, die nach der Berufung in vorübergehender Verwahrung gehalten werden `camera.getPicture` . Gilt nur, wenn der Wert des `Camera.sourceType` ist gleich `Camera.PictureSourceType.CAMERA` und der `Camera.destinationType` entspricht`Camera.DestinationType.FILE_URI`.

## Unterstützte Plattformen

*   iOS

## Beispiel

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }