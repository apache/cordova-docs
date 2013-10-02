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

# CaptureError

> Encapsula el código de error resultante de una operación de captura de medios fallidos.

## Propiedades

*   **código**: uno de los códigos de error previamente definidos a continuación.

## Constantes

*   `CaptureError.CAPTURE_INTERNAL_ERR`: La cámara o el micrófono no pudo capturar la imagen y el sonido.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: La aplicación de captura de audio o cámara está cumpliendo otro pedido de captura.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Uso no válido de la API (por ejemplo, el valor de `limit` es menor que uno).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: El usuario sale de la aplicación de captura de audio o cámara antes de capturar cualquier cosa.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: La operación de captura solicitada no es compatible.