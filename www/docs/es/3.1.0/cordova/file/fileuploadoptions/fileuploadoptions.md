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

# FileUploadOptions

A `FileUploadOptions` objeto puede pasar a la `FileTransfer` del objeto `upload()` método para especificar parámetros adicionales a la escritura de la carga.

## Propiedades

*   **fileKey**: el nombre del elemento de formulario. Por defecto es `file` . (DOMString)

*   **nombre de archivo**: el nombre del archivo a utilizar al guardar el archivo en el servidor. Por defecto es `image.jpg` . (DOMString)

*   **mimeType**: el tipo mime de los datos para cargar. Por defecto es `image/jpeg` . (DOMString)

*   **params**: un conjunto de pares clave/valor opcional para pasar en la petición HTTP. (Objeto)

*   **chunkedMode**: Si desea cargar los datos en modo de transmisión fragmentado. Por defecto es `true` . (Boolean)

*   **cabeceras**: un mapa de valores de encabezado nombre/cabecera. Utilice una matriz para especificar más de un valor. (Objeto)

## Descripción

A `FileUploadOptions` objeto puede pasar a la `FileTransfer` del objeto `upload()` método para especificar parámetros adicionales a la escritura de la carga.

## WP7 Quirk

*   **chunkedMode:**: ignoran en WP7.