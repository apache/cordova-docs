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

CaptureAudioOptions
===================

> Encapsula opciones personalizables para la captura de audio.

Atributos
---------

- __limit:__ El numero máximo de clips de audio que el dispositivo puede grabar en la misma operación. Debe ser mayor o igual a 1 (Por defecto: 1).
- __duration:__ La duración máxima de un clip de audio, en segundos.
- __mode:__ El modo de audio seleccionado. Este valor debe coincidir con uno de los elementos en `capture.supportedAudioModes`.

Ejemplo Rápido
--------------

    // Limita la operación de captura a 3 ficheros de audio, de no mas de 10 segundos cada uno
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Peculiaridades Android
----------------------

- El argumento __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente.  Las grabaciones son codificadas usando el formato 'Adaptive Multi-Rate' (AMR) (audio/amr).

Peculiaridades BlackBerry WebWorks
----------------------------------

- El argumento __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente.  Las grabaciones son codificadas usando el formato 'Adaptive Multi-Rate' (AMR) (audio/amr).

Peculiaridades iOS
------------------

- El argumento __limit__ no esta soportado. Solo se puede grabar un clip de audio por cada operación.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente. El formato de grabación de audio no puede ser alterado programaticamente.  Las grabaciones son codificadas usando el formato 'Waveform Audio' (WAV) (audio/wav).
