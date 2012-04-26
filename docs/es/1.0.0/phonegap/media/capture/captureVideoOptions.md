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

CaptureVideoOptions
===================

> Encapsula opciones personalizables para la captura de vídeo.

Atributos
---------

- __limit:__ El numero máximo de clips de vídeos que el usuario podrá grabar en la misma operación. El valor debe ser mayor o igual a 1 (1 por defecto).
- __duration:__ La duración máxima permitida de cada clip (en segundos).
- __mode:__ El modo de vídeo seleccionado. Este valor debe coincidir con uno de los definidos en `capture.supportedVideoModes`.

Ejemplo Rápido
--------------

    // limita la captura a 3 clips de vídeo
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Peculiaridades Android
----------------------

- El atributo __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El atributo __mode__ no esta soportado. La resolución del vídeo y el formato no pueden ser controlados programaticamente; en cambio, esta opción puede ser cambiada por el usuario. Por defecto, los vídeos son grabados en formato 3GPP (vídeo/3gpp).


Peculiaridades BlackBerry WebWorks
----------------------------------

- El atributo __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El atributo __mode__ no esta soportado.  La resolución del vídeo y el formato no pueden ser controlados programaticamente; en cambio, esta opción puede ser cambiada por el usuario. Por defecto, los vídeos son grabados en formato 3GPP (vídeo/3gpp).

Peculiaridades iOS
------------------

- El argumento __limit__ no esta soportado. Solo se permite un vídeo por sesión.
- El argumento __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El argumento __mode__ no esta soportado. La resolución del vídeo y el formato no pueden ser controlados programaticamente. Por defecto, los vídeos son grabados en formato MOV (vídeo/quicktime).

