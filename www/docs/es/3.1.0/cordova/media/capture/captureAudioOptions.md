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

# CaptureAudioOptions

> Encapsula las opciones de configuración de captura de audio.

## Propiedades

*   **límite**: el número máximo de clips de audio del usuario del dispositivo puede grabar en una operación de captura individual. El valor debe ser mayor o igual a 1 (por defecto 1).

*   **duración**: la duración máxima de un clip de sonido audio, en segundos.

## Ejemplo rápido

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Rarezas Android

*   El `duration` no se admite el parámetro. Longitudes de la grabación no puede ser limitada mediante programación.

## BlackBerry WebWorks rarezas

*   El `duration` no se admite el parámetro. Longitudes de la grabación no puede ser limitada mediante programación.

## iOS rarezas

*   El `limit` no se admite el parámetro, tan sólo una grabación puede crearse para cada invocación.