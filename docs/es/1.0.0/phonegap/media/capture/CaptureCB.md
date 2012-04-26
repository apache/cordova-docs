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

CaptureCB
=========

> Llamado tras una captura correcta.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

Descripción
-----------

Esta función se llama después de que se complete una operación de captura. Esto quiere decir cuando se capture un fichero y el usuario salga de la aplicación, o cuando se alcance el limite máximo.

Cada objeto `MediaFile` describe un fichero multimedia capturado.  

Ejemplo Rápido
--------------

    // función 'callback' satisfactoria
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // hacer algo interesante con el fichero
        }
    };
