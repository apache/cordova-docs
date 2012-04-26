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

CaptureError
============

> Encapsula el código de error resultante de una operación fallida.

Atributos
---------

- __code:__ Uno de los errores predefinidos en la lista inferior.

Constantes
----------

- CaptureError.`CAPTURE_INTERNAL_ERR`: La cámara o el micrófono fallo al capturar la imagen o el sonido. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: La aplicación de cámara o de captura de audio esta siendo usada.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Uso invalido de la API (ejem. el parámetro __limit__ es menor que 1).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: El usuario cerro la aplicación de cámara o la de captura de audio antes de haber capturado nada.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: La operación de captura solicitada no esta soportada.
