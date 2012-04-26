---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

Capture
=======

> Proporciona acceso a las capacidades de captura de audio, imagen, y vídeo del dispositivo.

Objetos
--------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

Métodos
-------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

Ámbito de la variable
---------------------

El objeto __capture__ es asignado al objeto __navigator.device__, y por lo tanto, tiene una visibilidad global.
    
    // El objeto global `capture`
    var capture = navigator.device.capture;

Atributos
---------

- __supportedAudioModes:__ Lo formatos de grabación de audio soportados en el dispositivo. (ConfigurationData[])
- __supportedImageModes:__ Las resoluciones de imágenes y formatos soportados en el dispositivo. (ConfigurationData[])
- __supportedVideoModes:__ Las resoluciones de vídeo y formatos soportados por el dispositivo. (ConfigurationData[])

Métodos
-------

- capture.captureAudio: Inicia la aplicación del dispositivo para grabar clips de audio.
- capture.captureImage: Inicia la aplicación del dispositivo para tomar imágenes.
- capture.captureVideo: Inicia la aplicación del dispositivo para grabar vídeos.


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS
