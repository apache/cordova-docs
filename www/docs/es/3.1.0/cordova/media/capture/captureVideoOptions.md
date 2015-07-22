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

# CaptureVideoOptions

> Encapsula las opciones de configuración de captura de vídeo.

## Propiedades

*   **límite**: la cantidad máxima de usuario del dispositivo puede capturar en una operación sola captura clips de vídeo. El valor debe ser mayor o igual a 1 (por defecto 1).

*   **duración**: la duración máxima de un clip de vídeo, en segundos.

## Ejemplo rápido

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks rarezas

*   No se admite el parámetro de **duración** , así que la longitud de las grabaciones no puede limitarse mediante programación.

## iOS rarezas

*   No se admite el parámetro **límite** . Sólo un vídeo se graba por invocación.