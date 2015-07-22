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

# MediaFile.getFormatData

> El formato recupera información sobre el archivo de captura de los medios de comunicación.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]);
    

## Descripción

Esta función asincrónica intentará recuperar la información de formato para el archivo de los medios de comunicación. Si exitoso, invoca la `MediaFileDataSuccessCB` devolución de llamada con un `MediaFileData` objeto. Si fracasa el intento, esta función invoca el `MediaFileDataErrorCB` "callback".

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## BlackBerry WebWorks rarezas

No proporciona una API para obtener información sobre los archivos de medios, para que todos `MediaFileData` devolver objetos con valores predeterminados.

## Rarezas Android

La API de acceso a la prensa archivo formato información es limitada, así que no todos `MediaFileData` se admiten las propiedades.

## iOS rarezas

La API de acceso a la prensa archivo formato información es limitada, así que no todos `MediaFileData` se admiten las propiedades.