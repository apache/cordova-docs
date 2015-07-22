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

# FileTransferError

A `FileTransferError` objeto se pasa a un callback de error cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación. (Número)

*   **fuente**: URI a la fuente. (String)

*   **objetivo**: URI a la meta. (String)

*   **HTTP_STATUS**: código de estado HTTP. Este atributo sólo está disponible cuando se recibe un código de respuesta de la conexión HTTP. (Número)

## Constantes

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Descripción

El `FileTransferError` objeto se pasa el callback de error cuando se produce un error al cargar o descargar un archivo.