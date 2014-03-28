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

# FileUploadResult

A `FileUploadResult` objeto se pasa a la devolución del éxito de la `FileTransfer` del objeto `upload()` método.

## Propiedades

*   **bytesSent**: el número de bytes enviados al servidor como parte de la carga. (largo)

*   **responseCode**: código de respuesta HTTP el devuelto por el servidor. (largo)

*   **respuesta**: respuesta el HTTP devuelto por el servidor. (DOMString)

## Descripción

El `FileUploadResult` objeto es devuelto vía el callback de éxito de la `FileTransfer` del objeto `upload()` método.

## iOS rarezas

*   No es compatible con `responseCode` o`bytesSent`.