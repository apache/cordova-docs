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

> Permet d'accéder aux fonctionnalités de capture audio, image, et vidéo du mobile.

Objects
-------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

Méthodes
--------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

Portée de la variable
---------------------

L'objet __capture__ est attaché à l'objet __navigator.device__, il a donc une portée globale.

    // L'objet capture, à portée globale
    var capture = navigator.device.capture;

Propriétés
----------

- __supportedAudioModes:__ Les formats d'enregistrement audio supportés par le mobile. (ConfigurationData[])
- __supportedImageModes:__ Les tailles et formats d'enregistrement d'image supportés par le mobile. (ConfigurationData[])
- __supportedVideoModes:__ Les résolutions et formats d'enregistrement vidéo supportés par le mobile. (ConfigurationData[])

Méthodes
--------

- capture.captureAudio: Lancer l'application magnétophone du mobile afin d'enregistrer une ou des séquences audio.
- capture.captureImage: Lancer l'application appareil photo du mobile afin de prendre une ou des photos.
- capture.captureVideo: Lancer l'application caméscope du mobile afin d'enregistrer une ou des séquences vidéo.


Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS
- Windows Phone 7 ( Mango )
