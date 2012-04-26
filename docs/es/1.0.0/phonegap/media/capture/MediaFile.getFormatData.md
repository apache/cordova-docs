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

MediaFile.getFormatData
=======================

> Retorna información sobre el formato de los archivos multimedia capturados.

    mediaFile.getFormatData( 
        MediaFileDataSuccessCB successCallback, 
        [MediaFileDataErrorCB errorCallback]
    );

Descripción
-----------

Esta función funciona de forma asíncrona e intentara retornar información sobre el formato de los archivos multimedia.
Si la función termina correctamente, se llamara a la función 'callback' `MediaFileDataSucessCB` con el objeto `MediaFileData`. Si en cambio ocurre algún error, se llamara a `MediaFileDataErrorCB`.  

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Peculiaridades BlackBerry WebWorks
----------------------------------
No se dispone de ninguna API que proporcione información sobre el formato de los archivos multimedia. Por tanto, todos los objetos `MediaFileData` serán devueltos con los valores por defecto. Consulta la documentación de `MediaFileData`.

Peculiaridades Android
----------------------
La API para obtener los formatos de archivos multimedia esta limitada. Por tanto, no están soportados todos los atributos de `MediaFileData`. Consulta la documentación de `MediaFileData`.

Peculiaridades iOS
------------------
La API para obtener los formatos de archivos multimedia esta limitada. Por tanto, no están soportados todos los atributos de `MediaFileData`.  Consulta la documentación `MediaFileData`.
