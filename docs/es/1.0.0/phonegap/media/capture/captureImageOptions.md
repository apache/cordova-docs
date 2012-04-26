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

CaptureImageOptions
===================

> Encapsula opciones personalizables para la captura de imágenes.

Atributos
---------

- __limit:__ El numero máximo de imágenes que el usuario podrá tomar en la misma operación. Debe ser mayor o igual a 1 (Por defecto: 1).
- __mode:__ El modo de imagen seleccionado. Este valor debe coincidir con uno de los definidos en `capture.supportedImageModes`.

Ejemplo Rápido
--------------

    // limita la captura a 3 imágenes
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Peculiaridades Android
----------------------

- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser controlado programaticamente; en cambio, la resolución si puede ser cambiada por el usuario. Las imágenes son guardadas en formato JPEG (image/jpeg).

Peculiaridades BlackBerry WebWorks
----------------------------------

- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser controlado programaticamente; en cambio, la resolución puede ser cambiada por el usuario. Las imágenes son guardadas en formato JPEG (image/jpeg).

Peculiaridades iOS
------------------

- El argumento __limit__ no esta soportado. Solo se tomara una imagen por llamada.
- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser alterado programaticamente. Las imágenes son guardadas en formato JPEG (image/jpeg).
