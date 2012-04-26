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

ConfigurationData
=================

> Encapsula un conjunto de parámetros de captura que el dispositivo soporta.

Descripción
-----------

Este objeto se usa para enumerar los modos de captura soportados en el dispositivo. Los datos incluyen el tipo MIME, y la resolución de la captura (en el caso de vídeo y imágenes).  

Los tipos MIME de archivos deberían adherirse al [RFC2046](http://www.ietf.org/rfc/rfc2046.txt).

Ejemplos:

- vídeo/3gpp
- vídeo/quicktime
- image/jpeg
- audio/amr
- audio/wav 

Atributos
---------

- __type:__ El tipo de archivo multimedia, codificado en ASCII y minúsculas. (DOMString)
- __height:__ La altura de la imagen o vídeo en píxeles. En el caso de los clips de sonido, este atributo tiene un valor 0. (Number)
- __width:__ La altura de la imagen o vídeo en píxeles. En el caso de los clips de sonidos, este atributo tiene un valor 0. (Number)

Ejemplo Rápido
--------------

    // retornar los modos de imágenes soportados
    var imageModes = navigator.device.capture.supportedImageModes;

    // selecciona el modo que tenga la mayor resolución horizontal
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


No soportado por ninguna plataforma. Todos los array de configuración están vacíos.
