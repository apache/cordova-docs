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

# CaptureCB

> Se invoca en una operación de captura exitosa de los medios de comunicación.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Descripción

Esta función se ejecuta después de que finalice una operación de captura exitosa. En este punto que ha sido capturado un archivo multimedia y tampoco el usuario ha salido de la aplicación de captura de los medios de comunicación, o se ha alcanzado el límite de captura.

Cada `MediaFile` objeto describe un archivo multimedia capturado.

## Ejemplo rápido

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };