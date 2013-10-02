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

Удаляет промежуточные фотографии, сделанные камерой из временного хранилища.

    navigator.camera.cleanup( cameraSuccess, cameraError );
    

## Описание

Удаляет промежуточные файлы изображений, которые хранятся во временном хранилище после вызова метода `camera.getPicture` . Применяется только тогда, когда значение `Camera.sourceType` равно `Camera.PictureSourceType.CAMERA` и `Camera.destinationType` равняется`Camera.DestinationType.FILE_URI`.

## Поддерживаемые платформы

*   iOS

## Пример

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }